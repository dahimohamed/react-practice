import { client } from './fetchClient';

export const getTodos = (userId) => {
  return client.get(`/todos?userId=${userId}`);
};

// Add more methods here
export const creatTodos = (title) => {
  return client.post('/todos', {
    userId: 1,
    completed: false,
    title,
  });
};

export const removeTodo = (todoId) => {
  return client.delete(`/todos/${todoId}`);
};
