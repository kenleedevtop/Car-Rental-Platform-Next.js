import React, { useState, useEffect } from 'react';
import {
  DiscoverInfluencersPageMain,
  DiscoverInfluencersPageCharts,
  DiscoverInfluencersPageFilter,
  DiscoverInfluencersPageFilterActions,
  DiscoverInfluencersAction,
} from 'features/discover-influencers/styles';
import { CardWithChart, CardWithText, Table, Tabs } from 'components/custom';
import {
  InstagramIcon,
  SlidersHorizontalIcon,
  TiktokIcon,
  TwitterIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, Pagination } from 'components/ui';
import { Grid, Stack } from 'components/system';
import { Collapse } from '@mui/material';
import {
  DGenerateDiscoverInfluencersFilter,
  DInfluencerHead,
  DInfluencerHead2,
  DInfluencerHead3,
  DInfluencerHead4,
} from 'features/discover-influencers/data';
import {
  AddInfluencerModal,
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
  const [aiModal, openAiModal, closeAiModal] = useModal(false);
  const [eModal, openEModal, closeEModal] = useModal(false);
  const [ipModal, openIpModal, closeIpModal] = useModal(false);

  const [tabs, setTabs] = useState(0);
  const [status, setStatus] = useState('IDENTIFIED');
  const [page, setPage] = useState(1);
  const [influencers, setInfluencers] = useState([]);
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
        <DiscoverInfluencersAction onClick={openIpModal}>
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
      return <DiscoverActions />;
    }

    return '';
  };

  const getUsers = async (input: string) => {
    try {
      const { leads: data, count: countNumber } = await AdminAPI.getInfluencers(
        input
      );
      setInfluencers(data);
      const helper = Math.ceil(countNumber / 10);
      setCounter(helper);
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
          title="Instagram"
          icon={<InstagramIcon />}
          percent={2}
          count={7552.8}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Twitter"
          icon={<TwitterIcon />}
          percent={2}
          count={7552.8}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Tiktok"
          icon={<TiktokIcon />}
          percent={-6}
          count={7552.8}
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
          <Button color="default" variant="contained" onClick={() => {}}>
            Import
          </Button>,
          <Button color="default" variant="contained" onClick={openEModal}>
            Export
          </Button>,
          <Button color="primary" variant="contained" onClick={openAiModal}>
            Add Influencer
          </Button>,
        ]}
      >
        <Stack>
          <Collapse in={filterOpen}>
            <DiscoverInfluencersPageFilter>
              <Grid columns={4}>
                <Input
                  type="select"
                  label="Platform"
                  placeholder="Please Select"
                  value={filter.platform}
                  onValue={(platform) => setFilter({ ...filter, platform })}
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
                  label="Followers"
                  value={filter.followers}
                  onValue={(followers) => setFilter({ ...filter, followers })}
                />
                <Input
                  type="min-max"
                  label="Age"
                  value={filter.age}
                  onValue={(age) => setFilter({ ...filter, age })}
                />
                <Input
                  type="min-max"
                  label="Status"
                  value={filter.status}
                  onValue={(statusInput) =>
                    setFilter({ ...filter, statusInput })
                  }
                />
                <Input
                  type="multiselect"
                  label="Add Label"
                  placeholder="Choose several state"
                  value={filter.label}
                  onValue={(label) => setFilter({ ...filter, label })}
                />
                <Input
                  type="select"
                  label="Task"
                  placeholder="Please Select"
                  value={filter.Task}
                  onValue={(Task) => setFilter({ ...filter, Task })}
                />
              </Grid>
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
            tabs={[
              'Identified',
              'Contacted',
              'Registered',
              'To Be Approved',
              'Do Not Contact',
            ]}
          />
          {tabs === 0 && (
            <Table
              head={DInfluencerHead}
              items={influencers}
              renderItem={renderItem}
            />
          )}
          {tabs === 1 && (
            <Table head={DInfluencerHead2} items={[]} renderItem={renderItem} />
          )}
          {tabs === 2 && (
            <Table head={DInfluencerHead3} items={[]} renderItem={renderItem} />
          )}
          {tabs === 3 && (
            <Table head={DInfluencerHead4} items={[]} renderItem={renderItem} />
          )}
          {tabs === 4 && (
            <Table head={DInfluencerHead4} items={[]} renderItem={renderItem} />
          )}
          <Pagination count={counter} page={page} onChange={handlePage} />
          <Stack direction="horizontal">
            <ToBeApprovedActions />
            <DiscoverActions />
          </Stack>
        </Stack>
      </CardWithText>
      {aiModal && <AddInfluencerModal onClose={closeAiModal} />}
      {eModal && <ExportInfluencersModal onClose={closeEModal} />}
      {ipModal && <InfluencerProfile onClose={closeIpModal} />}
    </DiscoverInfluencersPageMain>
  );
};

export default DiscoverInfluencersPage;
