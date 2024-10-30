import {constants} from '../utils/constants';

const getNewsCategory = async () => {
  return new Promise((resolve, reject) => {
    fetch(`${constants.API_NEWSFEED_URL}categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
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

const getNews = async () => {
  return new Promise((resolve, reject) => {
    console.log(constants.API_URL);
    fetch(`${constants.API_NEWSFEED_URL}posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
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

const getThumbnail = async (mediaId: string) => {
  return new Promise((resolve, reject) => {
    fetch(`${constants.API_NEWSFEED_URL}media/${mediaId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
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

export const newsService = {
  getNewsCategory,
  getNews,
  getThumbnail,
};
