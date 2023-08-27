import React, { Children, useState } from 'react';
import { CardWithText, NewCheckboxTable } from 'components/custom';
import { Collapse, Grid, Stack } from 'components/system';
import { Button, Input, Label, Pagination } from 'components/ui';
import {
  DApplicationsHead,
  DApplicationsFilters,
} from 'features/applications/data';
import {
  MarketPageFilter,
  MarketPageFilterActions,
  ProjectsMain,
} from 'features/opportunities/styles';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { SlidersHorizontalIcon, VerticalDotsIcon } from 'components/svg';
import { useModal } from 'hooks';
import {
  BookingOverviewModal,
  TransferOwnershipModal,
} from 'features/applications/role/admin/elements';
import { HomePageChartsGrid } from 'features/applications/styles';

const AdminApplicationsPage = () => {
  const [filter, setFilter] = useState<any>(DApplicationsFilters());

  const [filterOpen, setFilterOpen] = useState(false);

  const [
    bookingOverviewModal,
    openBookingOverviewModal,
    closeBookingOverviewModal,
  ] = useModal(false);
  const [
    transferOwnershipModal,
    openTransferOwnershipModal,
    closeTransferOwnershipModal,
  ] = useModal(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DApplicationsFilters());
  };

  const renderItem = ({ headItem }: TTableRenderItemObject) => {
    if (headItem.reference === 'name') {
      return 'Ivan Jurisic';
    }
    if (headItem.reference === 'boat') {
      return '3.5 Bedroom with Lake view in ....';
    }
    if (headItem.reference === 'date') {
      return '12.8.2023';
    }
    if (headItem.reference === 'sharesApplied') {
      return '2';
    }
    if (headItem.reference === 'status') {
      return 'Paid';
    }
    if (headItem.reference === 'actions') {
      return <VerticalDotsIcon />;
    }

    return '';
  };

  return (
    <ProjectsMain>
      <CardWithText
        title="Applications"
        actions={Children.toArray([
          <Button
            color={filterOpen ? 'secondary' : 'default'}
            variant="contained"
            onClick={toggleFilter}
            startIcon={<SlidersHorizontalIcon width="18" height="18" />}
          >
            Filters
          </Button>,
          <Button variant="contained" color="default">
            Export
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
                    label="User"
                    placeholder="Please Select"
                    value={filter.user}
                    onValue={(user) => setFilter({ ...filter, user })}
                  />
                  <Input
                    type="select"
                    label="Location"
                    placeholder="Please Select"
                    value={filter.location}
                    onValue={(location) => setFilter({ ...filter, location })}
                  />
                  <Input
                    type="select"
                    label="Boat"
                    placeholder="Please Select"
                    value={filter.boat}
                    onValue={(boat) => setFilter({ ...filter, boat })}
                  />
                  <Input
                    type="min-max"
                    label="Boats"
                    value={filter.boats}
                    onValue={(boats) => setFilter({ ...filter, boats })}
                  />
                  <Input
                    type="min-max"
                    label="Shares"
                    value={filter.shares}
                    onValue={(shares) => setFilter({ ...filter, shares })}
                  />
                  <Input
                    type="min-max"
                    label="Applications"
                    value={filter.applications}
                    onValue={(applications) =>
                      setFilter({ ...filter, applications })
                    }
                  />
                  <Input
                    type="select"
                    label="Status"
                    placeholder="Please Select"
                    value={filter.status}
                    onValue={(status) => setFilter({ ...filter, status })}
                  />
                  <Stack>
                    <Label
                      style={{ color: '#7E839F', marginBottom: '-1.15rem' }}
                    >
                      Application Date
                    </Label>
                    <Stack direction="horizontal">
                      <Input
                        type="date"
                        placeholder="From"
                        value={filter.applicationDateFrom}
                        onValue={(applicationDateFrom) =>
                          setFilter({ ...filter, applicationDateFrom })
                        }
                      />
                      <Input
                        type="date"
                        placeholder="To"
                        value={filter.applicationDateTo}
                        onValue={(applicationDateTo) =>
                          setFilter({ ...filter, applicationDateTo })
                        }
                      />
                    </Stack>
                  </Stack>
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
          <NewCheckboxTable
            head={DApplicationsHead}
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
      <Stack direction="horizontal">
        <Button
          variant="contained"
          color="primary"
          onClick={openBookingOverviewModal}
        >
          Booking Overview Modal
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={openTransferOwnershipModal}
        >
          Transfer Ownership Modal
        </Button>
      </Stack>

      {bookingOverviewModal && (
        <BookingOverviewModal onClose={closeBookingOverviewModal} />
      )}
      {transferOwnershipModal && (
        <TransferOwnershipModal onClose={closeTransferOwnershipModal} />
      )}
    </ProjectsMain>
  );
};

export default AdminApplicationsPage;
