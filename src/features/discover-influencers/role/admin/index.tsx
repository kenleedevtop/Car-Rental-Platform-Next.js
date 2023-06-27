import React, { useState, useEffect } from 'react';
import {
  DiscoverInfluencersPageMain,
  DiscoverInfluencersPageCharts,
  DiscoverInfluencersPageFilter,
  DiscoverInfluencersPageFilterActions,
  DiscoverInfluencersAction,
  DiscoverInfluencersFilterContainer,
} from 'features/discover-influencers/styles';
import {
  ToBeApprovedActionsMenu as CustomActionsMenu,
  ISpan,
} from 'features/discover-influencers/role/admin/elements/to-be-approved-actions/styles';
import {
  CardWithChart,
  CardWithText,
  NewCheckboxTable,
  Tabs,
} from 'components/custom';
import {
  ApproveIcon,
  ContactIcon,
  DailyIcon,
  DeleteIcon,
  EditIcon,
  MonthlyIcon,
  ScheduleIcon,
  SlidersHorizontalIcon,
  UserIcon,
  VerticalDotsIcon,
  WeeklyIcon,
  YearlyIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, InputGroup, Pagination } from 'components/ui';
import { Stack } from 'components/system';
import { Collapse } from '@mui/material';
import {
  DGenerateDiscoverInfluencersFilter,
  DInfluencerHeadRegistered,
  DInfluencerHeadToBeApproved,
} from 'features/discover-influencers/data';
import {
  DiscoverActions,
  ExportInfluencersModal,
  InfluencerProfile,
  ToBeApprovedActions,
} from 'features/discover-influencers/role/admin/elements';
import { useMenu, useModal, usePagination, useSnackbar } from 'hooks';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { InfluencerAPI } from 'api';
import { IPaginatedUser } from 'api/influencer/types';
import { ToBeApprovedActionsMenu } from 'features/benefits/role/admin/elements/to-be-approved-actions/styles';
import { BackupTableRounded } from '@mui/icons-material';
import UsersAPI from 'api/users';
import PromptModal from './elements/approve-influencer-modal';

const DiscoverInfluencersPage = () => {
  // Modals
  const [eModal, openEModal, closeEModal] = useModal(false);
  const [ipModal, openIpModal, closeIpModal] = useModal(false);

  const genderOptions = [
    {
      value: 0,
      label: 'Male',
    },
    {
      value: 1,
      label: 'Female',
    },
    {
      value: 2,
      label: 'Other',
    },
  ];

  const [tabs, setTabs] = useState(0);

  const [filter, setFilter] = useState<any>(
    DGenerateDiscoverInfluencersFilter()
  );

  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateDiscoverInfluencersFilter());
  };

  const [currentInfluencer, setCurrentInfluencer] = useState<any>();

  const getCurrentInfluencer = (value: any) => {
    setCurrentInfluencer(value);
  };

  const [filterParams, setFilterParams] = useState({});
  const [registeredInfluencers, setRegisteredInfluencers] = useState<
    IPaginatedUser[]
  >([]);

  const [checkedRegInfluencers, setCheckedRegInfluencers] = useState<number[]>(
    []
  );

  const { pagesCount, page, setTotalResults, handlePageChange, reload } =
    usePagination({
      limit: 10,
      page: 1,
      onChange: async (params, setPage) => {
        const { data, pagination } =
          await InfluencerAPI.getDInfluencersRegistered({
            limit: params.limit,
            skip: params.skip,
            ...filterParams,
          });

        setPage(params.page);

        setRegisteredInfluencers(data);
        setTotalResults(pagination.totalFilteredItems);
      },
    });

  const toggleAllCheckedRegInfluencers = (checked: boolean) => {
    if (checked) {
      const currentPageIds = registeredInfluencers.map((row) => row.id);
      const newSelectedRows = Array.from(
        new Set([...checkedRegInfluencers, ...currentPageIds])
      );
      setCheckedRegInfluencers(newSelectedRows);
    } else {
      // Deselect all rows on the current page
      const currentPageIds = registeredInfluencers.map((row) => row.id);
      const newSelectedRows = checkedRegInfluencers.filter(
        (rowId) => !currentPageIds.includes(rowId)
      );
      setCheckedRegInfluencers(newSelectedRows);
    }
  };

  const toggleRegInfluencer = (rowId: number, checked: boolean) => {
    if (checked) {
      setCheckedRegInfluencers([...checkedRegInfluencers, rowId]);
    } else {
      setCheckedRegInfluencers(
        checkedRegInfluencers.filter((id) => id !== rowId)
      );
    }
  };

  const [toBeApprovedInfluencers, setToBeApprovedInfluencers] = useState<
    IPaginatedUser[]
  >([]);
  const [checkedToBeApprovedInfluencers, setCheckedToBeApprovedInfluencers] =
    useState<number[]>([]);

  const {
    pagesCount: pageCountTba,
    page: pageTba,
    setTotalResults: setTotalResultsTba,
    handlePageChange: handlePageChangeTba,
    reload: reloadTba,
  } = usePagination({
    limit: 10,
    page: 1,
    onChange: async (params, setPage) => {
      const { data, pagination } =
        await InfluencerAPI.getDInfluencersToBeApproved({
          limit: params.limit,
          skip: params.skip,
          ...filterParams,
        });

      setPage(params.page);

      setToBeApprovedInfluencers(data);
      setTotalResultsTba(pagination.totalFilteredItems);
    },
  });

  const toggleAllCheckedTBAInfluencers = (checked: boolean) => {
    if (checked) {
      const currentPageIds = toBeApprovedInfluencers.map((row) => row.id);
      const newSelectedRows = Array.from(
        new Set([...checkedToBeApprovedInfluencers, ...currentPageIds])
      );
      setCheckedToBeApprovedInfluencers(newSelectedRows);
    } else {
      // Deselect all rows on the current page
      const currentPageIds = toBeApprovedInfluencers.map((row) => row.id);
      const newSelectedRows = checkedToBeApprovedInfluencers.filter(
        (rowId) => !currentPageIds.includes(rowId)
      );
      setCheckedToBeApprovedInfluencers(newSelectedRows);
    }
  };

  const toggleTBAInfluencer = (rowId: number, checked: boolean) => {
    if (checked) {
      setCheckedToBeApprovedInfluencers([
        ...checkedToBeApprovedInfluencers,
        rowId,
      ]);
    } else {
      setCheckedToBeApprovedInfluencers(
        checkedToBeApprovedInfluencers.filter((id) => id !== rowId)
      );
    }
  };

  // Table New Checkbox Modal controlls
  const [tRegModal, openTRegModal, closeTRegModal] = useModal(false);
  const [tTBAModal, openTTBAModal, closeTTBAModal] = useModal(false);

  // Table Menu List Modal
  const [menu, open, setOpen, buttonRegRef, position] = useMenu(false);
  const [tbaMenu, openTba, setOpenTba, buttonTBARef, tbaPosition] =
    useMenu(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const handleTBAMenu = () => {
    setOpenTba(!openTba);
  };

  // placeholder items
  const [contactModal, openContactModal, closeContactModal] = useModal(false);
  const [noteModal, openNoteModal, closeNoteModal] = useModal(false);
  const [scheduleModal, openScheduleModal, closeScheduleModal] =
    useModal(false);

  const { push } = useSnackbar();

  // modals for bulk actions
  const [approveModal, openApproveModal, closeApproveModal] = useModal(false);
  const [
    removeBulkRegInfModal,
    openRemoveBulkRegInfModal,
    closeRemoveBulkRegInfModal,
  ] = useModal(false);
  const [removeBulkTBAModal, openRemoveBulkTBAModal, closeRemoveBulkTBAModal] =
    useModal(false);

  const registeredBulkActions = [
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
        openTRegModal();
        handleMenu();
      },
    },
    {
      icon: <DeleteIcon />,
      label: 'Remove',
      action: () => {
        openRemoveBulkRegInfModal();
        handleMenu();
      },
    },
  ];

  const toBeApprovedBulkActions = [
    {
      icon: <ApproveIcon />,
      label: 'Approve',
      action: () => {
        openApproveModal();
        handleTBAMenu();
      },
    },
    {
      icon: <ContactIcon />,
      label: 'Contact',
      action: () => {
        openContactModal();
        handleTBAMenu();
      },
    },
    {
      icon: <EditIcon />,
      label: 'Note',
      action: () => {
        openNoteModal();
        handleTBAMenu();
      },
    },
    {
      icon: <ScheduleIcon />,
      label: 'Schedule',
      action: () => {
        openScheduleModal();
        handleTBAMenu();
      },
    },
    {
      icon: <BackupTableRounded />,
      label: 'Columns',
      action: () => {
        openTTBAModal();
        handleTBAMenu();
      },
    },
    {
      icon: <DeleteIcon />,
      label: 'Remove',
      action: () => {
        openRemoveBulkTBAModal();
        handleTBAMenu();
      },
    },
  ];

  const handleBulkRegInfApproval = async () => {
    try {
      await UsersAPI.updateSelectedUsersStatus(
        checkedToBeApprovedInfluencers,
        5
      );
      reloadTba();
      setCheckedToBeApprovedInfluencers([]);

      push('Influencer successfully approved!', { variant: 'success' });
    } catch (e: any) {
      push(e.response.data.message, { variant: 'error' });
    }
  };

  const handleBulkRegInfRemoval = async () => {
    try {
      await InfluencerAPI.deleteManyInfluencers({
        userIds: checkedRegInfluencers,
      });
      reload();
      setCheckedRegInfluencers([]);

      push('Influencers successfully removed!', { variant: 'success' });
    } catch (e: any) {
      push(e.response.data.message, { variant: 'error' });
    }
  };
  const handleBulkTBARemoval = async () => {
    // InfluencerAPI.deleteManyInfluencers({
    //   userIds: checkedToBeApprovedInfluencers,
    // });
    try {
      await InfluencerAPI.deleteManyInfluencers({
        userIds: checkedToBeApprovedInfluencers,
      });
      reloadTba();
      setCheckedToBeApprovedInfluencers([]);

      push('Influencers successfully removed!', { variant: 'success' });
    } catch (e: any) {
      push(e.response.data.message, { variant: 'error' });
    }
  };

  const renderItem = ({ headItem, row }: TTableRenderItemObject) => {
    if (headItem.reference === 'firstName') {
      return (
        <DiscoverInfluencersAction
          onClick={() => {
            getCurrentInfluencer(row.data.user.id);
            openIpModal();
          }}
        >
          {row.data.user.firstName}
        </DiscoverInfluencersAction>
      );
    }
    if (headItem.reference === 'lastName') {
      return row.data.user.lastName;
    }
    if (headItem.reference === 'email') {
      return row.data.user.email;
    }
    if (headItem.reference === 'status') {
      switch (row.data.user.status) {
        case 0:
          return 'Identified';
        case 1:
          return 'Contacted';
        case 2:
          return 'Unconfirmed';
        case 3:
          return 'Confirmed';
        case 4:
          return 'To Be Approved';
        case 5:
          return 'Approved';
        case 6:
          return 'Do Not Contact';
        case 7:
          return 'Scheduled';
        default:
          return '';
      }
    }
    if (headItem.reference === 'registeredAt') {
      return row.data.user.createdAt.slice(0, 10);
    }

    if (headItem.reference === 'invitedBy') {
      return row.data.invitedByUser
        ? `${row.data.invitedByUser.firstName} ${row.data.invitedByUser.lastName}`
        : '';
    }

    if (headItem.reference === 'actions') {
      switch (row.data.user.status) {
        case 4:
          return (
            <ToBeApprovedActions data={row.data.user.id} reload={reloadTba} />
          );
        default:
          return <DiscoverActions data={row.data.user.id} reload={reload} />;
      }
    }

    return '';
  };

  return (
    <DiscoverInfluencersPageMain>
      <DiscoverInfluencersPageCharts>
        <CardWithChart
          title="Daily"
          icon={<DailyIcon />}
          smallIcon={<UserIcon />}
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
          title="Weekly"
          icon={<WeeklyIcon />}
          smallIcon={<UserIcon />}
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
          title="Monthly"
          icon={<MonthlyIcon />}
          smallIcon={<UserIcon />}
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
          title="Yearly"
          icon={<YearlyIcon />}
          smallIcon={<UserIcon />}
          percent={2}
          count={75}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
      </DiscoverInfluencersPageCharts>
      <CardWithText
        title="Discovered Influencers"
        actions={[
          <Button
            color={filterOpen ? 'secondary' : 'default'}
            variant="contained"
            onClick={toggleFilter}
            startIcon={<SlidersHorizontalIcon width="18" height="18" />}
          >
            Filters
          </Button>,
          <Button color="default" variant="contained" onClick={openEModal}>
            Export
          </Button>,
        ]}
      >
        <Stack>
          <Collapse in={filterOpen}>
            <DiscoverInfluencersPageFilter>
              <DiscoverInfluencersFilterContainer>
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
                  value={filter.diseaseArea.label}
                  onValue={(input) =>
                    setFilter({ ...filter, diseaseArea: input })
                  }
                />
                <Input
                  type="select"
                  label="Location"
                  placeholder="Please Select"
                  value={filter.location.label}
                  onValue={(input) => setFilter({ ...filter, location: input })}
                />
                <Input
                  type="min-max"
                  label="Age"
                  value={filter.age}
                  onValue={(age) => setFilter({ ...filter, age })}
                />
                <Input
                  type="select"
                  label="Gender"
                  placeholder="Please Select"
                  value={filter.gender}
                  onValue={(gender) => setFilter({ ...filter, gender })}
                  options={genderOptions}
                />
                <Input
                  type="select"
                  label="Experience As"
                  placeholder="Please Select"
                  value={filter.experienceAs}
                  onValue={(experienceAs) =>
                    setFilter({ ...filter, experienceAs })
                  }
                  options={[
                    {
                      value: 0,
                      label: 'Patient',
                    },
                    {
                      value: 1,
                      label: 'Caregiver',
                    },
                  ]}
                />
                <Input
                  type="select"
                  label="Social Media"
                  placeholder="Please Select"
                  value={filter.socialMedia}
                  onValue={(socialMedia) =>
                    setFilter({ ...filter, socialMedia })
                  }
                  options={[
                    {
                      value: 0,
                      label: 'Instagram',
                    },
                    {
                      value: 1,
                      label: 'Twitter',
                    },
                  ]}
                />
                <Input
                  type="select"
                  label="Status"
                  placeholder="Please Select"
                  value={filter.status}
                  onValue={(inputStatus) =>
                    setFilter({ ...filter, status: inputStatus })
                  }
                  options={[
                    {
                      value: 0,
                      label: 'Not confirmed',
                    },
                    {
                      value: 1,
                      label: 'Confirmed',
                    },
                    {
                      value: 2,
                      label: 'Verified',
                    },
                    {
                      value: 3,
                      label: 'Approved',
                    },
                  ]}
                />
                <InputGroup
                  label="Joined"
                  inputRatio="1fr 1fr"
                  elements={[
                    {
                      type: 'date',
                      placeholder: 'From',
                      value: filter.joinedFrom,
                      onValue: (joinedFrom) =>
                        setFilter({ ...filter, joinedFrom }),
                    },
                    {
                      type: 'date',
                      placeholder: 'To',
                      value: filter.joinedTo,
                      onValue: (joinedTo) => setFilter({ ...filter, joinedTo }),
                    },
                  ]}
                />
                <Input
                  type="multiselect"
                  label="Add Label"
                  placeholder="Please Select"
                  value={filter.label}
                  onValue={(label) => setFilter({ ...filter, label })}
                  options={[
                    {
                      value: 0,
                      label: 'Great',
                    },
                    {
                      value: 1,
                      label: 'Dumb',
                    },
                    {
                      value: 2,
                      label: 'Without',
                    },
                  ]}
                />
                <Input
                  type="select"
                  label="Schedule"
                  placeholder="Please Select"
                  value={filter.schedule.label}
                  onValue={(input) => setFilter({ ...filter, schedule: input })}
                  options={[
                    {
                      value: 0,
                      label: 'Reminder',
                    },
                    {
                      value: 1,
                      label: 'Task',
                    },
                    {
                      value: 2,
                      label: 'Meeting',
                    },
                    {
                      value: 3,
                      label: 'Without',
                    },
                  ]}
                />
                <Input
                  type="select"
                  label="Ethnicity"
                  placeholder="Please Select"
                  value={filter.ethnicity.label}
                  onValue={(input) =>
                    setFilter({ ...filter, ethnicity: input })
                  }
                  options={[]}
                />
              </DiscoverInfluencersFilterContainer>
              <DiscoverInfluencersPageFilterActions direction="horizontal">
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
              </DiscoverInfluencersPageFilterActions>
            </DiscoverInfluencersPageFilter>
          </Collapse>
          <Tabs
            value={tabs}
            onValue={setTabs}
            tabs={['Registered', 'To Be Approved']}
          />
          {tabs === 0 && (
            <>
              <NewCheckboxTable
                head={DInfluencerHeadRegistered}
                items={registeredInfluencers}
                renderItem={renderItem}
                checkedRows={checkedRegInfluencers}
                onSingleSelect={toggleRegInfluencer}
                onSelectAll={toggleAllCheckedRegInfluencers}
                tableColModal={tRegModal}
                closeTableColModal={closeTRegModal}
                renderElements={
                  <>
                    <ISpan onClick={handleMenu} ref={buttonRegRef}>
                      <VerticalDotsIcon />
                    </ISpan>
                    {open && (
                      <CustomActionsMenu
                        position={position}
                        items={registeredBulkActions}
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
          )}
          {tabs === 1 && (
            <>
              <NewCheckboxTable
                head={DInfluencerHeadToBeApproved}
                items={toBeApprovedInfluencers}
                checkedRows={checkedToBeApprovedInfluencers}
                onSingleSelect={toggleTBAInfluencer}
                onSelectAll={toggleAllCheckedTBAInfluencers}
                renderItem={renderItem}
                tableColModal={tTBAModal}
                closeTableColModal={closeTTBAModal}
                renderElements={
                  <>
                    <ISpan onClick={handleTBAMenu} ref={buttonTBARef}>
                      <VerticalDotsIcon />
                    </ISpan>
                    {openTba && (
                      <CustomActionsMenu
                        position={tbaPosition}
                        items={toBeApprovedBulkActions}
                        ref={tbaMenu}
                      />
                    )}
                  </>
                }
              />
              <Pagination
                onChange={(_e, x) => handlePageChangeTba(x)}
                page={pageTba}
                count={pageCountTba}
              />
            </>
          )}
        </Stack>
      </CardWithText>
      {approveModal && (
        <PromptModal
          type="approve"
          onClose={() => {
            closeApproveModal();
          }}
          handleAction={handleBulkRegInfApproval}
        />
      )}
      {removeBulkRegInfModal && (
        <PromptModal
          plural
          onClose={() => {
            closeRemoveBulkRegInfModal();
          }}
          handleAction={handleBulkRegInfRemoval}
        />
      )}
      {removeBulkTBAModal && (
        <PromptModal
          plural
          onClose={() => {
            closeRemoveBulkTBAModal();
          }}
          handleAction={handleBulkTBARemoval}
        />
      )}
      {eModal && <ExportInfluencersModal onClose={closeEModal} />}
      {ipModal && (
        <InfluencerProfile
          influencerId={currentInfluencer}
          onClose={closeIpModal}
        />
      )}
    </DiscoverInfluencersPageMain>
  );
};

export default DiscoverInfluencersPage;
