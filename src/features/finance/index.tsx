import React, { Children, useState } from 'react';
import {
  FinancePageMain,
  FinancePageFilter,
  FinancePageFilterActions,
} from 'features/finance/styles';
import {
  DFinanceAdminRevenueHead,
  DGenerateFinanceFilter,
} from 'features/finance/data';
import { CardWithText, NewCheckboxTable } from 'components/custom';
import { SlidersHorizontalIcon, VerticalDotsIcon } from 'components/svg';
import { Button, Input, InputGroup, Label, Pagination } from 'components/ui';
import { Grid, Stack, Collapse } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';

const FinancePage = () => {
  const [filter, setFilter] = useState<any>(DGenerateFinanceFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateFinanceFilter());
  };

  const renderItem = ({ headItem }: TTableRenderItemObject) => {
    if (headItem.reference === 'revenue') {
      return 'Application';
    }
    if (headItem.reference === 'user') {
      return 'Ivan Jurisic';
    }
    if (headItem.reference === 'type') {
      return 'High';
    }
    if (headItem.reference === 'date') {
      return 'May 1, 2022';
    }
    if (headItem.reference === 'amount') {
      return '$1.99';
    }
    if (headItem.reference === 'actions') {
      return <VerticalDotsIcon />;
    }

    return '';
  };

  return (
    <FinancePageMain>
      <CardWithText
        title="Revenue"
        actions={Children.toArray([
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
        ])}
      >
        <Stack>
          <Collapse removeGap in={filterOpen}>
            <FinancePageFilter>
              <Grid columns={4}>
                <Input
                  type="select"
                  label="Type"
                  placeholder="Please Select"
                  value={filter.type}
                  onValue={(type) => setFilter({ ...filter, type })}
                />
                <Input
                  type="select"
                  label="User"
                  placeholder="Please Select"
                  value={filter.user}
                  onValue={(user) => setFilter({ ...filter, user })}
                />
                <Input
                  type="select"
                  label="Car"
                  placeholder="Please Select"
                  value={filter.house}
                  onValue={(house) => setFilter({ ...filter, house })}
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
                  label="Amount"
                  placeholder="Please Select"
                  value={filter.amount}
                  onValue={(amount) => setFilter({ ...filter, amount })}
                />
                <Stack>
                  <Label style={{ color: '#7E839F', marginBottom: '-1.1rem' }}>
                    Date Range
                  </Label>
                  <Stack direction="horizontal">
                    <Input
                      type="date"
                      placeholder="Please Select"
                      value={filter.dateFrom}
                      onValue={(dateFrom) => setFilter({ ...filter, dateFrom })}
                    />
                    <Input
                      type="date"
                      placeholder="Please Select"
                      value={filter.dateTo}
                      onValue={(dateTo) => setFilter({ ...filter, dateTo })}
                    />
                  </Stack>
                </Stack>
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
            head={DFinanceAdminRevenueHead}
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

export default FinancePage;
