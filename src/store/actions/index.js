import {
  FETCH_WORDS_REQUEST,
  FETCH_WORDS_SUCCESS,
  FETCH_WORDS_ERROR,
  ADD_WORD_REQUEST,
  ADD_WORD_SUCCESS,
  ADD_WORD_ERROR,
} from "./types";
var Backend = require("../../backend/index.ts").Backend;

export const fetchWords = () => (dispatch) => {
  dispatch({ type: FETCH_WORDS_REQUEST });
  return Backend.list()
    .then((res) => dispatch({ type: FETCH_WORDS_SUCCESS, payload: res }))
    .catch((err) => dispatch({ type: FETCH_WORDS_ERROR, payload: err }));
};

export const addWord = (word) => (dispatch) => {
  dispatch({ type: ADD_WORD_REQUEST });
  return Backend.addAndList(word)
    .then((res) => dispatch({ type: ADD_WORD_SUCCESS, payload: res }))
    .catch((err) => {
      dispatch({ type: ADD_WORD_ERROR, payload: err.message });
    });
};
