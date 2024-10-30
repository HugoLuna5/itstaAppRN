import {constants} from '../utils/constants';

const getData = async (
  controlURL: string,
  passwordURL: string,
  psieURL: string,
  dummyURL: string,
) => {
  return new Promise((resolve, reject) => {
    console.log(`${constants.API_URL}student`);

    console.log(controlURL, passwordURL, psieURL, dummyURL);
    fetch(`${constants.API_URL}student`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        controlURL: controlURL,
        passwordURL: passwordURL,
        psieURL: psieURL,
        dummyURL: dummyURL,
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

export const studentService = {
  getData,
};
