import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import paCSS from "./productArchive.module.css";
import TabContent from "./tabContent/TabContent";

export default function ScrollableTabsButtonAuto(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let catArr = []
    let getCatName = (obj) => {
        for (let catName of Object.keys(obj)) {
            catArr.push(catName)
        }
    }
    getCatName(props.productData)

    let onColumnChangeSolar = () => {
        props.tabsSwitcher(0)

        document.getElementById(`tabBtn2`).classList.remove('activeBtn')
        document.getElementById(`tabBtn3`).classList.remove('activeBtn')
        document.getElementById(`tabBtn4`).classList.remove('activeBtn')
        document.getElementById(`tabBtn1`).classList.add('activeBtn')
    }
    let onColumnChangeFish = () => {
        props.tabsSwitcher(1)

        document.getElementById(`tabBtn1`).classList.remove('activeBtn')
        document.getElementById(`tabBtn3`).classList.remove('activeBtn')
        document.getElementById(`tabBtn4`).classList.remove('activeBtn')
        document.getElementById(`tabBtn2`).classList.add('activeBtn')
    }
    let onColumnChangeDriving = () => {
        props.tabsSwitcher(2)

        document.getElementById(`tabBtn1`).classList.remove('activeBtn')
        document.getElementById(`tabBtn2`).classList.remove('activeBtn')
        document.getElementById(`tabBtn4`).classList.remove('activeBtn')
        document.getElementById(`tabBtn3`).classList.add('activeBtn')
    }
    let onColumnChangePc = () => {
        props.tabsSwitcher(3)

        document.getElementById(`tabBtn1`).classList.remove('activeBtn')
        document.getElementById(`tabBtn2`).classList.remove('activeBtn')
        document.getElementById(`tabBtn3`).classList.remove('activeBtn')
        document.getElementById(`tabBtn4`).classList.add('activeBtn')
    }
    return (
        <div>
            <Tabs
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                allowScrollButtonsMobile
                className={paCSS.tabsItems}
            >
                <Tab id={'tabBtn1'} label={props.solarType} onClick={onColumnChangeSolar}
                     className={`${paCSS.tabBtn} neumorph`} value={0}/>
                <Tab id={'tabBtn2'} label={props.fishingType} onClick={onColumnChangeFish}
                     className={`${paCSS.tabBtn} neumorph`} value={1}/>
                <Tab id={'tabBtn3'} label={props.drivingType} onClick={onColumnChangeDriving}
                     className={`${paCSS.tabBtn} neumorph`} value={2}/>
                <Tab id={'tabBtn4'} label={props.pcType} onClick={onColumnChangePc}
                     className={`${paCSS.tabBtn} neumorph`} value={3}/>
            </Tabs>
            {props.columnCount == 0
                ? <TabContent glassesList={props.solarProps}
                              addFavorAction={props.addFavorAction}
                              categoryDescription={props.solarDesc}
                              categoryName={catArr[0]}
                              getTryId={props.getTryId}
                              getCatNameTry={props.getCatNameTry}/>
                : props.columnCount == 1
                    ? <TabContent glassesList={props.fishingProps}
                                  addFavorAction={props.addFavorAction}
                                  categoryDescription={props.fishingDesc}
                                  categoryName={catArr[1]}
                                  getTryId={props.getTryId}
                                  getCatNameTry={props.getCatNameTry}/>
                    : props.columnCount == 2
                        ? <TabContent glassesList={props.drivingProps}
                                      addFavorAction={props.addFavorAction}
                                      categoryDescription={props.drivingDesc}
                                      categoryName={catArr[2]}
                                      getTryId={props.getTryId}
                                      getCatNameTry={props.getCatNameTry}/>
                        : <TabContent glassesList={props.pcProps}
                                      addFavorAction={props.addFavorAction}
                                      categoryDescription={props.pcDesc}
                                      categoryName={catArr[3]}
                                      getTryId={props.getTryId}
                                      getCatNameTry={props.getCatNameTry}/>
            }
            <Tabs
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                allowScrollButtonsMobile
                className={paCSS.tabsItems}
                style={{paddingTop: 40}}
            >
                <Tab id={'tabBtn1'} label={props.solarType} onClick={onColumnChangeSolar}
                     className={`${paCSS.tabBtn} neumorph`} value={0}/>
                <Tab id={'tabBtn2'} label={props.fishingType} onClick={onColumnChangeFish}
                     className={`${paCSS.tabBtn} neumorph`} value={1}/>
                <Tab id={'tabBtn3'} label={props.drivingType} onClick={onColumnChangeDriving}
                     className={`${paCSS.tabBtn} neumorph`} value={2}/>
                <Tab id={'tabBtn4'} label={props.pcType} onClick={onColumnChangePc}
                     className={`${paCSS.tabBtn} neumorph`} value={3}/>
            </Tabs>
        </div>
    );
}