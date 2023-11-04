let initialState = {
    glasses: {
        solarGlass: [
            {
                id: 0,
                gImgUrl: '../glassesImage/glasses/imgSunny.png',
                gTitle: 'Ray-Ban Aviator Gradient',
                gGender: 'Unisex',
                gType: 'Солнцезащитные',
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
                gType: 'Солнцезащитные',
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
                gType: 'Солнцезащитные',
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
                gImgUrl: '../glassesImage/glasses/img_fishing1.png',
                gTitle: 'King Trout 6F',
                gGender: 'Unisex',
                gType: 'Рыболовные поляризационные',
                gFrameMaterial: 'Пластик',
                gFrameColor: 'Камуфляж',
                gLensColorHEX: '#240a34',
                gLensMaterial: 'Поликарбонат',
                gLensType: 'Антибликовый поляризационный',
                gLensColor: 'Черный',
                gPrice: 1450,
                gDiscountPercent: 10,
                isTry: true,
            },
            {
                id: 1,
                gImgUrl: '../glassesImage/glasses/img_fishing2.png',
                gTitle: 'King Trout 9F',
                gGender: 'Unisex',
                gType: 'Рыболовные поляризационные',
                gFrameMaterial: 'Пластик',
                gFrameColor: 'Черный',
                gLensColorHEX: '#fee121',
                gLensMaterial: 'Поликарбонат',
                gLensType: 'Антибликовый поляризационный',
                gLensColor: 'Желто-голубой градиентный',
                gPrice: 1550,
                gDiscountPercent: 10,
                isTry: true,
            },
            {
                id: 2,
                gImgUrl: '../glassesImage/glasses/img_fishing3.png',
                gTitle: 'King Trout 1F',
                gGender: 'Unisex',
                gType: 'Рыболовные поляризационные',
                gFrameMaterial: 'Пластик',
                gFrameColor: 'Темно-синий',
                gLensColorHEX: '#051e6a',
                gLensMaterial: 'Поликарбонат',
                gLensType: 'Антибликовый поляризационный',
                gLensColor: 'Синий',
                gPrice: 1550,
                gDiscountPercent: 10,
                isTry: true,
            },
        ],
    },
    columnCount: 1,
}

const PRODUCT_SWITCH = 'PRODUCT-SWITCH'
export const productTabSwitch = (num) => {
    return {
        type: PRODUCT_SWITCH, numFromAction: num
    }
}

const productReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case PRODUCT_SWITCH: {
            let dataSpread = {...state}
            dataSpread.columnCount = action.numFromAction
            return dataSpread
        }
        default:
            return state
    }
}

export default productReducer;