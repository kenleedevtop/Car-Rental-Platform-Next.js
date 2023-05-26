import React, { useState } from 'react';
import {
  BenefitsPageMain,
  BenefitsPageCharts,
  BenefitsPageFilter,
  BenefitsPageFilterActions,
  BenefitsPageFilterContainer,
} from 'features/benefits/role/influencer/styles';
import {
  DBenefitsIHead,
  DBenefitsIHead2,
  DGenerateFinanceFilter,
} from 'features/benefits/role/influencer/data';
import { CardWithChart, CardWithText, CheckboxTable } from 'components/custom';
import {
  ApparelIcon,
  BeautyIcon,
  ElectronicsIcon,
  FurnitureIcon,
  HealthIcon,
  LeisureIcon,
  NutritionIcon,
  PetCareIcon,
  ServicesBIcon,
  SlidersHorizontalIcon,
  TravelIcon,
  UserFocusIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, Pagination } from 'components/ui';
import { Stack, Collapse } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { useModal } from 'hooks';
import {
  AddSuggestionModal,
  ExportBenefitsModal,
} from 'features/benefits/role/influencer/elements';
import AccesoriesIcon from 'components/svg/accessories';

const BenefitsPage = () => {
  const [asModal, openAsModal, closeAsModal] = useModal(false);
  const [ebModal, openEbModal, closeEbModal] = useModal(false);

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
    <BenefitsPageMain>
      <BenefitsPageCharts columns={4}>
        <CardWithChart
          title="Accessories"
          icon={<AccesoriesIcon />}
          percent={2}
          count={23}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Apparel & Footwear"
          icon={<ApparelIcon />}
          percent={2}
          count={23}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Beauty & Personal Care"
          icon={<BeautyIcon />}
          percent={2}
          count={23}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Electronics"
          icon={<ElectronicsIcon />}
          percent={2}
          count={23}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Food & Beverage"
          icon={<UserFocusIcon />}
          percent={2}
          count={23}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Furniture"
          icon={<FurnitureIcon />}
          percent={2}
          count={23}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Health & Wellness"
          icon={<HealthIcon />}
          percent={2}
          count={23}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Leasure"
          icon={<LeisureIcon />}
          percent={2}
          count={23}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Nutrition"
          icon={<NutritionIcon />}
          percent={2}
          count={23}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Pet Care"
          icon={<PetCareIcon />}
          percent={2}
          count={23}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Services"
          icon={<ServicesBIcon />}
          percent={2}
          count={23}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Travel"
          icon={<TravelIcon />}
          percent={2}
          count={23}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
      </BenefitsPageCharts>
      <CardWithText
        title="Benefits"
        description="20 new Benefits"
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
          <Collapse removeGap in={filterOpen}>
            <BenefitsPageFilter>
              <BenefitsPageFilterContainer>
                <Input
                  type="text"
                  label="Search"
                  placeholder="Search For Benefit"
                  value={filter.search}
                  onValue={(search) => setFilter({ ...filter, search })}
                />
                <Input
                  type="select"
                  label="Category"
                  placeholder="Please Select"
                  value={filter.category}
                  onValue={(category) => setFilter({ ...filter, category })}
                />
                <Input
                  type="select"
                  label="Location"
                  placeholder="Please Select"
                  value={filter.location}
                  onValue={(location) => setFilter({ ...filter, location })}
                />
              </BenefitsPageFilterContainer>
              <BenefitsPageFilterActions direction="horizontal">
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
              </BenefitsPageFilterActions>
            </BenefitsPageFilter>
          </Collapse>
          <CheckboxTable
            head={DBenefitsIHead}
            items={[]}
            renderItem={renderItem}
          />
          <Pagination count={32} />
        </Stack>
      </CardWithText>
      <CardWithText
        title="Suggestions"
        actions={[
          <Button color="primary" variant="contained" onClick={openAsModal}>
            Suggest
          </Button>,
        ]}
      >
        <Stack>
          <CheckboxTable
            head={DBenefitsIHead2}
            items={[]}
            renderItem={renderItem}
          />
          <Pagination count={32} />
        </Stack>
      </CardWithText>
      {asModal && <AddSuggestionModal onClose={closeAsModal} />}
      {ebModal && <ExportBenefitsModal onClose={closeEbModal} />}
    </BenefitsPageMain>
  );
};

export default BenefitsPage;
