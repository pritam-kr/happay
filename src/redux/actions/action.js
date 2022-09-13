



export const getCardsAction = (data) => {
    return {
        type: "GET_CARDS_DATA",
        payload: data
    }
}


export const addToCartAction = (card) => {
    return {
        type : "ADD_TO_CART",
        payload: card
    }
}

export const incrementQuantityAction = (cardId) => {
    return {
        type: "INCREMENT_QUANTITY",
        payload: cardId
    }
}


export const decrementQuantityAction = (cardId) => {
    return {
        type: "DECREMENT_QUANTITY",
        payload: cardId
    }
}

export const removeCartItemAction = (cardId) => {
    return {
        type: "REMOVE_CART_ITEM",
        payload: cardId
    }
}

