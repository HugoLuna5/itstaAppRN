import { constants } from '../utils/constants';

const signinService = (ncontrol: string, password: string) => {
  return new Promise((resolve, reject) => {

    console.log(ncontrol, password);
    console.log(constants.API_URL);
    fetch(`${constants.API_URL}auth/student`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: ncontrol,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(json => {
        resolve(json);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const authService = {
  signinService,
};