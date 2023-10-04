import { configureStore } from '@reduxjs/toolkit';
import { guardianApi } from './guardian/guardian.api';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [guardianApi.reducerPath]: guardianApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(guardianApi.middleware),
});

setupListeners(store.dispatch);
