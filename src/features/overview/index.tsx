import React, { useState, useEffect, useMemo } from 'react';

import {
  OverviewMain,
  OverviewText,
  OverviewTextContainer,
  OverviewTextHeadline,
  OverviewTextContent,
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
  PropertyButton,
  InfoContainer,
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
import { useAppContext } from 'context';
import { formatNumber } from 'utilities/extended-proto';
import { ApplicationModal } from 'features/opportunities/role/user/elements';
import { EditProjectModal } from 'features/opportunities/role/admin/elements';

const OverviewPage = (props: any) => {
  const { carId } = props;
  const { houseStatus, user } = useAppContext();
  const [tab, setTab] = useState(0);

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
  const [editModal, openEditModal, closeEditModal] = useModal(false);

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
      </Stack>

      <Gallery
        images={houseData.images}
        thumbnail={houseData.images.find(
          (item) => item.id === houseData.thumbnailId
        )}
      />

      {tab === 0 && (
        <>
          <OverviewGridThree>
            <OverviewGridFirst>
              <InfoContainer>
                <OverviewTextHeadline>Info</OverviewTextHeadline>
                <CardHighLightItemContainer>
                  <CardItem>
                    <CardItemLabel>Mileage</CardItemLabel>
                    <CardItemValue>
                      {formatNumber(parseFloat(houseData.mileage))} km
                    </CardItemValue>
                  </CardItem>
                  <CardItem>
                    <CardItemLabel>Year</CardItemLabel>
                    <CardItemValue>
                      {houseData.year
                        ? format(new Date(houseData?.year), 'yyyy')
                        : ''}
                    </CardItemValue>
                  </CardItem>
                  <CardItem>
                    <CardItemLabel>Engine Type</CardItemLabel>
                    <CardItemValue>{houseData.engineType}</CardItemValue>
                  </CardItem>
                  <CardItem>
                    <CardItemLabel>Engine Power</CardItemLabel>
                    <CardItemValue>{houseData.enginePower} HP</CardItemValue>
                  </CardItem>
                </CardHighLightItemContainer>
              </InfoContainer>
              <PropertyButton>
                {user.role === 'ADMIN' && (
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ width: '100%' }}
                    onClick={openEditModal}
                  >
                    Edit
                  </Button>
                )}
                {user.role === 'USER' && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={openApplicationModal}
                  >
                    Apply
                  </Button>
                )}
              </PropertyButton>
            </OverviewGridFirst>
            <OverviewGridSecond>
              <OverviewTextHeadline>Location</OverviewTextHeadline>
              <figure>
                <iframe
                  title="hu"
                  src={`http://maps.google.com/maps?q=${houseData.googleAddress?.gpslat},${houseData.googleAddress?.gpslong}&z=15&output=embed`}
                  width="100%"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  height="200"
                  style={{ border: '0' }}
                  loading="lazy"
                />
              </figure>
            </OverviewGridSecond>
            <OverviewGridThird>
              <OverviewTextHeadline>Highlights</OverviewTextHeadline>
              <CardHighLightItemContainer>
                <CardList>
                  {houseData.highLights
                    ?.split(',')
                    .map((highlight: string, index: any) => {
                      return (
                        <CardListItem key={index}>{highlight}</CardListItem>
                      );
                    })}
                </CardList>
              </CardHighLightItemContainer>
            </OverviewGridThird>
          </OverviewGridThree>
          <OverviewText>
            <OverviewTextContainer>
              {houseData?.info && (
                <OverviewTextContent
                  className="html"
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
      {editModal && (
        <EditProjectModal
          carId={carId}
          onClose={closeEditModal}
          refresh={getCarDataById}
        />
      )}
    </OverviewMain>
  );
};

export default OverviewPage;
