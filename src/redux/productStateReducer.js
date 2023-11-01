let initialState = {
    glasses: {
        solarGlass: [
            {
                id: 0,
                gImgUrl: '../glassesImage/glasses/imgSunny.png',
                gTitle: 'Солнцезащитные очки Ray-Ban Aviator Gradient RB3025 003/3F',
                gGender: 'Unisex',
                gFrameMaterial: 'Металл',
                gFrameColor: 'Серебристый',
                gFrameColorHEX: '#aaa',
                gLensMaterial: 'Минеральное стекло',
                gLensType: 'Градиентный',
                gLensColor: 'Голубой',
                gPrice: 18319,
                gDiscountPercent: 10,
                isTry: true,
            },
            {
                id: 1,
                gImgUrl: '../glassesImage/glasses/img_sunny2.png',
                gTitle: 'Солнцезащитные очки Versace VE4361 GB1/87',
                gGender: 'Мужские',
                gFrameMaterial: 'Нейлон',
                gFrameColor: 'Черный',
                gFrameColorHEX: '#aaa',
                gLensMaterial: 'Минеральное стекло',
                gLensType: 'Градиентный',
                gLensColor: 'Голубой',
                gPrice: 18319,
                gDiscountPercent: 10,
                isTry: true,
            },
            {
                id: 2,
                gImgUrl: '../glassesImage/glasses/img_sunny3.png',
                gTitle: 'Солнцезащитные очки Ray-Ban Hexagonal RB3548N 004/71 Gunmetal',
                gGender: 'Unisex',
                gFrameMaterial: 'Металл',
                gFrameColor: 'Серебристый',
                gFrameColorHEX: '#aaa',
                gLensMaterial: 'Минеральное стекло',
                gLensType: 'Градиентный',
                gLensColor: 'Голубой',
                gPrice: 18319,
                gDiscountPercent: 10,
                isTry: true,
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