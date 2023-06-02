import { Input } from 'components/ui';
import React, { useEffect, useState } from 'react';

import {
  StepContainer,
  StepForm,
  StepStack,
  StepText,
} from 'components/custom/stepper/stepper-steps/step-2/style';
import { DiseaseAreaAPI, EnumsApi, InfluencerAPI, LocationAPI } from 'api';
import { useAppContext } from 'context';

const Step = () => {
  const [filter, setFilter] = useState<any>({
    birthDate: null,
    location: null,
    gender: null,
    diseaseArea: [],
    experienceAs: null,
    ethnicity: null,
  });

  const [loading, setLoading] = useState(false);

  const [locations, setLocations] = useState([]);
  const [diseaseArea, setDiseaseArea] = useState([]);
  const [ethnicity, setEthnicity] = useState([]);
  const [stakeholder, setStakeholders] = useState([]);
  const [genders, setGenders] = useState([]);

  const getLocations = async (s: string = '') => {
    setLoading(true);
    const { result } = await LocationAPI.getAll(s);
    setLocations(
      result.map((data: any) => ({
        value: data.id,
        label: data.name,
      }))
    );
    setLoading(false);
  };

  const getDiseaseArea = async (s: string = '') => {
    setLoading(true);
    const { result } = await DiseaseAreaAPI.getAll(s);

    setDiseaseArea(
      result.map((item: any) => ({
        value: item.id,
        label: item.name,
      }))
    );
    setLoading(false);
  };

  const getEthnicity = async () => {
    const result = await EnumsApi.getEthnicities();

    setEthnicity(
      result.map((x: any) => ({
        value: x.id,
        label: x.name,
      }))
    );
  };

  const getStakeholders = async () => {
    const result = await EnumsApi.getStakeholderTypes();

    setStakeholders(
      result.map((x: any) => ({
        value: x.value,
        label: x.name,
      }))
    );
  };

  const getGenders = async () => {
    const result = await EnumsApi.getGenders();

    setGenders(
      result.map((x: any) => ({
        value: x.value,
        label: x.name,
      }))
    );
  };

  const debounce = (func: any, wait: any) => {
    let timeout: any;

    return (...args: any) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const handleNewTag = (v: any) => {
    setFilter({ ...filter, diseaseAreas: [...filter.diseaseAreas, v] });
  };

  useEffect(() => {
    getLocations();
    getDiseaseArea();
    getEthnicity();
    getStakeholders();
    getGenders();
  }, []);

  const { user } = useAppContext();

  const [id, setId] = useState(user.influencer.id);

  const updateInfluencer = async () => {
    await InfluencerAPI.updateInfluencer(
      {
        locationId: filter.location.value || undefined,
        gender: filter.gender.value || undefined,
        dateOfBirth: filter.birthDate || undefined,
        ethnicityId: filter.ethnicity.value || undefined,
        diseaseAreas: filter.diseaseArea.map((x: any) => x.value) || [],
      },
      id
    );
  };

  return (
    <StepContainer>
      <StepForm>
        <StepStack direction="horizontal">
          <Input
            type="date"
            label="Date of Birth"
            placeholder="Please Select"
            value={filter.birthDate}
            onValue={(birthDate) => setFilter({ ...filter, birthDate })}
          />
          <Input
            type="select"
            label="Location"
            onSearch={debounce(getLocations, 1000)}
            placeholder="Please Select"
            value={filter.location}
            loading={loading}
            options={locations}
            onValue={(location) => setFilter({ ...filter, location })}
          />
        </StepStack>
        <StepStack direction="horizontal">
          <Input
            type="select"
            label="Gender"
            placeholder="Please Select"
            value={filter.gender}
            onValue={(gender) => setFilter({ ...filter, gender })}
            options={genders}
          />
          <Input
            type="multiselect"
            label="Disease Area"
            placeholder="Please Select"
            value={filter.diseaseArea}
            onSearch={debounce(getDiseaseArea, 1000)}
            onValue={(input) => setFilter({ ...filter, diseaseArea: input })}
            onNewTag={handleNewTag}
            loading={loading}
            options={diseaseArea}
          />
        </StepStack>
        <StepStack direction="horizontal">
          <Input
            type="select"
            label="Ethnicity"
            placeholder="Please Select"
            value={filter.ethnicity}
            onValue={(input) => setFilter({ ...filter, ethnicity: input })}
            options={ethnicity}
          />
          <Input
            type="select"
            label="Experience As"
            placeholder="Please Select"
            value={filter.experienceAs}
            onValue={(experienceAs) => setFilter({ ...filter, experienceAs })}
            options={stakeholder}
          />
        </StepStack>
        <StepText>
          *These details allows us to match you with fitting projects based on
          the client-set criteria, boosting your opportunities and income.{' '}
          <br />
          Your profile and data will stay anonymised to others at all times,
          unless you explicitly consent to share it to a specific client during
          your campaign application (first name and username only).
        </StepText>
      </StepForm>
    </StepContainer>
  );
};

export default Step;
