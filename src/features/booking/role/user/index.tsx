import React, { useState, useEffect, Children, useMemo } from 'react';
import {
  ProjectsMain,
  MarketPageFilter,
  MarketPageFilterActions,
} from 'features/opportunities/styles';
import { CardWithChart, CardWithText, Table } from 'components/custom';
import { Button, Input, Label, Pagination } from 'components/ui';
import { DBookingFilters, DBookingsHead } from 'features/booking/data';
import { Collapse, Grid, Stack } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';
import {
  ContactedIcon,
  HospitalIcon,
  IdentifiedIcon,
  RegisteredIcon,
  SlidersHorizontalIcon,
  VerticalDotsIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { HomePageCharts, HomePageChartsGrid } from 'features/booking/styles';
import { BookingModal } from 'features/booking/role/user/elements';
import { useModal, usePagination, useSnackbar } from 'hooks';
import { BookingAPI } from 'api';
import { format } from 'date-fns';
import { IBooking } from 'api/bookings/types';
import BookingStatusActions from './elements/booking-status-modal';

const UserApplicationsPage = () => {
  const [totalColumnItems, setTotalColumnItems] = useState<any[]>([]);
  const [filter, setFilter] = useState<any>(DBookingFilters());
  const [filterOpen, setFilterOpen] = useState(false);
  const { push } = useSnackbar();

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DBookingFilters());
  };


  const renderItem = ({ headItem, row }: TTableRenderItemObject) => {
    const booking = row.data as IBooking;
    if (headItem.reference === 'car') {
      return booking.car.name;
    }
    if (headItem.reference === 'location') {
      return booking.car.location;
    }
    if (headItem.reference === 'startDate') {
      return format(new Date(booking.from), 'MM/dd/yyyy');
    }
    if (headItem.reference === 'endDate') {
      return format(new Date(booking.to), 'MM/dd/yyyy');
    }
    if (headItem.reference === 'actions') {
      return <BookingStatusActions
        booking={booking}
        userId={booking.ownerId}
        status={booking.status}
        carId={booking.carId}
        reload={applyFilters} />;
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
      const response = await BookingAPI.getMyBookings();
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

  const [bookingModal, openBookingModal, closeBookingModal] = useModal(false);

  return (
    <ProjectsMain>
      <HomePageCharts>
        <HomePageChartsGrid>
          <CardWithChart
            title="Supercars"
            icon={<IdentifiedIcon />}
            percent={2}
            count={75}
            chartData={{
              values: Array.from(Array(20).keys()).map((_x) =>
                faker.datatype.number({ min: 10, max: 30 })
              ),
              labels: Array.from(Array(20).keys()).map((_x) => ''),
            }}
          />
          <CardWithChart
            title="Shares"
            icon={<ContactedIcon />}
            percent={2}
            count={75}
            chartData={{
              values: Array.from(Array(20).keys()).map((_x) =>
                faker.datatype.number({ min: 10, max: 30 })
              ),
              labels: Array.from(Array(20).keys()).map((_x) => ''),
            }}
          />
          <CardWithChart
            title="Days Reserved"
            icon={<RegisteredIcon />}
            percent={2}
            count={75}
            chartData={{
              values: Array.from(Array(20).keys()).map((_x) =>
                faker.datatype.number({ min: 10, max: 30 })
              ),
              labels: Array.from(Array(20).keys()).map((_x) => ''),
            }}
          />
          <CardWithChart
            title="Days Remaining"
            icon={<HospitalIcon />}
            percent={2}
            count={75}
            chartData={{
              values: Array.from(Array(20).keys()).map((_x) =>
                faker.datatype.number({ min: 10, max: 30 })
              ),
              labels: Array.from(Array(20).keys()).map((_x) => ''),
            }}
          />
        </HomePageChartsGrid>
      </HomePageCharts>
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
            head={DBookingsHead}
            items={currentTableData}
            renderItem={renderItem}
          />
          <Pagination
            count={pagesCount}
            onChange={(_e, x) => handlePageChange(x)}
            page={page} />
        </Stack>
      </CardWithText>
      {bookingModal && <BookingModal onClose={closeBookingModal} car={null} />}
    </ProjectsMain>
  );
};

export default UserApplicationsPage;
