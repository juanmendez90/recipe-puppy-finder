import api from '../api';

export default function (query, page) {
  return api.get(`?q=${query}&p=${page}`);
}
