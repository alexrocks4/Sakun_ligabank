import { LocalStorageKey } from './const';

const saveState = (storageKey, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(storageKey, serializedState);
  } catch (error) {
    return error;
  }
};

const loadState = (storageKey) => {
  try {
    const serializedState = localStorage.getItem(storageKey);

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);

  } catch (_) {
    return undefined;
  }
};

const saveHistoryState = (state) => saveState(LocalStorageKey.HISTORY, state);
const loadHistoryState = () => loadState(LocalStorageKey.HISTORY);

export {
  saveState,
  saveHistoryState,
  loadHistoryState
};
