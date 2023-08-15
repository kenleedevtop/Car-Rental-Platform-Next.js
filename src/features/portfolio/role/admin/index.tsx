import React, { useState } from 'react';

import {
  ProjectsMain,
  MarketPageFilter,
  MarketPageFilterActions,
  MarketHeadline,
  MarketTableItem,
  MarketTableItemImage,
  MarketTableItemLabel,
  PortfolioGrid,
  PortfolioFlex,
  PortfolioFlexHeadline,
  PortfolioActions,
  ChartWrapper,
} from 'features/portfolio/styles';
import { CardWithChartHomepage, CardWithText, Table } from 'components/custom';
import { Button, Card, Input, Pagination } from 'components/ui';
import {
  FinanceSmallIcon,
  RevenueIcon,
  SlidersHorizontalIcon,
} from 'components/svg';
import {
  DMarketOffersHead,
  DSecondaryMarketFilters,
} from 'features/portfolio/data';
import { Collapse, Grid, Stack } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { faker } from '@faker-js/faker';
import { BarChart } from 'components/csr';
import Theme from 'theme';
import { useMenu } from 'hooks';
import { TableActions } from 'features/portfolio/role/investor/elements';

const InvestorPortfolioPage = () => {
  const [filter, setFilter] = useState<any>(DSecondaryMarketFilters());

  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const [menu, open, setOpen, buttonRef, position] = useMenu(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const clearFilters = () => {
    setFilter(DSecondaryMarketFilters());
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
    if (headItem.reference === 'rentReceived') {
      return '€575';
    }

    if (headItem.reference === 'actions') {
      return <TableActions />;
    }

    return '';
  };

  return (
    <ProjectsMain>
      <PortfolioGrid>
        <CardWithChartHomepage
          title="Portfolio"
          icon={<RevenueIcon />}
          smallIcon={<FinanceSmallIcon />}
          percent={2}
          actions
          count={7552.8}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
          total={7552.8}
          type="PF"
          buttonLabel="Portfolio"
          values={[
            {
              label: 'Funding Stage',
              value: 123.22,
            },
            {
              label: 'Execution',
              value: 123.22,
            },
            {
              label: 'Funding Stage',
              value: 123.22,
            },
          ]}
        />
        <Card>
          <PortfolioFlex>
            <PortfolioFlexHeadline>Earnings By Month</PortfolioFlexHeadline>
            <PortfolioActions direction="horizontal">
              <Button variant="contained" color="default">
                12 Months
              </Button>
              <Button variant="contained" color="secondary">
                Future
              </Button>
            </PortfolioActions>
          </PortfolioFlex>
          <ChartWrapper>
            <BarChart
              labels={[
                'January, 2023',
                'February, 2023',
                'March, 2023',
                'April, 2023',
                'May, 2023',
                'Jun, 2023',
                'July, 2023',
                'August, 2023',
                'September, 2023',
                'October, 2023',
                'November, 2023',
                'December, 2023',
              ]}
              data={[
                {
                  color: `${Theme.palette.secondary.main}`,
                  values: [5, 10, 15, 20, 25, 18, 13, 8, 3, 1, 20, 30],
                },
              ]}
              verticalLabel="Euros"
              horizontalLabel=""
            />
          </ChartWrapper>
        </Card>
      </PortfolioGrid>
      <CardWithText
        title="My Portfolio"
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
                  type="select"
                  label="Country"
                  placeholder="Please Select"
                  value={filter.country}
                  onValue={(country) => setFilter({ ...filter, country })}
                />
                <Input
                  type="select"
                  label="City"
                  placeholder="Please Select"
                  value={filter.city}
                  onValue={(city) => setFilter({ ...filter, city })}
                />
                <Input
                  type="select"
                  label="Type"
                  placeholder="Please Select"
                  value={filter.type}
                  onValue={(type) => setFilter({ ...filter, type })}
                />
                <Input
                  type="min-max"
                  label="Return on Investment"
                  value={filter.rentReceived}
                  onValue={(rentReceived) =>
                    setFilter({ ...filter, rentReceived })
                  }
                />
                <Input
                  type="min-max"
                  label="Cap Rate"
                  value={filter.capRate}
                  onValue={(capRate) => setFilter({ ...filter, capRate })}
                />
                <Input
                  type="min-max"
                  label="Price per sqm"
                  value={filter.pricePerSqm}
                  onValue={(pricePerSqm) =>
                    setFilter({ ...filter, pricePerSqm })
                  }
                />
                <Input
                  type="min-max"
                  label="Price"
                  value={filter.price}
                  onValue={(price) => setFilter({ ...filter, price })}
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
          <Table
            head={DMarketOffersHead}
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

export default InvestorPortfolioPage;
