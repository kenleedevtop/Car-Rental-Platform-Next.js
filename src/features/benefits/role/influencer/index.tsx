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
import { CardWithText, CheckboxTable } from 'components/custom';
import {
  ApparelIcon,
  BeautyIcon,
  ElectronicsIcon,
  FurnitureIcon,
  HealthIcon,
  LeisureIcon,
  LockIcon,
  NutritionIcon,
  PetCareIcon,
  ServicesBIcon,
  SlidersHorizontalIcon,
  TravelIcon,
  FoodIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, Pagination } from 'components/ui';
import { Stack, Collapse } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { useModal, usePagination } from 'hooks';
import {
  AddSuggestionModal,
  ExportBenefitsModal,
} from 'features/benefits/role/influencer/elements';
import AccesoriesIcon from 'components/svg/accessories';
import Link from 'next/link';
import { BenefitsAPI } from 'api';
import CardWithoutChart from 'components/custom/card-without-chart';

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

  const [benefits, setBenefits] = useState([]);

  const [filterParams, setFilterParams] = useState({});

  const { pagesCount, page, setTotalResults, handlePageChange, reload } =
    usePagination({
      limit: 10,
      page: 1,
      onChange: async (params, setPage) => {
        const { result, meta } = await BenefitsAPI.getBenefits({
          limit: params.limit,
          skip: params.skip,
          ...filterParams,
        });
        setBenefits(result);
        setTotalResults(meta.countFiltered);
      },
    });

  const [suggestions, setSuggestions] = useState([]);

  const [filterParamsS, setFilterParamsS] = useState({});

  const {
    pagesCount: sPageCount,
    page: sPage,
    setTotalResults: setTotalsResultsS,
    handlePageChange: handlePageChangeS,
    reload: reloadS,
  } = usePagination({
    limit: 10,
    page: 1,
    onChange: async (params, setPage) => {
      const { result, meta } = await BenefitsAPI.getSuggestions({
        limit: params.limit,
        skip: params.skip,
        search: '',
        ...filterParamsS,
      });
      setSuggestions(result);
      setTotalResults(meta.countFiltered);
    },
  });

  const renderItem = ({
    headItem,
    cell,
    row,
    table,
  }: TTableRenderItemObject) => {
    if (headItem.reference === 'company') {
      return row.data.benefitPartnership.name;
    }
    if (headItem.reference === 'category') {
      return row.data.benefitCategory.name;
    }
    if (headItem.reference === 'location') {
      row.data.benefitLocations.forEach((item: any) => {
        row.data = item.location.name;
      });

      return row.data;
    }
    if (headItem.reference === 'link') {
      return (
        <Link href={row.data.benefitCompanyLink}>
          <LockIcon />
        </Link>
      );
      // return row.data.benefitCompanyLink;
    }
    if (headItem.reference === 'benefit') {
      return row.data.description;
    }

    return '';
  };

  const renderItemSuggestions = ({
    headItem,
    cell,
    row,
    table,
  }: TTableRenderItemObject) => {
    if (headItem.reference === 'company') {
      return row.data.partnershipName;
    }
    if (headItem.reference === 'desiredOutcome') {
      return row.data.outcomeDescription;
    }

    if (headItem.reference === 'link') {
      return (
        <Link href={row.data.partnershipLink}>
          <LockIcon />
        </Link>
      );
    }

    return '';
  };

  return (
    <BenefitsPageMain>
      <BenefitsPageCharts columns={4}>
        <CardWithoutChart
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
        <CardWithoutChart
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
        <CardWithoutChart
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
        <CardWithoutChart
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
        <CardWithoutChart
          title="Food & Beverage"
          icon={<FoodIcon />}
          percent={2}
          count={23}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithoutChart
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
        <CardWithoutChart
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
        <CardWithoutChart
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
        <CardWithoutChart
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
        <CardWithoutChart
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
        <CardWithoutChart
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
        <CardWithoutChart
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
            items={benefits}
            renderItem={renderItem}
          />
          <Pagination
            onChange={(_e, x) => handlePageChange(x)}
            page={page}
            count={pagesCount}
          />
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
            items={suggestions}
            renderItem={renderItemSuggestions}
          />
          <Pagination
            onChange={(_e, x) => handlePageChangeS(x)}
            page={sPage}
            count={sPageCount}
          />
        </Stack>
      </CardWithText>
      {asModal && (
        <AddSuggestionModal
          reload={reloadS}
          onClose={() => {
            reloadS();
            closeAsModal();
          }}
        />
      )}
      {ebModal && <ExportBenefitsModal onClose={closeEbModal} />}
    </BenefitsPageMain>
  );
};

export default BenefitsPage;
