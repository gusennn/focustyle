let initialState = {
    glasses: {
        solarGlass: [
            {
                id: 0,
                glassImgUrl: './glassesImage/solarProtect/img_sunny.png',
                glassesTitle: 'Солнцезащитные очки Ray-Ban Aviator Gradient RB3025 003/3F'
            },
            {
                id: 1,
                glassImgUrl: './glassesImage/solarProtect/img_sunny2.png',
                glassesTitle: 'Солнцезащитные очки Versace VE4361 GB1/87'
            },
            {
                id: 2,
                glassImgUrl: './glassesImage/solarProtect/img_sunny3.png',
                glassesTitle: 'Солнцезащитные очки Ray-Ban Hexagonal RB3548N 004/71 Gunmetal'
            },
        ],

    }
}

const PRODUCT = 'PRODUCT'
export const productMapCreator = () => {
    return {
        type: PRODUCT,
    }
}

const productReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case PRODUCT: {

        }
        default:
            return state
    }
}

export default productReducer;