import React, { useState, Children } from 'react';
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
import { BookingModal } from 'features/booking/role/investor/elements';
import { useModal } from 'hooks';

const UserApplicationsPage = () => {
  const renderItem = ({ headItem }: TTableRenderItemObject) => {
    if (headItem.reference === 'boat') {
      return '2.5 Bedroom Apartment';
    }
    if (headItem.reference === 'location') {
      return 'Barcelona, Spain';
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

  const [filter, setFilter] = useState<any>(DBookingFilters());

  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DBookingFilters());
  };

  const [bookingModal, openBookingModal, closeBookingModal] = useModal(false);

  return (
    <ProjectsMain>
      <HomePageCharts>
        <HomePageChartsGrid>
          <CardWithChart
            title="Boats"
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

export default UserApplicationsPage;
