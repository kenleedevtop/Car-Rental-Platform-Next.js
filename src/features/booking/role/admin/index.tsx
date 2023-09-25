import React, { useState, Children, useEffect, useMemo } from 'react';
import { CardWithText, Table } from 'components/custom';
import { Collapse, Grid, Stack } from 'components/system';
import { Button, Input, Label, Pagination } from 'components/ui';
import {
  DAdminBookingsHead,
  DAdminBookingFilters,
} from 'features/booking/data';
import {
  MarketPageFilter,
  MarketPageFilterActions,
  ProjectsMain,
  HomePageChartsGrid,
} from 'features/booking/styles';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { SlidersHorizontalIcon, VerticalDotsIcon } from 'components/svg';
import BookingStatusActions from './elements/booking-status-modal';
import { useModal, usePagination, useSnackbar } from 'hooks';
import { BookingModal } from './elements';
import { format } from 'date-fns';

import { BookingAPI } from 'api';
import { IBooking } from 'api/bookings/types';

const AdminApplicationsPage = () => {

  const [filter, setFilter] = useState<any>(DAdminBookingFilters());
  const [totalColumnItems, setTotalColumnItems] = useState<any[]>([]);

  const [bookingModal, openBookingModal, closeBookingModal] = useModal(false);

  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DAdminBookingFilters());
  };

  const { push } = useSnackbar();

  const renderItem = ({ headItem, row }: TTableRenderItemObject) => {
    const booking = row.data as IBooking;

    if (headItem.reference === 'car') {
      return booking.car.name;
    }
    if (headItem.reference === 'user') {
      return booking.owner.firstName + '' + booking.owner.lastName;
    }
    if (headItem.reference === 'startDate') {
      return format(new Date(booking.from), 'MM/dd/yyyy');
    }
    if (headItem.reference === 'endDate') {
      return format(new Date(booking.to), 'MM/dd/yyyy');
    }
    if (headItem.reference === 'actions') {
      return (
        <BookingStatusActions
          booking={booking}
          userId={booking.ownerId}
          status={booking.status}
          carId={booking.carId}
          reload={applyFilters}
        />
      )
    }
    return '';
  };


  const applyFilters = () => {
    getAllBookings()
      .then((data) => {
        setTotalColumnItems(data);
      })
      .catch((error) => push('Something went wrong!', { variant: 'error' }));
  };

  const getAllBookings = async (): Promise<any> => {
    try {
      const response = await BookingAPI.getBookings('');
      if (response) {
        return response;
      }
      throw new Error('Error: Failed to fetch data!');
    } catch (error) {
      push('Something went wrong!', { variant: 'error' });
    }
  };

  useEffect(() => {
    getAllBookings()
      .then((data) => setTotalColumnItems(data))
      .catch((error) => push('Something went wrong!', { variant: 'error' }));
  }, []);

  const PageSize = 10;
  const { pagesCount, page, setTotalResults, handlePageChange, reload } =
    usePagination({
      limit: PageSize,
      page: 1,
      onChange: async (params, setPage) => {
        setPage(params.page);
        setTotalResults(totalColumnItems?.length);
      },
    });

  const currentTableData = useMemo(() => {
    const firstPageIndex = (page - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return totalColumnItems?.slice(firstPageIndex, lastPageIndex);
  }, [page, totalColumnItems, PageSize]);

  return (
    <ProjectsMain>
      <CardWithText
        title="My Bookings"
        actions={Children.toArray([
          <Button
            color={filterOpen ? 'secondary' : 'default'}
            variant="contained"
            onClick={toggleFilter}
            startIcon={<SlidersHorizontalIcon width="18" height="18" />}
          >
            Filters
          </Button>,
          <Button
            variant="contained"
            color="primary"
            onClick={openBookingModal}
          >
            Create New
          </Button>,
        ])}
      >
        <Stack>
          <Collapse in={filterOpen}>
            <Stack>
              <MarketPageFilter>
                <HomePageChartsGrid>
                  <Input
                    type="select"
                    label="Supercar"
                    placeholder="Please Select"
                    value={filter.boat}
                    onValue={(boat) => setFilter({ ...filter, boat })}
                  />
                  <Stack>
                    <Label
                      style={{ color: '#7E839F', marginBottom: '-1.15rem' }}
                    >
                      Date
                    </Label>
                    <Stack direction="horizontal">
                      <Input
                        type="date"
                        placeholder="From"
                        value={filter.house}
                        onValue={(house) => setFilter({ ...filter, house })}
                      />
                      <Input
                        type="date"
                        placeholder="To"
                        value={filter.house}
                        onValue={(house) => setFilter({ ...filter, house })}
                      />
                    </Stack>
                  </Stack>
                  <Input
                    type="select"
                    label="Location"
                    placeholder="Please Select"
                    value={filter.location}
                    onValue={(location) => setFilter({ ...filter, location })}
                  />
                  <Input
                    type="min-max"
                    label="Days"
                    value={filter.days}
                    onValue={(days) => setFilter({ ...filter, days })}
                  />
                  <Input
                    type="select"
                    label="User"
                    placeholder="Please Select"
                    value={filter.user}
                    onValue={(user) => setFilter({ ...filter, user })}
                  />
                </HomePageChartsGrid>
                <MarketPageFilterActions direction="horizontal">
                  <Button color="primary" variant="contained">
                    Filter
                  </Button>
                  <Button
                    color="default"
                    variant="contained"
                    onClick={clearFilters}
                  >
                    Clear filter
                  </Button>
                </MarketPageFilterActions>
              </MarketPageFilter>
            </Stack>
          </Collapse>
          <Table
            head={DAdminBookingsHead}
            items={currentTableData}
            renderItem={renderItem}
          />
          <Pagination
            count={pagesCount}
            onChange={(_e, x) => handlePageChange(x)}
            page={page} />
        </Stack>
      </CardWithText>
      {bookingModal && <BookingModal onClose={closeBookingModal} car={null}/>}
    </ProjectsMain>
  );
};

export default AdminApplicationsPage;
