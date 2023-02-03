
console.log('heloo');

// const url = 'http://127.0.0.1:5500/public/app.js';
// const url = 'http://127.0.0.1:5500/public/goods';
// const BASE_URL = 'https://jsonplaceholder.typicode.com';
const BASE_URL = 'https://mate.academy/students-api/todos?userId=1';
// const BASE_URL = 'https://mocki.io/v1/878faee5-6d25-4012-9f58-1f9c4b797ded';

// const url = `${BASE_URL}/todos`;

// const request = (url, options) => {
//     return fetch(`${BASE_URL}${url}`, options)
//         .then((response) => {
//             if (!response.ok) {
//                 return Promise.reject(
//                     `${response.status} - ${response.statusText}`
//                 );
//             }
      
//             if (!response.headers.get('content-type').includes('application/json')) {
//                 return Promise.reject(
//                     'Content-type is not suported'
//                 )
//             }
      
//             return response.json();
//         })
//     // .then((result) => result.data);
// };
const request = (url, options) => {
    return fetch(`${BASE_URL}${url}`, options)
        .then((response) => {
            if (!response.ok) {
                return Promise.reject(
                    `${response.status} - ${response.statusText}`
                );
            }
      
            if (!response.headers.get('content-type').includes('application/json')) {
                return Promise.reject(
                    'Content-type is not suported'
                )
            }
      
            return response.json();
        })
    // .then((result) => result.data);
};

const post = (url, data) => {
    return request(
        url,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application; charset=UFT-8',
            },
            body: JSON.stringify(data),
        }
    )
}

const patch = (url, data) => {
    return request(
        url,
        {
            method: 'PATCH',
            headers: {
                'Content-type': 'application; charset=UFT-8',
            },
            body: JSON.stringify(data),
        }
    )
}

const remove = (url) => {
    return request(url, { method: 'DELETE' });
}

// const getTodos = () => request('/todos');

// const getUsers = () => request('/users');

const getUserById = (userId) => request(`/users/${userId}`);
const getTodoById = (todoId) => request(`/todos/${todoId}`);

const creatTodo = (title) => {
    return post('/todos?userId=6073', {
        userId: 1,
        completed: false,
        title,
   })
}

const updateTodo = (todoId, title) => {
    return patch(`/todos/${todoId}`, { title });
}

const deleteTodo = (todoId) => {
    return remove(`/todos/${todoId}`);
}

creatTodo('ali')
    .then(print)
    .catch(logError);

// getUsers()
//     .then(print)
//     .catch(logError);

// getUserById(1)
//     .then(print)
//     .catch(logError);

// getTodoById(12)
//     .then(print)
//     .catch(logError);

function print(value) {
    console.log(value);
}

function logError(error) {
    console.log(error);
}
