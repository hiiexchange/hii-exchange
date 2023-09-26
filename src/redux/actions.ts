import type { coinDataType } from "../types/types";

export const SELECT_INPUT_TOKEN = 'SELECT_INPUT_TOKEN';
export const SELECT_OUTPUT_TOKEN = 'SELECT_OUTPUT_TOKEN';

export const selectInputToken = (token: coinDataType) => ({
  type: SELECT_INPUT_TOKEN,
  payload: token,
});

export const selectOutputToken = (token: coinDataType) => ({
  type: SELECT_OUTPUT_TOKEN,
  payload: token,
});
