import React, { useState } from 'react';
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
} from 'features/opportunities/styles';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { SlidersHorizontalIcon, VerticalDotsIcon } from 'components/svg';
import { useModal } from 'hooks';
import { BookingModal } from './elements';

const AdminApplicationsPage = () => {
  const [filter, setFilter] = useState<any>(DAdminBookingFilters());

  const [bookingModal, openBookingModal, closeBookingModal] = useModal(false);

  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DAdminBookingFilters());
  };

  const renderItem = ({ headItem }: TTableRenderItemObject) => {
    if (headItem.reference === 'boat') {
      return '2.5 Bedroom Apartment';
    }
    if (headItem.reference === 'user') {
      return 'Ivan Jurisic';
    }
    if (headItem.reference === 'startDate') {
      return '1.5.2023';
    }
    if (headItem.reference === 'endDate') {
      return '10.5.2023';
    }
    if (headItem.reference === 'actions') {
      return <VerticalDotsIcon />;
    }

    return '';
  };

  return (
    <ProjectsMain>
      <CardWithText
        title="My Bookings"
        actions={[
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
        ]}
      >
        <Stack>
          <Collapse in={filterOpen}>
            <Stack>
              <MarketPageFilter>
                <Grid columns={4}>
                  <Input
                    type="select"
                    label="Boat"
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
                </Grid>
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
            items={[
              {
                name: 'Detailed planning of the project',
                published: '01.05.2023',
                action: 'a',
              },
              {
                name: 'Detailed planning of the project',
                published: '01.05.2023',
                action: 'a',
              },
              {
                name: 'Detailed planning of the project',
                published: '01.05.2023',
                action: 'a',
              },
              {
                name: 'Detailed planning of the project',
                published: '01.05.2023',
                action: 'a',
              },
              {
                name: 'Detailed planning of the project',
                published: '01.05.2023',
                action: 'a',
              },
              {
                name: 'Detailed planning of the project',
                published: '01.05.2023',
                action: 'a',
              },
            ]}
            renderItem={renderItem}
          />
          <Pagination count={32} />
        </Stack>
      </CardWithText>
      {bookingModal && <BookingModal onClose={closeBookingModal} />}
    </ProjectsMain>
  );
};

export default AdminApplicationsPage;
