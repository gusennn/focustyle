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
                isInCart: false,
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
                isInCart: false,
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
                isInCart: false,
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
                isInCart: false,
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
                isInCart: false,
            },
        ],
        drivingGlass: [
            {
                id: 0,
                gImgUrl: '../glassesImage/glasses/img_driving1.png',
                gTitle: 'Noteler 002/3P',
                gGender: 'Unisex',
                gType: 'Для вождения',
                gFrameMaterial: 'Пластик',
                gFrameColor: 'Черный',
                gLensColorHEX: '#ed5c08',
                gLensMaterial: 'Поликарбонат',
                gLensType: 'Антибликовый поляризационный',
                gLensColor: 'Оранжевый',
                gPrice: 1750,
                gDiscountPercent: 10,
                isTry: true,
                isInCart: false,
            },
            {
                id: 1,
                gImgUrl: '../glassesImage/glasses/img_driving2.png',
                gTitle: 'Noteler 002/8P',
                gGender: 'Unisex',
                gType: 'Для вождения',
                gFrameMaterial: 'Пластик',
                gFrameColor: 'Черный',
                gLensColorHEX: '#0e0b26',
                gLensMaterial: 'Поликарбонат',
                gLensType: 'Антибликовый поляризационный',
                gLensColor: 'Черный',
                gPrice: 1350,
                gDiscountPercent: 10,
                isTry: true,
                isInCart: false,
            },
            {
                id: 2,
                gImgUrl: '../glassesImage/glasses/img_driving3.png',
                gTitle: 'Noteler 012/3P',
                gGender: 'Unisex',
                gType: 'Для вождения',
                gFrameMaterial: 'Пластик',
                gFrameColor: 'Темно-синий',
                gLensColorHEX: '#f8eb10',
                gLensMaterial: 'Поликарбонат',
                gLensType: 'Антибликовый поляризационный',
                gLensColor: 'Желтый',
                gPrice: 1850,
                gDiscountPercent: 10,
                isTry: true,
                isInCart: false,
            },
        ],
        pcGlass: [
            {
                id: 0,
                gImgUrl: '../glassesImage/glasses/img_computer1.png',
                gTitle: 'Carrera 1UF',
                gGender: 'Unisex',
                gType: 'Для компьютера',
                gFrameMaterial: 'Пластик',
                gFrameColor: 'Черный',
                gLensColorHEX: '#000000',
                gLensMaterial: 'Пластик',
                gLensType: 'Антибликовый ультрафиолетовый',
                gLensColor: 'Черный',
                gPrice: 1950,
                gDiscountPercent: 10,
                isTry: true,
                isInCart: false,
            },
            {
                id: 1,
                gImgUrl: '../glassesImage/glasses/img_computer2.png',
                gTitle: 'Carrera 2UF',
                gGender: 'Unisex',
                gType: 'Для компьютера',
                gFrameMaterial: 'Пластик',
                gFrameColor: 'Черный',
                gLensColorHEX: '#1b173f',
                gLensMaterial: 'Пластик',
                gLensType: 'Антибликовый ультрафиолетовый',
                gLensColor: 'Темно-серый',
                gPrice: 1850,
                gDiscountPercent: 10,
                isTry: true,
                isInCart: false,
            },
            {
                id: 2,
                gImgUrl: '../glassesImage/glasses/img_computer3.png',
                gTitle: 'Ray-Ban',
                gGender: 'Unisex',
                gType: 'Для компьютера',
                gFrameMaterial: 'Сталь',
                gFrameColor: 'Темно-серый',
                gLensColorHEX: '#55554c',
                gLensMaterial: 'Пластик',
                gLensType: 'Антибликовый ультрафиолетовый',
                gLensColor: 'Серый',
                gPrice: 2850,
                gDiscountPercent: 10,
                isTry: true,
                isInCart: false,
            },
        ],
    },
    glassesCategoryDescription: {
        solar: [
            {
                descTitle: 'Солнцезащитные очки',
                descText: 'Солнцезащитные очки, представленные на нашем сайте, ' +
                    'идеально подойдут для защиты ваших глаз от негативного воздействия ультрафиолетовых лучей. ' +
                    'Мы предлагаем большой выбор моделей для мужчин, женщин и детей, которые отличаются высоким качеством и ' +
                    'стильным дизайном. Наши солнцезащитные очки вы можете примерить онлайн'
            },
        ],
        fishing: [
            {
                descTitle: 'Очки для рыбалки',
                descText: 'Очки для рыбалки не только защитят ваши глаза от солнца и ветра, но и помогут улучшить видимость в сложных условиях, таких как туман или дождь. Они также имеют стильный дизайн, который подойдет для любого рыболова.' +
                    'На нашем сайте вы найдете большой выбор очков для рыбалки от ведущих производителей. Также вы можете' +
                    'примерить модели перед покупкой онлайн'
            },
        ],
        driving: [
            {
                descTitle: 'Очки для вождения',
                descText: 'Очки для вождения - это не только модный аксессуар, но и необходимый элемент безопасности на дороге. ' +
                    'Они помогают защитить глаза от яркого света, снижают усталость глаз и улучшают контрастность. ' +
                    'На нашем сайте вы найдете широкий выбор очков для вождения от известных брендов. ' +
                    'Все наши модели имеют высокое качество и стильный дизайн. Вы можете примерить разные модели онлайн и выбрать ту, ' +
                    'которая идеально подходит для вас. Не откладывайте свою безопасность на потом - купите очки для вождения уже сегодня!  ' +
                    'Для онлайн-примерки ищите специальный значок'
            },
        ],
        pc: [
            {
                descTitle: 'Очки для компьютера',
                descText: 'Очки для работы за компьютером - это не просто модный аксессуар, а необходимый элемент для здоровья ваших глаз. ' +
                    'Они защищают ваше зрение от усталости и перенапряжения, а также помогают улучшить концентрацию внимания. На нашем сайте ' +
                    'представлен огромный выбор компьютерных очков от лучших производителей. Вы сможете примерить различные модели и подобрать ту, ' +
                    'которая подходит именно вам. Не забывайте, что здоровье ваших глаз - это инвестиция в ваше будущее. Купите компьютерные очки и ' +
                    'наслаждайтесь комфортной работой'
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

const IS_IN_CART_CHECKER = 'IS-IN-CART-CHECKER'
export const isInCartToggle = (id) => {
    return {
        type: IS_IN_CART_CHECKER, cardId: id
    }
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_SWITCH: {
            let dataSpread = {...state}
            dataSpread.columnCount = action.numFromAction
            return dataSpread
        };
        case IS_IN_CART_CHECKER: {
            let dataSpread = {...state}
            dataSpread.glasses = {...state.glasses}
            if ( !dataSpread.glasses.solarGlass[action.cardId].isInCart ) {
                dataSpread.glasses.solarGlass[action.cardId].isInCart = true
            }
            if ( !dataSpread.glasses.fishingGlass[action.cardId].isInCart ) {
                dataSpread.glasses.fishingGlass[action.cardId].isInCart = true
            }
            if ( !dataSpread.glasses.drivingGlass[action.cardId].isInCart ) {
                dataSpread.glasses.drivingGlass[action.cardId].isInCart = true
            }
            if ( !dataSpread.glasses.pcGlass[action.cardId].isInCart ) {
                dataSpread.glasses.pcGlass[action.cardId].isInCart = true
            }
            // Меняется во всех 4 категориях, если id совпадает. Надо уточнить ещё в какой категории нажали кнопку
            return dataSpread
        }
        default:
            return state
    }
}

export default productReducer;