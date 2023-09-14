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
import UploadedFileModal from '../uploaded-file-modal';
import ImageApi from 'api/images';
import DocumentApi from 'api/documents';
import { ICar, TAddress } from 'api/cars/types';
import { getLocations } from 'utilities/locations';
import { getModels } from 'utilities/models';
import { AddressAPI, CarAPI } from 'api';
import { TImage } from 'api/images/types';
import { TDocument } from 'api/documents/types';
import Project from 'constants/project';
import { birthDateSchema } from 'utilities/validators';
import {
  GoogleAutoComplete,
  InputError,
  InputLabel,
  InputMain,
} from 'components/ui/input/styles';
import { getEngineTypes } from 'utilities/engineTypes';
import { getHightLight } from 'utilities/hightLights';
import { TEditCarsModalProps } from '../add-project-modal/types';
const AddCarProjectModal = ({
  onClose,
  refresh,
  carId,
  ...props
}: TEditCarsModalProps) => {
  const [tab, setTab] = useState(0);
  const { push } = useSnackbar();
  const [photos, setPhotos] = useState<TImage[]>([]);
  const [documents, setDocuments] = useState<TDocument[]>([]);
  const [modal, modalOpen, modalClose] = useModal(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);
  const [locations, setLocations] = useState<any[]>([]);
  const [models, setModels] = useState<any[]>([]);
  const [engineTypes, setEngineTypes] = useState<any[]>([]);
  const [addressError, setAddressError] = useState<any>({
    invalid: false,
    empty: false,
  });

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
  const [googleAddress, setGoogleAddress] = useState<TAddress>({
    id: -1,
    city: '',
    postcode: '',
    country: '',
    fullAddress: '',
    gpslat: '',
    gpslong: '',
  });

  const [superCarData, setCarData] = useState<any>({
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
    startDate: '',
    highLights: [],
    info: '',
    status: '',
    thumbnailId: null,
    addressId: null,
  });

  const getHouseDataById = async () => {
    const data: ICar = await CarAPI.getOne(carId);
    const highLights = data.highLights
      ? data.highLights.split(',').map((name: string) => ({
          value: name,
          label: name,
        }))
      : [];
    setGoogleAddress((address: TAddress) => ({
      ...address,
      ...data.googleAddress,
    }));
    setCarData(() => ({ ...data, highLights }));
    setDocuments([...data.documents]);
    setPhotos([...data.images]);
  };

  useEffect(() => {
    getHouseDataById();
  }, [carId]);

  const handleNewHightLightTag = (v: any) => {
    setCarData({
      ...superCarData,
      highLights: [...superCarData.highLights, v],
    });
  };

  const [errors, setErrors] = useState([false]);

  const handleErrors = (index: number) => (value: boolean) => {
    setErrors((x) => x.map((a, b) => (b === index ? value : a)));
  };

  const isDisabled =
    !superCarData.thumbnailId || !!errors.find((x) => x) || photos.length === 0;

  const handlePhotos = async () => {
    const files: any = await pick({
      accept: 'image/jpg, image/jpeg, image/png',
      multiple: true,
    });

    try {
      for (let index = 0; index < files.length; index++) {
        const element = files[index];
        await ImageApi.fileUpload(element).then(async (data) => {
          setPhotos((prev: TImage[]) => [...prev, { ...data }]);
        });
      }
      push('Images successfully uploaded.', { variant: 'success' });
    } catch (error: any) {
      push('Images upload failed.', { variant: 'error' });
    }
  };

  const handleDocuments = async () => {
    const files: any = await pick({
      accept: 'application/pdf',
      multiple: true,
    });

    try {
      for (let index = 0; index < files.length; index++) {
        const element = files[index];
        await DocumentApi.fileUpload(element).then(async (data) => {
          setDocuments((prev: TDocument[]) => [...prev, { ...data }]);
        });
      }
      push('Documents successfully uploaded.', { variant: 'success' });
    } catch (error: any) {
      push('Documents upload failed.', { variant: 'error' });
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

  const getModelOptions = async (searchTerm: string = '') => {
    const result = getModels(searchTerm);
    setModels(
      result.map((name: any) => ({
        value: name,
        label: name,
      }))
    );
  };

  const getEngineTypesOptions = async (searchTerm: string = '') => {
    const result = getEngineTypes(searchTerm);
    setEngineTypes(
      result.map((name: any) => ({
        value: name,
        label: name,
      }))
    );
  };

  const debouncedLocation = useDebounce(getLocationOptions, 100);

  useEffect(() => {
    getLocationOptions();
    getModelOptions();
    getEngineTypesOptions();
  }, []);

  const handlechangeGoogleAddress = (event: any) => {
    let city = '';
    let country = '';
    let postcode = '';
    event.address_components.forEach((component: any) => {
      if (component.types[0] === 'locality') {
        city = component.long_name;
      }
      if (component.types[0] === 'postal_code') {
        postcode = component.long_name;
      }
      if (component.types[0] === 'country') {
        country = component.long_name;
      }
    });

    setGoogleAddress((address: TAddress) => ({
      ...address,
      city,
      fullAddress: event.formatted_address,
      postcode,
      country,
      gpslat: event.geometry.location.lat(),
      gpslong: event.geometry.location.lng(),
    }));
    if (country) {
      setAddressError(false);
    }
  };

  const handleChangeGoogleAddress = (event: any) => {
    setGoogleAddress((address: TAddress) => ({
      ...address,
      city: '',
      fullAddress: event.target.value,
      postcode: '',
      country: '',
      gpslat: '',
      gpslong: '',
    }));
  };

  const handleAddressValidation = () => {
    if (googleAddress.country.length > 0) {
      setAddressError((errors: any) => ({
        ...errors,
        empty: false,
        invalid: false,
      }));
    } else if (googleAddress.fullAddress.length > 0) {
      setAddressError((errors: any) => ({
        ...errors,
        empty: false,
        invalid: true,
      }));
    } else {
      setAddressError((errors: any) => ({
        ...errors,
        empty: true,
        invalid: false,
      }));
    }
  };

  const handleUpdateProject = async () => {
    try {
      await AddressAPI.updateAddress(googleAddress, googleAddress.id);
      const highLights = superCarData.highLights
        .map((item: any) => item.value)
        .join(',');
      const data = { ...superCarData, highLights: highLights };
      await CarAPI.updateCar(data, data.id).then((res) => {
        const body = { carId: data.id };
        photos.forEach(async (img: TImage) => {
          await ImageApi.updateFile(body, img.id);
        });
        documents.forEach(async (dic: TDocument) => {
          await DocumentApi.updateFile(body, dic.id);
        });
      });
      onClose();
      refresh();
      push('Successfully created Supercar project.', { variant: 'success' });
    } catch {
      push('Something went wrong when create Supercar project.', {
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
              value={superCarData?.name}
              errorCallback={handleErrors(0)}
              onValue={(name) => setCarData({ ...superCarData, name })}
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
              errorCallback={handleErrors(1)}
              value={
                superCarData.location
                  ? {
                      label: superCarData.location,
                      value: superCarData.location,
                    }
                  : null
              }
              onValue={(location) =>
                setCarData({
                  ...superCarData,
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
              label="Total Shares"
              required
              placeholder="Please Enter"
              errorCallback={handleErrors(2)}
              value={superCarData?.totalShares}
              onValue={(totalShares) =>
                setCarData({ ...superCarData, totalShares })
              }
              validators={[
                {
                  message: 'Total Shares is required',
                  validator: (value) => {
                    const v = value as number;
                    if (v) return true;
                    return false;
                  },
                },
              ]}
            />
            <Input
              type="number"
              required
              label="Available Shares"
              placeholder="Please Enter"
              errorCallback={handleErrors(3)}
              value={superCarData?.availableShares}
              onValue={(availableShares) =>
                setCarData({ ...superCarData, availableShares })
              }
              validators={[
                {
                  message: 'Available Shares is required',
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
              label="Share Price"
              required
              placeholder="Please Enter"
              errorCallback={handleErrors(4)}
              value={superCarData?.sharePrice}
              onValue={(sharePrice) =>
                setCarData({ ...superCarData, sharePrice })
              }
              validators={[
                {
                  message: 'Share Price is required',
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
              label="Mileage"
              required
              placeholder="Please Enter"
              errorCallback={handleErrors(5)}
              value={superCarData?.mileage}
              onValue={(mileage) => setCarData({ ...superCarData, mileage })}
              validators={[
                {
                  message: 'Mileage is required',
                  validator: (mileage) => {
                    const v = mileage as string;
                    if (v) return true;
                    return false;
                  },
                },
              ]}
            />
            <Input
              type="text"
              label="Address"
              required
              placeholder="Please Enter"
              errorCallback={handleErrors(6)}
              value={superCarData?.address}
              onValue={(address) => setCarData({ ...superCarData, address })}
              validators={[
                {
                  message: 'Address is required',
                  validator: (address) => {
                    const v = address as string;
                    if (v) return true;
                    return false;
                  },
                },
              ]}
            />
            <InputMain>
              <InputLabel required={true} helper={'google map'}>
                {'Google Address'}
              </InputLabel>
              <GoogleAutoComplete
                apiKey={apiKey}
                error={addressError.empty || addressError.invalid}
                onPlaceSelected={(selected, a, c) => {
                  handlechangeGoogleAddress(selected);
                }}
                defaultValue={googleAddress.fullAddress}
                placeholder="Please Enter"
                onChange={handleChangeGoogleAddress}
                onBlur={handleAddressValidation}
                options={{
                  types: ['geocode', 'establishment'],
                }}
              />
              {addressError.empty && (
                <InputError>{'Google Address is Required'}</InputError>
              )}
              {addressError.invalid && (
                <InputError>{'Invalid Address'}</InputError>
              )}
            </InputMain>

            <Input
              type="year"
              label="Construction Year"
              placeholder="Please Select"
              value={superCarData?.year}
              errorCallback={handleErrors(7)}
              onValue={(year) => setCarData({ ...superCarData, year })}
              validators={[
                {
                  message: 'Construction Year is required',
                  validator: (birthDate) => {
                    const v = birthDate as string;
                    if (v) return true;
                    return false;
                  },
                },
                {
                  message: 'Invalid year',
                  validator: (birthDate) => {
                    try {
                      birthDateSchema.validateSync({ birthDate });
                      return true;
                    } catch {
                      return false;
                    }
                  },
                },
              ]}
            />
            <Input
              type="date"
              label="Start Date"
              required
              placeholder="Please Select"
              value={superCarData?.startDate}
              errorCallback={handleErrors(8)}
              onValue={(startDate) =>
                setCarData({ ...superCarData, startDate })
              }
              validators={[
                {
                  message: 'Start Date is required',
                  validator: (birthDate) => {
                    const v = birthDate as string;
                    if (v) return true;
                    return false;
                  },
                },
                {
                  message: 'Invalid date',
                  validator: (birthDate) => {
                    try {
                      birthDateSchema.validateSync({ birthDate });
                      return true;
                    } catch {
                      return false;
                    }
                  },
                },
              ]}
            />
            <Input
              type="number"
              label="Engine Power"
              required
              placeholder="Please Enter"
              errorCallback={handleErrors(9)}
              value={superCarData?.enginePower}
              onValue={(enginePower) =>
                setCarData({ ...superCarData, enginePower })
              }
              validators={[
                {
                  message: 'Engine Power is required',
                  validator: (enginePower) => {
                    const v = enginePower as string;
                    if (v) return true;
                    return false;
                  },
                },
              ]}
            />

            <Input
              type="select"
              required
              label="Engine Type"
              placeholder="Please Select"
              errorCallback={handleErrors(10)}
              options={engineTypes}
              value={
                superCarData.engineType
                  ? {
                      label: superCarData.engineType,
                      value: superCarData.engineType,
                    }
                  : null
              }
              onValue={(engineType) =>
                setCarData({
                  ...superCarData,
                  engineType: engineType ? engineType.value : engineType,
                })
              }
              validators={[
                {
                  message: 'Engine Type required',
                  validator: (value) => {
                    const v = value as string;
                    if (v) return true;
                    return false;
                  },
                },
              ]}
            />

            <Input
              type="multiselect"
              label="HighLights"
              required
              errorCallback={handleErrors(11)}
              onNewTag={handleNewHightLightTag}
              isFilterActive
              noOptionsText="Type new values"
              placeholder="Please Enter"
              value={superCarData?.highLights}
              onValue={(highLights) =>
                setCarData({ ...superCarData, highLights })
              }
              validators={[
                {
                  message: 'HighLights is required',
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
                  value: 'Primary',
                  label: 'Primary',
                },
                {
                  value: 'Secondary',
                  label: 'Secondary',
                },
                {
                  value: 'Completed',
                  label: 'Completed',
                },
              ]}
              value={
                superCarData.status
                  ? {
                      label: superCarData.status,
                      value: superCarData.status,
                    }
                  : null
              }
              onValue={(status) =>
                setCarData({
                  ...superCarData,
                  status: status ? status.value : status,
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
                  value={superCarData.info}
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
                        value={superCarData.thumbnailId === id}
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

export default AddCarProjectModal;
