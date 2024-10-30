import AsyncStorage from '@react-native-async-storage/async-storage';
import {authService} from '../services/auth';

const getLocalGreeting = (): string => {
  const now = new Date();
  const hours = now.getHours();
  let greeting;
  if (hours >= 5 && hours < 12) {
    greeting = '¡Buenos días!';
  } else if (hours >= 12 && hours < 17) {
    greeting = '¡Buenas tardes!';
  } else {
    greeting = '¡Buenas noches!';
  }
  return greeting;
};

const refreshLocalAccessToken = () => {
  return new Promise(async (resolve, reject) => {
    const noControl = await AsyncStorage.getItem('username');
    const password = await AsyncStorage.getItem('password');

    if (!noControl || !password) {
      reject('No se encontraron credenciales');
    }

    authService
      .signinService(noControl, password)
      .then(async (res: any) => {
        const data = res.result.access;
        if (data.passwordURL) {
          await AsyncStorage.setItem('username', noControl);
          await AsyncStorage.setItem('password', password);

          await AsyncStorage.setItem('passwordURL', data.passwordURL);
          await AsyncStorage.setItem('controlURL', data.controlURL);
          await AsyncStorage.setItem('psieURL', data.psieURL);
          await AsyncStorage.setItem('dummyURL', data.dummyURL);
          resolve(data);
        } else {
          reject('No se encontraron credenciales');
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};

const handleSaveData = async (data: any) => {
  await AsyncStorage.setItem('studentData', JSON.stringify(data));
};

const handleGetData = async () => {
  const data = await AsyncStorage.getItem('studentData');
  return JSON.parse(data);
};

export const helpers = {
  getLocalGreeting,
  refreshLocalAccessToken,
  handleSaveData,
  handleGetData,
};
