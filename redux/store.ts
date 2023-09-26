import { createStore } from "redux";
import type { coinDataType } from "../types/types";

interface AppState {
  inputToken: null | coinDataType;
  outputToken: null | coinDataType;
}

// Initial state
const initialState: AppState = {
  inputToken: null,
  outputToken: null,
};
// Action types
const SELECT_INPUT_TOKEN = 'SELECT_INPUT_TOKEN';
const SELECT_OUTPUT_TOKEN = 'SELECT_OUTPUT_TOKEN';

// Define action interfaces
interface SelectInputTokenAction {
  type: typeof SELECT_INPUT_TOKEN;
  payload: coinDataType;
}

interface SelectOutputTokenAction {
  type: typeof SELECT_OUTPUT_TOKEN;
  payload: coinDataType;
}

// Create a union type for all possible actions
type AppActionTypes = SelectInputTokenAction | SelectOutputTokenAction;

// Reducer
const rootReducer = (state: AppState = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case SELECT_INPUT_TOKEN:
      return { ...state, inputToken: action.payload };
    case SELECT_OUTPUT_TOKEN:
      return { ...state, outputToken: action.payload };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(rootReducer);

export default store;
