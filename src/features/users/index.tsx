import React, { useState, useEffect, Children, useMemo } from 'react';

import {
  UsersPageMain,
  UsersPageFilter,
  UsersPageFilterActions,
} from 'features/users/styles';
import { DUsersHead, DUsersFilters } from 'features/users/data';
import { CardWithText, NewCheckboxTable } from 'components/custom';
import { SlidersHorizontalIcon } from 'components/svg';
import { Button, Input, Pagination } from 'components/ui';
import { Grid, Stack, Collapse } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';
import * as XLSX from 'xlsx';
import Link from 'next/link';
import { useModal, usePagination, useSnackbar } from 'hooks';
import UsersAPI from 'api/users';
import { format } from 'date-fns';
import { IUser } from 'api/users/types';
import { convertAgeToDate, getAge } from 'utilities/birthday-age-converter';
import ExportUsersModal from './elements/export-users-modal';
import { getLocations } from 'utilities/locations';
import { getModels } from 'utilities/models';
import { useAppContext } from 'context';
import { UserActionMenu } from './elements';
import { getBrands } from 'utilities/brands';

const UsersPage = () => {
  const { userStatus } = useAppContext();
  const [filters, setFilter] = useState<any>(DUsersFilters());
  const [eModal, openEModal, closeEModal] = useModal(false);
  const [totalColumnItems, setTotalColumnItems] = useState<any[]>([]);
  const [checkedusers, setCheckedUsers] = useState<number[]>([]);
  const [locations, setLocations] = useState<any[]>([]);
  const [models, setModels] = useState<any[]>([]);
  const [brands, setBrands] = useState<any[]>([]);

  const [filterOpen, setFilterOpen] = useState(false);

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

  const getAllUsers = async (): Promise<any> => {
    try {
      const response = await UsersAPI.getUsers({
        ...filters,
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

  const getModelOptions = async (searchTerm: string = '') => {
    const result = getModels(searchTerm);
    setModels(
      result.map((name: any) => ({
        value: name,
        label: name,
      }))
    );
  };

  const getBrandOptions = async (searchTerm: string = '') => {
    const result = getBrands(searchTerm);
    setBrands(
      result.map((name: any) => ({
        value: name,
        label: name,
      }))
    );
  };

  const applyFilters = () => {
    getAllUsers()
      .then((data) => {
        setTotalColumnItems(data);
      })
      .catch((error) => push('Something went wrong!', { variant: 'error' }));
  };

  useEffect(() => {
    getAllUsers()
      .then((data) => setTotalColumnItems(data))
      .catch((error) => push('Something went wrong!', { variant: 'error' }));
  }, [userStatus]);

  const [clearing, setClearing] = useState<boolean>(false);
  const clearFilters = () => {
    setFilter(DUsersFilters());
    setClearing(true);
  };
  useEffect(() => {
    if (clearing) {
      getAllUsers()
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
        setTotalResults(totalColumnItems.length);
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
    const singleUser = row.data as IUser;

    if (headItem.reference === 'name') {
      return (
        <Link
          style={{ textDecoration: 'none', color: '#4f4f4f' }}
          href={`/users/overview?userId=${singleUser.id}`}
        >
          {singleUser.firstName} {singleUser.lastName}
        </Link>
      );
    }
    if (headItem.reference === 'location') {
      return singleUser.location;
    }
    if (headItem.reference === 'supercars') {
      return singleUser.carCount;
    }
    if (headItem.reference === 'shares') {
      return singleUser.shareCount;
    }
    if (headItem.reference === 'applications') {
      return singleUser.applicationCount;
    }
    if (headItem.reference === 'locationOfInterest') {
      return '';
    }
    if (headItem.reference === 'registerdate') {
      return format(new Date(singleUser.createdAt), 'MM/dd/yyyy');
    }
    if (headItem.reference === 'actions') {
      return <UserActionMenu userId={singleUser.id} reload={applyFilters} />;
    }

    return '';
  };

  useEffect(() => {
    getLocationOptions();
    getModelOptions();
    getBrandOptions();
  }, []);

  const handleExport = (type: string) => {
    let data: any = totalColumnItems;
    if (type !== 'all') {
      let selectedUsers: IUser[] = [];
      totalColumnItems.forEach((user: IUser) => {
        if (checkedusers.includes(user.id)) {
          selectedUsers.push(user);
        }
      });
      data = selectedUsers;
    }
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'Users.xlsx');

    closeEModal();
  };

  return (
    <UsersPageMain>
      <CardWithText
        title="Users"
        actions={Children.toArray([
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
        ])}
      >
        <Stack>
          <Collapse removeGap in={filterOpen}>
            <UsersPageFilter>
              <Grid columns={4}>
                <Input
                  type="text"
                  label="Search"
                  placeholder="Please Enter"
                  value={filters.search}
                  onValue={(search) => setFilter({ ...filters, search })}
                />
                <Input
                  type="multiselect"
                  label="Location"
                  placeholder="Please Select"
                  options={locations}
                  value={filters.location}
                  onValue={(location) => setFilter({ ...filters, location })}
                />

                <Input
                  type="min-max"
                  label="Supercars"
                  placeholder="Please Select"
                  value={filters.supercars}
                  onValue={(supercars) => setFilter({ ...filters, supercars })}
                />

                <Input
                  type="min-max"
                  label="Shares"
                  placeholder="Please Select"
                  value={filters.shares}
                  onValue={(shares) => setFilter({ ...filters, shares })}
                />

                <Input
                  type="min-max"
                  label="Applications"
                  placeholder="Please Select"
                  value={filters.applications}
                  onValue={(applications) =>
                    setFilter({ ...filters, applications })
                  }
                />

                <Input
                  type="multiselect"
                  label="Location of Interest"
                  placeholder="Please Select"
                  options={locations}
                  value={filters.locationOfInterests}
                  onValue={(locationOfInterests) =>
                    setFilter({ ...filters, locationOfInterests })
                  }
                />
                <Input
                  type="multiselect"
                  label="Brand"
                  placeholder="Please Select"
                  options={brands}
                  value={filters.brand}
                  onValue={(brand) => setFilter({ ...filters, brand })}
                />

                <Input
                  type="multiselect"
                  label="Model"
                  placeholder="Please Select"
                  options={models}
                  value={filters.model}
                  onValue={(model) => setFilter({ ...filters, model })}
                />
              </Grid>

              <UsersPageFilterActions direction="horizontal">
                <Button
                  color="primary"
                  variant="contained"
                  onClick={applyFilters}
                >
                  Filter
                </Button>
                <Button
                  color="secondary"
                  variant="outlined"
                  onClick={clearFilters}
                >
                  Clear filter
                </Button>
              </UsersPageFilterActions>
            </UsersPageFilter>
          </Collapse>
          <NewCheckboxTable
            head={DUsersHead}
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
      {eModal && (
        <ExportUsersModal onClose={closeEModal} onExport={handleExport} />
      )}
    </UsersPageMain>
  );
};

export default UsersPage;
