import { createSlice, nanoid } from '@reduxjs/toolkit';

const MAX_ENTRIES = 10;

const historySlice = createSlice({
  name: 'history',
  initialState: [],
  reducers: {
    historyItemAdded: {
      reducer(state, { payload }) {
        state.push(payload);

        if (state.length > MAX_ENTRIES) {
          state.shift();
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

    historyCleared(state) {
      state = [];
    },
  },
});

const { historyItemAdded, historyCleared } = historySlice.actions;

export {
  historySlice,
  historyItemAdded,
  historyCleared
};
