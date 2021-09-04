import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { LOCAL_STORAGE } from '../constants';
import counterReducer from '../features/counter/counterSlice';
import { tokenReducer, TokenState } from '../reducer/token/token.slicer';
import { setLocalStorage } from '../utils';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    token: tokenReducer
  },
});


store.subscribe(() => {
  setLocalStorage<TokenState>(store.getState().token, LOCAL_STORAGE.TOKEN);
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
