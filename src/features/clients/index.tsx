import React, { useState } from 'react';
import {
  ClientsPageMain,
  ClientsPageCharts,
  ClientsPageFilter,
  ClientsPageFilterActions,
} from 'features/clients/styles';
import { CardWithChart, CardWithText } from 'components/custom';
import {
  ContactedIcon,
  IdentifiedIcon,
  RegisteredIcon,
  SlidersHorizontalIcon,
  TotalIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input } from 'components/ui';
import { Grid, Stack } from 'components/system';
import { Collapse } from '@mui/material';
import { DGenerateClientsFilter } from 'features/clients/data';

const ClientsPage = () => {
  const [filter, setFilter] = useState<any>(DGenerateClientsFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateClientsFilter());
  };

  return (
    <ClientsPageMain>
      <ClientsPageCharts>
        <CardWithChart
          title="Identified"
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
          title="Contacted"
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
          title="Registered"
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
          title="Total"
          icon={<TotalIcon />}
          percent={2}
          count={75}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
      </ClientsPageCharts>
      <CardWithText
        title="Clients"
        description="More than 290+ new Clients"
        actions={[
          <Button
            color={filterOpen ? 'secondary' : 'default'}
            variant="contained"
            onClick={toggleFilter}
            startIcon={<SlidersHorizontalIcon width="18" height="18" />}
          >
            Filters
          </Button>,
          <Button color="default" variant="contained">
            Export
          </Button>,
          <Button color="primary" variant="contained">
            Add Client
          </Button>,
        ]}
      >
        <Stack>
          <Collapse in={filterOpen}>
            <ClientsPageFilter>
              <Grid columns={4}>
                <Input
                  type="select"
                  label="Industry"
                  placeholder="Please Select"
                  value={filter.industry}
                  onValue={(industry) => setFilter({ ...filter, industry })}
                />
                <Input
                  type="select"
                  label="Company"
                  placeholder="Please Select"
                  value={filter.company}
                  onValue={(company) => setFilter({ ...filter, company })}
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
                  type="select"
                  label="Campaign Status"
                  placeholder="Please Select"
                  value={filter.location}
                  onValue={(location) => setFilter({ ...filter, location })}
                />
                <Input
                  type="date"
                  label="Date Joined"
                  placeholder="Start"
                  value={filter.startDate}
                  onValue={(startDate) => setFilter({ ...filter, startDate })}
                />
                <Input
                  type="date"
                  label="Date Left"
                  placeholder="End"
                  value={filter.endDate}
                  onValue={(endDate) => setFilter({ ...filter, endDate })}
                />
                <Input
                  type="min-max"
                  label="Number of Campaigns"
                  value={filter.campaignNumber}
                  onValue={(campaignNumber) =>
                    setFilter({ ...filter, campaignNumber })
                  }
                />
                <Input
                  type="min-max"
                  label="Revenue"
                  value={filter.revenue}
                  onValue={(revenue) => setFilter({ ...filter, revenue })}
                />
                <Input
                  type="multiselect"
                  label="Market"
                  placeholder="Please Select"
                  value={filter.market}
                  onValue={(market) => setFilter({ ...filter, market })}
                />
                <Input
                  type="multiselect"
                  label="Label"
                  placeholder="Please Select"
                  value={filter.label}
                  onValue={(label) => setFilter({ ...filter, label })}
                />
                <Input
                  type="select"
                  label="Task"
                  placeholder="Show all"
                  value={filter.task}
                  onValue={(task) => setFilter({ ...filter, task })}
                />
              </Grid>
              <ClientsPageFilterActions direction="horizontal">
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
              </ClientsPageFilterActions>
            </ClientsPageFilter>
          </Collapse>
          <div>Test</div>
        </Stack>
      </CardWithText>
    </ClientsPageMain>
  );
};

export default ClientsPage;
