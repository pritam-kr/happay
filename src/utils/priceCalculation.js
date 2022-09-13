export const totalFinalPrice = (cart) =>  cart?.reduce((sum, currentItem) => sum + currentItem.final_price * currentItem.quantity, 0) 
export const totalOriginalPrice = (cart) =>  cart?.reduce((sum, currentItem) => sum + currentItem.original_price * currentItem.quantity, 0) 
export  const offerPercentage = (eachCard) => (eachCard.original_price * eachCard.final_price) / 100