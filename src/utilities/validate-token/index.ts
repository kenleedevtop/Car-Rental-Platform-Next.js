import { AuthorizationAPI } from 'api';
import Project from 'constants/project';

export const validateToken = async () => {
  try {
    // const user = await fetch(`${Project.apis.v1}/pingAuth`, {
    //   method: 'GET',
    //   credentials: 'include'
    // }).then((x) => {
    //   console.log(x.status, x.statusText);

    //   if (x.ok) {
    //     return x.json()
    //   }
    //   throw new Error('Invalid token.')
    // });
    const user = await AuthorizationAPI.pingAuth();

    return true;
  } catch {
    return false;
  }
};
