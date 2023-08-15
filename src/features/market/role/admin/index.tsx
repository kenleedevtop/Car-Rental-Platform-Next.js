import React, { useState } from 'react';

import { CardWithText, PropertyCard, Table, Tabs } from 'components/custom';
import { Collapse, Grid, Stack } from 'components/system';
import { Button, Input, Pagination } from 'components/ui';
import {
  DMarketOffersHead,
  DSecondaryMarketFilters,
} from 'features/market/data';
import {
  // MarketHeadline,
  MarketPageFilter,
  MarketPageFilterActions,
  MarketTableItem,
  MarketTableItemImage,
  MarketTableItemLabel,
  ProjectsMain,
  ProjectsGrid,
} from 'features/market/styles';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { SlidersHorizontalIcon } from 'components/svg';

const AdminMarketPage = () => {
  const [tab, setTab] = useState(0);

  const [filter, setFilter] = useState<any>(DSecondaryMarketFilters());

  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
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
    if (headItem.reference === 'price') {
      return '€575';
    }

    return '';
  };

  return (
    <ProjectsMain>
      <Stack
        style={{ width: '100%', justifyContent: 'space-between' }}
        direction="horizontal"
      >
        <Tabs
          value={tab}
          onValue={setTab}
          tabs={['Primary Market', 'Secondary Market', 'Completed']}
        />
        <Button variant="contained" color="primary">
          Add Project
        </Button>
      </Stack>
      {tab === 0 && (
        <ProjectsGrid>
          <PropertyCard
            type={['Rent']}
            totalPrice={237883}
            link="/market/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            fundPercent={61}
            available={51223}
            investors={[
              {
                name: 'Founders',
                value: 1312321,
              },
              {
                name: 'Investor 1',
                value: 1312321,
              },
              {
                name: 'Investor 2',
                value: 1312321,
              },
              {
                name: 'Investor 3',
                value: 1312321,
              },
              {
                name: 'Investor 4',
                value: 1312321,
              },
            ]}
          />
          <PropertyCard
            type={['Rent']}
            totalPrice={237883}
            link="/market/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            fundPercent={61}
            available={51223}
            investors={[
              {
                name: 'Founders',
                value: 1312321,
              },
              {
                name: 'Investor 1',
                value: 1312321,
              },
              {
                name: 'Investor 2',
                value: 1312321,
              },
              {
                name: 'Investor 3',
                value: 1312321,
              },
              {
                name: 'Investor 4',
                value: 1312321,
              },
            ]}
          />
          <PropertyCard
            type={['Rent']}
            totalPrice={237883}
            link="/market/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            fundPercent={61}
            available={51223}
            investors={[
              {
                name: 'Founders',
                value: 1312321,
              },
              {
                name: 'Investor 1',
                value: 1312321,
              },
              {
                name: 'Investor 2',
                value: 1312321,
              },
              {
                name: 'Investor 3',
                value: 1312321,
              },
              {
                name: 'Investor 4',
                value: 1312321,
              },
            ]}
          />
          <PropertyCard
            type={['Rent']}
            totalPrice={237883}
            link="/market/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            fundPercent={61}
            available={51223}
            investors={[
              {
                name: 'Founders',
                value: 1312321,
              },
              {
                name: 'Investor 1',
                value: 1312321,
              },
              {
                name: 'Investor 2',
                value: 1312321,
              },
              {
                name: 'Investor 3',
                value: 1312321,
              },
              {
                name: 'Investor 4',
                value: 1312321,
              },
            ]}
          />
          <PropertyCard
            type={['Rent']}
            totalPrice={237883}
            link="/market/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            fundPercent={61}
            available={51223}
            investors={[
              {
                name: 'Founders',
                value: 1312321,
              },
              {
                name: 'Investor 1',
                value: 1312321,
              },
              {
                name: 'Investor 2',
                value: 1312321,
              },
              {
                name: 'Investor 3',
                value: 1312321,
              },
              {
                name: 'Investor 4',
                value: 1312321,
              },
            ]}
          />
          <PropertyCard
            type={['Rent']}
            totalPrice={237883}
            link="/market/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            fundPercent={61}
            available={51223}
            investors={[
              {
                name: 'Founders',
                value: 1312321,
              },
              {
                name: 'Investor 1',
                value: 1312321,
              },
              {
                name: 'Investor 2',
                value: 1312321,
              },
              {
                name: 'Investor 3',
                value: 1312321,
              },
              {
                name: 'Investor 4',
                value: 1312321,
              },
            ]}
          />
        </ProjectsGrid>
      )}
      {tab === 1 && (
        <CardWithText
          title="Secondary Market"
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
                    type="select"
                    label="Previously Invested"
                    placeholder="Please Select"
                    value={filter.previouslyInvested}
                    onValue={(previouslyInvested) =>
                      setFilter({ ...filter, previouslyInvested })
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
      )}

      {tab === 2 && (
        <ProjectsGrid>
          <PropertyCard
            type={['Rent']}
            totalPrice={117.552}
            link="/market/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            completed
          />
          <PropertyCard
            type={['Rent']}
            totalPrice={117.552}
            link="/market/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            completed
          />
          <PropertyCard
            type={['Rent']}
            totalPrice={117.552}
            link="/market/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            completed
          />
          <PropertyCard
            type={['Rent']}
            totalPrice={117.552}
            link="/market/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            completed
          />
          <PropertyCard
            type={['Rent']}
            totalPrice={117.552}
            link="/market/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            completed
          />
          <PropertyCard
            type={['Rent']}
            totalPrice={117.552}
            link="/market/overview"
            address="Trg bana Josipa Jelacica 23, Zagreb"
            title="1.5 Bedroom apartment in city center - Renovation to Rent"
            image="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
            completed
          />
        </ProjectsGrid>
      )}
    </ProjectsMain>
  );
};

export default AdminMarketPage;
