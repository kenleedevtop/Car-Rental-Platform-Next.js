import React, { useState } from 'react';
import {
  FinancePageMain,
  FinancePageCharts,
  FinancePageFilter,
  FinancePageFilterActions,
} from 'features/finance/styles';
import {
  DFinanceHead,
  DFinanceHead2,
  DFinanceHead3,
  DGenerateFinanceAdminFilter,
} from 'features/finance/data';
import {
  CardWithChart,
  CardWithProgress,
  CardWithText,
  Menu,
  CheckboxTable,
  Tabs,
} from 'components/custom';
import {
  ApproveIcon,
  BusinessmanIcon,
  ContactedIcon,
  ContactIcon,
  CostIcon,
  DeclineIcon,
  DeleteIcon,
  EditIcon,
  FinanceSmallIcon,
  IdentifiedIcon,
  MarginIcon,
  ProfitIcon,
  ReceivedIcon,
  RedCrossIcon,
  RegisteredIcon,
  RevenueIcon,
  ScheduleIcon,
  SlidersHorizontalIcon,
  TotalIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, InputGroup, Pagination } from 'components/ui';
import { Grid, Stack, Collapse } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { useMenu, useModal } from 'hooks';
import {
  CreateFinanceModal,
  ExportFinanceModal,
  ApproveFinanceModal,
  CostInfoModal,
  RevenueInfoModal,
} from 'features/finance/role/admin/elements';

const FinancePage = () => {
  const [cfModal, openCfModal, closeCfModal] = useModal(false);
  const [efModal, openEfModal, closeEfModal] = useModal(false);
  const [afModal, openAfModal, closeAfModal] = useModal(false);
  const [riModal, openRiModal, closeRiModal] = useModal(false);
  const [ciModal, openCiModal, closeCiModal] = useModal(false);

  const [filter, setFilter] = useState<any>(DGenerateFinanceAdminFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabs, setTabs] = useState(0);
  const [tab, setTab] = useState(0);
  const [filterTabs, setFilterTabs] = useState(0);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateFinanceAdminFilter());
  };

  const renderItem = ({ cell }: TTableRenderItemObject) => '';

  const [menuRP, openRP, setOpenRP] = useMenu(false);
  const [menuRPa, openRPa, setOpenRPa] = useMenu(false);
  const [menuCP, openCP, setOpenCP] = useMenu(false);
  const [menuCW, openCW, setOpenCW] = useMenu(false);
  const [menuCPa, openCPa, setOpenCPa] = useMenu(false);

  const handleMenuRP = () => {
    setOpenRP(!openRP);
  };
  const handleMenuRPa = () => {
    setOpenRPa(!openRPa);
  };
  const handleMenuCP = () => {
    setOpenCP(!openCP);
  };
  const handleMenuCW = () => {
    setOpenCW(!openCW);
  };
  const handleMenuCPa = () => {
    setOpenCPa(!openCPa);
  };

  return (
    <FinancePageMain>
      <FinancePageCharts>
        <CardWithChart
          title="Revenue"
          icon={<RevenueIcon />}
          smallIcon={<FinanceSmallIcon />}
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
          title="Cost"
          icon={<CostIcon />}
          smallIcon={<FinanceSmallIcon />}
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
          title="Profit"
          icon={<ProfitIcon />}
          smallIcon={<FinanceSmallIcon />}
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
          title="Margin"
          icon={<MarginIcon />}
          smallIcon={<FinanceSmallIcon />}
          percent={2}
          count={75}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
      </FinancePageCharts>

      {/* <FinancePageCharts>
        <CardWithProgress
          title="Industry"
          icon={<RedCrossIcon />}
          progressData={[
            {
              icon: <BusinessmanIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <BusinessmanIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <BusinessmanIcon />,
              percent: 75,
              title: 'Test',
            },
          ]}
        />
        <CardWithProgress
          title="Location"
          icon={<RedCrossIcon />}
          progressData={[
            {
              icon: <BusinessmanIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <BusinessmanIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <BusinessmanIcon />,
              percent: 75,
              title: 'Test',
            },
          ]}
        />
        <CardWithProgress
          title="Disease Area"
          icon={<RedCrossIcon />}
          progressData={[
            {
              icon: <BusinessmanIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <BusinessmanIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <BusinessmanIcon />,
              percent: 75,
              title: 'Test',
            },
          ]}
        />
        <CardWithProgress
          title="Platform"
          icon={<RedCrossIcon />}
          progressData={[
            {
              icon: <BusinessmanIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <BusinessmanIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <BusinessmanIcon />,
              percent: 75,
              title: 'Test',
            },
          ]}
        />
      </FinancePageCharts> */}
      <CardWithText
        title="Financial Statement"
        description="More than 290+ new Statements"
        actions={[
          <Button
            color={filterOpen ? 'secondary' : 'default'}
            variant="contained"
            onClick={toggleFilter}
            startIcon={<SlidersHorizontalIcon width="18" height="18" />}
          >
            Filters
          </Button>,
          <Button color="default" variant="contained" onClick={openEfModal}>
            Export
          </Button>,
          <Button color="primary" variant="contained" onClick={openCfModal}>
            Add Statement
          </Button>,
        ]}
      >
        <Stack>
          <Collapse removeGap in={filterOpen}>
            <FinancePageFilter>
              <Tabs
                tabs={['Statement', 'Subject']}
                value={filterTabs}
                onValue={setFilterTabs}
              />

              {filterTabs === 0 && (
                <Grid columns={4}>
                  <Input
                    type="text"
                    label="Search"
                    placeholder="Please Enter"
                    value={filter.search}
                    onValue={(search) => setFilter({ ...filter, search })}
                  />
                  <InputGroup
                    label="Date Joined"
                    inputRatio="1fr 1fr"
                    elements={[
                      {
                        value: filter.startDate,
                        onValue: (startDate) =>
                          setFilter({ ...filter, startDate }),
                        type: 'date',
                        placeholder: 'From',
                      },
                      {
                        value: filter.endDate,
                        onValue: (endDate) => setFilter({ ...filter, endDate }),
                        type: 'date',
                        placeholder: 'To',
                      },
                    ]}
                  />
                  <Input
                    type="min-max"
                    label="Budget"
                    value={filter.budget}
                    onValue={(budget) => setFilter({ ...filter, budget })}
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
                    label="Location"
                    placeholder="Please Select"
                    value={filter.location}
                    onValue={(location) => setFilter({ ...filter, location })}
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
                    label="Status"
                    placeholder="Please Select"
                    value={filter.status}
                    onValue={(status) => setFilter({ ...filter, status })}
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

              {filterTabs === 1 && (
                <Grid columns={4}>
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
                    label="Influencer"
                    placeholder="Please Select"
                    value={filter.influencer}
                    onValue={(influencer) =>
                      setFilter({ ...filter, influencer })
                    }
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
                    label="Vendor"
                    placeholder="Please Select"
                    value={filter.vendor}
                    onValue={(vendor) => setFilter({ ...filter, vendor })}
                  />
                  <Input
                    type="select"
                    label="Campaign"
                    placeholder="Please Select"
                    value={filter.campaign}
                    onValue={(campaign) => setFilter({ ...filter, campaign })}
                  />
                  <Input
                    type="select"
                    label="Report"
                    placeholder="Please Select"
                    value={filter.report}
                    onValue={(report) => setFilter({ ...filter, report })}
                  />
                  <Input
                    type="select"
                    label="Social Media Listening"
                    placeholder="Please Select"
                    value={filter.socialMediaListening}
                    onValue={(socialMediaListening) =>
                      setFilter({ ...filter, socialMediaListening })
                    }
                  />
                  <Input
                    type="select"
                    label="Survey"
                    placeholder="Please Select"
                    value={filter.survey}
                    onValue={(survey) => setFilter({ ...filter, survey })}
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
        </Stack>
      </CardWithText>
      <CardWithText
        title="Cost"
        actions={[
          <Button color="default" variant="contained" onClick={openAfModal}>
            Approve
          </Button>,
        ]}
      >
        <Stack>
          <Tabs
            value={tab}
            onValue={setTab}
            tabs={['Payments', 'Withdrawals']}
          />
          {tab === 0 && (
            <>
              <CheckboxTable
                head={DFinanceHead}
                items={[]}
                renderItem={renderItem}
              />
              <Pagination count={32} />
            </>
          )}
          {tab === 1 && (
            <>
              <CheckboxTable
                head={DFinanceHead2}
                items={[]}
                renderItem={renderItem}
              />
              <Pagination count={32} />
            </>
          )}
        </Stack>
      </CardWithText>
      <CardWithText
        title="Revenue"
        actions={[
          <Button color="default" variant="contained">
            Received
          </Button>,
        ]}
      >
        <Stack>
          <Tabs value={tabs} onValue={setTabs} tabs={['Pending', 'Received']} />
          {tabs === 0 && (
            <>
              <CheckboxTable
                head={DFinanceHead3}
                items={[]}
                renderItem={renderItem}
              />
              <Pagination count={32} />
            </>
          )}
          {tabs === 1 && (
            <>
              <CheckboxTable
                head={DFinanceHead3}
                items={[]}
                renderItem={renderItem}
              />
              <Pagination count={32} />
            </>
          )}

          <Stack direction="horizontal">
            <Button color="default" variant="contained" onClick={handleMenuRP}>
              RP action
            </Button>
            <Button color="default" variant="contained" onClick={handleMenuRPa}>
              RPa action
            </Button>
            <Button color="default" variant="contained" onClick={handleMenuCP}>
              CP action
            </Button>
            <Button color="default" variant="contained" onClick={handleMenuCW}>
              CW action
            </Button>
            <Button color="default" variant="contained" onClick={handleMenuCPa}>
              CPa action
            </Button>
            <Button color="default" variant="contained" onClick={openCiModal}>
              Cost Info
            </Button>
            <Button color="default" variant="contained" onClick={openRiModal}>
              Revenue Info
            </Button>
          </Stack>
        </Stack>
        {openRP && (
          <Menu
            items={[
              {
                icon: <ReceivedIcon />,
                label: 'Received',
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
            ref={menuRP}
          />
        )}
        {openRPa && (
          <Menu
            items={[
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
            ref={menuRPa}
          />
        )}
        {openCP && (
          <Menu
            items={[
              {
                icon: <ApproveIcon />,
                label: 'Approve',
                action: () => {},
              },
              {
                icon: <DeclineIcon />,
                label: 'Decline',
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
            ref={menuCP}
          />
        )}
        {openCW && (
          <Menu
            items={[
              {
                icon: <ApproveIcon />,
                label: 'Approve',
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
            ref={menuCW}
          />
        )}
        {openCPa && (
          <Menu
            items={[
              {
                icon: <ApproveIcon />,
                label: 'Approve',
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
            ref={menuCPa}
          />
        )}
      </CardWithText>
      {cfModal && <CreateFinanceModal onClose={closeCfModal} />}
      {efModal && <ExportFinanceModal onClose={closeEfModal} />}
      {afModal && <ApproveFinanceModal onClose={closeAfModal} />}
      {ciModal && <CostInfoModal onClose={closeCiModal} />}
      {riModal && <RevenueInfoModal onClose={closeRiModal} />}
    </FinancePageMain>
  );
};

export default FinancePage;
