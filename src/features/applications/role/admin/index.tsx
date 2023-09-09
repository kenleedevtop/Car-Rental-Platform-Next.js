import React, { Children, useEffect, useMemo, useState } from 'react';
import { CardWithText, NewCheckboxTable, Tabs } from 'components/custom';
import { Collapse, Grid, Stack } from 'components/system';
import { Button, Input, Label, Pagination } from 'components/ui';

import {
  DApplicationStatues,
  DApplicationsFilters,
  DApplicationsHead,
} from 'features/applications/data';
import {
  MarketPageFilter,
  MarketPageFilterActions,
  ProjectsMain,
} from 'features/opportunities/styles';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { SlidersHorizontalIcon } from 'components/svg';
import { useModal, usePagination, useSnackbar } from 'hooks';
import { ApplicationAPI } from 'api';
import { getLocations } from 'utilities/locations';
import { format } from 'date-fns';
import { IApplication } from 'api/applications/types';
import { useAppContext } from 'context';
import ApplicationStatusActions from './elements/application-status-modal';
import { BookingOverviewModal, TransferOwnershipModal } from './elements';

const AdminApplicationsPage = () => {
  const { applicationStatus } = useAppContext();
  const [filter, setFilter] = useState<any>(DApplicationsFilters());
  const [totalColumnItems, setTotalColumnItems] = useState<any[]>([]);
  const [checkedusers, setCheckedUsers] = useState<number[]>([]);
  const [applicationStatues, setApplicationStatues] = useState<any[]>([]);
  const [locations, setLocations] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [supercars, setSupercars] = useState<any[]>([]);
  const [status, setStatus] = useState<any[]>([]);

  const [filterOpen, setFilterOpen] = useState(false);

  const [
    bookingOverviewModal,
    openBookingOverviewModal,
    closeBookingOverviewModal,
  ] = useModal(false);
  const [
    transferOwnershipModal,
    openTransferOwnershipModal,
    closeTransferOwnershipModal,
  ] = useModal(false);

  const { push } = useSnackbar();

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const toggleUser = (rowId: number, checked: boolean) => {
    if (checked) {
      setCheckedUsers([...checkedusers, rowId]);
    } else {
      setCheckedUsers(checkedusers.filter((id) => id !== rowId));
    }
  };

  const toggleAllCheckedUsers = (checked: boolean) => {
    if (checked) {
      const currentPageIds = currentTableData.map((row) => row.id);
      const newSelectedRows = Array.from(
        new Set([...checkedusers, ...currentPageIds])
      );
      setCheckedUsers(newSelectedRows);
    } else {
      // Deselect all rows on the current page
      const currentPageIds = currentTableData.map((row) => row.id);
      const newSelectedRows = checkedusers.filter(
        (rowId) => !currentPageIds.includes(rowId)
      );
      setCheckedUsers(newSelectedRows);
    }
  };

  const getAllApplications = async (): Promise<any> => {
    try {
      const response = await ApplicationAPI.getApplications({
        ...filter,
      });

      if (response) {
        return response;
      }

      throw new Error('Error: Failed to fetch data!');
    } catch (error) {
      push('Something went wrong!', { variant: 'error' });
    }
  };

  const getLocationOptions = async (searchTerm: string = '') => {
    const result = getLocations(searchTerm);
    setLocations(
      result.map((name: string) => {
        return {
          value: name,
          label: name,
        };
      })
    );
  };

  const getApplicationStatues = async () => {
    setApplicationStatues(
      DApplicationStatues.map((type: any) => ({
        value: type.name,
        label: type.name,
      }))
    );
  };

  useEffect(() => {
    getLocationOptions();
    getApplicationStatues();
  }, []);

  const applyFilters = () => {
    getAllApplications()
      .then((data) => {
        let applications = data;
        const max = filter.applications.max;
        const min = filter.applications.min;

        if (max && min) {
          applications = applications.filter(
            (item: IApplication) =>
              item.owner.applicationCount >= min &&
              item.owner.applicationCount <= max
          );
        } else if (min && !max) {
          applications = applications.filter(
            (item: IApplication) => item.owner.applicationCount >= min
          );
        } else if (!min && max) {
          applications = applications.filter(
            (item: IApplication) => item.owner.applicationCount <= max
          );
        }

        setTotalColumnItems(applications);
      })
      .catch((error) => push('Something went wrong!', { variant: 'error' }));
  };

  useEffect(() => {
    getAllApplications()
      .then((data) => setTotalColumnItems(data))
      .catch((error) => push('Something went wrong!', { variant: 'error' }));
  }, [applicationStatus]);

  const [clearing, setClearing] = useState<boolean>(false);
  const clearFilters = () => {
    setFilter(DApplicationsFilters());
    setClearing(true);
  };
  useEffect(() => {
    if (clearing) {
      getAllApplications()
        .then((data) => setTotalColumnItems(data))
        .catch((error) => push('Something went wrong!', { variant: 'error' }));
      setClearing(false);
    }
  }, [clearing]);

  const PageSize = 10;

  const { pagesCount, page, setTotalResults, handlePageChange, reload } =
    usePagination({
      limit: PageSize,
      page: 1,
      onChange: async (params, setPage) => {
        setPage(params.page);
        setTotalResults(totalColumnItems?.length);
      },
    });

  useEffect(() => {
    setTotalResults(totalColumnItems?.length);
  }, [totalColumnItems]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (page - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return totalColumnItems?.slice(firstPageIndex, lastPageIndex);
  }, [page, totalColumnItems, PageSize]);

  const renderItem = ({ headItem, row }: TTableRenderItemObject) => {
    const application = row.data as IApplication;
    if (headItem.reference === 'name') {
      return `${application.owner.firstName} ${application.owner.lastName}`;
    }
    if (headItem.reference === 'location') {
      return application.owner.location;
    }
    if (headItem.reference === 'supercars') {
      return 0;
    }
    if (headItem.reference === 'date') {
      return format(new Date(application.createdAt), 'MM/dd/yyyy');
    }
    if (headItem.reference === 'sharesApplied') {
      return application.owner.shareCount;
    }

    if (headItem.reference === 'status') {
      return application.status;
    }

    if (headItem.reference === 'actions') {
      return (
        <ApplicationStatusActions
          applicationId={application.id}
          userId={application.ownerId}
          status={application.status}
          reload={applyFilters}
        />
      );
    }

    return '';
  };

  return (
    <ProjectsMain>
      <CardWithText
        title="Applications"
        actions={Children.toArray([
          <Button
            color={filterOpen ? 'secondary' : 'default'}
            variant="contained"
            onClick={toggleFilter}
            startIcon={<SlidersHorizontalIcon width="18" height="18" />}
          >
            Filters
          </Button>,
        ])}
      >
        <Stack>
          <Collapse in={filterOpen}>
            <Stack>
              <MarketPageFilter>
                <Grid columns={4}>
                  <Input
                    type="multiselect"
                    label="User"
                    placeholder="Please Select"
                    value={filter.user}
                    options={users}
                    onValue={(user) => setFilter({ ...filter, user })}
                  />
                  <Input
                    type="multiselect"
                    label="Location"
                    placeholder="Please Select"
                    value={filter.location}
                    options={locations}
                    onValue={(location) => setFilter({ ...filter, location })}
                  />
                  <Input
                    type="multiselect"
                    label="Supercar"
                    options={supercars}
                    placeholder="Please Select"
                    value={filter.supercar}
                    onValue={(supercar) => setFilter({ ...filter, supercar })}
                  />
                  <Input
                    type="min-max"
                    label="Supercars"
                    value={filter.supercars}
                    onValue={(supercars) => setFilter({ ...filter, supercars })}
                  />
                  <Input
                    type="min-max"
                    label="Shares"
                    value={filter.shares}
                    onValue={(shares) => setFilter({ ...filter, shares })}
                  />
                  <Input
                    type="min-max"
                    label="Applications"
                    value={filter.applications}
                    onValue={(applications) =>
                      setFilter({ ...filter, applications })
                    }
                  />
                  <Input
                    type="multiselect"
                    label="Status"
                    placeholder="Please Select"
                    options={status}
                    value={filter.status}
                    onValue={(status) => setFilter({ ...filter, status })}
                  />
                  <Stack>
                    <Label
                      style={{ color: '#7E839F', marginBottom: '-1.1rem' }}
                    >
                      Application Date
                    </Label>
                    <Stack direction="horizontal">
                      <Input
                        type="date"
                        placeholder="From"
                        value={filter.dateFrom}
                        onValue={(dateFrom) =>
                          setFilter({ ...filter, dateFrom })
                        }
                      />
                      <Input
                        type="date"
                        placeholder="To"
                        value={filter.dateTo}
                        onValue={(dateTo) => setFilter({ ...filter, dateTo })}
                      />
                    </Stack>
                  </Stack>
                </Grid>
                <MarketPageFilterActions direction="horizontal">
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={applyFilters}
                  >
                    Filter
                  </Button>
                  <Button
                    color="default"
                    variant="contained"
                    onClick={clearFilters}
                  >
                    Clear filter
                  </Button>
                </MarketPageFilterActions>
              </MarketPageFilter>
            </Stack>
          </Collapse>
          <NewCheckboxTable
            head={DApplicationsHead}
            items={currentTableData}
            renderItem={renderItem}
            checkedRows={checkedusers}
            onSingleSelect={toggleUser}
            onSelectAll={toggleAllCheckedUsers}
          />
          <Pagination
            onChange={(_e, x) => handlePageChange(x)}
            page={page}
            count={pagesCount}
          />
        </Stack>
      </CardWithText>
      <Stack direction="horizontal">
        <Button
          variant="contained"
          color="primary"
          onClick={openBookingOverviewModal}
        >
          Booking Overview Modal
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={openTransferOwnershipModal}
        >
          Transfer Ownership Modal
        </Button>
      </Stack>

      {bookingOverviewModal && (
        <BookingOverviewModal onClose={closeBookingOverviewModal} />
      )}
      {transferOwnershipModal && (
        <TransferOwnershipModal onClose={closeTransferOwnershipModal} />
      )}
    </ProjectsMain>
  );
};

export default AdminApplicationsPage;
