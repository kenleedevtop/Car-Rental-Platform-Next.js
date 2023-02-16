import React, { useState } from 'react';
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
  Menu,
  Table,
  Tabs,
} from 'components/custom';
import {
  ApproveIcon,
  DeleteIcon,
  InfoIcon,
  ScheduleIcon,
  SlidersHorizontalIcon,
  UserFocusIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, Pagination } from 'components/ui';
import { Grid, Stack, Collapse } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { useMenu, useModal } from 'hooks';
import {
  AddBenefitModal,
  SuggestionInfoModal,
  ExportBenefitsModal,
  ConfirmChangeBenefitModal,
  ConfirmAddBenefitModal,
  ConfirmRemoveBenefitModal,
  ConfirmRemoveSuggestionModal,
  ConfirmUpdateSuggestionModal,
} from 'features/benefits/role/admin/elements';

const BenefitsPage = () => {
  const [abModal, openAbModal, closeAbModal] = useModal(false);
  const [siModal, openSiModal, closeSiModal] = useModal(false);
  const [ebModal, openEbModal, closeEbModal] = useModal(false);
  const [cabModal, openCabModal, closeCabModal] = useModal(false);
  const [ccbModal, openCcbModal, closeCcbModal] = useModal(false);
  const [crbModal, openCrbModal, closeCrbModal] = useModal(false);
  const [crsModal, openCrsModal, closeCrsModal] = useModal(false);
  const [cusModal, openCusModal, closeCusModal] = useModal(false);

  const [menuTba, openTba, setOpenTba] = useMenu(false);
  const [menuS, openS, setOpenS] = useMenu(false);

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

  const renderItem = ({ cell }: TTableRenderItemObject) => '';

  const [tabs, setTabs] = useState(0);

  return (
    <BenefitsPageMain>
      <BenefitsPageCharts columns={4}>
        <CardWithChart
          title="Accessories"
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
          title="Apparel & Footwear"
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
          title="Beauty & Personal Care"
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
          title="Electronics"
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
          title="Health & Wellness"
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
          title="Leasure"
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
          title="Nutrition"
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
          title="Pet Care"
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
          title="Services"
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
          title="Travel"
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
          <Table head={DFinanceHead} items={[]} renderItem={renderItem} />
          <Pagination count={32} />
        </Stack>
      </CardWithText>
      <CardWithText
        title="Suggestions"
        actions={[
          <Button color="primary" variant="contained" onClick={() => {}}>
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
          <Table head={DFinanceHead2} items={[]} renderItem={renderItem} />
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
          </Stack>
        </Stack>
        {openTba && (
          <Menu
            items={[
              {
                icon: <ApproveIcon />,
                label: 'Approve',
                action: () => {},
              },
              {
                icon: <InfoIcon />,
                label: 'Info',
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
            ref={menuTba}
          />
        )}
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
      {abModal && <AddBenefitModal onClose={closeAbModal} />}
      {siModal && <SuggestionInfoModal onClose={closeSiModal} />}
      {ebModal && <ExportBenefitsModal onClose={closeEbModal} />}
      {cabModal && <ConfirmAddBenefitModal onClose={closeCabModal} />}
      {ccbModal && <ConfirmChangeBenefitModal onClose={closeCcbModal} />}
      {crbModal && <ConfirmRemoveBenefitModal onClose={closeCrbModal} />}
      {crsModal && <ConfirmRemoveSuggestionModal onClose={closeCrsModal} />}
      {cusModal && <ConfirmUpdateSuggestionModal onClose={closeCusModal} />}
    </BenefitsPageMain>
  );
};

export default BenefitsPage;
