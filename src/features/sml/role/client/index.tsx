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
  Table,
  Tabs,
  Title,
} from 'components/custom';
import {
  ContactedIcon,
  IdentifiedIcon,
  RegisteredIcon,
  SlidersHorizontalIcon,
  TotalIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, Pagination } from 'components/ui';
import { Grid, Stack } from 'components/system';
import { Collapse } from '@mui/material';
import { DGenerateSmlFilter } from 'features/sml/data';
import { TTableRenderItemObject } from 'components/custom/table/types';
import {
  ExportSmlModal,
  //   CreateSmlModal,
  //   OrderSmlModal,
  //   CreateSmlTabsModal,
  //   CreateSmlFinal,
} from 'features/sml/role/client/elements';
import { useModal } from 'hooks';

const SmlPage = () => {
  const [filter, setFilter] = useState<any>(DGenerateSmlFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabsValue, setTabsValue] = useState(0);

  const [esModal, openEsModal, closeEsModal] = useModal(false);
  //   const [csModal, openCsModal, closeCsModal] = useModal(false);
  //   const [osModal, openOsModal, closeOsModal] = useModal(false);
  //   const [cstModal, openCstModal, closeCstModal] = useModal(false);
  //   const [csfModal, openCsfModal, closeCsfModal] = useModal(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateSmlFilter());
  };

  const renderItem = ({ cell }: TTableRenderItemObject) => '';

  return (
    <SmlPageMain>
      <SmlPageCharts columns={4}>
        <CardWithChart
          title="To Be Created"
          icon={<IdentifiedIcon />}
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
          title="Finished"
          icon={<ContactedIcon />}
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
          icon={<RegisteredIcon />}
          percent={-6}
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
          icon={<TotalIcon />}
          percent={-6}
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
        description="2 New Reports This Month"
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
          <Button color="primary" variant="contained">
            Get Report
          </Button>,
        ]}
      >
        <Stack>
          <Collapse in={filterOpen}>
            <SmlPageFilter>
              <Grid columns={4}>
                <Input
                  type="text"
                  label="Search For Report"
                  placeholder="Report Name"
                  value={filter.report}
                  onValue={(report) => setFilter({ ...filter, report })}
                />
                <Input
                  type="select"
                  label="Stakeholder"
                  placeholder="Please Select"
                  value={filter.stakeholder}
                  onValue={(stakeholder) =>
                    setFilter({ ...filter, stakeholder })
                  }
                />
                <Input
                  type="select"
                  label="Language"
                  placeholder="Select Language"
                  value={filter.language}
                  onValue={(language) => setFilter({ ...filter, language })}
                />
                <Input
                  type="select"
                  label="Disease Area"
                  placeholder="Select Disease Area"
                  value={filter.diseaseArea}
                  onValue={(diseaseArea) =>
                    setFilter({ ...filter, diseaseArea })
                  }
                />
                <Input
                  type="date"
                  label="Start Date"
                  placeholder="Select Start Date"
                  value={filter.startDate}
                  onValue={(startDate) => setFilter({ ...filter, startDate })}
                />
                <Input
                  type="date"
                  label="End Date"
                  placeholder="Select End Date"
                  value={filter.endDate}
                  onValue={(endDate) => setFilter({ ...filter, endDate })}
                />
                <Input
                  type="select"
                  label="Platform"
                  placeholder="Select Platform"
                  value={filter.platform}
                  onValue={(platform) => setFilter({ ...filter, platform })}
                />
              </Grid>
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
            tabs={['Of Interest', 'New', 'Archive', 'Subscriptions']}
            value={tabsValue}
            onValue={setTabsValue}
          />
          <Title title="Of Interest" />
          <Table
            head={[
              {
                reference: 'report',
                label: 'Report',
              },
              {
                reference: 'diseaseArea',
                label: 'Disease Area',
              },
              {
                reference: 'stakeholder',
                label: 'Stakeholder',
              },
              {
                reference: 'platform',
                label: 'Platform',
              },
              {
                reference: 'language',
                label: 'Language',
              },
              {
                reference: 'date',
                label: 'Date',
              },
              {
                reference: 'actions',
                label: 'Actions',
              },
            ]}
            items={[]}
            renderItem={renderItem}
          />

          <Pagination count={32} />
        </Stack>
      </CardWithText>
      {esModal && <ExportSmlModal onClose={closeEsModal} />}
      {/* {csModal && <CreateSmlModal onClose={closeCsModal} />}
      {osModal && <OrderSmlModal onClose={closeOsModal} />}
      {cstModal && <CreateSmlTabsModal onClose={closeCstModal} />}
      {csfModal && <CreateSmlFinal onClose={closeCsfModal} />} */}
    </SmlPageMain>
  );
};

export default SmlPage;
