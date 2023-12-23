let initialState = {
    cartList: [],
    cartItemsCounter: 0,
    totalCartPrice: 0,
    totalCartPriceDiscount: 0,
    cartIndication: 0
}

const CART_STATE = 'CART-STATE'
export const cartState = (selectCardData, name) => {
    return {
        type: CART_STATE, addSelectCard: selectCardData, catName: name
    }
}

const CART_ITEM_INCREMENT = 'CART-ITEM-INCREMENT'
export const cartItemStateInc = (id) => {
    return {
        type: CART_ITEM_INCREMENT, cartItemId: id
    }
}
const CART_ITEM_DECREMENT = 'CART-ITEM-DECREMENT'
export const cartItemStateDec = (id) => {
    return {
        type: CART_ITEM_DECREMENT, cartItemId: id
    }
}
const CART_ITEM_DELETE = 'CART-ITEM-DELETE'
export const cartItemDelete = (id) => {
    return {
        type: CART_ITEM_DELETE, cartItemIds: id
    }
}



const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_STATE: {
            let selectCardDataInCart = action.addSelectCard
            let dataSpread = { ...state }
            dataSpread.cartList = [...state.cartList]
            let cartItem = {
                id: dataSpread.cartItemsCounter,
                cid: selectCardDataInCart.id,
                cartTitle: selectCardDataInCart.gTitle,
                cartImage: selectCardDataInCart.gImgUrl,
                cartPrice: selectCardDataInCart.gPrice,
                cartCatName: action.catName,
                cartDiscountPercent: selectCardDataInCart.gDiscountPercent,
                isInCart: true,
                itemCountInCart: 1
            }
            dataSpread.cartItemsCounter += 1
            dataSpread.cartList.push(cartItem)
            dataSpread.cartIndication += 1
            let itemId = cartItem.id
            dataSpread.totalCartPrice += dataSpread.cartList[itemId].itemCountInCart * dataSpread.cartList[itemId].cartPrice
            dataSpread.totalCartPriceDiscount += Math.round(dataSpread.cartList[itemId].cartPrice - (dataSpread.cartList[itemId].cartPrice * dataSpread.cartList[itemId].cartDiscountPercent) / 100)
            return dataSpread
        };
        case CART_ITEM_INCREMENT: {
            let dataSpread = { ...state }
            dataSpread.cartList = [...state.cartList]
            let itemId = action.cartItemId
            dataSpread.cartList[itemId].itemCountInCart++
            if (dataSpread.cartList[itemId].itemCountInCart > 1) {
                dataSpread.totalCartPrice += dataSpread.cartList[itemId].cartPrice
                dataSpread.totalCartPriceDiscount += Math.round(dataSpread.cartList[itemId].cartPrice - (dataSpread.cartList[itemId].cartPrice * dataSpread.cartList[itemId].cartDiscountPercent) / 100)
            }
            return dataSpread
        }
        case CART_ITEM_DECREMENT: {
            let dataSpread = { ...state }
            dataSpread.cartList = [...state.cartList]
            let itemId = action.cartItemId
            if (dataSpread.cartList[itemId].itemCountInCart > 1) {
                dataSpread.totalCartPrice -= dataSpread.cartList[itemId].cartPrice
                dataSpread.totalCartPriceDiscount -= Math.round(dataSpread.cartList[itemId].cartPrice - (dataSpread.cartList[itemId].cartPrice * dataSpread.cartList[itemId].cartDiscountPercent) / 100)
                dataSpread.cartList[itemId].itemCountInCart--
            } else {
                dataSpread.cartList[itemId].itemCountInCart = 1
                dataSpread.cartList[itemId].isInCart = false
            }
            return dataSpread
        }
        case CART_ITEM_DELETE: {
            let dataSpread = { ...state }
            dataSpread.cartList = [...state.cartList]
            let deleteId = action.cartItemIds
            dataSpread.totalCartPrice -= dataSpread.cartList[deleteId].itemCountInCart * dataSpread.cartList[deleteId].cartPrice
            dataSpread.totalCartPriceDiscount -= dataSpread.cartList[deleteId].itemCountInCart * Math.round(dataSpread.cartList[deleteId].cartPrice - (dataSpread.cartList[deleteId].cartPrice * dataSpread.cartList[deleteId].cartDiscountPercent) / 100)
            dataSpread.cartList[deleteId].itemCountInCart = 0
            dataSpread.cartList[deleteId].isInCart = false
            dataSpread.cartIndication -= 1
            return dataSpread
        }
        default:
            return state
    }
}

export default cartReducer;