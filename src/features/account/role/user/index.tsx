import React, { useState, useEffect } from 'react';
import {
  ApplicationContainer,
  AccountHeadline,
  AccountGrid,
} from 'features/users-overview/styles';
import { Button, Input, Card } from 'components/ui';
import { Stack } from 'components/system';
import { Tabs } from 'components/custom';
import UsersAPI from 'api/users';
import { IUser } from 'api/users/types';
import { useDebounce, useModal, useSnackbar } from 'hooks';
import { getLocations } from 'utilities/locations';
import { getConditions } from 'utilities/conditions';
import { getModels } from 'utilities/models';
import { getInteriorStyles } from 'utilities/interiorStyles';
import { getExteriorColors } from 'utilities/exteriorColors';
import { getEngineTypes } from 'utilities/engineTypes';
import { getAmenities } from 'utilities/amenties';
import CarPreferenceApi from 'api/supercarPreference';
import { useAppContext } from 'context';
import { AccountChange, AccountSpan } from 'features/account/style';
import { ChangePasswordModal } from './elements';
import { getBrands } from 'utilities/brands';

const AccountPage = (props: any) => {
  const { user, getMeData } = useAppContext();
  const [tabs, setTabs] = useState(0);
  const { push } = useSnackbar();
  const [infoHasChanged, setInfoHasChanged] = useState<boolean>(false);
  const [infoSaving, setInfoSaving] = useState<boolean>(false);
  const [hprefHasChanged, setHprefHasChanged] = useState<boolean>(false);
  const [hprefSaving, setHprefSaving] = useState<boolean>(false);

  const [info, setInfo] = useState<any>({
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    location: '',
  });

  const [preference, setCarPreference] = useState<any>({
    id: -1,
    brands: [],
    models: [],
    location: [],
    conditions: [],
    amenities: [],
    budgetPerShareMin: '',
    budgetPerShareMax: '',
    interestedInSupercars: '',
    interestedInShares: [],
    interiorStyle: [],
    exteriorColor: [],
    engineType: [],
    engineHpMin: '',
    engineHpMax: '',
    additionalComment: '',
    ownerId: user.id,
  });

  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  useEffect(() => {
    const isDisable = !info.firstName || !info.lastName;

    const isUnDisabled = infoHasChanged || hprefHasChanged;

    if (isUnDisabled && !isDisable) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [info, preference, infoHasChanged, hprefHasChanged]);

  const getUserById = async (id: any) => {
    if (!id) return;
    const data: IUser = await UsersAPI.getUser(id);
    setInfo((info: any) => ({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      location: data.location,
    }));

    if (data.preference?.length > 0) {
      let houseprf: any = data.preference[0];
      houseprf.amenities = houseprf.amenities
        ? houseprf.amenities.split(',').map((name: string) => ({
            value: name,
            label: name,
          }))
        : [];
      houseprf.brands = houseprf.brands
        ? houseprf.brands.split(',').map((name: string) => ({
            value: name,
            label: name,
          }))
        : [];
      houseprf.models = houseprf.models
        ? houseprf.models.split(',').map((name: string) => ({
            value: name,
            label: name,
          }))
        : [];
      houseprf.conditions = houseprf.conditions
        ? houseprf.conditions.split(',').map((name: string) => ({
            value: name,
            label: name,
          }))
        : [];
      houseprf.interestedInShares = houseprf.interestedInShares
        ? houseprf.interestedInShares.split(',').map((name: string) => ({
            value: name,
            label: name,
          }))
        : [];
      houseprf.interiorStyle = houseprf.interiorStyle
        ? houseprf.interiorStyle.split(',').map((name: string) => ({
            value: name,
            label: name,
          }))
        : [];
      houseprf.exteriorColor = houseprf.exteriorColor
        ? houseprf.exteriorColor.split(',').map((name: string) => ({
            value: name,
            label: name,
          }))
        : [];
      houseprf.engineType = houseprf.engineType
        ? houseprf.engineType.split(',').map((name: string) => ({
            value: name,
            label: name,
          }))
        : [];
      houseprf.location = houseprf.location
        ? houseprf.location.split('|').map((name: string) => ({
            value: name,
            label: name,
          }))
        : [];
      setCarPreference(houseprf);
    }
  };

  const [locations, setLocations] = useState<any[]>([]);
  const [brands, setBrands] = useState<any[]>([]);
  const [conditions, setConditions] = useState<any[]>([]);
  const [amenities, setAmenities] = useState<any[]>([]);
  const [models, setModels] = useState<any[]>([]);
  const [modelOptions, setModelOptions] = useState<any[]>([]);
  const [interiorStyles, setInteriorStyles] = useState<any[]>([]);
  const [exteriorColors, setExteriorColors] = useState<any[]>([]);
  const [engineTypes, setEngineTypes] = useState<any[]>([]);
  const [interestsInSupercars, setInterestsInSupercars] = useState<any[]>([]);
  const [interestsInShares, setInterestsInShares] = useState<any[]>([]);
  const [prefLocations, setPrefLocations] = useState<any[]>([]);

  const getInterestsInSupercars = async () => {
    const result = ['1', '2', '3', '4', '5', '6', '7', '8'];
    setInterestsInSupercars(
      result.map((name: string) => {
        return {
          value: name,
          label: name,
        };
      })
    );
  };

  const getPrefLocationOptions = async (searchTerm: string = '') => {
    const result = getLocations(searchTerm);
    setPrefLocations(
      result.map((name: string) => {
        return {
          value: name,
          label: name,
        };
      })
    );
  };

  const getInterestsInShares = async () => {
    const result = ['1', '2', '3', '4', '5', '6', '7', '8'];
    setInterestsInShares(
      result.map((name: string) => {
        return {
          value: name,
          label: name,
        };
      })
    );
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

  const getConditionOptions = async (searchTerm: string = '') => {
    const result = getConditions(searchTerm);
    setConditions(
      result.map((name: string) => {
        return {
          value: name,
          label: name,
        };
      })
    );
  };

  const getBrandOptions = async (searchTerm: string = '') => {
    const result = getBrands(searchTerm);
    setBrands(
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

  const getInteriorStyleOptions = async (searchTerm: string = '') => {
    const result = getInteriorStyles(searchTerm);
    setInteriorStyles(
      result.map((name: any) => ({
        value: name,
        label: name,
      }))
    );
  };

  const getAmenityOptions = async (searchTerm: string = '') => {
    const result = getAmenities(searchTerm);
    setAmenities(
      result.map((name: any) => ({
        value: name,
        label: name,
      }))
    );
  };

  const getExteriorColorOptions = async (searchTerm: string = '') => {
    const result = getExteriorColors(searchTerm);
    setExteriorColors(
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

  const debouncedPrefLocation = useDebounce(getPrefLocationOptions, 100);
  const debouncedLocation = useDebounce(getLocationOptions, 100);

  useEffect(() => {
    getLocationOptions();
    getConditionOptions();
    getEngineTypesOptions();
    getExteriorColorOptions();
    getModelOptions();
    getInteriorStyleOptions();
    getAmenityOptions();
    getBrandOptions();
    getInterestsInSupercars();
    getPrefLocationOptions();
    getInterestsInShares();
  }, []);

  const updateUserInfo = async () => {
    try {
      await UsersAPI.updateSingleUser(user.id, info).then(() => {});
      setInfoSaving(false);
      setInfoHasChanged(false);
      push('Updated user info successfully', {
        variant: 'success',
      });
    } catch {
      push('Something went wrong when update user info.', { variant: 'error' });
      setInfoSaving(false);
    }
  };

  const saveCarPreference = async () => {
    try {
      const amenities = preference.amenities
        .map((item: any) => item.value)
        .join(',');
      const brands = preference.brands.map((item: any) => item.value).join(',');
      const models = preference.models.map((item: any) => item.value).join(',');
      const location = preference.location
        .map((item: any) => item.value)
        .join('|');
      const conditions = preference.conditions
        .map((item: any) => item.value)
        .join(',');
      const interestedInShares = preference.interestedInShares
        .map((item: any) => item.value)
        .join(',');
      const interiorStyle = preference.interiorStyle
        .map((item: any) => item.value)
        .join(',');
      const exteriorColor = preference.exteriorColor
        .map((item: any) => item.value)
        .join(',');
      const engineType = preference.engineType
        .map((item: any) => item.value)
        .join(',');
      let data = {
        ...preference,
        amenities,
        brands,
        models,
        conditions,
        interestedInShares,
        interiorStyle,
        exteriorColor,
        engineType,
        location,
      };
      if (preference.id === -1) {
        await CarPreferenceApi.createCarPreference(data).then(() => {});
      } else {
        await CarPreferenceApi.updateCarPreference(data, preference.id).then(
          () => {}
        );
      }
      setHprefHasChanged(false);
      setHprefSaving(false);
      push('Updated supercar preference successfully', {
        variant: 'success',
      });
    } catch {
      push('Something went wrong when save supercar preference.', {
        variant: 'error',
      });
      setHprefSaving(false);
    }
  };

  const handleSave = () => {
    if (infoHasChanged) {
      setInfoSaving(true);
      updateUserInfo();
    }
    if (hprefHasChanged) {
      setHprefSaving(true);
      saveCarPreference();
    }
  };

  useEffect(() => {
    if (!infoSaving && !hprefSaving && user.id) {
      getUserById(user.id);
      getMeData();
    }
  }, [infoSaving, hprefSaving, user.id]);

  const handleChangeInfo = (name: string, value: any) => {
    setInfo({ ...info, [name]: value });
    setInfoHasChanged(true);
  };

  const handleChangeCarPreference = (name: string, value: string) => {
    setCarPreference({ ...preference, [name]: value });
    setHprefHasChanged(true);
  };

  const handleChangeBrand = (brands: any) => {
    let modelOptions: any[] = [];
    let modelValues: any[] = [];
    brands.forEach((brand: any) => {
      let options = models.filter((model) => model.value.includes(brand.value));
      modelOptions = [...modelOptions, ...options];
      const model = preference.models.filter((item: any) =>
        item.value.includes(brand.value)
      );
      modelValues = [...modelValues, ...model];
    });
    setModelOptions([...modelOptions]);
    setCarPreference({
      ...preference,
      models: [...modelValues],
      brands: [...brands],
    });
    setHprefHasChanged(true);
  };

  const handleChangeMinMaxCarPreference = (
    minName: string,
    maxName: string,
    value: any
  ) => {
    setCarPreference({
      ...preference,
      [minName]: value.min,
      [maxName]: value.max,
    });
    setHprefHasChanged(true);
  };

  const [cpModal, openCpModal, closeCpModal] = useModal(false);

  return (
    <Stack>
      <Tabs tabs={['Info', 'Application']} value={tabs} onValue={setTabs} />
      {tabs === 0 && (
        <Card>
          <ApplicationContainer>
            <Stack>
              <AccountHeadline>Info</AccountHeadline>
              <AccountGrid style={{ marginBottom: '36px' }}>
                <Input
                  type="text"
                  label="First Name"
                  disabled
                  placeholder="John"
                  value={info?.firstName}
                  onValue={(firstName) =>
                    handleChangeInfo('firstName', firstName)
                  }
                />
                <Input
                  type="text"
                  label="Last Name"
                  disabled
                  placeholder="Doe"
                  value={info?.lastName}
                  onValue={(lastName) => handleChangeInfo('lastName', lastName)}
                />
                <Input
                  type="text"
                  label="Email"
                  placeholder="johndio@gmail.com"
                  value={info?.email}
                  onValue={() => {}}
                  disabled
                />
                <AccountChange>
                  <Input
                    type="password"
                    label="Password"
                    placeholder="**********"
                    value={info.password}
                    onValue={() => {}}
                    disabled
                  />
                  <AccountSpan onClick={openCpModal}>
                    Change Password
                  </AccountSpan>
                </AccountChange>
              </AccountGrid>
              {cpModal && <ChangePasswordModal onClose={closeCpModal} car={null}/>}
              <AccountGrid>
                <Input
                  type="select"
                  label="Location"
                  placeholder="Please Select"
                  onSearch={debouncedLocation}
                  options={locations}
                  value={
                    info.location
                      ? {
                          label: info.location,
                          value: info.location,
                        }
                      : null
                  }
                  onValue={(location) =>
                    handleChangeInfo(
                      'location',
                      location ? location.value : location
                    )
                  }
                />
              </AccountGrid>
              {!infoSaving && !hprefSaving ? (
                <Button
                  variant="contained"
                  color="primary"
                  style={{ width: '130px', alignSelf: 'flex-end' }}
                  disabled={isDisabled}
                  onClick={handleSave}
                >
                  Save
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  style={{ width: '130px', alignSelf: 'flex-end' }}
                  disabled
                >
                  Saving...
                </Button>
              )}
            </Stack>
          </ApplicationContainer>
        </Card>
      )}
      {tabs === 1 && (
        <Card>
          <ApplicationContainer>
            <Stack>
              <AccountHeadline>Supercar Preference</AccountHeadline>
              <AccountGrid>
                <Input
                  type="multiselect"
                  label="Brand"
                  placeholder="Please Select"
                  options={brands}
                  value={preference.brands}
                  onValue={(brands) => {
                    handleChangeBrand(brands);
                  }}
                />
                <Input
                  type="multiselect"
                  label="Model"
                  placeholder="Please Select"
                  options={modelOptions}
                  value={preference.models}
                  onValue={(models) => {
                    handleChangeCarPreference('models', models);
                  }}
                />
                <Input
                  type="multiselect"
                  label="Location"
                  onSearch={debouncedPrefLocation}
                  placeholder="Please Select"
                  options={prefLocations}
                  value={preference.location}
                  onValue={(location) => {
                    handleChangeCarPreference('location', location);
                  }}
                />
                <Input
                  type="multiselect"
                  label="Condition"
                  placeholder="Please Select"
                  options={conditions}
                  value={preference.conditions}
                  onValue={(conditions) => {
                    if (conditions.length <= 5) {
                      handleChangeCarPreference('conditions', conditions);
                    }
                  }}
                />
                <Input
                  type="multiselect"
                  label="Amenities"
                  placeholder="Please Select"
                  options={amenities}
                  value={preference.amenities}
                  onValue={(amenities) => {
                    if (amenities.length <= 5) {
                      handleChangeCarPreference('amenities', amenities);
                    }
                  }}
                />
                <Input
                  type="min-max-currency"
                  label="Budget per Share"
                  value={{
                    min: preference.budgetPerShareMin,
                    max: preference.budgetPerShareMax,
                  }}
                  onValue={(budgetShares) =>
                    handleChangeMinMaxCarPreference(
                      'budgetPerShareMin',
                      'budgetPerShareMax',
                      budgetShares
                    )
                  }
                />
                <Input
                  type="select"
                  label="Interested In Supercars"
                  placeholder="Please Select"
                  options={interestsInSupercars}
                  value={
                    preference.interestedInSupercars
                      ? {
                          label: preference.interestedInSupercars,
                          value: preference.interestedInSupercars,
                        }
                      : null
                  }
                  onValue={(interestedInSupercars) =>
                    handleChangeCarPreference(
                      'interestedInSupercars',
                      interestedInSupercars
                        ? interestedInSupercars.value
                        : interestedInSupercars
                    )
                  }
                />

                <Input
                  type="multiselect"
                  label="Interested in Shares per Supercar"
                  placeholder="Please Select"
                  options={interestsInShares}
                  value={preference.interestedInShares}
                  onValue={(interestedInShares) => {
                    if (interestedInShares.length <= 5) {
                      handleChangeCarPreference(
                        'interestedInShares',
                        interestedInShares
                      );
                    }
                  }}
                />

                <Input
                  type="multiselect"
                  label="Interior Style"
                  placeholder="Please Select"
                  options={interiorStyles}
                  value={preference.interiorStyle}
                  onValue={(interiorStyle) => {
                    if (interiorStyle.length <= 5) {
                      handleChangeCarPreference('interiorStyle', interiorStyle);
                    }
                  }}
                />

                <Input
                  type="multiselect"
                  label="Exterior Color"
                  placeholder="Please Select"
                  options={exteriorColors}
                  value={preference.exteriorColor}
                  onValue={(exteriorColor) => {
                    if (exteriorColor.length <= 5) {
                      handleChangeCarPreference('exteriorColor', exteriorColor);
                    }
                  }}
                />

                <Input
                  type="multiselect"
                  label="Engine Type"
                  placeholder="Please Select"
                  options={engineTypes}
                  value={preference.engineType}
                  onValue={(engineType) => {
                    if (engineType.length <= 5) {
                      handleChangeCarPreference('engineType', engineType);
                    }
                  }}
                />

                <Input
                  type="min-max"
                  label="Engine (HP)"
                  value={{
                    min: preference.engineHpMin,
                    max: preference.engineHpMax,
                  }}
                  onValue={(age) =>
                    handleChangeMinMaxCarPreference(
                      'engineHpMin',
                      'engineHpMax',
                      age
                    )
                  }
                />
              </AccountGrid>
              <AccountGrid>
                <Input
                  type="text"
                  label="Additional Comment"
                  placeholder="Please Enter"
                  value={preference?.additionalComment}
                  multiline
                  rows={3}
                  onValue={(additionalComment) =>
                    handleChangeCarPreference(
                      'additionalComment',
                      additionalComment
                    )
                  }
                  style={{ gridColumn: '1/3' }}
                />
              </AccountGrid>
              {!infoSaving && !hprefSaving ? (
                <Button
                  variant="contained"
                  color="primary"
                  style={{ width: '130px', alignSelf: 'flex-end' }}
                  disabled={isDisabled}
                  onClick={handleSave}
                >
                  Save
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  style={{ width: '130px', alignSelf: 'flex-end' }}
                  disabled
                >
                  Saving...
                </Button>
              )}
            </Stack>
          </ApplicationContainer>
        </Card>
      )}
    </Stack>
  );
};

export default AccountPage;
