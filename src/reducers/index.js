import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: [],
  stateTwo: "tests"
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return Object.assign({}, state, { articles: [...state.articles, action.payload] });
    default:
      return state;
  }
};

export default rootReducer;