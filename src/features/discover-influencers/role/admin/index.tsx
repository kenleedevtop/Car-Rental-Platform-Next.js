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
  Table,
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
import { useModal } from 'hooks';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { AdminAPI } from 'api';

const DiscoverInfluencersPage = () => {
  // Modals
  const [eModal, openEModal, closeEModal] = useModal(false);
  const [ipModal, openIpModal, closeIpModal] = useModal(false);

  const [tabs, setTabs] = useState(0);
  const [status, setStatus] = useState('IDENTIFIED');
  const [page, setPage] = useState(1);
  const [influencers, setInfluencers] = useState([]);
  const [currentInfluencer, setCurrentInfluencer] = useState<any>({});
  const [counter, setCounter] = useState(0);

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

  const renderItem = ({
    headItem,
    cell,
    row,
    table,
  }: TTableRenderItemObject) => {
    if (headItem.reference === 'firstName') {
      return (
        <DiscoverInfluencersAction
          onClick={() => {
            setCurrentInfluencer(row.data);
            openIpModal();
          }}
        >
          {cell.data}
        </DiscoverInfluencersAction>
      );
    }
    if (headItem.reference === 'lastName') {
      return cell.data;
    }
    if (headItem.reference === 'email') {
      return cell.data;
    }
    if (headItem.reference === 'username') {
      return cell.data;
    }
    if (headItem.reference === 'socialMedia') {
      return cell.data;
    }
    if (headItem.reference === 'diseaseArea') {
      return cell.data;
    }
    if (headItem.reference === 'location') {
      return cell.data;
    }
    if (headItem.reference === 'followers') {
      return cell.data;
    }
    if (headItem.reference === 'actions') {
      return <DiscoverActions data={row.data} />;
    }

    return '';
  };

  const getUsers = async (input: string) => {
    try {
      const { leads: data, count: countNumber } = await AdminAPI.getInfluencers(
        input
      );
      setInfluencers(data);
      console.log('STABRESTA', influencers);
    } catch {
      console.log('error');
    }
  };

  useEffect(() => {
    getUsers(status);
  }, []);

  const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

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
        description="More than 290+ new Influencers"
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
                  value={filter.diseaseArea}
                  onValue={(diseaseArea) =>
                    setFilter({ ...filter, diseaseArea })
                  }
                />
                <Input
                  type="select"
                  label="Location"
                  placeholder="Please Select"
                  value={filter.location}
                  onValue={(location) => setFilter({ ...filter, location })}
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
                  onValue={(status) => setFilter({ ...filter, status })}
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
                  value={filter.schedule}
                  onValue={(schedule) => setFilter({ ...filter, schedule })}
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
            <CheckboxTable
              head={DInfluencerHeadRegistered}
              items={[influencers]}
              renderItem={renderItem}
            />
          )}
          {tabs === 1 && (
            <CheckboxTable
              head={DInfluencerHeadToBeApproved}
              items={[]}
              renderItem={renderItem}
            />
          )}
          <Pagination count={counter} page={page} onChange={handlePage} />
          <Stack direction="horizontal">
            <ToBeApprovedActions />
            <DiscoverActions data={currentInfluencer} />
          </Stack>
        </Stack>
      </CardWithText>
      {eModal && <ExportInfluencersModal onClose={closeEModal} />}
      {ipModal && (
        <InfluencerProfile
          influencer={currentInfluencer}
          onClose={closeIpModal}
        />
      )}
    </DiscoverInfluencersPageMain>
  );
};

export default DiscoverInfluencersPage;
