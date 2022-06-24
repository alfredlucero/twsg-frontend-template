import { createSlice, createAction } from '@reduxjs/toolkit';

export interface AppConfigState {
  loaded: boolean;
  config: AppConfig;
}

const appConfigState: AppConfigState = {
  loaded: false,
  config: {} as AppConfig,
};

export const configureApplication = createAction<AppConfig>(
  'CONFIGURE_APPLICATION'
);

export const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState: appConfigState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(configureApplication, (state, action) => {
      state.loaded = true;
      state.config = action.payload;
    });
  },
});
