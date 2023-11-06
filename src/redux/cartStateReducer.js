let initialState = {
    cartList: [

    ],
}

const CART_STATE = 'CART-STATE'
export const cartState = (selectCardData) => {
    return {
        type: CART_STATE, addSelectCard: selectCardData
    }
}

const  cartReducer = ( state = initialState, action) => {
    switch (action.type) {
        case CART_STATE: {
            let selectCardTitleInCart = action.addSelectCard
            let dataSpread = {...state}
            dataSpread.cartList = [...state.cartList]
            let cartItem = {
                cartTitle: selectCardTitleInCart.gTitle
            }
            dataSpread.cartList.push(cartItem)
            return  dataSpread
        }
        default:
            return state
    }
}

export default cartReducer;