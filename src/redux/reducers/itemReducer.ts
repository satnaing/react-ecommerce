import { AnyAction } from "redux";

const itemReducer = (state = [], action: AnyAction) => {
  switch (action.type) {
    case "add_item":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default itemReducer;
