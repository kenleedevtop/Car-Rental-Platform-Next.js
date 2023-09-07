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
import { useDebounce, useSnackbar } from 'hooks';
import { getLocations } from 'utilities/locations';
import { getNationalities } from 'utilities/nationalities';
import { getLanguages } from 'utilities/languages';
import { getCarTheme } from 'utilities/houseTheme';
import { getSkillsOfOthers } from 'utilities/skillsOfOthers';
import { getInterestsAndHobbies } from 'utilities/interests';
import { getDiets } from 'utilities/diets';
import { getSkills } from 'utilities/skills';
import CarPreferenceApi from 'api/supercarPreference';

const OverviewPage = (props: any) => {
  const { userId } = props;
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
    theme: [],
    skillsOfOthers: [],
    location: '',
    language: '',
    monthlyRentMax: 0,
    monthlyRentMin: 0,
    ageMax: 0,
    ageMin: 0,
    tenantsMax: 0,
    tenantsMin: 0,
    interestsHobbies: [],
    ownerId: userId,
    diet: '',
    motivation: '',
    createdAt: '',
    updatedAt: '',
  });
  const [errors, setErrors] = useState([false]);

  const handleErrors = (index: number) => (value: boolean) => {
    setErrors((x) => x.map((a, b) => (b === index ? value : a)));
  };

  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  useEffect(() => {
    const isDisable =
      !info.firstName ||
      !info.lastName ||
      !preference.location ||
      !!errors.find((x) => x) ||
      !preference.language;

    const isUnDisabled = infoHasChanged || hprefHasChanged;

    if (isUnDisabled && !isDisable) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [info, preference, infoHasChanged, hprefHasChanged, errors]);

  const getUserById = async (id: any) => {
    if (!id) return;
    const data: IUser = await UsersAPI.getUser(id);
    setInfo((info: any) => ({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      nationality: data.nationality,
      dateOfBirth: data.dateOfBirth,
      language: data.language
        ? data.language.split(',').map((name: string) => ({
            value: name,
            label: name,
          }))
        : [],
      location: data.location,
      skills: data.skills
        ? data.skills.split(',').map((name: string) => ({
            value: name,
            label: name,
          }))
        : [],
    }));

    if (data.preference?.length > 0) {
      let houseprf: any = data.preference[0];
      houseprf.skillsOfOthers = houseprf.skillsOfOthers
        ? houseprf.skillsOfOthers.split(',').map((name: string) => ({
            value: name,
            label: name,
          }))
        : [];
      houseprf.interestsHobbies = houseprf.interestsHobbies
        ? houseprf.interestsHobbies.split(',').map((name: string) => ({
            value: name,
            label: name,
          }))
        : [];
      houseprf.theme = houseprf.theme
        ? houseprf.theme.split(',').map((name: string) => ({
            value: name,
            label: name,
          }))
        : [];
      setCarPreference(houseprf);
    }
  };

  const [locations, setLocations] = useState<any[]>([]);
  const [nationalities, setNationalities] = useState<any[]>([]);
  const [language, setLanguages] = useState<any[]>([]);
  const [skills, setSkills] = useState<any[]>([]);
  const [themes, setThemes] = useState<any[]>([]);
  const [skillsOfthers, setSkillsOfOthers] = useState<any[]>([]);
  const [interests, setInterests] = useState<any[]>([]);
  const [diets, setDiets] = useState<any[]>([]);

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

  const getNationalityOptions = async (searchTerm: string = '') => {
    const result = getNationalities(searchTerm);
    setNationalities(
      result.map((name: string) => {
        return {
          value: name,
          label: name,
        };
      })
    );
  };

  const getLanguageOptions = async (searchTerm: string = '') => {
    const result = getLanguages(searchTerm);
    setLanguages(
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

  const getSkillsOfOtherOptions = async (searchTerm: string = '') => {
    const result = getSkillsOfOthers(searchTerm);
    setSkillsOfOthers(
      result.map((name: any) => ({
        value: name,
        label: name,
      }))
    );
  };

  const getSkillsOptions = async (searchTerm: string = '') => {
    const result = getSkills(searchTerm);
    setSkills(
      result.map((name: any) => ({
        value: name,
        label: name,
      }))
    );
  };

  const getInterestsOptions = async (searchTerm: string = '') => {
    const result = getInterestsAndHobbies(searchTerm);
    setInterests(
      result.map((name: any) => ({
        value: name,
        label: name,
      }))
    );
  };

  const getDietsOptions = async (searchTerm: string = '') => {
    const result = getDiets(searchTerm);
    setDiets(
      result.map((name: any) => ({
        value: name,
        label: name,
      }))
    );
  };

  const debouncedLocation = useDebounce(getLocationOptions, 100);
  const debouncedNationalities = useDebounce(getNationalityOptions, 100);
  const debouncedLanguages = useDebounce(getLanguageOptions, 100);
  const debouncedSkillsOfOthers = useDebounce(getSkillsOfOtherOptions, 100);
  const debouncedSkills = useDebounce(getSkillsOptions, 100);
  const debouncedInterests = useDebounce(getInterestsOptions, 100);
  const debouncedDiets = useDebounce(getDietsOptions, 100);

  useEffect(() => {
    getLocationOptions();
    getNationalityOptions();
    getLanguageOptions();
    getDietsOptions();
    getInterestsOptions();
    getThemeOptions();
    getSkillsOfOtherOptions();
    getSkillsOptions();
  }, []);

  const updateUserInfo = async () => {
    try {
      const language = info.language.map((item: any) => item.value).join(',');
      const skills = info.skills.map((item: any) => item.value).join(',');
      let data = { ...info, language, skills };
      await UsersAPI.updateSingleUser(userId, data).then(() => {});
      setInfoSaving(false);
      setInfoHasChanged(false);
    } catch {
      push('Something went wrong when update user info.', { variant: 'error' });
      setInfoSaving(false);
    }
  };

  const saveCarPreference = async () => {
    try {
      const skillsOfOthers = preference.skillsOfOthers
        .map((item: any) => item.value)
        .join(',');
      const interestsHobbies = preference.interestsHobbies
        .map((item: any) => item.value)
        .join(',');
      let data = { ...preference, skillsOfOthers, interestsHobbies };
      if (preference.id === -1) {
        await CarPreferenceApi.createCarPreference(data).then(() => {});
      } else {
        await CarPreferenceApi.updateCarPreference(data, preference.id).then(
          () => {}
        );
      }
      setHprefHasChanged(false);
      setHprefSaving(false);
    } catch {
      push('Something went wrong when save house preference.', {
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
    if (!infoSaving && !hprefSaving && userId) {
      getUserById(userId);
    }
  }, [infoSaving, hprefSaving, userId]);

  const handleChangeInfo = (name: string, value: any) => {
    setInfo({ ...info, [name]: value });
    setInfoHasChanged(true);
  };

  const handleChangeCarPreference = (name: string, value: string) => {
    setCarPreference({ ...preference, [name]: value });
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
                  validators={[
                    {
                      message: 'First Name is required',
                      validator: (value) => {
                        const v = value as string;
                        if (v) return true;
                        return false;
                      },
                    },
                  ]}
                />
                <Input
                  type="text"
                  label="Last Name"
                  disabled
                  placeholder="Doe"
                  value={info?.lastName}
                  onValue={(lastName) => handleChangeInfo('lastName', lastName)}
                  validators={[
                    {
                      message: 'Last Name is required',
                      validator: (value) => {
                        const v = value as string;
                        if (v) return true;
                        return false;
                      },
                    },
                  ]}
                />
                <Input
                  type="text"
                  label="Email"
                  placeholder="johndio@gmail.com"
                  value={info?.email}
                  onValue={() => {}}
                  disabled
                />
              </AccountGrid>
              <AccountGrid>
                <Input
                  type="select"
                  label="Location"
                  onSearch={debouncedLocation}
                  placeholder="Please Select"
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
              <AccountHeadline>Supercar Preferences</AccountHeadline>
              <AccountGrid>
                <Input
                  type="multiselect"
                  label="Theme"
                  placeholder="Please Select"
                  required
                  options={themes}
                  value={preference.theme}
                  onValue={(theme) => {
                    if (theme.length <= 3) {
                      handleChangeCarPreference('theme', theme);
                    }
                  }}
                  validators={[
                    {
                      message: 'Theme is required',
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
                  label="Skills of Others"
                  placeholder="Please Select"
                  required
                  options={skillsOfthers}
                  onSearch={debouncedSkillsOfOthers}
                  value={preference.skillsOfOthers}
                  onValue={(skillsOfOthers) => {
                    if (skillsOfOthers.length <= 5) {
                      handleChangeCarPreference(
                        'skillsOfOthers',
                        skillsOfOthers
                      );
                    }
                  }}
                  validators={[
                    {
                      message: 'Skills of others are required',
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
                  label="Location"
                  required
                  placeholder="Please Select"
                  onSearch={debouncedLocation}
                  options={locations}
                  value={
                    preference.location
                      ? {
                          label: preference.location,
                          value: preference.location,
                        }
                      : null
                  }
                  onValue={(location) =>
                    handleChangeCarPreference(
                      'location',
                      location ? location.value : location
                    )
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
                  type="select"
                  label="Language"
                  required
                  placeholder="Please Select"
                  onSearch={debouncedLanguages}
                  options={language}
                  value={
                    preference.language
                      ? {
                          label: preference.language,
                          value: preference.language,
                        }
                      : null
                  }
                  onValue={(language) =>
                    handleChangeCarPreference(
                      'language',
                      language ? language.value : language
                    )
                  }
                  validators={[
                    {
                      message: 'Language is required',
                      validator: (value) => {
                        const v = value as string;
                        if (v) return true;
                        return false;
                      },
                    },
                  ]}
                />
                <Input
                  type="min-max"
                  label="Monthly Rent"
                  value={{
                    min: preference.monthlyRentMin,
                    max: preference.monthlyRentMax,
                  }}
                  onValue={(monthlyRent) =>
                    handleChangeMinMaxCarPreference(
                      'monthlyRentMin',
                      'monthlyRentMax',
                      monthlyRent
                    )
                  }
                />
                <Input
                  type="min-max"
                  label="Age"
                  value={{
                    min: preference.ageMin,
                    max: preference.ageMax,
                  }}
                  onValue={(age) =>
                    handleChangeMinMaxCarPreference('ageMin', 'ageMax', age)
                  }
                />
                <Input
                  type="min-max"
                  label="Tenants per Supercars"
                  value={{
                    min: preference.tenantsMin,
                    max: preference.tenantsMax,
                  }}
                  onValue={(tenants) =>
                    handleChangeMinMaxCarPreference(
                      'tenantsMin',
                      'tenantsMax',
                      tenants
                    )
                  }
                />
                <Input
                  type="multiselect"
                  label="Interests and Hobbies"
                  placeholder="Please Select"
                  options={interests}
                  value={preference.interestsHobbies}
                  onValue={(interestsHobbies) => {
                    if (interestsHobbies.length <= 3) {
                      handleChangeCarPreference(
                        'interestsHobbies',
                        interestsHobbies
                      );
                    }
                  }}
                />
                <Input
                  type="select"
                  label="Diet"
                  placeholder="Please Select"
                  options={diets}
                  value={
                    preference.diet
                      ? {
                          label: preference.diet,
                          value: preference.diet,
                        }
                      : null
                  }
                  onValue={(diet) =>
                    handleChangeCarPreference('diet', diet ? diet.value : diet)
                  }
                />
              </AccountGrid>
              <AccountGrid>
                <Input
                  type="text"
                  label="Motivation"
                  placeholder="Please Enter"
                  value={preference?.motivation}
                  onValue={(motivation) =>
                    handleChangeCarPreference('motivation', motivation)
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

export default OverviewPage;
