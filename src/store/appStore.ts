import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { api } from './rtkQuery/apiSlice';
import { appConfigSlice } from './appConfigSlice';

const rootReducer = combineReducers({
  // RTK Query / GraphQL slice
  [api.reducerPath]: api.reducer,
  appConfig: appConfigSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: '',
      },
    }).concat(api.middleware),
});

setupListeners(appStore.dispatch);

export type AppStore = typeof appStore;
export type AppDispatch = typeof appStore.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
