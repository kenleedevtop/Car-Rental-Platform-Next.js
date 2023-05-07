import React, { useEffect, useState } from 'react';
import {
  BenefitsPageMain,
  BenefitsPageCharts,
  BenefitsPageFilter,
  BenefitsPageFilterActions,
} from 'features/benefits/role/admin/styles';
import {
  DFinanceHead,
  DFinanceHead2,
  DGenerateFinanceFilter,
} from 'features/benefits/role/admin/data';
import {
  CardWithChart,
  CardWithText,
  CheckboxTable,
  Menu,
  Tabs,
} from 'components/custom';
import {
  ApparelIcon,
  BeautyIcon,
  DeleteIcon,
  ElectronicsIcon,
  FoodIcon,
  FurnitureIcon,
  HealthIcon,
  InfoIcon,
  LeisureIcon,
  LockIcon,
  NutritionIcon,
  PetCareIcon,
  ScheduleIcon,
  ServicesBIcon,
  SlidersHorizontalIcon,
  TravelIcon,
  AccesoriesIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, Pagination } from 'components/ui';
import { Grid, Stack, Collapse } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { useMenu, useModal, usePagination } from 'hooks';
import {
  AddBenefitModal,
  SuggestionInfoModal,
  ExportBenefitsModal,
  ConfirmChangeBenefitModal,
  ConfirmRemoveBenefitModal,
  ConfirmRemoveSuggestionModal,
  ConfirmUpdateSuggestionModal,
  CreateSuggestion,
  ChangeBenefit,
  ToBeApprovedActions,
} from 'features/benefits/role/admin/elements';
import { BenefitsAPI } from 'api';
import Link from 'next/link';
import {
  TUsePaginationData,
  TUsePaginationFunction,
} from 'hooks/use-pagination/types';

const BenefitsPage = () => {
  const [abModal, openAbModal, closeAbModal] = useModal(false);
  const [siModal, openSiModal, closeSiModal] = useModal(false);
  const [ebModal, openEbModal, closeEbModal] = useModal(false);
  const [cabModal, openCabModal, closeCabModal] = useModal(false);
  const [ccbModal, openCcbModal, closeCcbModal] = useModal(false);
  const [crbModal, openCrbModal, closeCrbModal] = useModal(false);
  const [crsModal, openCrsModal, closeCrsModal] = useModal(false);
  const [cusModal, openCusModal, closeCusModal] = useModal(false);
  const [cbModal, openCbModal, closeCbModal] = useModal(false);
  const [csModal, openCsModal, closeCsModal] = useModal(false);

  const [menuTba, openTba, setOpenTba] = useMenu(false);
  const [menuS, openS, setOpenS] = useMenu(false);

  const [benefits, setBenefits] = useState([]);

  const getBenefits = async (params: any) => {
    const { meta, result } = await BenefitsAPI.getBenefits(params);

    setTotalResults(meta.countFiltered);
    setBenefits(result);
  };

  const setStuff = async (data: any) => {
    await getBenefits({ skip: data.skip, limit: data.limit });
  };

  const {
    limit,
    pagesCount,
    page,
    setTotalResults,
    setLimit,
    handlePageChange,
  } = usePagination({
    limit: 10,
    page: 1,
    onChange: async (
      data: TUsePaginationData,
      setPage: TUsePaginationFunction
    ) => {
      setStuff(data);
      setPage(data.page);
    },
  });

  const handleGet = () => {
    getBenefits({ limit, skip: (page - 1) * limit });
  };

  const handleMenuTba = () => {
    setOpenTba(!openTba);
  };

  const handleMenuS = () => {
    setOpenS(!openS);
  };

  const [filter, setFilter] = useState<any>(DGenerateFinanceFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateFinanceFilter());
  };

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

    if (headItem.reference === 'actions') {
      return <ToBeApprovedActions action={handleGet} data={row.data} />;
    }

    return '';
  };

  const [tabs, setTabs] = useState(0);

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
          <Button color="default" variant="contained" onClick={openEbModal}>
            Export
          </Button>,
          <Button color="primary" variant="contained" onClick={openAbModal}>
            Add Benefit
          </Button>,
        ]}
      >
        <Stack>
          <Collapse removeGap in={filterOpen}>
            <BenefitsPageFilter>
              <Grid columns={4}>
                <Input
                  type="text"
                  label="Search For Benefit"
                  placeholder="Search For Statement"
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
                  type="select"
                  label="Category"
                  placeholder="Please Select"
                  value={filter.category}
                  onValue={(category) => setFilter({ ...filter, category })}
                />
              </Grid>
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
            head={DFinanceHead}
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
          <Button color="primary" variant="contained" onClick={openCsModal}>
            Suggest
          </Button>,
        ]}
      >
        <Stack>
          <Tabs
            value={tabs}
            onValue={setTabs}
            tabs={['Active', 'To Be Approved']}
          />
          <CheckboxTable
            head={DFinanceHead2}
            items={[]}
            renderItem={renderItem}
          />
          <Pagination count={32} />
          <Stack direction="horizontal">
            <Button color="primary" variant="contained" onClick={openAbModal}>
              Add benefit
            </Button>
            <Button color="primary" variant="contained" onClick={openSiModal}>
              Suggestion info
            </Button>
            <Button color="primary" variant="contained" onClick={openCcbModal}>
              Confirm Change Benefit
            </Button>
            <Button color="primary" variant="contained" onClick={openCabModal}>
              Confirm Add Benefit
            </Button>
            <Button color="primary" variant="contained" onClick={openCrbModal}>
              Confirm Remove Benefit
            </Button>
            <Button color="primary" variant="contained" onClick={openCrsModal}>
              Confirm Remove Suggestion
            </Button>
            <Button color="primary" variant="contained" onClick={openCusModal}>
              Confirm Update Suggestion
            </Button>
          </Stack>
          <Stack direction="horizontal">
            <Button color="primary" variant="contained" onClick={handleMenuTba}>
              TBA actions
            </Button>
            <Button color="primary" variant="contained" onClick={handleMenuS}>
              Suggestion actions
            </Button>
            <Button color="primary" variant="contained" onClick={openCbModal}>
              Change Benefit
            </Button>
          </Stack>
        </Stack>
        {openS && (
          <Menu
            items={[
              {
                icon: <InfoIcon />,
                label: 'Update',
                action: () => {},
              },
              {
                icon: <ScheduleIcon />,
                label: 'Schedule',
                action: () => {},
              },
              {
                icon: <DeleteIcon />,
                label: 'Remove',
                action: () => {},
              },
            ]}
            ref={menuS}
          />
        )}
      </CardWithText>
      {abModal && (
        <AddBenefitModal
          onClose={() => {
            closeAbModal();
            handleGet();
          }}
        />
      )}
      {siModal && <SuggestionInfoModal onClose={closeSiModal} />}
      {ebModal && <ExportBenefitsModal onClose={closeEbModal} />}
      {/* {cbModal && <ChangeBenefit  onClose={closeCbModal} />} */}
      {/* {cabModal && <ConfirmAddBenefitModal onClose={closeCabModal} />} */}
      {/* {ccbModal && <ConfirmChangeBenefitModal onClose={closeCcbModal} />} */}
      {/* {crbModal && <ConfirmRemoveBenefitModal onClose={closeCrbModal} />} */}
      {crsModal && <ConfirmRemoveSuggestionModal onClose={closeCrsModal} />}
      {cusModal && <ConfirmUpdateSuggestionModal onClose={closeCusModal} />}
      {csModal && <CreateSuggestion onClose={closeCsModal} />}
    </BenefitsPageMain>
  );
};

export default BenefitsPage;
