import { GET_RECIPES_START, GET_RECIPES_SUCCESS, GET_RECIPES_FAILED } from '../constants';

const initialState = {
  recipes: [],
  isLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case GET_RECIPES_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: data.recipes,
        isLoading: false,
        error: null,
      };
    case GET_RECIPES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: data.error,
      };
    default:
      return state;
  }
};
