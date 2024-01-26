import { TYPES } from "../actions/actionTheme";

export function reducerTheme(state, action) {
  switch (action.type) {
    case TYPES.THEME:
      return { theme: state.theme ? false : true };
    default:
      return state;
  }
}
