import { configureStore } from '@reduxjs/toolkit';
import { guardianApi } from './guardian/guardian.api';

export const store = configureStore({
  reducer: {
    [guardianApi.reducerPath]: guardianApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(guardianApi.middleware),
});
