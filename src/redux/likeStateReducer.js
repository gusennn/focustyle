let initialState = {
    likeList: [],
    cartItemsCounter: 0,
    likeIndication: 0
}

const LIKE_STATE = 'LIKE-STATE'
export const likeState = (selectCardData, name) => {
    return {
        type: LIKE_STATE, addSelectCard: selectCardData, catName: name
    }
}

const LIKE_ITEM_DELETE = 'LIKE-ITEM-DELETE'
export const likeItemDelete = (id) => {
    return {
        type: LIKE_ITEM_DELETE, cartItemIds: id
    }
}

const likeReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIKE_STATE: {
            let selectCardDataInCart = action.addSelectCard
            let dataSpread = { ...state }
            dataSpread.likeList = [...state.likeList]
            let likeItem = {
                id: dataSpread.cartItemsCounter,
                cid: selectCardDataInCart.id,
                likeTitle: selectCardDataInCart.gTitle,
                likeImage: selectCardDataInCart.gImgUrl,
                likeItemPrice: selectCardDataInCart.gPrice,
                likeItemDiscountPercent: selectCardDataInCart.gDiscountPercent,
                gGender: selectCardDataInCart.gGender,
                gType: selectCardDataInCart.gType,
                gFrameMaterial: selectCardDataInCart.gFrameMaterial,
                gFrameColor: selectCardDataInCart.gFrameColor,
                gLensMaterial: selectCardDataInCart.gFrameColor,
                gLensType: selectCardDataInCart.gLensType,
                gLensColor: selectCardDataInCart.gLensColor,
                gLensColorHEX: selectCardDataInCart.gLensColorHEX,
                likeStatus: true,
                likeCatName: action.catName,
            }
            dataSpread.cartItemsCounter += 1
            dataSpread.likeList.push(likeItem)
            dataSpread.likeIndication += 1
            return dataSpread
        }
        case LIKE_ITEM_DELETE: {
            let dataSpread = { ...state }
            dataSpread.likeList = [...state.likeList]
            let deleteId = action.cartItemIds
            dataSpread.likeList[deleteId].likeStatus = false
            dataSpread.likeIndication -= 1
            return dataSpread
        }
        default:
            return state
    }
}

export default likeReducer