let initialState = {
    glasses: {
        solarGlass: [
            {
                id: 0,
                gImgUrl: '../glassesImage/glasses/imgSunny.png',
                gTitle: 'Ray-Ban Aviator Gradient',
                gGender: 'Unisex',
                gFrameMaterial: 'Металл',
                gFrameColor: 'Серебристый',
                gLensMaterial: 'Минеральное стекло',
                gLensType: 'Градиентный',
                gLensColor: 'Голубой',
                gLensColorHEX: '#6e8a99',
                gPrice: 22899,
                gDiscountPercent: 12,
                isTry: true,
            },
            {
                id: 1,
                gImgUrl: '../glassesImage/glasses/img_sunny2.png',
                gTitle: 'Versace',
                gGender: 'Мужские',
                gFrameMaterial: 'Нейлон',
                gFrameColor: 'Черный',
                gLensMaterial: 'Полиамид',
                gLensType: 'Однотонный',
                gLensColor: 'Темно-серый',
                gLensColorHEX: '#504c4c',
                gPrice: 26490,
                gDiscountPercent: 19,
                isTry: true,
            },
            {
                id: 2,
                gImgUrl: '../glassesImage/glasses/img_sunny3.png',
                gTitle: 'Ray-Ban Hexagonal Gunmetal',
                gGender: 'Unisex',
                gFrameMaterial: 'Сталь',
                gFrameColor: 'Темно-серый',
                gLensMaterial: 'Минеральное стекло',
                gLensType: 'Градиентный',
                gLensColor: 'Серый-градиент',
                gLensColorHEX: '#0e0400',
                gPrice: 25930,
                gDiscountPercent: 15,
                isTry: true,
            },
        ],
        fishingGlass: [
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