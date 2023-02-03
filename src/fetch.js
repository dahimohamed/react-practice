const BASE_URL = 'http://jsonplaceholder.typicode.com';

export const request = (url, options) => {
    return fetch(`${BASE_URL}${url}`, options)
        .then((response) => {
            if (!response.ok) {
                return Promise.reject(
                    `${response.status} - ${response.statusText}`
                );
            }

            return response.json();
        })
};

export const post = (url, data) => {
  return request(url, {
    method: 'post',
    headers: {
      'content-type': 'application/json; charset=UFT-8',
    },
    body: JSON.stringify(data),
  });
};
