
import { data } from "../../data";

export const cardReducer = (
  state = {
    cards: [...data.cardData],
    cart: [],
  },
  action
) => {
  switch (action.type) {
  
    default:
      return state;
  }
};
