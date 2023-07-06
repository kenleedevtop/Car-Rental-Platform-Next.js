import React, { useState } from 'react';
import {
  AmbassadorsPageMain,
  AmbassadorsPageCharts,
  AmbassadorsPageFilter,
  AmbassadorsPageFilterActions,
} from 'features/ambassadors/style';
import {
  CardWithChart,
  CardWithText,
  NewCheckboxTable,
} from 'components/custom';
import {
  ContactIcon,
  ContactedIcon,
  DeleteIcon,
  EditIcon,
  IdentifiedIcon,
  RegisteredIcon,
  ScheduleIcon,
  SlidersHorizontalIcon,
  VerticalDotsIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, InputGroup, Pagination } from 'components/ui';
import { Collapse, Grid, Stack } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';
import {
  DAmbassadorsHead,
  DGenerateAmbassadorsFilter,
} from 'features/ambassadors/data';
import { useMenu, useModal, usePagination, useSnackbar } from 'hooks';
import {
  AmbassadorsProfile,
  ClientListAmbassadorModal,
  ContactAmbassadorsModal,
  DeleteAmbassadorsModal,
  InviteAmbassadors,
  NoteAmbassadors,
  ScheduleAmbassadorsModal,
  SingleAmbassadorActions,
} from 'features/ambassadors/role/admin/elements';
import { AmbassadorAPI, InfluencerAPI } from 'api';
import { BackupTableRounded } from '@mui/icons-material';
import PromptModal from 'features/discover-influencers/role/admin/elements/approve-influencer-modal';
import { IPagClient, IResult } from 'api/ambassador/types';
import { formatLongString } from 'utilities/string-converter';
import { Tooltip } from '@mui/material';
import { AmbassadorAction } from 'features/influencers/role/admin/styles';
import {
  ISpan,
  ToBeApprovedActionsMenu as CustomActionsMenu,
  TableTooltip,
} from './style';

const getClientsAsCommaSeparatedString = (clients: IPagClient[]): string =>
  clients
    .map((client) => `${client.user.firstName} ${client.user.lastName}`)
    .join(', ');

const AdminAmbassadorsPage = () => {
  const [filter, setFilter] = useState<any>(DGenerateAmbassadorsFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateAmbassadorsFilter());
  };

  const [daModal, openDaModal, closeDaModal] = useModal(false);
  const [caModal, openCaModal, closeCaModal] = useModal(false);
  const [saModal, openSaModal, closeSaModal] = useModal(false);
  const [apModal, openApModal, closeApModal] = useModal(false);
  const [naModal, openNaModal, closeNaModal] = useModal(false);
  const [iaModal, openIaModal, closeIaModal] = useModal(false);
  const [claModal, openClaModal, closeClaModal] = useModal(false);

  const [ambassadors, setAmbassadors] = useState<any>([]);
  const [currentAmbassador, setCurrentAmbassador] = useState<number>();

  const getCurrentAmbassador = (value: any) => {
    setCurrentAmbassador(value);
  };
  const [checkedAmbassadors, setCheckedAmbassadors] = useState<number[]>([]);

  const [filterParams, setFilterParams] = useState({});

  const { push } = useSnackbar();

  const { pagesCount, page, setTotalResults, handlePageChange, reload } =
    usePagination({
      limit: 10,
      page: 1,
      onChange: async (params, setPage) => {
        const { result, meta } = await AmbassadorAPI.getAmbassadors({
          limit: params.limit,
          skip: params.skip,
          ...filterParams,
        });

        setPage(params.page);

        setAmbassadors(result);
        setTotalResults(meta.countFiltered);
      },
    });

  const toggleAllCheckedAmassadors = (checked: boolean) => {
    if (checked) {
      const currentPageIds = ambassadors.map((row: any) => row.id);
      const newSelectedRows = Array.from(
        new Set([...checkedAmbassadors, ...currentPageIds])
      );
      setCheckedAmbassadors(newSelectedRows);
    } else {
      // Deselect all rows on the current page
      const currentPageIds = ambassadors.map((row: any) => row.id);
      const newSelectedRows = checkedAmbassadors.filter(
        (rowId) => !currentPageIds.includes(rowId)
      );
      setCheckedAmbassadors(newSelectedRows);
    }
  };

  const toggleAmbassador = (rowId: number, checked: boolean) => {
    if (checked) {
      setCheckedAmbassadors([...checkedAmbassadors, rowId]);
    } else {
      setCheckedAmbassadors(checkedAmbassadors.filter((id) => id !== rowId));
    }
  };

  // Table New Checkbox Modal controlls
  const [tableModal, openTableModal, closeTableModal] = useModal(false);

  // Table Menu List Modal
  const [menu, open, setOpen, buttonRegRef, position] = useMenu(false);

  // placeholder items
  const [contactModal, openContactModal, closeContactModal] = useModal(false);
  const [noteModal, openNoteModal, closeNoteModal] = useModal(false);
  const [scheduleModal, openScheduleModal, closeScheduleModal] =
    useModal(false);

  const [
    removeBulkAmbassadorModal,
    openRemoveBulkAmbassadorModal,
    closeRemoveBulkAmbassadorModal,
  ] = useModal(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const ambassadorBulkActions = [
    {
      icon: <ContactIcon />,
      label: 'Contact',
      action: () => {
        openContactModal();
        handleMenu();
      },
    },
    {
      icon: <EditIcon />,
      label: 'Note',
      action: () => {
        openNoteModal();
        handleMenu();
      },
    },
    {
      icon: <ScheduleIcon />,
      label: 'Schedule',
      action: () => {
        openScheduleModal();
        handleMenu();
      },
    },
    {
      icon: <BackupTableRounded />,
      label: 'Columns',
      action: () => {
        openTableModal();
        handleMenu();
      },
    },
    {
      icon: <DeleteIcon />,
      label: 'Remove',
      action: () => {
        openRemoveBulkAmbassadorModal();
        handleMenu();
      },
    },
  ];

  const renderItem = ({
    headItem,
    row,
    cell,
    table,
  }: TTableRenderItemObject) => {
    const rowData = row.data as IResult;
    if (headItem.reference === 'firstName') {
      return (
        <AmbassadorAction
          onClick={() => {
            getCurrentAmbassador(rowData.ambassador.userId);
            openApModal();
          }}
        >
          {rowData.firstName}
        </AmbassadorAction>
      );
    }
    if (headItem.reference === 'lastName') {
      return rowData.lastName;
    }
    if (headItem.reference === 'email') {
      return rowData.email;
    }
    if (headItem.reference === 'company') {
      return rowData.ambassador.company.name;
    }
    if (headItem.reference === 'role') {
      return rowData.ambassador.companyTitle.name;
    }
    if (headItem.reference === 'invited') {
      if (rowData.ambassador.clients) {
        const formattedDiseases = getClientsAsCommaSeparatedString(
          rowData.ambassador.clients
        );

        const formattedElipsisString = formatLongString(formattedDiseases, 50);
        return (
          <Tooltip
            style={{ cursor: 'pointer' }}
            title={<TableTooltip>{formattedDiseases}</TableTooltip>}
          >
            <span>{formattedElipsisString}</span>
          </Tooltip>
        );
      }
    }
    if (headItem.reference === 'invitedCount') {
      return rowData.ambassador.clients
        ? rowData.ambassador.clients.length
        : '0';
    }
    if (headItem.reference === 'actions') {
      return <SingleAmbassadorActions data={rowData.id} reload={reload} />;
    }

    return '';
  };

  const handleBulkAmbassadorRemoval = async () => {
    try {
      await InfluencerAPI.deleteManyInfluencers({
        userIds: checkedAmbassadors,
      });
      reload();
      setCheckedAmbassadors([]);

      push('Ambassadors successfully removed!', { variant: 'success' });
    } catch (e: any) {
      push(e.response.data.message, { variant: 'error' });
    }
  };

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
          <>
            <NewCheckboxTable
              head={DAmbassadorsHead}
              items={ambassadors}
              renderItem={renderItem}
              checkedRows={checkedAmbassadors}
              onSingleSelect={toggleAmbassador}
              onSelectAll={toggleAllCheckedAmassadors}
              tableColModal={tableModal}
              closeTableColModal={closeTableModal}
              renderElements={
                <>
                  <ISpan onClick={handleMenu} ref={buttonRegRef}>
                    <VerticalDotsIcon />
                  </ISpan>
                  {open && (
                    <CustomActionsMenu
                      position={position}
                      items={ambassadorBulkActions}
                      ref={menu}
                    />
                  )}
                </>
              }
            />
            <Pagination
              onChange={(_e, x) => handlePageChange(x)}
              page={page}
              count={pagesCount}
            />
          </>

          <Stack direction="horizontal">
            {/* Client list example modal for future feature */}
            {/* <Button color="primary" variant="contained" onClick={openClaModal}>
              Client List
            </Button> */}
          </Stack>
        </Stack>
      </CardWithText>
      {daModal && <DeleteAmbassadorsModal onClose={closeDaModal} />}
      {caModal && <ContactAmbassadorsModal onClose={closeCaModal} />}
      {saModal && <ScheduleAmbassadorsModal onClose={closeSaModal} />}
      {apModal && (
        <AmbassadorsProfile
          ambassadorId={currentAmbassador!}
          onClose={closeApModal}
        />
      )}
      {naModal && <NoteAmbassadors onClose={closeNaModal} />}
      {iaModal && <InviteAmbassadors onClose={closeIaModal} />}
      {claModal && <ClientListAmbassadorModal onClose={closeClaModal} />}
      {removeBulkAmbassadorModal && (
        <PromptModal
          plural
          target="ambassador"
          onClose={() => {
            closeRemoveBulkAmbassadorModal();
          }}
          handleAction={handleBulkAmbassadorRemoval}
        />
      )}
    </AmbassadorsPageMain>
  );
};

export default AdminAmbassadorsPage;
