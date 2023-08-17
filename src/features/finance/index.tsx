import React, { useState } from 'react';
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
import { SlidersHorizontalIcon } from 'components/svg';
import { Button, Input, InputGroup, Pagination } from 'components/ui';
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

  const renderItem = ({ cell }: TTableRenderItemObject) => '';

  return (
    <FinancePageMain>
      <CardWithText
        title="Revenue"
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
                  label="House"
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
                <InputGroup
                  label="Date Range"
                  inputRatio="1fr 1fr"
                  elements={[
                    {
                      value: filter.dateFrom,
                      onValue: (dateFrom) => setFilter({ ...filter, dateFrom }),
                      type: 'date',
                      placeholder: 'From',
                    },
                    {
                      value: filter.dateTo,
                      onValue: (dateTo) => setFilter({ ...filter, dateTo }),
                      type: 'date',
                      placeholder: 'To',
                    },
                  ]}
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
            head={DFinanceAdminRevenueHead}
            items={[]}
            renderItem={renderItem}
          />
          <Pagination count={32} />
        </Stack>
      </CardWithText>
    </FinancePageMain>
  );
};

export default FinancePage;
