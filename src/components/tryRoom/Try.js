import React from 'react';
import DraggableGlass from "./draggableGlassItem/DraggableGlass";
import tCss from './try.module.css'
import dCss from "./draggableGlassItem/draggable.module.css";
import UserPhotoLoad from "./UserPhotoLoad";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import hpCss from "../homePage/homePage.module.css";
import plus from '../../assets/svg/plus.svg'
import minus from '../../assets/svg/minus.svg'
import glassIcon from "../../assets/svg/glasses.svg";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Try = (props) => {
    return (
        <div className={`${dCss.tryMain} componentContainer`}>
            <Accordion style={{backgroundColor: "transparent", boxShadow: '0 0 0px'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={'neumorph'}
                    style={{borderRadius: 8}}
                >
                    <Typography>Как примерить очки ?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant={'h6'}></Typography>
                    <br/>
                    <Typography variant={"subtitle1"}>- В Каталоге найти кнопку Надеть:</Typography>
                    <Typography style={{opacity: .5, marginBottom: 5}} variant={"subtitle2"}>
                        <button style={{margin: 10}} color={'dark'} className={'neumorph btn'}>
                            <Typography>Надеть <img src={glassIcon} alt="Примерка"/></Typography>
                        </button>
                    </Typography>
                    <NavLink style={{marginTop: 20}} to='/product' className={hpCss.container__legend__nav}>
                        <Typography variant={'h6'} style={{lineHeight: "18px"}}>
                            Перейти в каталог </Typography>
                    </NavLink>
                </AccordionDetails>
            </Accordion>
            <br/>
            <Accordion style={{backgroundColor: "transparent", boxShadow: '0 0 0px'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={'neumorph'}
                    style={{borderRadius: 8}}
                >
                    <Typography>Пора добавить своё фото</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant={"subtitle1"}>- Выберите фото, нажав на кнопку Моё фото</Typography>
                    <Typography style={{opacity: .5, marginBottom: 5}} variant={"subtitle2"}> * рекомендуем фото без наклона головы</Typography>
                    <Typography variant={"subtitle1"}>- перемещайте очки на кнопку
                        <svg style={{marginLeft: 5}} className={dCss.pointSvg} width="64px" height="64px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" >
                            <g>
                                <path d="M7.463.057A.748.748 0 007.22.22l-2 2a.75.75 0 001.06 1.06L7 2.56V7H2.56l.72-.72a.75.75 0 00-1.06-1.06l-2 2a.748.748 0 000 1.06l2 2a.75.75 0 101.06-1.06l-.72-.72H7v4.44l-.72-.72a.75.75 0 00-1.06 1.06l2 2a.748.748 0 001.06 0l2-2a.75.75 0 10-1.06-1.06l-.72.72V8.5h4.44l-.72.72a.75.75 0 101.06 1.06l2-2a.748.748 0 000-1.06l-2-2a.75.75 0 10-1.06 1.06l.72.72H8.5V2.56l.72.72a.75.75 0 101.06-1.06l-2-2a.748.748 0 00-.817-.163z"></path>
                            </g>
                        </svg>
                    </Typography>
                    <Typography variant={"subtitle1"}>- регулируйте размер очков на
                        <img style={{width: 23, height: 23, marginLeft: 5, marginRight: 5}} src={plus} alt="Плюс"/>
                        или
                        <img style={{width: 23, height: 23, marginLeft: 5, marginRight: 5}} src={minus} alt="Плюс"/> </Typography>
                </AccordionDetails>
            </Accordion>
            <div className={tCss.tryArea}>
                <div className={tCss.photoBox}>
                    <UserPhotoLoad image={props.tryImage}/>
                </div>
            </div>
            <Typography className={tCss.alertInfo} style={{opacity: .5, marginTop: 40}} variant={'body2'}> * <u>Обращаем Ваше внимание</u>: это
                лишь онлайн примерка,
                которая не сможет дать Вам полной картины и реализма. Здесь опускаются многие факторы, такие как
                освещение, угол падения света, трассировка и т.д.
            </Typography>
        </div>
    );
}

export default Try;