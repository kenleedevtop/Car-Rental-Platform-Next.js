/* eslint-disable no-shadow */
// eslint-disable-next-line import/named
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

import { FormData } from '../..';

type Step2FormProps = {
  formData: FormData;
  setFormData: any;
};

const Step = ({ formData, setFormData }: Step2FormProps) => {
  const { birthDate, location, gender, diseaseAreas, experienceAs, ethnicity } =
    formData;

  const [loading, setLoading] = useState(false);

  const [locations, setLocations] = useState([]);
  const [diseaseAreas2, setDiseaseAreas] = useState([]);
  const [ethnicities, setEthnicities] = useState([]);
  const [stakeholder, setStakeholders] = useState([]);
  const [genders, setGenders] = useState([]);

  const getLocations = async (s: string = '') => {
    setLoading(true);
    const { result } = await LocationAPI.getAll(s);
    setLocations(
      result.map((data: any) => ({
        value: data.id,
        label: `${
          data.country ? `${(data.name, data.country.name)}` : data.name
        }`,
      }))
    );
    setLoading(false);
  };

  const getDiseaseArea = async (s: string = '') => {
    setLoading(true);
    const { result } = await DiseaseAreaAPI.getAll(s);

    setDiseaseAreas(
      result.map((item: any) => ({
        value: item.id,
        label: item.name,
      }))
    );
    setLoading(false);
  };

  const getEthnicity = async () => {
    const result = await EnumsApi.getEthnicities();

    setEthnicities(
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

  // const handleNewTag = (v: any) => {
  //   setFilter({ ...filter, diseaseAreas: [...filter.diseaseAreas, v] });
  // };

  useEffect(() => {
    getLocations();
    getDiseaseArea();
    getEthnicity();
    getStakeholders();
    getGenders();
  }, []);

  const { user } = useAppContext();

  const [id, setId] = useState(user.influencer.id);

  // const updateInfluencer = async () => {
  //   await InfluencerAPI.updateInfluencer(
  //     {
  //       locationId: filter.location.value || undefined,
  //       gender: filter.gender.value || undefined,
  //       dateOfBirth: filter.birthDate || undefined,
  //       ethnicityId: filter.ethnicity.value || undefined,
  //       diseaseAreas: filter.diseaseArea.map((x: any) => x.value) || [],
  //     },
  //     id
  //   );
  // };

  return (
    <StepContainer>
      <StepForm>
        <StepStack direction="horizontal">
          <Input
            type="date"
            label="Date of Birth"
            placeholder="Please Select"
            required
            value={birthDate}
            // onValue={(birthDate) => setFilter({ ...filter, birthDate })}
            onValue={(birthDate) => setFormData({ ...formData, birthDate })}
          />
          <Input
            type="select"
            label="Location"
            onSearch={debounce(getLocations, 250)}
            placeholder="Please Select"
            value={location}
            required
            loading={loading}
            options={locations}
            // onValue={(location) => setFilter({ ...filter, location })}
            onValue={(location) => setFormData({ ...formData, location })}
          />
        </StepStack>
        <StepStack direction="horizontal">
          <Input
            type="select"
            label="Gender"
            placeholder="Please Select"
            value={gender}
            required
            // onValue={(gender) => setFilter({ ...filter, gender })}
            onValue={(gender) => setFormData({ ...formData, gender })}
            options={genders}
          />
          <Input
            type="multiselect"
            label="Disease Area"
            placeholder="Please Select"
            value={diseaseAreas}
            required
            onSearch={debounce(getDiseaseArea, 250)}
            onValue={(diseaseAreas) =>
              setFormData({ ...formData, diseaseAreas })
            }
            // onValue={(input) => setFilter({ ...filter, diseaseArea: input })}
            // onNewTag={handleNewTag}
            loading={loading}
            options={diseaseAreas2}
          />
        </StepStack>
        <StepStack direction="horizontal">
          <Input
            type="select"
            label="Ethnicity"
            placeholder="Please Select"
            value={ethnicity}
            required
            onValue={(ethnicity) => setFormData({ ...formData, ethnicity })}
            // onValue={(input) => setFilter({ ...filter, ethnicity: input })}
            options={ethnicities}
          />
          <Input
            type="select"
            label="Experience As"
            placeholder="Please Select"
            value={experienceAs}
            required
            // onValue={(experienceAs) => setFilter({ ...filter, experienceAs })}
            onValue={(experienceAs) =>
              setFormData({ ...formData, experienceAs })
            }
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
