import React, { useState, useEffect, useMemo } from 'react';

import {
  OverviewMain,
  OverviewText,
  OverviewTextContainer,
  OverviewTextHeadline,
  OverviewTextContent,
  OverviewBackButton,
  OverviewGridThree,
  OverviewGridFirst,
  CardItemContainer,
  CardItem,
  CardItemLabel,
  CardItemValue,
  OverviewGridSecond,
  OverviewGridThird,
  CardList,
  CardListItem,
  CardHighLightItemContainer,
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
import { useModal, usePagination } from 'hooks';
import { useRouter } from 'next/router';
import { useAppContext } from 'context';
import { formatNumber } from 'utilities/extended-proto';
import { ApplicationModal } from 'features/opportunities/role/user/elements';

const OverviewPage = (props: any) => {
  const { carId } = props;
  const router = useRouter();
  const { houseStatus, user } = useAppContext();
  const [tab, setTab] = useState(0);
  const [bought, setBought] = useState(false);

  const [houseData, setCarData] = useState<ICar>({
    id: -1,
    name: '',
    location: '',
    totalShares: null,
    availableShares: null,
    sharePrice: null,
    address: '',
    mileage: '',
    year: '',
    engineType: '',
    enginePower: '',
    highLights: '',
    startDate: '',
    status: '',
    info: '',
    thumbnailId: null,
    addressId: null,
    googleAddress: null,
    images: [],
    documents: [],
    createdAt: '',
    updatedAt: '',
  });

  const getCarDataById = async () => {
    if (carId) {
      const data = await CarAPI.getOne(carId);
      setCarData((house) => ({ ...house, ...data }));
    }
  };

  const [applicationModal, openApplicationModal, closeApplicationModal] =
  useModal(false);

  useEffect(() => {
    if (carId) {
      getCarDataById();
    }
  }, [carId, houseStatus]);

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
        <>
          <OverviewGridThree>
            <OverviewGridFirst>
              <OverviewTextHeadline>Info</OverviewTextHeadline>
              <CardItemContainer>
                <CardItem>
                  <CardItemLabel>Mileage</CardItemLabel>
                  <CardItemValue>{formatNumber(parseFloat(houseData.mileage))} km</CardItemValue>
                </CardItem>
                <CardItem>
                  <CardItemLabel>Year</CardItemLabel>
                  <CardItemValue>{houseData.year ? format(new Date(houseData?.year), 'yyyy') : ""}</CardItemValue>
                </CardItem>
                <CardItem>
                  <CardItemLabel>Engine Type</CardItemLabel>
                  <CardItemValue>{houseData.engineType}</CardItemValue>
                </CardItem>
                <CardItem>
                  <CardItemLabel>Engine Power</CardItemLabel>
                  <CardItemValue>{houseData.enginePower} HP</CardItemValue>
                </CardItem>
              </CardItemContainer>
              {user.role === "ADMIN" && (
                <Button variant="contained" color="primary">
                  Book
                </Button>
              )}
              {user.role === "USER" &&  (
                <Button variant="contained" color="primary" onClick={openApplicationModal}>
                  Apply
                </Button>
              )}
            </OverviewGridFirst>
            <OverviewGridSecond>
              <OverviewTextHeadline>Location</OverviewTextHeadline>
              <iframe
                title="hu"
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d44541.569961777575!2d${houseData.googleAddress?.gpslong}!3d${houseData.googleAddress?.gpslat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1692477523934!5m2!1sen!2srs`}
                width="100%"
                height="144px"
                style={{ border: '0' }}
                loading="lazy"
              />
            </OverviewGridSecond>
            <OverviewGridThird>
              <OverviewTextHeadline>Highlights</OverviewTextHeadline>
              <CardHighLightItemContainer>
                <CardList>
                  {
                    houseData.highLights?.split(',').map((highlight: string, index: any) => {
                      return (

                        <CardListItem key={index}>{highlight}</CardListItem>
                      )
                    })
                  }
                </CardList>
              </CardHighLightItemContainer>
            </OverviewGridThird>
          </OverviewGridThree>
          <OverviewText>
            <OverviewTextContainer>
              {houseData?.info && (
                <OverviewTextContent
                  dangerouslySetInnerHTML={{ __html: houseData.info }}
                />
              )}
            </OverviewTextContainer>
          </OverviewText>
        </>
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
      {applicationModal && (
        <ApplicationModal
          carId={carId}
          onClose={closeApplicationModal}
          houseName={houseData.name}
        />
      )}
    </OverviewMain>
  );
};

export default OverviewPage;
