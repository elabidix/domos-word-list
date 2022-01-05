import {
  FETCH_WORDS_ERROR,
  FETCH_WORDS_REQUEST,
  FETCH_WORDS_SUCCESS,
  ADD_WORD_REQUEST,
  ADD_WORD_SUCCESS,
  ADD_WORD_ERROR,
} from "../actions/types";

export default function rootReducer(state = {}, { type, payload }) {
  switch (type) {
    case FETCH_WORDS_REQUEST: {
      return {
        ...state,
        fetch: { isLoading: true, isError: false },
      };
    }
    case FETCH_WORDS_SUCCESS: {
      return {
        ...state,
        fetch: {
          isLoading: false,
          isError: false,
          data: payload,
        },
      };
    }
    case FETCH_WORDS_ERROR: {
      return {
        ...state,
        fetch: {
          isLoading: false,
          isError: true,
        },
      };
    }
    case ADD_WORD_REQUEST: {
      return {
        ...state,
        create: { isLoading: true, isError: false },
      };
    }
    case ADD_WORD_SUCCESS: {
      return {
        ...state,
        fetch: {
          isLoading: false,
          isError: false,
          data: payload,
        },
        create: {
          isSuccess: true,
          isLoading: false,
          isError: false,
        },
      };
    }
    case ADD_WORD_ERROR: {
      return {
        ...state,
        create: {
          isLoading: false,
          isError: true,
          errorMessage: payload,
        },
      };
    }

    default:
      return state;
  }
}
