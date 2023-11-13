import axios from 'axios';

const phonebookInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const requestRegister = async formData => {
  const { data } = await phonebookInstance.post('/users/signup', formData);
  setToken(data.token);

  return data;
};

export const requestLogin = async formData => {
  const { data } = await phonebookInstance.post('/users/login', formData);
  setToken(data.token);

  return data;
};
export const requestLogout = async () => {
  const { data } = await phonebookInstance.post('/users/logout');
  console.log(data);

  return data;
};

export const requestRefreshUser = async () => {
  const { data } = await phonebookInstance.get('/users/current');

  return data;
};

export const setToken = token => {
  phonebookInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// export const clearToken = () => {
//   contactsInstance.defaults.headers.common.Authorization = '';
// };

// export const requestContacts = async () => {
//   const { data } = await contactsInstance.get('/contacts');
//   return data;
// };

// export const requestAddContact = async newContact => {
//   const { data } = await contactsInstance.post('/contacts', newContact);
//   return data;
// };

// export const requestDeleteContact = async contactId => {
//   const { data } = await contactsInstance.delete(`/contacts/${contactId}`);
//   return data;
// };
