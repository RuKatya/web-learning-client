import axios from 'axios';
import { API_BASE_URL, config } from 'config/api';

export async function getData<T>(url: string): Promise<T> {
  return await axios
    .get<T>(API_BASE_URL + url, config)
    .then(({ data }) => {
      return data;
    })
    .catch((data) => {
      if (axios.isAxiosError(data)) {
        throw data.response?.data.message;
      } else {
        throw new Error('An unexpected error occurred');
      }
    });
}

export async function postData<T, K>(url: string, body: T): Promise<K> {
  return await axios
    .post<K>(API_BASE_URL + url, body, config)
    .then(({ data }) => {
      return data;
    })
    .catch((data) => {
      if (axios.isAxiosError(data)) {
        throw data.response?.data.message;
      } else {
        throw new Error('An unexpected error occurred');
      }
    });
}

export async function deleteData<T, K>(url: string, body: T): Promise<K> {
  return await axios
    // .delete<K>(API_BASE_URL + url, { data: { body }, headers: config })
    .delete<K>(API_BASE_URL + url, body)
    .then(({ data }) => {
      return data;
    })
    .catch((data) => {
      if (axios.isAxiosError(data)) {
        throw data.response?.data.message;
      } else {
        throw new Error('An unexpected error occurred');
      }
    });
}
