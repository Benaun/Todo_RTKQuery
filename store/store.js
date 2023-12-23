import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { todosApi } from './todosApi';

const rootReducer = combineReducers({
  [todosApi.reducerPath]: todosApi.reducer,
});
 
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
});

export default store;
