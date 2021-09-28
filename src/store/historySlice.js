import { createSlice, nanoid } from '@reduxjs/toolkit';

const MAX_ENTRIES = 10;

const historySlice = createSlice({
  name: 'history',
  initialState: [],
  reducers: {
    historyItemAdded: {
      reducer(state, { payload }) {
        state.unshift(payload);

        if (state.length > MAX_ENTRIES) {
          state.pop();
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

    historyCleared() {
      return [];
    },
  },
});

const selectHistoryItems = (state) => state.history;

const { historyItemAdded, historyCleared } = historySlice.actions;

export {
  historySlice,
  historyItemAdded,
  historyCleared,
  selectHistoryItems
};
