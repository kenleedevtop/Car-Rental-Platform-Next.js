import React, { useState } from 'react';
import {
  FinancePageMain,
  FinancePageFilter,
  FinancePageFilterActions,
} from 'features/users/styles';
import { DUsersHead, DUsersFilters } from 'features/users/data';
import { CardWithText, NewCheckboxTable, Tabs } from 'components/custom';
import { SlidersHorizontalIcon, VerticalDotsIcon } from 'components/svg';
import { Button, Input, Pagination } from 'components/ui';
import { Grid, Stack, Collapse } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';
import Link from 'next/link';

const UsersPage = () => {
  const [filter, setFilter] = useState<any>(DUsersFilters());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabs, setTabs] = useState(0);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DUsersFilters());
  };

  const renderItem = ({ headItem }: TTableRenderItemObject) => {
    if (headItem.reference === 'name') {
      return (
        <Link
          style={{ textDecoration: 'none', color: '#4f4f4f' }}
          href="/users/overview"
        >
          Ivan Jurisic
        </Link>
      );
    }
    if (headItem.reference === 'location') {
      return 'England';
    }
    if (headItem.reference === 'houses') {
      return '0';
    }
    if (headItem.reference === 'shares') {
      return '0';
    }
    if (headItem.reference === 'applications') {
      return '2';
    }
    if (headItem.reference === 'locationOfInterests') {
      return 'Barcelona, Spain';
    }
    if (headItem.reference === 'actions') {
      return <VerticalDotsIcon />;
    }

    return '';
  };

  return (
    <FinancePageMain>
      <CardWithText
        title="Users"
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
            Export
          </Button>,
        ]}
      >
        <Stack>
          <Collapse removeGap in={filterOpen}>
            <FinancePageFilter>
              <Tabs
                tabs={['Info', 'Work Experience', 'Education', 'House']}
                value={tabs}
                onValue={setTabs}
              />
              <Grid columns={4}>
                <Input
                  type="text"
                  label="Search"
                  placeholder="Please Select"
                  value={filter.search}
                  onValue={(search) => setFilter({ ...filter, search })}
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
                  label="Houses"
                  placeholder="Please Select"
                  value={filter.houses}
                  onValue={(houses) => setFilter({ ...filter, houses })}
                />
                <Input
                  type="min-max"
                  label="Shares"
                  placeholder="Please Select"
                  value={filter.shares}
                  onValue={(shares) => setFilter({ ...filter, shares })}
                />
                <Input
                  type="min-max"
                  label="Applications"
                  placeholder="Please Select"
                  value={filter.applications}
                  onValue={(applications) =>
                    setFilter({ ...filter, applications })
                  }
                />
                <Input
                  type="select"
                  label="Location of Interest"
                  placeholder="Please Select"
                  value={filter.locationOfInterest}
                  onValue={(locationOfInterest) =>
                    setFilter({ ...filter, locationOfInterest })
                  }
                />
                <Input
                  type="select"
                  label="Status"
                  placeholder="Please Select"
                  value={filter.status}
                  onValue={(status) => setFilter({ ...filter, status })}
                />
              </Grid>
              <FinancePageFilterActions direction="horizontal">
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
              </FinancePageFilterActions>
            </FinancePageFilter>
          </Collapse>
          <NewCheckboxTable
            head={DUsersHead}
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
    </FinancePageMain>
  );
};

export default UsersPage;
