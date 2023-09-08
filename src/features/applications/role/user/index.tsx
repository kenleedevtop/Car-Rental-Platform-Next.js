import React, { useEffect, useMemo, useState } from 'react';
import { ProjectsMain } from 'features/opportunities/styles';
import { format } from 'date-fns';

import { CardWithText, Table } from 'components/custom';
import { Pagination } from 'components/ui';
import {
  DApplicationsHead,
  DApplicationsUserHead,
} from 'features/applications/data';
import { Stack } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { usePagination, useSnackbar } from 'hooks';
import { ApplicationAPI } from 'api';
import { useAppContext } from 'context';
import { IApplication } from 'api/applications/types';

const UserApplicationsPage = () => {
  const { user, applicationStatus } = useAppContext();
  const { push } = useSnackbar();
  const [totalColumnItems, setTotalColumnItems] = useState<any[]>([]);
  const getAllApplications = async (): Promise<any> => {
    try {
      const response = await ApplicationAPI.getApplications({
        ownerId: user.id,
      });

      if (response) {
        return response;
      }

      throw new Error('Error: Failed to fetch data!');
    } catch (error) {
      push('Something went wrong!', { variant: 'error' });
    }
  };

  useEffect(() => {
    getAllApplications()
      .then((data) => setTotalColumnItems(data))
      .catch((error) => push('Something went wrong!', { variant: 'error' }));
  }, [applicationStatus]);

  const [clearing, setClearing] = useState<boolean>(false);

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
    return '';
  };
  return (
    <ProjectsMain>
      <CardWithText title="My Applications">
        <Stack>
          <Table
            head={DApplicationsUserHead}
            items={currentTableData}
            renderItem={renderItem}
          />
          <Pagination
            onChange={(_e, x) => handlePageChange(x)}
            page={page}
            count={pagesCount}
          />
        </Stack>
      </CardWithText>
    </ProjectsMain>
  );
};

export default UserApplicationsPage;
