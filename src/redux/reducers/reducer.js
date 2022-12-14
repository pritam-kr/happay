import { data } from "../../data";

const cardsData = JSON.parse(localStorage.getItem("cards")) || [
  ...data.cardData,
];
const cartData = JSON.parse(localStorage.getItem("cart")) || [];

export const cardReducer = (
  state = {
    cards: [...cardsData],
    cart: [...cartData],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };

    case "INCREMENT_QUANTITY":
      const isCard = state.cards.find(
        (eachCard) => eachCard.id === action.payload
      );
      const isCart = state.cards.find(
        (eachCard) => eachCard.id === action.payload
      );

      const quantityUpdateInCards = state.cards.map((eachCard) =>
        eachCard.id === isCard.id
          ? { ...eachCard, quantity: eachCard.quantity + 1 }
          : eachCard
      );

      const quantityUpdateInCarts = state.cart.map((eachCard) =>
        eachCard.id === isCart.id
          ? { ...eachCard, quantity: eachCard.quantity + 1 }
          : eachCard
      );

      return {
        ...state,
        cards: [...quantityUpdateInCards],
        cart: [...quantityUpdateInCarts],
      };

    case "DECREMENT_QUANTITY":
      const isCardD = state.cards.find(
        (eachCard) => eachCard.id === action.payload
      );
      const isCartD = state.cards.find(
        (eachCard) => eachCard.id === action.payload
      );

      const quantityUpdateInCardsD = state.cards.map((eachCard) =>
        eachCard.id === isCardD.id
          ? { ...eachCard, quantity: eachCard.quantity - 1 }
          : eachCard
      );

      const quantityUpdateInCartsD = state.cart.map((eachCard) =>
        eachCard.id === isCartD.id
          ? { ...eachCard, quantity: eachCard.quantity - 1 }
          : eachCard
      );

      return {
        ...state,
        cards: [...quantityUpdateInCardsD],
        cart: [...quantityUpdateInCartsD],
      };

    case "REMOVE_CART_ITEM":
      const removingCartItems = state.cart.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...state,

        cart: [...removingCartItems],
      };
    default:
      return state;
  }
};
