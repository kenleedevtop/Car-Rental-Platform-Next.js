import React, { useEffect, useState } from 'react';
import {
  AmbassadorsPageMain,
  AmbassadorsPageCharts,
  AmbassadorsPageFilter,
  AmbassadorsPageFilterActions,
} from 'features/ambassadors/style';
import {
  CardWithChart,
  CardWithText,
  CheckboxTable,
  Tabs,
} from 'components/custom';
import {
  ContactedIcon,
  IdentifiedIcon,
  RegisteredIcon,
  SlidersHorizontalIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, InputGroup, Pagination } from 'components/ui';
import { Collapse, Grid, Stack } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';
import {
  DAmbassadorsHead,
  DGenerateAmbassadorsFilter,
} from 'features/ambassadors/data';
import { useModal } from 'hooks';
import {
  AmbassadorsProfile,
  ClientListAmbassadorModal,
  ContactAmbassadorsModal,
  DeleteAmbassadorsModal,
  InviteAmbassadors,
  NoteAmbassadors,
  ScheduleAmbassadorsModal,
} from 'features/ambassadors/role/admin/elements';
import { AmbassadorAPI } from 'api';

const AdminAmbassadorsPage = () => {
  const [filter, setFilter] = useState<any>(DGenerateAmbassadorsFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateAmbassadorsFilter());
  };

  const renderItem = ({ row, cell }: TTableRenderItemObject) => '';

  const [daModal, openDaModal, closeDaModal] = useModal(false);
  const [caModal, openCaModal, closeCaModal] = useModal(false);
  const [saModal, openSaModal, closeSaModal] = useModal(false);
  const [apModal, openApModal, closeApModal] = useModal(false);
  const [naModal, openNaModal, closeNaModal] = useModal(false);
  const [iaModal, openIaModal, closeIaModal] = useModal(false);
  const [claModal, openClaModal, closeClaModal] = useModal(false);

  const [ambassadors, setAmbassadors] = useState<any>([]);

  const getAmbassadors = async () => {
    const { result } = await AmbassadorAPI.getAmbassadors();

    console.log(result);
  };

  useEffect(() => {
    getAmbassadors();
  }, []);

  return (
    <AmbassadorsPageMain>
      <AmbassadorsPageCharts>
        <CardWithChart
          title="Registered"
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
          title="Approved"
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
          title="Clients"
          icon={<RegisteredIcon />}
          percent={2}
          count={75}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
      </AmbassadorsPageCharts>
      <CardWithText
        title="Ambassadors"
        description="3 new Ambassadors"
        actions={[
          <Button
            color={filterOpen ? 'secondary' : 'default'}
            variant="contained"
            onClick={toggleFilter}
            startIcon={<SlidersHorizontalIcon width="18" height="18" />}
          >
            Filters
          </Button>,
          <Button
            size="large"
            color="primary"
            variant="contained"
            onClick={openIaModal}
          >
            Invite
          </Button>,
        ]}
      >
        <Stack>
          <Collapse in={filterOpen}>
            <AmbassadorsPageFilter>
              <Grid columns={4}>
                <Input
                  type="text"
                  label="Search"
                  placeholder="Please Enter"
                  value={filter.search}
                  onValue={(search) => setFilter({ ...filter, search })}
                />
                <Input
                  type="multiselect"
                  label="Industry"
                  placeholder="Please Select"
                  value={filter.industry}
                  onValue={(industry) => setFilter({ ...filter, industry })}
                />
                <Input
                  type="multiselect"
                  label="Company"
                  placeholder="Please Select"
                  value={filter.company}
                  onValue={(company) => setFilter({ ...filter, company })}
                />
                <Input
                  type="multiselect"
                  label="Role"
                  placeholder="Please Select"
                  value={filter.role}
                  onValue={(role) => setFilter({ ...filter, role })}
                />
                <Input
                  type="multiselect"
                  label="Product"
                  placeholder="Please Select"
                  value={filter.product}
                  onValue={(product) => setFilter({ ...filter, product })}
                />
                <Input
                  type="multiselect"
                  label="Disease Area"
                  placeholder="Please Select"
                  value={filter.diseaseArea}
                  onValue={(diseaseArea) =>
                    setFilter({ ...filter, diseaseArea })
                  }
                />
                <Input
                  type="multiselect"
                  label="Location"
                  placeholder="Please Select"
                  value={filter.location}
                  onValue={(location) => setFilter({ ...filter, location })}
                />
                <Input
                  type="multiselect"
                  label="Market"
                  placeholder="Please Select"
                  value={filter.market}
                  onValue={(market) => setFilter({ ...filter, market })}
                />
                <Input
                  type="select"
                  label="Project Status"
                  placeholder="Please Select"
                  value={filter.projectStatus}
                  onValue={(projectStatus) =>
                    setFilter({ ...filter, projectStatus })
                  }
                />
                <InputGroup
                  label="Date Joined"
                  inputRatio="1fr 1fr"
                  elements={[
                    {
                      value: filter.joinedStart,
                      onValue: (joinedStart) =>
                        setFilter({ ...filter, joinedStart }),
                      type: 'date',
                      placeholder: 'From',
                    },
                    {
                      value: filter.joinedEnd,
                      onValue: (joinedEnd) =>
                        setFilter({ ...filter, joinedEnd }),
                      type: 'date',
                      placeholder: 'To',
                    },
                  ]}
                />
                <Input
                  type="multiselect"
                  label="Label"
                  placeholder="Please Select"
                  value={filter.label}
                  onValue={(label) => setFilter({ ...filter, label })}
                />
                <Input
                  type="multiselect"
                  label="Schedule"
                  placeholder="Please Select"
                  value={filter.schedule}
                  onValue={(schedule) => setFilter({ ...filter, schedule })}
                />
                <Input
                  type="multiselect"
                  label="Project"
                  placeholder="Please Select"
                  value={filter.project}
                  onValue={(project) => setFilter({ ...filter, project })}
                />
                <Input
                  type="min-max"
                  label="Commission"
                  value={filter.commission}
                  onValue={(commission) => setFilter({ ...filter, commission })}
                />
                <Input
                  type="min-max"
                  label="Total Project"
                  value={filter.totalProjects}
                  onValue={(totalProjects) =>
                    setFilter({ ...filter, totalProjects })
                  }
                />
                <Input
                  type="min-max"
                  label="Project Last 30 Days"
                  value={filter.projectLast30Days}
                  onValue={(projectLast30Days) =>
                    setFilter({ ...filter, projectLast30Days })
                  }
                />
                <Input
                  type="min-max"
                  label="Total Clients"
                  placeholder="Please Select"
                  value={filter.totalClients}
                  onValue={(totalClients) =>
                    setFilter({ ...filter, totalClients })
                  }
                />
              </Grid>
              <AmbassadorsPageFilterActions direction="horizontal">
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
              </AmbassadorsPageFilterActions>
            </AmbassadorsPageFilter>
          </Collapse>
          <CheckboxTable
            style={{ marginTop: '60px' }}
            head={DAmbassadorsHead}
            items={[]}
            renderItem={renderItem}
          />
          <Pagination count={32} />
          <Stack direction="horizontal">
            <Button color="primary" variant="contained" onClick={openDaModal}>
              Delete Ambasador
            </Button>
            <Button color="primary" variant="contained" onClick={openCaModal}>
              Contact Ambasador
            </Button>
            <Button color="primary" variant="contained" onClick={openSaModal}>
              Schedule Ambasador
            </Button>
            <Button color="primary" variant="contained" onClick={openApModal}>
              Ambasador Profile
            </Button>
            <Button color="primary" variant="contained" onClick={openNaModal}>
              Note Ambasador
            </Button>
            <Button color="primary" variant="contained" onClick={openClaModal}>
              Client List
            </Button>
          </Stack>
        </Stack>
      </CardWithText>
      {daModal && <DeleteAmbassadorsModal onClose={closeDaModal} />}
      {caModal && <ContactAmbassadorsModal onClose={closeCaModal} />}
      {saModal && <ScheduleAmbassadorsModal onClose={closeSaModal} />}
      {apModal && <AmbassadorsProfile onClose={closeApModal} />}
      {naModal && <NoteAmbassadors onClose={closeNaModal} />}
      {iaModal && <InviteAmbassadors onClose={closeIaModal} />}
      {claModal && <ClientListAmbassadorModal onClose={closeClaModal} />}
    </AmbassadorsPageMain>
  );
};

export default AdminAmbassadorsPage;
