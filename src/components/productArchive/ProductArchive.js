import React from "react";
import TabContent from "./tabContent/TabContent";
import paCSS from './productArchive.module.css'

const ProductArchive = (props) => {
    let catArr = []
    let getCatName = (obj) => {
        for ( let catName of Object.keys(obj) ){
            catArr.push(catName)
        }
    }
    getCatName(props.productData)

    let columnCount = props.columnCount

    let solarProps = props.productData.solarGlass
    let fishingProps = props.productData.fishingGlass
    let drivingProps = props.productData.drivingGlass
    let pcProps = props.productData.pcGlass

    let solarDesc = props.productDesc.solar
    let fishingDesc = props.productDesc.fishing
    let drivingDesc = props.productDesc.driving
    let pcDesc = props.productDesc.pc


    let onColumnChangeSolar = (e) => {
        let n = e.target.value
        props.tabsSwitcher(n)

        document.getElementById(`tabBtn2`).classList.remove('activeBtn')
        document.getElementById(`tabBtn3`).classList.remove('activeBtn')
        document.getElementById(`tabBtn4`).classList.remove('activeBtn')
        document.getElementById(`tabBtn1`).classList.add('activeBtn')
    }
    let onColumnChangeFish = (e) => {
        let n = e.target.value
        props.tabsSwitcher(n)

        document.getElementById(`tabBtn1`).classList.remove('activeBtn')
        document.getElementById(`tabBtn3`).classList.remove('activeBtn')
        document.getElementById(`tabBtn4`).classList.remove('activeBtn')
        document.getElementById(`tabBtn2`).classList.add('activeBtn')
    }
    let onColumnChangeDriving = (e) => {
        let n = e.target.value
        props.tabsSwitcher(n)

        document.getElementById(`tabBtn1`).classList.remove('activeBtn')
        document.getElementById(`tabBtn2`).classList.remove('activeBtn')
        document.getElementById(`tabBtn4`).classList.remove('activeBtn')
        document.getElementById(`tabBtn3`).classList.add('activeBtn')
    }
    let onColumnChangePc = (e) => {
        let n = e.target.value
        props.tabsSwitcher(n)

        document.getElementById(`tabBtn1`).classList.remove('activeBtn')
        document.getElementById(`tabBtn2`).classList.remove('activeBtn')
        document.getElementById(`tabBtn3`).classList.remove('activeBtn')
        document.getElementById(`tabBtn4`).classList.add('activeBtn')
    }
    return (
        <div className='componentContainer'>


            <div className={paCSS.tabsItems}>
                <button id={'tabBtn1'} className={`${paCSS.tabBtn} neumorph`} onClick={onColumnChangeSolar} value={1}>
                    {props.productData.solarGlass[0].gType}
                </button>
                <button id={'tabBtn2'} className={`${paCSS.tabBtn} neumorph`} onClick={onColumnChangeFish} value={2}>
                    {props.productData.fishingGlass[0].gType}
                </button>
                <button id={'tabBtn3'} className={`${paCSS.tabBtn} neumorph`} onClick={onColumnChangeDriving} value={3}>
                    {props.productData.drivingGlass[0].gType}
                </button>
                <button id={'tabBtn4'} className={`${paCSS.tabBtn} neumorph`} onClick={onColumnChangePc} value={4}>
                    {props.productData.pcGlass[0].gType}
                </button>
            </div>
            {columnCount == 1
                ? <TabContent glassesList={solarProps} categoryDescription={solarDesc} categoryName={catArr[0]}/>
                : columnCount == 2
                    ? <TabContent glassesList={fishingProps} categoryDescription={fishingDesc} categoryName={catArr[1]}/>
                    : columnCount == 3
                        ? <TabContent glassesList={drivingProps} categoryDescription={drivingDesc} categoryName={catArr[2]}/>
                        : <TabContent glassesList={pcProps} categoryDescription={pcDesc} categoryName={catArr[3]}/>
            }
        </div>
    )
}
export default ProductArchive