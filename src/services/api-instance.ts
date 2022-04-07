import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://artisant.io/api/',
});

instance.interceptors.response.use((response) => {
  return response.data.data;
}, (error) => {
  if (error.response) {
    return 'client received an error response (5xx, 4xx)';
  } else if (error.request) {
    return 'client never received a response, or request never left';
  } else {
    return 'unexpected error';
  }
});
