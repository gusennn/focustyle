import React from "react";
import TabContent from "./tabContent/TabContent";

const ProductArchive = (props) => {

    let columnCount = props.columnCount
    let solarProps = props.productData.solarGlass
    let fishProps = props.productData.fishingGlass

    let onColumnChange = (e) => {
        let n = e.target.value
        props.tabsSwitcher (n)
    }
    return (
        <div className='componentContainer'>
            <button onClick={onColumnChange} value={1}>
                {props.productData.solarGlass[0].gType}
            </button>
            <button onClick={onColumnChange} value={2}>
                {props.productData.fishingGlass[0].gType}
            </button>
            {columnCount == 1
                ? <TabContent glassesList={solarProps}/>
                : <TabContent glassesList={fishProps}/>
            }
        </div>
    )
}
export default ProductArchive