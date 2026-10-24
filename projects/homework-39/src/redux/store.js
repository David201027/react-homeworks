import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';
import { login, register, logout, refreshUser } from './authOperations';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

let previousToken = store.getState().auth.token;

store.subscribe(() => {
  const token = store.getState().auth.token;

  if (token !== previousToken) {
    previousToken = token;

    if (token) {
      localStorage.setItem('hw39_token', token);
    } else {
      localStorage.removeItem('hw39_token');
    }
  }
});

export const authActions = {
  login,
  register,
  logout,
  refreshUser,
};