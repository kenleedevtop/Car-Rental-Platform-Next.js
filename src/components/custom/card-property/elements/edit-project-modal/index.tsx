import React, { Children, useEffect, useState } from 'react';
import { Modal, RichTextEditor, Tabs } from 'components/custom';
import {
  AddProjectModalMain,
  AddProjectHeadline,
  AddProjectDocumentPlaceholder,
  ISpan,
  ImageUploadButton,
} from 'features/opportunities/role/admin/elements/add-project-modal/style';
import { Button, Checkbox, Input, Label } from 'components/ui';
import { GridCell, Stack } from 'components/system';
import { DeleteIcon, UploadIcon } from 'components/svg';
import { pick } from '@costorgroup/file-manager';
import { useDebounce, useModal, useSnackbar } from 'hooks';
import ImageApi from 'api/images';
import DocumentApi from 'api/documents';
import { ICar } from 'api/cars/types';
import { getLocations } from 'utilities/locations';
import { getCarTheme } from 'utilities/houseTheme';
import { CarAPI } from 'api';
import { TEditCarsModalProps } from 'features/opportunities/role/admin/elements/add-project-modal/types';
import UploadedFileModal from 'features/opportunities/role/admin/elements/uploaded-file-modal';
import { TDocument } from 'api/documents/types';
import Project from 'constants/project';
import { TImage } from 'api/images/types';

const EditCarProjectModal = ({
  onClose,
  refresh,
  houseId,
  ...props
}: TEditCarsModalProps) => {
  const [tab, setTab] = useState(0);
  const { push } = useSnackbar();
  const [photos, setPhotos] = useState<TImage[]>([]);
  const [documents, setDocuments] = useState<TDocument[]>([]);
  const [modal, modalOpen, modalClose] = useModal(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);
  const [locations, setLocations] = useState<any[]>([]);
  const [themes, setThemes] = useState<any[]>([]);
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
    const data = await CarAPI.getOne(houseId);
    setCarData((house) => ({ ...house, ...data }));
    setDocuments([...data.documents]);
    setPhotos([...data.images]);
  };

  useEffect(() => {
    getCarDataById();
  }, [houseId]);

  const isDisabled =
    !houseData.name ||
    !houseData.location ||
    !houseData.totalSpots ||
    !houseData.availableSpots ||
    !houseData.theme ||
    !houseData.rent ||
    !houseData.thumbnailId ||
    photos.length === 0;

  const handlePhotos = async () => {
    const file: any = await pick({
      accept: 'image/jpg, image/jpeg, image/png',
    });

    try {
      await ImageApi.fileUpload(file).then(async (data) => {
        setPhotos((prev: TImage[]) => [...prev, { ...data }]);
        push('File successfully uploaded.', { variant: 'success' });
      });
    } catch (error: any) {
      push('File upload failed.', { variant: 'error' });
    }
  };

  const handleDocuments = async () => {
    const file: any = await pick({
      accept: 'application/pdf',
    });

    try {
      await DocumentApi.fileUpload(file).then(async (data) => {
        if (data && file && file.name && file.type && data && data.id) {
          setDocuments((prev: TDocument[]) => [
            ...prev,
            {
              ...data,
            },
          ]);
          push('File successfully uploaded.', { variant: 'success' });
        }
      });
    } catch (error: any) {
      push('File upload failed.', { variant: 'error' });
    }
  };

  const handleDeletePhoto = (id: number) => {
    try {
      ImageApi.fileDelete(id).then(() => {
        setPhotos((prev: TImage[]) =>
          prev.filter((item: TImage) => item.id !== id)
        );
        push('File successfully deleted.', { variant: 'success' });
      });
    } catch (error: any) {
      push('File delete failed.', { variant: 'error' });
    }
  };

  const handleDeleteDocument = (id: number) => {
    try {
      DocumentApi.fileDelete(id).then(() => {
        setDocuments((prev: TDocument[]) =>
          prev.filter((item: TDocument) => item.id !== id)
        );
        push('File successfully deleted.', { variant: 'success' });
      });
    } catch (error: any) {
      push('File delete failed.', { variant: 'error' });
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

  const getThemeOptions = async (searchTerm: string = '') => {
    const result = getCarTheme(searchTerm);
    setThemes(
      result.map((name: any) => ({
        value: name,
        label: name,
      }))
    );
  };

  const debouncedLocation = useDebounce(getLocationOptions, 100);
  const debouncedTheme = useDebounce(getThemeOptions, 100);

  useEffect(() => {
    getLocationOptions();
    getThemeOptions();
  }, []);

  const handleUpdateProject = async () => {
    try {
      await CarAPI.updateCar(houseData, houseData.id).then((res) => {
        const body = { houseId: houseData.id };
        photos.forEach(async (img: TImage) => {
          await ImageApi.updateFile(body, img.id);
        });
        documents.forEach(async (dic: TDocument) => {
          await DocumentApi.updateFile(body, dic.id);
        });
      });
      onClose();
      refresh();
      push('Successfully updated house project.', { variant: 'success' });
    } catch {
      push('Something went wrong when create house project.', {
        variant: 'error',
      });
    }
  };

  return (
    <Modal
      size="medium"
      title="Edit Project"
      actions={Children.toArray([
        <Button
          color="primary"
          variant="contained"
          size="large"
          disabled={isDisabled}
          onClick={handleUpdateProject}
        >
          Save
        </Button>,
      ])}
      onClose={onClose}
      {...props}
    >
      <Stack>
        <Tabs tabs={['Overview', 'Documents']} value={tab} onValue={setTab} />
        {tab === 0 && (
          <AddProjectModalMain columns={2}>
            <Input
              type="text"
              label="Name"
              required
              placeholder="Please Enter"
              value={houseData?.name}
              onValue={(name) => setCarData({ ...houseData, name })}
              validators={[
                {
                  message: 'Name is required',
                  validator: (name) => {
                    const v = name as string;
                    if (v) return true;
                    return false;
                  },
                },
              ]}
            />
            <Input
              type="select"
              label="Location"
              placeholder="Please Select"
              onSearch={debouncedLocation}
              required
              options={locations}
              value={
                houseData.location
                  ? {
                      label: houseData.location,
                      value: houseData.location,
                    }
                  : null
              }
              onValue={(location) =>
                setCarData({
                  ...houseData,
                  location: location ? location.value : location,
                })
              }
              validators={[
                {
                  message: 'Location is required',
                  validator: (value) => {
                    const v = value as string;
                    if (v) return true;
                    return false;
                  },
                },
              ]}
            />
            <Input
              type="number"
              label="Total Spots"
              required
              placeholder="Please Enter"
              value={houseData?.totalSpots}
              onValue={(totalSpots) => setCarData({ ...houseData, totalSpots })}
              validators={[
                {
                  message: 'Total Spots is required',
                  validator: (value) => {
                    const v = value as string;
                    if (v) return true;
                    return false;
                  },
                },
              ]}
            />
            <Input
              type="number"
              required
              label="Available Spots"
              placeholder="Please Enter"
              value={houseData?.availableSpots}
              onValue={(availableSpots) =>
                setCarData({ ...houseData, availableSpots })
              }
              validators={[
                {
                  message: 'Available Spots is required',
                  validator: (value) => {
                    const v = value as string;
                    if (v) return true;
                    return false;
                  },
                },
              ]}
            />
            <Input
              type="number"
              label="Rent"
              required
              placeholder="Please Enter"
              value={houseData?.rent}
              onValue={(rent) => setCarData({ ...houseData, rent })}
              validators={[
                {
                  message: 'Rent is required',
                  validator: (value) => {
                    const v = value as string;
                    if (v) return true;
                    return false;
                  },
                },
              ]}
            />
            <Input
              type="select"
              required
              label="Theme"
              placeholder="Please Select"
              options={themes}
              value={
                houseData.theme
                  ? {
                      label: houseData.theme,
                      value: houseData.theme,
                    }
                  : null
              }
              onValue={(theme) =>
                setCarData({
                  ...houseData,
                  theme: theme ? theme.value : theme,
                })
              }
              validators={[
                {
                  message: 'Theme required',
                  validator: (value) => {
                    const v = value as string;
                    if (v) return true;
                    return false;
                  },
                },
              ]}
            />
            <Input
              type="select"
              label="Status"
              placeholder="Please Select"
              options={[
                {
                  value: 'Initiated',
                  label: 'Initiated',
                },
                {
                  value: 'Live',
                  label: 'Live',
                },
                {
                  value: 'Completed',
                  label: 'Completed',
                },
              ]}
              value={
                houseData.status
                  ? {
                      label: houseData.status,
                      value: houseData.status,
                    }
                  : null
              }
              onValue={(status) =>
                setCarData({
                  ...houseData,
                  status: status ? status.value : status,
                })
              }
            />
            <Input
              type="select"
              label="Market Type"
              placeholder="Please Select"
              options={[
                {
                  value: 'Primary',
                  label: 'Primary',
                },
                {
                  value: 'Secondary',
                  label: 'Secondary',
                },
              ]}
              value={
                houseData.marketType
                  ? {
                      label: houseData.marketType,
                      value: houseData.marketType,
                    }
                  : null
              }
              onValue={(marketType) =>
                setCarData({
                  ...houseData,
                  marketType: marketType ? marketType.value : marketType,
                })
              }
            />
            <GridCell columnSpan={2}>
              <Stack>
                <Label style={{ color: '#7E839F', marginBottom: '-1.25rem' }}>
                  Info
                </Label>
                <RichTextEditor
                  name="info"
                  value={houseData.info}
                  onChange={setCarData}
                />
              </Stack>
            </GridCell>
          </AddProjectModalMain>
        )}
        {tab === 1 && (
          <AddProjectModalMain columns={1}>
            <AddProjectHeadline>
              Images
              <ISpan onClick={handlePhotos}>
                <UploadIcon />
              </ISpan>
            </AddProjectHeadline>

            {photos && photos.length ? (
              photos.map((item: TImage, idx: number) => {
                const { key, name, id } = item;
                return (
                  <>
                    <AddProjectDocumentPlaceholder>
                      <ImageUploadButton
                        onClick={() => {
                          modalOpen();
                          setActivePhotoIdx(idx);
                        }}
                        key={id}
                      >
                        {name}
                      </ImageUploadButton>
                      <Checkbox
                        label="Mark as Thumbnail"
                        value={houseData.thumbnailId === id}
                        onValue={(value) =>
                          setCarData((data: any) => ({
                            ...data,
                            thumbnailId: value ? id : null,
                          }))
                        }
                      />
                      <ISpan onClick={() => handleDeletePhoto(id)}>
                        <DeleteIcon />
                      </ISpan>
                    </AddProjectDocumentPlaceholder>
                    {modal && key && activePhotoIdx === idx && (
                      <UploadedFileModal
                        onClose={modalClose}
                        name={name}
                        url={`${Project.apis.v1}/public/images/${key}`}
                        type={'image'}
                      />
                    )}
                  </>
                );
              })
            ) : (
              <AddProjectDocumentPlaceholder />
            )}

            <AddProjectHeadline>
              Documents
              <ISpan onClick={handleDocuments}>
                <UploadIcon />
              </ISpan>
            </AddProjectHeadline>

            {documents && documents.length ? (
              documents.map((item: TDocument, idx: number) => {
                const { key, name, id } = item;
                return (
                  <>
                    <AddProjectDocumentPlaceholder>
                      <ImageUploadButton
                        onClick={() => {
                          window.open(
                            `${Project.apis.v1}/public/documents/${key}`,
                            '_blank'
                          );
                        }}
                        key={id}
                      >
                        {name}
                      </ImageUploadButton>
                      <ISpan onClick={() => handleDeleteDocument(id)}>
                        <DeleteIcon />
                      </ISpan>
                    </AddProjectDocumentPlaceholder>
                  </>
                );
              })
            ) : (
              <AddProjectDocumentPlaceholder />
            )}
          </AddProjectModalMain>
        )}
      </Stack>
    </Modal>
  );
};

export default EditCarProjectModal;
