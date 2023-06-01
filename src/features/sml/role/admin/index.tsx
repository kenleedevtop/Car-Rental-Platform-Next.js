import React, { useState } from 'react';
import {
  SmlPageMain,
  SmlPageCharts,
  SmlPageFilter,
  SmlPageFilterActions,
} from 'features/sml/styles';
import {
  CardWithChart,
  CardWithText,
  Menu,
  CheckboxTable,
  Tabs,
} from 'components/custom';
import {
  ContactIcon,
  DeleteIcon,
  DeliverIcon,
  EditIcon,
  FinishedIcon,
  InfoIcon,
  ManageIcon,
  OrderedIcon,
  ReadyIcon,
  RevenueIcon,
  ScheduleIcon,
  SlidersHorizontalIcon,
  SMLSmallIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, InputGroup, Pagination } from 'components/ui';
import { Grid, Stack } from 'components/system';
import { Collapse } from '@mui/material';
import { DGenerateAdminSmlFilter } from 'features/sml/data';
import { TTableRenderItemObject } from 'components/custom/table/types';
import {
  ExportSmlModal,
  CreateSmlModal,
  OrderSmlModal,
  CreateSmlTabsModal,
} from 'features/sml/role/admin/elements';
import { useMenu, useModal, usePagination } from 'hooks';
import { useRouter } from 'next/router';
import { SMLApi } from 'api';

const SmlPage = () => {
  const [filter, setFilter] = useState<any>(DGenerateAdminSmlFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabsValue, setTabsValue] = useState(0);

  const [esModal, openEsModal, closeEsModal] = useModal(false);
  const [csModal, openCsModal, closeCsModal] = useModal(false);
  const [osModal, openOsModal, closeOsModal] = useModal(false);
  const [cstModal, openCstModal, closeCstModal] = useModal(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateAdminSmlFilter());
  };

  const [menuTBC, openTBC, setOpenTBC] = useMenu(false);
  const [menuTBS, openTBS, setOpenTBS] = useMenu(false);
  const [menuSML, openSML, setOpenSML] = useMenu(false);

  const handleMenuTBC = () => {
    setOpenTBC(!openTBC);
  };
  const handleMenuTBS = () => {
    setOpenTBS(!openTBS);
  };
  const handleMenuSML = () => {
    setOpenSML(!openSML);
  };

  const router = useRouter();

  const handleRoute = (route: string) => {
    router.push(route);
  };

  const [tabs, setTabs] = useState(0);

  const [sml, setSml] = useState<any>([]);

  const [filterParams, setFilterParams] = useState({});

  const { pagesCount, page, setTotalResults, handlePageChange, reload } =
    usePagination({
      limit: 10,
      page: 1,
      onChange: async (params, setPage) => {
        const { result, meta } = await SMLApi.getSMLs({
          limit: params.limit,
          skip: params.skip,
          ...filterParams,
        });
        setSml(result);
        setTotalResults(meta.countFiltered);
      },
    });

  const renderItem = ({ headItem, row }: TTableRenderItemObject) => {
    if (headItem.reference === 'client') {
      return '';
    }

    if (headItem.reference === 'budget') {
      return `${row.data.platformProductOrder.budget} CHF`;
    }

    if (headItem.reference === 'diseaseArea') {
      return row.data.platformProductOrder.platformProductOrderDiseaseAreas.map(
        (x: any, index: any) =>
          index <
          row.data.platformProductOrder.platformProductOrderDiseaseAreas
            .length -
            1
            ? `${x.diseaseArea.name}, `
            : x.diseaseArea.name
      );
    }

    if (headItem.reference === 'subscription') {
      return `${row.data.subscriptionLength} Months`;
    }

    if (headItem.reference === 'tokens') {
      return `${row.data.monthlyTokens} Tokens`;
    }

    if (headItem.reference === 'endDate') {
      const originalDate = new Date(row.data.createdAt);
      const newDate = new Date(row.data.createdAt);
      const subLength = parseInt(row.data.subscriptionLength, 10);

      newDate.setUTCMonth(newDate.getUTCMonth() + subLength);

      return newDate.toISOString().slice(0, 10);
    }

    return '';
  };

  return (
    <SmlPageMain>
      <SmlPageCharts>
        <CardWithChart
          title="Ordered"
          icon={<OrderedIcon />}
          smallIcon={<SMLSmallIcon />}
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
          title="Ready"
          icon={<ReadyIcon />}
          smallIcon={<SMLSmallIcon />}
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
          title="Delivered"
          icon={<FinishedIcon />}
          smallIcon={<SMLSmallIcon />}
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
          title="Revenue"
          icon={<RevenueIcon />}
          smallIcon={<SMLSmallIcon />}
          percent={2}
          count={75}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
      </SmlPageCharts>
      <CardWithText
        title="Social Media Listening"
        description="More than 290+ new Reports"
        actions={[
          <Button
            color={filterOpen ? 'secondary' : 'default'}
            variant="contained"
            onClick={toggleFilter}
            startIcon={<SlidersHorizontalIcon width="18" height="18" />}
          >
            Filters
          </Button>,
          <Button color="default" variant="contained" onClick={openEsModal}>
            Export
          </Button>,
          <Button color="primary" variant="contained" onClick={openCsModal}>
            Create SML
          </Button>,
        ]}
      >
        <Stack>
          <Collapse in={filterOpen}>
            <SmlPageFilter>
              <Tabs tabs={['SML', 'Client']} value={tabs} onValue={setTabs} />
              {tabs === 0 && (
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
                    label="Disease Area"
                    placeholder="Please Select"
                    value={filter.diseaseArea}
                    onValue={(diseaseArea) =>
                      setFilter({ ...filter, diseaseArea })
                    }
                  />
                  <Input
                    type="select"
                    label="Social Media Platform"
                    placeholder="Please Select"
                    value={filter.socialMediaPlatform}
                    onValue={(socialMediaPlatform) =>
                      setFilter({ ...filter, socialMediaPlatform })
                    }
                  />
                  <Input
                    type="min-max"
                    label="Budget"
                    value={filter.budget}
                    onValue={(budget) => setFilter({ ...filter, budget })}
                  />
                  <InputGroup
                    label="Date Joined"
                    inputRatio="1fr 1fr"
                    elements={[
                      {
                        value: filter.startDateStart,
                        onValue: (startDateStart) =>
                          setFilter({ ...filter, startDateStart }),
                        type: 'date',
                        placeholder: 'From',
                      },
                      {
                        value: filter.startDateEnd,
                        onValue: (startDateEnd) =>
                          setFilter({ ...filter, startDateEnd }),
                        type: 'date',
                        placeholder: 'To',
                      },
                    ]}
                  />
                  <InputGroup
                    label="Date Joined"
                    inputRatio="1fr 1fr"
                    elements={[
                      {
                        value: filter.endDateStart,
                        onValue: (endDateStart) =>
                          setFilter({ ...filter, endDateStart }),
                        type: 'date',
                        placeholder: 'From',
                      },
                      {
                        value: filter.endDateEnd,
                        onValue: (endDateEnd) =>
                          setFilter({ ...filter, endDateEnd }),
                        type: 'date',
                        placeholder: 'To',
                      },
                    ]}
                  />
                  <Input
                    type="min-max"
                    label="Subscription"
                    value={filter.subscription}
                    onValue={(subscription) =>
                      setFilter({ ...filter, subscription })
                    }
                  />
                  <Input
                    type="min-max"
                    label="Tokens"
                    value={filter.tokens}
                    onValue={(tokens) => setFilter({ ...filter, tokens })}
                  />
                  <Input
                    type="select"
                    label="Labels"
                    placeholder="Please Select"
                    value={filter.labels}
                    onValue={(labels) => setFilter({ ...filter, labels })}
                  />
                  <Input
                    type="select"
                    label="Schedule"
                    placeholder="Please Select"
                    value={filter.schedule}
                    onValue={(schedule) => setFilter({ ...filter, schedule })}
                  />
                </Grid>
              )}
              {tabs === 1 && (
                <Grid columns={4}>
                  <Input
                    type="select"
                    label="Industry"
                    placeholder="Please Select"
                    value={filter.industry}
                    onValue={(industry) => setFilter({ ...filter, industry })}
                  />
                  <Input
                    type="select"
                    label="Company"
                    placeholder="Please Select"
                    value={filter.company}
                    onValue={(company) => setFilter({ ...filter, company })}
                  />
                  <Input
                    type="select"
                    label="Client"
                    placeholder="Please Select"
                    value={filter.client}
                    onValue={(client) => setFilter({ ...filter, client })}
                  />
                  <Input
                    type="select"
                    label="Ambassador"
                    placeholder="Please Select"
                    value={filter.ambassador}
                    onValue={(ambassador) =>
                      setFilter({ ...filter, ambassador })
                    }
                  />
                  <Input
                    type="select"
                    label="Product"
                    placeholder="Please Select"
                    value={filter.product}
                    onValue={(product) => setFilter({ ...filter, product })}
                  />
                </Grid>
              )}
              <SmlPageFilterActions direction="horizontal">
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
              </SmlPageFilterActions>
            </SmlPageFilter>
          </Collapse>
          <Tabs
            tabs={['Ordered', 'Ready', 'Delivered']}
            value={tabsValue}
            onValue={setTabsValue}
          />
          <CheckboxTable
            head={[
              {
                reference: 'client',
                label: 'Client',
                visible: true,
              },
              {
                reference: 'diseaseArea',
                label: 'Disease Area',
                visible: true,
              },
              {
                reference: 'subscription',
                label: 'Subscription',
                visible: true,
              },
              {
                reference: 'tokens',
                label: 'Tokens',
                visible: true,
              },
              {
                reference: 'budget',
                label: 'Budget',
                visible: true,
              },
              {
                reference: 'budgetMonthly',
                label: 'Budget (Monthly)',
                visible: false,
              },
              {
                reference: 'socialMedia',
                label: 'Social Media',
                visible: false,
              },
              {
                reference: 'totalTokensUsed',
                label: 'Total Tokens Used',
                visible: false,
              },
              {
                reference: 'tokensUsedThisMonth',
                label: 'Tokens Used This Month',
                visible: false,
              },
              {
                reference: 'startDate',
                label: 'Start Date',
                visible: false,
              },
              {
                reference: 'endDate',
                label: 'End Date',
                visible: true,
              },
              {
                reference: 'actions',
                label: 'Actions',
                visible: true,
              },
            ]}
            items={sml}
            renderItem={renderItem}
          />

          <Pagination
            onChange={(_e, x) => handlePageChange(x)}
            page={page}
            count={pagesCount}
          />

          <Stack direction="horizontal">
            <Button variant="contained" onClick={handleMenuTBS}>
              Ordered actions
            </Button>
            <Button variant="contained" onClick={handleMenuTBC}>
              Ready actions
            </Button>
            <Button variant="contained" onClick={handleMenuSML}>
              Delivered actions
            </Button>
          </Stack>
        </Stack>
        {openTBS && (
          <Menu
            items={[
              {
                icon: <ReadyIcon />,
                label: 'Ready',
                action: () => {},
              },
              {
                icon: <InfoIcon />,
                label: 'Info',
                action: () => {},
              },
              {
                icon: <ManageIcon />,
                label: 'Manage',
                action: () => {},
              },
              {
                icon: <ContactIcon />,
                label: 'Contact',
                action: () => {},
              },
              {
                icon: <EditIcon />,
                label: 'Note',
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
            ref={menuTBS}
          />
        )}
        {openTBC && (
          <Menu
            items={[
              {
                icon: <DeliverIcon />,
                label: 'Deliver',
                action: () => {},
              },
              {
                icon: <InfoIcon />,
                label: 'Info',
                action: () => {},
              },
              {
                icon: <ManageIcon />,
                label: 'Manage',
                action: () => {},
              },
              {
                icon: <ContactIcon />,
                label: 'Contact',
                action: () => {},
              },
              {
                icon: <EditIcon />,
                label: 'Note',
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
            ref={menuTBC}
          />
        )}
        {openSML && (
          <Menu
            items={[
              {
                icon: <InfoIcon />,
                label: 'Info',
                action: () => {},
              },
              {
                icon: <ManageIcon />,
                label: 'Manage',
                action: () => {
                  handleRoute('/services/sml/reports');
                },
              },
              {
                icon: <ContactIcon />,
                label: 'Contact',
                action: () => {},
              },
              {
                icon: <EditIcon />,
                label: 'Note',
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
            ref={menuSML}
          />
        )}
        <Stack direction="horizontal" style={{ marginTop: '50px' }}>
          <Button variant="contained" onClick={openOsModal}>
            Os modal
          </Button>
          <Button variant="contained" onClick={openCstModal}>
            Cst modal
          </Button>
        </Stack>
      </CardWithText>
      {esModal && <ExportSmlModal onClose={closeEsModal} />}
      {csModal && <CreateSmlModal onClose={closeCsModal} />}
      {osModal && <OrderSmlModal onClose={closeOsModal} />}
      {cstModal && <CreateSmlTabsModal onClose={closeCstModal} />}
    </SmlPageMain>
  );
};

export default SmlPage;
