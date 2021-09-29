import { historySlice, selectHistoryItems, selectIsHistoryLoading } from './historySlice';
import { api } from './apiSlice';
import { configureStore } from '@reduxjs/toolkit';
import { saveHistoryState } from '../local-storage';
import throttle from 'lodash/throttle';

const THROTTLE_TIMEOUT_IN_MS = 1000;

// Function to make store observable. As an example for localStorage syncing.
// https://github.com/reduxjs/redux/issues/303
function observeStore(store, select, onChange) {
  let currentState;

  function handleChange() {
    const appState = store.getState();
    const nextState = select(appState);
    if (nextState !== currentState) {
      currentState = nextState;
      onChange(currentState, appState);
    }
  }

  const unsubscribe = store.subscribe(handleChange);
  handleChange();
  return unsubscribe;
}

// Configure store
const appStore = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    history: historySlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

const handleHistoryItemsChange = (historyItemsState, appState) => {
  // Do not overwrite saved localStorage data on loading
  if (selectIsHistoryLoading(appState)) {
    return;
  }

  saveHistoryState(historyItemsState);
};

// Save history to localStorage on each corresponding storage data change
observeStore(appStore, selectHistoryItems, throttle(handleHistoryItemsChange, THROTTLE_TIMEOUT_IN_MS));

export { appStore  };
