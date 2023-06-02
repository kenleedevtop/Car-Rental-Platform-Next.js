import React, { useState, useEffect } from 'react';
import {
  DiscoverInfluencersPageMain,
  DiscoverInfluencersPageCharts,
  DiscoverInfluencersPageFilter,
  DiscoverInfluencersPageFilterActions,
  DiscoverInfluencersAction,
  DiscoverInfluencersFilterContainer,
} from 'features/discover-influencers/styles';
import {
  CardWithChart,
  CardWithText,
  CheckboxTable,
  Tabs,
} from 'components/custom';
import {
  DailyIcon,
  MonthlyIcon,
  SlidersHorizontalIcon,
  UserIcon,
  WeeklyIcon,
  YearlyIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, InputGroup, Pagination } from 'components/ui';
import { Stack } from 'components/system';
import { Collapse } from '@mui/material';
import {
  DGenerateDiscoverInfluencersFilter,
  DInfluencerHeadRegistered,
  DInfluencerHeadToBeApproved,
} from 'features/discover-influencers/data';
import {
  DiscoverActions,
  ExportInfluencersModal,
  InfluencerProfile,
  ToBeApprovedActions,
} from 'features/discover-influencers/role/admin/elements';
import { useModal, usePagination } from 'hooks';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { InfluencerAPI } from 'api';

const DiscoverInfluencersPage = () => {
  // Modals
  const [eModal, openEModal, closeEModal] = useModal(false);
  const [ipModal, openIpModal, closeIpModal] = useModal(false);

  const [tabs, setTabs] = useState(0);

  const [filter, setFilter] = useState<any>(
    DGenerateDiscoverInfluencersFilter()
  );

  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateDiscoverInfluencersFilter());
  };

  const [currentInfluencer, setCurrentInfluencer] = useState<any>();

  const getCurrentInfluencer = (value: any) => {
    setCurrentInfluencer(value);
  };

  const renderItem = ({ headItem, row }: TTableRenderItemObject) => {
    if (headItem.reference === 'firstName') {
      return (
        <DiscoverInfluencersAction
          onClick={() => {
            getCurrentInfluencer(row.data.user.id);
            openIpModal();
          }}
        >
          {row.data.user.firstName}
        </DiscoverInfluencersAction>
      );
    }
    if (headItem.reference === 'lastName') {
      return row.data.user.lastName;
    }
    if (headItem.reference === 'email') {
      return row.data.user.email;
    }
    if (headItem.reference === 'status') {
      switch (row.data.user.status) {
        case 0:
          return 'Identified';
        case 1:
          return 'Contacted';
        case 2:
          return 'Unconfirmed';
        case 3:
          return 'Confirmed';
        case 4:
          return 'To Be Approved';
        case 5:
          return 'Approved';
        case 6:
          return 'Do Not Contact';
        case 7:
          return 'Scheduled';
        default:
          return '';
      }
    }
    if (headItem.reference === 'registeredAt') {
      return row.data.user.createdAt.slice(0, 10);
    }

    if (headItem.reference === 'invitedBy') {
      return row.data.invitendByUser;
    }

    if (headItem.reference === 'actions') {
      switch (row.data.user.status) {
        case 4:
          return <ToBeApprovedActions data={row.data.user.id} />;
        default:
          return <DiscoverActions data={row.data.user.id} />;
      }
    }

    return '';
  };

  const [registeredInfluencers, setRegisteredInfluencers] = useState([]);

  const [filterParams, setFilterParams] = useState({});

  const { pagesCount, page, setTotalResults, handlePageChange, reload } =
    usePagination({
      limit: 10,
      page: 1,
      onChange: async (params, setPage) => {
        const { data, pagination } =
          await InfluencerAPI.getDInfluencersRegistered({
            limit: params.limit,
            skip: params.skip,
            ...filterParams,
          });

        setRegisteredInfluencers(data);
        setTotalResults(pagination.totalFilteredItems);
      },
    });

  const [toBeApprovedInfluencers, setToBeApprovedInfluencers] = useState([]);

  const {
    pagesCount: pageCountTba,
    page: pageTba,
    setTotalResults: setTotalResultsTba,
    handlePageChange: handlePageChangeTba,
    reload: reloadTba,
  } = usePagination({
    limit: 10,
    page: 1,
    onChange: async (params, setPage) => {
      const { data, pagination } =
        await InfluencerAPI.getDInfluencersToBeApproved({
          limit: params.limit,
          skip: params.skip,
          ...filterParams,
        });

      setToBeApprovedInfluencers(data);
      setTotalResultsTba(pagination.totalFilteredItems);
    },
  });

  return (
    <DiscoverInfluencersPageMain>
      <DiscoverInfluencersPageCharts>
        <CardWithChart
          title="Daily"
          icon={<DailyIcon />}
          smallIcon={<UserIcon />}
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
          title="Weekly"
          icon={<WeeklyIcon />}
          smallIcon={<UserIcon />}
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
          title="Monthly"
          icon={<MonthlyIcon />}
          smallIcon={<UserIcon />}
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
          title="Yearly"
          icon={<YearlyIcon />}
          smallIcon={<UserIcon />}
          percent={2}
          count={75}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
      </DiscoverInfluencersPageCharts>
      <CardWithText
        title="Discovered Influencers"
        description="More than 290+ Influencers"
        actions={[
          <Button
            color={filterOpen ? 'secondary' : 'default'}
            variant="contained"
            onClick={toggleFilter}
            startIcon={<SlidersHorizontalIcon width="18" height="18" />}
          >
            Filters
          </Button>,
          <Button color="default" variant="contained" onClick={openEModal}>
            Export
          </Button>,
        ]}
      >
        <Stack>
          <Collapse in={filterOpen}>
            <DiscoverInfluencersPageFilter>
              <DiscoverInfluencersFilterContainer>
                <Input
                  type="text"
                  label="Search"
                  placeholder="Please Enter"
                  value={filter.search}
                  onValue={(search) => setFilter({ ...filter, search })}
                />
                <Input
                  type="select"
                  label="Disease Area"
                  placeholder="Please Select"
                  value={filter.diseaseArea.label}
                  onValue={(input) =>
                    setFilter({ ...filter, diseaseArea: input })
                  }
                />
                <Input
                  type="select"
                  label="Location"
                  placeholder="Please Select"
                  value={filter.location.label}
                  onValue={(input) => setFilter({ ...filter, location: input })}
                />
                <Input
                  type="min-max"
                  label="Age"
                  value={filter.age}
                  onValue={(age) => setFilter({ ...filter, age })}
                />
                <Input
                  type="select"
                  label="Gender"
                  placeholder="Please Select"
                  value={filter.gender}
                  onValue={(gender) => setFilter({ ...filter, gender })}
                  options={[
                    {
                      value: 0,
                      label: 'Male',
                    },
                    {
                      value: 1,
                      label: 'Female',
                    },
                    {
                      value: 2,
                      label: 'Other',
                    },
                  ]}
                />
                <Input
                  type="select"
                  label="Experience As"
                  placeholder="Please Select"
                  value={filter.experienceAs}
                  onValue={(experienceAs) =>
                    setFilter({ ...filter, experienceAs })
                  }
                  options={[
                    {
                      value: 0,
                      label: 'Patient',
                    },
                    {
                      value: 1,
                      label: 'Caregiver',
                    },
                  ]}
                />
                <Input
                  type="select"
                  label="Social Media"
                  placeholder="Please Select"
                  value={filter.socialMedia}
                  onValue={(socialMedia) =>
                    setFilter({ ...filter, socialMedia })
                  }
                  options={[
                    {
                      value: 0,
                      label: 'Instagram',
                    },
                    {
                      value: 1,
                      label: 'Twitter',
                    },
                  ]}
                />
                <Input
                  type="select"
                  label="Status"
                  placeholder="Please Select"
                  value={filter.status}
                  onValue={(inputStatus) =>
                    setFilter({ ...filter, status: inputStatus })
                  }
                  options={[
                    {
                      value: 0,
                      label: 'Not confirmed',
                    },
                    {
                      value: 1,
                      label: 'Confirmed',
                    },
                    {
                      value: 2,
                      label: 'Verified',
                    },
                    {
                      value: 3,
                      label: 'Approved',
                    },
                  ]}
                />
                <InputGroup
                  label="Joined"
                  inputRatio="1fr 1fr"
                  elements={[
                    {
                      type: 'date',
                      placeholder: 'From',
                      value: filter.joinedFrom,
                      onValue: (joinedFrom) =>
                        setFilter({ ...filter, joinedFrom }),
                    },
                    {
                      type: 'date',
                      placeholder: 'To',
                      value: filter.joinedTo,
                      onValue: (joinedTo) => setFilter({ ...filter, joinedTo }),
                    },
                  ]}
                />
                <Input
                  type="multiselect"
                  label="Add Label"
                  placeholder="Please Select"
                  value={filter.label}
                  onValue={(label) => setFilter({ ...filter, label })}
                  options={[
                    {
                      value: 0,
                      label: 'Great',
                    },
                    {
                      value: 1,
                      label: 'Dumb',
                    },
                    {
                      value: 2,
                      label: 'Without',
                    },
                  ]}
                />
                <Input
                  type="select"
                  label="Schedule"
                  placeholder="Please Select"
                  value={filter.schedule.label}
                  onValue={(input) => setFilter({ ...filter, schedule: input })}
                  options={[
                    {
                      value: 0,
                      label: 'Reminder',
                    },
                    {
                      value: 1,
                      label: 'Task',
                    },
                    {
                      value: 2,
                      label: 'Meeting',
                    },
                    {
                      value: 3,
                      label: 'Without',
                    },
                  ]}
                />
                <Input
                  type="select"
                  label="Ethnicity"
                  placeholder="Please Select"
                  value={filter.ethnicity.label}
                  onValue={(input) =>
                    setFilter({ ...filter, ethnicity: input })
                  }
                  options={[]}
                />
              </DiscoverInfluencersFilterContainer>
              <DiscoverInfluencersPageFilterActions direction="horizontal">
                <Button color="primary" variant="contained">
                  Filter
                </Button>
                <Button
                  color="secondary"
                  variant="outlined"
                  onClick={clearFilters}
                >
                  Clear filter
                </Button>
              </DiscoverInfluencersPageFilterActions>
            </DiscoverInfluencersPageFilter>
          </Collapse>
          <Tabs
            value={tabs}
            onValue={setTabs}
            tabs={['Registered', 'To Be Approved']}
          />
          {tabs === 0 && (
            <>
              <CheckboxTable
                head={DInfluencerHeadRegistered}
                items={registeredInfluencers}
                renderItem={renderItem}
              />
              <Pagination
                onChange={(_e, x) => handlePageChange(x)}
                page={page}
                count={pagesCount}
              />
            </>
          )}
          {tabs === 1 && (
            <>
              <CheckboxTable
                head={DInfluencerHeadToBeApproved}
                items={toBeApprovedInfluencers}
                renderItem={renderItem}
              />
              <Pagination
                onChange={(_e, x) => handlePageChangeTba(x)}
                page={pageTba}
                count={pageCountTba}
              />
            </>
          )}
        </Stack>
      </CardWithText>
      {eModal && <ExportInfluencersModal onClose={closeEModal} />}
      {ipModal && (
        <InfluencerProfile
          influencerId={currentInfluencer}
          onClose={closeIpModal}
        />
      )}
    </DiscoverInfluencersPageMain>
  );
};

export default DiscoverInfluencersPage;
