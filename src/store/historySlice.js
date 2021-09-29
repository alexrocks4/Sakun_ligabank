import { createSlice, nanoid } from '@reduxjs/toolkit';
import { loadHistoryState } from '../local-storage';

const MAX_ENTRIES = 10;

const initialState = {
  historyItems: [],
  isLoading: true,
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    historyItemAdded: {
      reducer(state, { payload }) {
        state.historyItems.unshift(payload);

        if (state.historyItems.length > MAX_ENTRIES) {
          state.historyItems.pop();
        }
      },
      prepare(payload) {
        return {
          payload: {
            ...payload,
            id: nanoid(),
          },
        };
      },
    },

    historyItemsLoaded(state, { payload }) {
      state.historyItems = payload;
      state.isLoading = false;
    },

    historyCleared(state) {
      state.historyItems = [];
    },
  },
});

const {
  historyItemAdded,
  historyItemsLoaded,
  historyCleared,
} = historySlice.actions;

const selectHistoryItems = (state) => state.history.historyItems;
const selectIsHistoryLoading = (state) => state.history.isLoading;

const loadHistoryItems = () => (dispatch, _getState) => {
  const persistedItems = loadHistoryState();
  const loadedHistoryItems = persistedItems === undefined
    ? initialState.historyItems
    : persistedItems;
  dispatch(historyItemsLoaded(loadedHistoryItems));
};

export {
  historySlice,
  historyItemAdded,
  historyCleared,
  loadHistoryItems,
  selectHistoryItems,
  selectIsHistoryLoading
};
