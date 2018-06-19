import { concat } from 'lodash';

import getRecipes from '../../api/recipe/get-recipes';
import { GET_RECIPES_START, GET_RECIPES_SUCCESS, GET_RECIPES_FAILED } from '../constants';

const getRecipesSuccess = recipes => ({
  type: GET_RECIPES_SUCCESS,
  data: { recipes },
});

const getRecipesFailed = error => ({
  type: GET_RECIPES_FAILED,
  data: { error },
});

const getRecipesStart = query => (dispatch) => {
  dispatch({ type: GET_RECIPES_START });
  const getPage1Recipes = getRecipes(query, 1);
  const getPage2Recipes = getRecipes(query, 2);
  return Promise.all([getPage1Recipes, getPage2Recipes])
    .then(([page1Results, page2Results]) =>
      dispatch(getRecipesSuccess(concat(page1Results.data.results, page2Results.data.results))))
    .catch(error => dispatch(getRecipesFailed(error)));
};

export default getRecipesStart;
