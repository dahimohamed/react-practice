import { request } from './fetch';

export const getUsers = () => {
  return request('/users');
};

export const getUser = (userId) => {
  return request(`/users/${userId}`)
};

export const getUserTodos = (userId) => {
    return request(`/users/${userId}/todos`)
};
