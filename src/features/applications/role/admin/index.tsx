import React, { Children, useEffect, useMemo, useState } from 'react';
import { CardWithText, NewCheckboxTable, Tabs } from 'components/custom';
import { Collapse, Grid, Stack } from 'components/system';
import { Button, Input, Label, Pagination } from 'components/ui';

import {
  DAdminApplicationsHead,
  DApplicationStatues,
  DApplicationType,
  DApplicationsFilters,
} from 'features/applications/data';
import {
  MarketPageFilter,
  MarketPageFilterActions,
  ProjectsMain,
  MarketTableItem,
  MarketTableItemLabel,
} from 'features/opportunities/styles';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { SlidersHorizontalIcon } from 'components/svg';
import { useDebounce, usePagination, useSnackbar } from 'hooks';
import { ApplicationAPI } from 'api';
import { getLocations } from 'utilities/locations';
import { getNationalities } from 'utilities/nationalities';
import { getDiets } from 'utilities/diets';
import { getAge } from 'utilities/birthday-age-converter';
import { getSkillsOfOthers } from 'utilities/skillsOfOthers';
import { getCarTheme } from 'utilities/houseTheme';
import { getFieldOfStudies } from 'utilities/fieldOfStudy';
import { getDegrees } from 'utilities/degrees';
import { getSocialMedias } from 'utilities/socialMedias';
import { getLanguages } from 'utilities/languages';
import { IApplication } from 'api/applications/types';
import { useAppContext } from 'context';
import ApplicationStatusActions from './elements/application-status-modal';
import { getJobTitles } from 'utilities/jobTitles';
import { getInterestsAndHobbies } from 'utilities/interests';

const AdminApplicationsPage = () => {
  const { applicationStatus } = useAppContext();
  const [filter, setFilter] = useState<any>(DApplicationsFilters());
  const [totalColumnItems, setTotalColumnItems] = useState<any[]>([]);
  const [checkedusers, setCheckedUsers] = useState<number[]>([]);
  const [applicationTypes, setApplicationTypes] = useState<any[]>([]);
  const [applicationStatues, setApplicationStatues] = useState<any[]>([]);
  const [jobTitles, setJobTitles] = useState<any[]>([]);
  const [locations, setLocations] = useState<any[]>([]);
  const [nationalities, setNationalities] = useState<any[]>([]);
  const [language, setLanguages] = useState<any[]>([]);
  const [socialMedias, setSocialMedias] = useState<any[]>([]);
  const [interests, setInterests] = useState<any[]>([]);
  const [degrees, setDegrees] = useState<any[]>([]);
  const [fieldOfStudy, setFieldOfStudy] = useState<any[]>([]);
  const [themes, setThemes] = useState<any[]>([]);
  const [skillsOfthers, setSkillsOfOthers] = useState<any[]>([]);
  const [diets, setDiets] = useState<any[]>([]);

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabs, setTabs] = useState(0);
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

  const getSocialMediaOptions = async (searchTerm: string = '') => {
    const result = getSocialMedias(searchTerm);
    setSocialMedias(
      result.map((name: any) => ({
        value: name,
        label: name,
      }))
    );
  };

  const getDegreeOptions = async (searchTerm: string = '') => {
    const result = getDegrees(searchTerm);
    setDegrees(
      result.map((name: any) => ({
        value: name,
        label: name,
      }))
    );
  };

  const getFieldOfStudyOptions = async (searchTerm: string = '') => {
    const result = getFieldOfStudies(searchTerm);
    setFieldOfStudy(
      result.map((name: any) => ({
        value: name,
        label: name,
      }))
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

  const getDietsOptions = async (searchTerm: string = '') => {
    const result = getDiets(searchTerm);
    setDiets(
      result.map((name: any) => ({
        value: name,
        label: name,
      }))
    );
  };

  const getApplicationTypes = async () => {
    setApplicationTypes(
      DApplicationType.map((type: any) => ({
        value: type.value,
        label: type.name,
      }))
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

  const getJObTitleOptions = async (searchTerm: string = '') => {
    const result = getJobTitles(searchTerm);
    setJobTitles(
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

  const debouncedLocation = useDebounce(getLocationOptions, 100);
  const debouncedNationalities = useDebounce(getNationalityOptions, 100);
  const debouncedLanguages = useDebounce(getLanguageOptions, 100);
  const debouncedSocialMedias = useDebounce(getSocialMediaOptions, 100);
  // const debouncedSchools = useDebounce(getSchoolAndUniversityOptions, 100);
  const debouncedDegrees = useDebounce(getDegreeOptions, 100);
  const debouncedFieldOfStudy = useDebounce(getFieldOfStudyOptions, 100);
  const debouncedThemes = useDebounce(getThemeOptions, 100);
  const debouncedSkillsOfOthers = useDebounce(getSkillsOfOtherOptions, 100);
  const debouncedDiets = useDebounce(getDietsOptions, 100);
  const debouncedJobTitles = useDebounce(getJObTitleOptions, 100);
  const debouncedInterests = useDebounce(getInterestsOptions, 100);

  useEffect(() => {
    getLocationOptions();
    getNationalityOptions();
    getLanguageOptions();
    getSocialMediaOptions();
    getDegreeOptions();
    getDietsOptions();
    // getSchoolAndUniversityOptions();
    getFieldOfStudyOptions();
    getThemeOptions();
    getSkillsOfOtherOptions();
    getApplicationStatues();
    getApplicationTypes();
    getJObTitleOptions();
  }, []);

  const applyFilters = () => {
    getAllApplications()
      .then((data) => {
        let applications = data;
        console.log(applications);
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
    if (headItem.reference === 'nationality') {
      return application.owner.nationality;
    }
    if (headItem.reference === 'age') {
      return getAge(application.owner.dateOfBirth);
    }
    if (headItem.reference === 'applications') {
      return application.owner.applicationCount;
    }
    if (headItem.reference === 'invested') {
      return `€${application.owner.invested}`;
    }
    if (headItem.reference === 'house') {
      return (
        <MarketTableItem>
          {/* <Image
            alt="house photo"
            src={`${Project.apis.v1}/public/images/${application.house.images.find(
              (item) => item.id === application.house.thumbnailId
            )?.key}`}
            width={100}
            height={100}
            style={{
              height: '32px',
              width: '32px',
              borderRadius: '8px',
              objectFit: 'cover',
            }}
          /> */}
          <MarketTableItemLabel>{application.house.name}</MarketTableItemLabel>
        </MarketTableItem>
      );
    }
    if (headItem.reference === 'theme') {
      return application.house.theme;
    }
    if (headItem.reference === 'location') {
      return application.house.location;
    }
    if (headItem.reference === 'type') {
      return application.tier;
    }
    if (headItem.reference === 'rent') {
      return `€${application.house.rent}`;
    }
    if (headItem.reference === 'status') {
      return application.status;
    }
    if (headItem.reference === 'tier') {
      return application.tier;
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
              <Tabs
                tabs={['Info', 'Work Experience', 'Education', 'Car']}
                value={tabs}
                onValue={setTabs}
              />
              <MarketPageFilter>
                {tabs === 0 && (
                  <Grid columns={4}>
                    <Input
                      type="text"
                      label="Search"
                      placeholder="Please Enter"
                      value={filter.search}
                      onValue={(search) => setFilter({ ...filter, search })}
                    />
                    <Input
                      type="multiselect"
                      label="Application Type"
                      placeholder="Please Select"
                      value={filter.applicationType}
                      options={applicationTypes}
                      onValue={(applicationType) =>
                        setFilter({ ...filter, applicationType })
                      }
                    />
                    <Input
                      type="multiselect"
                      label="Nationality"
                      options={nationalities}
                      onSearch={debouncedNationalities}
                      placeholder="Please Select"
                      value={filter.nationality}
                      onValue={(nationality) =>
                        setFilter({ ...filter, nationality })
                      }
                    />
                    <Input
                      type="min-max"
                      label="Age"
                      value={filter.age}
                      onValue={(age) => setFilter({ ...filter, age })}
                    />
                    <Input
                      type="multiselect"
                      label="Language"
                      placeholder="Please Select"
                      onSearch={debouncedLanguages}
                      options={language}
                      value={filter.language}
                      onValue={(language) => setFilter({ ...filter, language })}
                    />
                    <Input
                      type="multiselect"
                      label="Location"
                      placeholder="Please Select"
                      onSearch={debouncedLocation}
                      value={filter.location}
                      options={locations}
                      onValue={(location) => setFilter({ ...filter, location })}
                    />
                    <Input
                      type="min-max"
                      label="Invested"
                      value={filter.invested}
                      onValue={(invested) => setFilter({ ...filter, invested })}
                    />
                    <Input
                      type="multiselect"
                      label="Social Media"
                      placeholder="Please Select"
                      onSearch={debouncedSocialMedias}
                      value={filter.socialMedia}
                      options={socialMedias}
                      onValue={(socialMedia) =>
                        setFilter({ ...filter, socialMedia })
                      }
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
                      options={applicationStatues}
                      value={filter.status}
                      onValue={(status) => setFilter({ ...filter, status })}
                    />
                    <Stack>
                      <Label
                        style={{ color: '#7E839F', marginBottom: '-1.1rem' }}
                      >
                        Date Range
                      </Label>
                      <Stack direction="horizontal">
                        <Input
                          type="date"
                          placeholder="Please Select"
                          value={filter.dateFrom}
                          onValue={(dateFrom) =>
                            setFilter({ ...filter, dateFrom })
                          }
                        />
                        <Input
                          type="date"
                          placeholder="Please Select"
                          value={filter.dateTo}
                          onValue={(dateTo) => setFilter({ ...filter, dateTo })}
                        />
                      </Stack>
                    </Stack>
                  </Grid>
                )}
                {tabs === 1 && (
                  <Grid columns={4}>
                    <Input
                      type="multiselect"
                      label="Job Title"
                      placeholder="Please Select"
                      options={jobTitles}
                      value={filter.jobTitle}
                      onValue={(jobTitle) => setFilter({ ...filter, jobTitle })}
                    />
                    <Input
                      type="text"
                      label="Company"
                      placeholder="Please Enter"
                      value={filter.company}
                      onValue={(company) => setFilter({ ...filter, company })}
                    />
                    <Input
                      type="multiselect"
                      label="Location"
                      placeholder="Please Select"
                      onSearch={debouncedLocation}
                      value={filter.workExperienceLocation}
                      options={locations}
                      onValue={(workExperienceLocation) =>
                        setFilter({ ...filter, workExperienceLocation })
                      }
                    />
                    <Input
                      type="select"
                      label="Currently Employed"
                      placeholder="Please Select"
                      value={filter.currentlyEmployed}
                      onValue={(currentlyEmployed) =>
                        setFilter({ ...filter, currentlyEmployed })
                      }
                      options={[
                        {
                          value: 'true',
                          label: 'Yes',
                        },
                        {
                          value: 'false',
                          label: 'No',
                        },
                      ]}
                    />
                  </Grid>
                )}
                {tabs === 2 && (
                  <Grid columns={4}>
                    <Input
                      type="text"
                      label="School or University"
                      placeholder="Please Enter"
                      value={filter.school}
                      onValue={(school) => setFilter({ ...filter, school })}
                    />
                    <Input
                      type="multiselect"
                      label="Degree"
                      placeholder="Please Select"
                      options={degrees}
                      value={filter.degree}
                      onValue={(degree) => setFilter({ ...filter, degree })}
                    />
                    <Input
                      type="multiselect"
                      label="Field of Study"
                      options={fieldOfStudy}
                      placeholder="Please Select"
                      value={filter.fieldOfStudy}
                      onValue={(fieldOfStudy) =>
                        setFilter({ ...filter, fieldOfStudy })
                      }
                    />
                  </Grid>
                )}
                {tabs === 3 && (
                  <Grid columns={4}>
                    <Input
                      type="multiselect"
                      label="Theme"
                      onSearch={debouncedThemes}
                      placeholder="Please Select"
                      options={themes}
                      value={filter.theme}
                      onValue={(theme) => setFilter({ ...filter, theme })}
                    />
                    <Input
                      type="multiselect"
                      label="Skills of Others"
                      placeholder="Please Select"
                      onSearch={debouncedSkillsOfOthers}
                      value={filter.skillsOfOthers}
                      options={skillsOfthers}
                      onValue={(skillsOfOthers) =>
                        setFilter({ ...filter, skillsOfOthers })
                      }
                    />
                    <Input
                      type="multiselect"
                      label="Location"
                      placeholder="Please Select"
                      onSearch={debouncedLocation}
                      options={locations}
                      value={filter.houseLocation}
                      onValue={(houseLocation) =>
                        setFilter({ ...filter, houseLocation })
                      }
                    />
                    <Input
                      type="multiselect"
                      label="Language"
                      placeholder="Please Select"
                      onSearch={debouncedLanguages}
                      options={language}
                      value={filter.houseLanguage}
                      onValue={(houseLanguage) =>
                        setFilter({ ...filter, houseLanguage })
                      }
                    />
                    <Input
                      type="min-max"
                      label="Monthly Rent"
                      value={filter.monthlyRent}
                      onValue={(monthlyRent) =>
                        setFilter({ ...filter, monthlyRent })
                      }
                    />
                    <Input
                      type="min-max"
                      label="Age"
                      value={filter.houseAge}
                      onValue={(houseAge) => setFilter({ ...filter, houseAge })}
                    />
                    <Input
                      type="min-max"
                      label="Tenants per Car"
                      value={filter.tenantsPerCar}
                      onValue={(tenantsPerCar) =>
                        setFilter({ ...filter, tenantsPerCar })
                      }
                    />
                    <Input
                      type="multiselect"
                      label="Interests and Hobbies"
                      placeholder="Please Select"
                      onSearch={debouncedInterests}
                      options={interests}
                      value={filter.interestsAndHobbies}
                      onValue={(interestsAndHobbies) =>
                        setFilter({ ...filter, interestsAndHobbies })
                      }
                    />
                    <Input
                      type="multiselect"
                      label="Diet"
                      options={diets}
                      placeholder="Please Select"
                      onSearch={debouncedDiets}
                      value={filter.diet}
                      onValue={(diet) => setFilter({ ...filter, diet })}
                    />
                  </Grid>
                )}
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
            head={DAdminApplicationsHead}
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
    </ProjectsMain>
  );
};

export default AdminApplicationsPage;
