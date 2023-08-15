import React, { useState } from 'react';

import {
  CardWithChart,
  CardWithText,
  NewCheckboxTable,
  Table,
} from 'components/custom';
import { Collapse, Grid, Stack } from 'components/system';
import { Button, Input, Pagination } from 'components/ui';
import { DDevelopersHead, DDevelopersFilters } from 'features/developers/data';
import {
  MarketPageFilter,
  MarketPageFilterActions,
  MarketTableItem,
  MarketTableItemImage,
  MarketTableItemLabel,
  ProjectsMain,
  InvestorsGrid,
} from 'features/developers/styles';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { InstagramIcon, SlidersHorizontalIcon } from 'components/svg';
import { faker } from '@faker-js/faker';
import { TableActions } from './elements';

const AdminMarketPage = () => {
  const [filter, setFilter] = useState<any>(DDevelopersFilters());

  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DDevelopersFilters());
  };

  const renderItem = ({ headItem }: TTableRenderItemObject) => {
    if (headItem.reference === 'property') {
      return (
        <MarketTableItem>
          <MarketTableItemImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpe6whx0r3s65SfyBn9l-2HrN93b8aijxTh5xVFbZg&s" />
          <MarketTableItemLabel>1.5 Bedroom apartment</MarketTableItemLabel>
        </MarketTableItem>
      );
    }
    if (headItem.reference === 'location') {
      return 'Zagreb';
    }
    if (headItem.reference === 'capRate') {
      return '7%';
    }
    if (headItem.reference === 'pricePerSqm') {
      return '€2,500';
    }
    if (headItem.reference === 'squareMeters') {
      return '0.23';
    }
    if (headItem.reference === 'price') {
      return '€575';
    }
    if (headItem.reference === 'actions') {
      return <TableActions />;
    }

    return '';
  };

  return (
    <ProjectsMain>
      <InvestorsGrid>
        <CardWithChart
          title="New"
          icon={<InstagramIcon />}
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
          title="In Project"
          icon={<InstagramIcon />}
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
          title="Inactive"
          icon={<InstagramIcon />}
          percent={2}
          count={75}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
      </InvestorsGrid>
      <CardWithText
        title="Developers"
        actions={[
          <Button
            color={filterOpen ? 'secondary' : 'default'}
            variant="contained"
            onClick={toggleFilter}
            startIcon={<SlidersHorizontalIcon width="18" height="18" />}
          >
            Filters
          </Button>,
        ]}
      >
        <Stack>
          <Collapse in={filterOpen}>
            <MarketPageFilter>
              <Grid columns={4}>
                <Input
                  type="text"
                  label="Search"
                  placeholder="Please Enter"
                  value={filter.search}
                  onValue={(search) => setFilter({ ...filter, search })}
                />
                <Input
                  type="select"
                  label="Project"
                  placeholder="Please Select"
                  value={filter.project}
                  onValue={(project) => setFilter({ ...filter, project })}
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
                  label="Activity"
                  placeholder="Please Select"
                  value={filter.activity}
                  onValue={(activity) => setFilter({ ...filter, activity })}
                />
                <Input
                  type="select"
                  label="Services"
                  placeholder="Please Select"
                  value={filter.services}
                  onValue={(services) => setFilter({ ...filter, services })}
                />
                <Input
                  type="min-max"
                  label="Revenue"
                  value={filter.revenue}
                  onValue={(revenue) => setFilter({ ...filter, revenue })}
                />
                <Input
                  type="min-max"
                  label="Offers"
                  value={filter.offers}
                  onValue={(offers) => setFilter({ ...filter, offers })}
                />
                <Input
                  type="min-max"
                  label="Total Projects"
                  value={filter.totalProjects}
                  onValue={(totalProjects) =>
                    setFilter({ ...filter, totalProjects })
                  }
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
          </Collapse>
          <NewCheckboxTable
            head={DDevelopersHead}
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
    </ProjectsMain>
  );
};

export default AdminMarketPage;
