import React from "react";
import TabContent from "./tabContent/TabContent";
import paCSS from './productArchive.module.css'
import Tabs from "./Tabs";
import ScrollableTabsButtonAuto from "./Tabs";

const ProductArchive = (props) => {

    let columnCount = props.columnCount

    let solarProps = props.productData.solarGlass
    let fishingProps = props.productData.fishingGlass
    let drivingProps = props.productData.drivingGlass
    let pcProps = props.productData.pcGlass

    let solarDesc = props.productDesc.solar
    let fishingDesc = props.productDesc.fishing
    let drivingDesc = props.productDesc.driving
    let pcDesc = props.productDesc.pc



    return (
        <div className='componentContainer'>

            <ScrollableTabsButtonAuto
                productData={props.productData}
                solarType={props.productData.solarGlass[0].gType}
                fishingType={props.productData.fishingGlass[0].gType}
                drivingType={props.productData.drivingGlass[0].gType}
                pcType={props.productData.pcGlass[0].gType}
                tabsSwitcher={props.tabsSwitcher}
                columnCount={columnCount}
                getTryId={props.getTryId}
                solarProps={solarProps}
                fishingProps={fishingProps}
                drivingProps={drivingProps}
                pcProps={pcProps}
                solarDesc={solarDesc}
                fishingDesc={fishingDesc}
                drivingDesc={drivingDesc}
                pcDesc={pcDesc}
            />
        </div>
    )
}
export default ProductArchive