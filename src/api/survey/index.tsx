import axios from 'axios';
import Project from 'constants/project';
import { TCreateSurveyParams } from 'api/survey/types';

const SurveyAPI = {
  registerAsInfluencer: async (body: TCreateSurveyParams) => {
    const { data } = await axios.post(`${Project.apis.v1}/admin/surveys`, body);
    return data;
  },
};

export default SurveyAPI;
