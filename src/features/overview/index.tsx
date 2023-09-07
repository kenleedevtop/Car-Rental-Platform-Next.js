import React, { useState, useEffect, useMemo } from 'react';

import {
  OverviewMain,
  OverviewText,
  OverviewTextContainer,
  OverviewTextHeadline,
  OverviewTextContent,
  OverviewBackButton,
} from 'features/overview/styles';
import { Gallery, Table, Tabs } from 'components/custom';
import { Button, Card, Pagination } from 'components/ui';
import { DOverviewHead } from 'features/overview/data';
import { Stack } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { ICar } from 'api/cars/types';
import { CarAPI } from 'api';
import { TDocument } from 'api/documents/types';
import { format } from 'date-fns';
import { saveAs } from 'file-saver';
import Project from 'constants/project';
import { usePagination } from 'hooks';
import { useRouter } from 'next/router';
import { useAppContext } from 'context';

const OverviewPage = (props: any) => {
  const { houseId } = props;
  const router = useRouter();
  const { houseStatus } = useAppContext();
  const [tab, setTab] = useState(0);

  const [houseData, setCarData] = useState<ICar>({
    id: -1,
    name: '',
    location: '',
    totalSpots: null,
    availableSpots: null,
    rent: null,
    theme: '',
    info: '',
    status: '',
    marketType: '',
    thumbnailId: null,
    assignee: null,
    images: [],
    documents: [],
    createdAt: '',
    updatedAt: '',
  });

  const getCarDataById = async () => {
    if (houseId) {
      const data = await CarAPI.getOne(houseId);
      setCarData((house) => ({ ...house, ...data }));
    }
  };

  useEffect(() => {
    if (houseId) {
      getCarDataById();
    }
  }, [houseId, houseStatus]);

  const download = async (doc: TDocument) => {
    saveAs(`${Project.apis.v1}/public/documents/${doc?.key}`, doc.name);
  };
  const renderItem = ({ headItem, row }: TTableRenderItemObject) => {
    const document = row.data as TDocument;
    if (headItem.reference === 'name') {
      return document.name;
    }
    if (headItem.reference === 'published') {
      return document.createdAt
        ? format(new Date(document.createdAt), 'MMM dd, yyyy | h:mm a')
        : '';
    }
    if (headItem.reference === 'action') {
      return (
        <Button
          variant="contained"
          color="default"
          onClick={() => download(document)}
        >
          Download
        </Button>
      );
    }

    return '';
  };
  const PageSize = 5;
  const { pagesCount, page, setTotalResults, handlePageChange, reload } =
    usePagination({
      limit: PageSize,
      page: 1,
      onChange: async (params, setPage) => {
        setPage(params.page);
        setTotalResults(houseData.documents.length);
      },
    });

  const currentTableData = useMemo(() => {
    const firstPageIndex = (page - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return houseData.documents?.slice(firstPageIndex, lastPageIndex);
  }, [page, houseData.documents, PageSize]);

  useEffect(() => {
    setTotalResults(houseData.documents?.length);
  }, [houseData.documents]);
  return (
    <OverviewMain>
      <Stack
        style={{ width: '100%', justifyContent: 'space-between' }}
        direction="horizontal"
      >
        <Tabs
          value={tab}
          onValue={setTab}
          tabs={['Property Overview', 'Documents']}
        />
        <Button
          color="secondary"
          style={{
            background: '#f1f4ff',
            color: '#7e839f',
            fontSize: '12px',
            fontWeight: 600,
            display: 'grid',
            placeItems: 'center',
            textDecoration: 'none',
            padding: '7px 9px',
          }}
          variant="contained"
          size="small"
          onClick={() => router.back()}
        >
          Back
        </Button>
      </Stack>

      <Gallery
        images={houseData.images.filter(
          (item) => item.id !== houseData.thumbnailId
        )}
        thumbnail={houseData.images.find(
          (item) => item.id === houseData.thumbnailId
        )}
      />

      {tab === 0 && (
        <OverviewText>
          <OverviewTextContainer>
            {houseData?.info && (
              <OverviewTextContent
                dangerouslySetInnerHTML={{ __html: houseData.info }}
              />
            )}
          </OverviewTextContainer>
        </OverviewText>
      )}
      {tab === 1 && (
        <Card>
          <Stack>
            <OverviewTextHeadline>Documents</OverviewTextHeadline>
            <Table
              head={DOverviewHead}
              items={currentTableData}
              renderItem={renderItem}
            />
            <Pagination
              onChange={(_e, x) => handlePageChange(x)}
              page={page}
              count={pagesCount}
            />
          </Stack>
        </Card>
      )}
    </OverviewMain>
  );
};

export default OverviewPage;
