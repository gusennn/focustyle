import React from 'react';
import { Chip, Typography } from "@mui/material";
import jsLogo from "../../assets/icons/JavaScript-logo.png";
import reactLogo from "../../assets/icons/react-logo.png";
import reduxLogo from "../../assets/icons/redux.png";
import materialUILogo from "../../assets/icons/muilogo.png";
import nodeJSLogo from "../../assets/icons/node-js.png";
import { Link } from "react-router-dom";
import vkLogo from "../../assets/icons/VK.png";
import instLogo from "../../assets/icons/Instagram_logo.png";
import tgLogo from "../../assets/icons/Telegram-logo.png";
import githubLogo from "../../assets/icons/gh.png";
import html5Logo from "../../assets/icons/html5.png";
import css3Logo from "../../assets/icons/CSS3_logo.png";
import figmaLogo from "../../assets/icons/figma.webp";
import afLogo from "../../assets/icons/Adobe_Photoshop_CC_icon.svg.png";
import inkLogo from "../../assets/icons/Inkscape_logo_(2-colour).svg";
import cdLogo from "../../assets/icons/coreldraw-icon.webp";
import bdLogo from "../../assets/icons/Blender_logo_no_text.png";
import gimpLogo from "../../assets/icons/gimp.png";
import sfLogo from "../../assets/icons/sf.png";
import vsLogo from "../../assets/icons/Visual_Studio_Code.png";
import miroLogo from "../../assets/icons/miro.png";
import wsLogo from "../../assets/icons/WebStorm_Icon.png";
import ytLogo from "../../assets/icons/Yandex.Tracker_2018.png";


import personImgDaryaAvatar from '../../assets/team/focustle-design-darya.jpeg';
import personImgDarya from '../../assets/team/focustle-design-darya.jpeg';

import personImgGusenAvatar from '../../assets/team/focustle-dev-gusen.jpg';
import personImgGusen from '../../assets/team/focustle-dev-gusen.jpg';

import personImgLinaAvatar from '../../assets/team/focustle-design-lina-ava.jpg';
import personImgLina from '../../assets/team/focustle-design-lina.jpg';

function DevTeam() {

    let avatarImg = 'https://p7.hiclipart.com/preview/814/977/80/rick-sanchez-pocket-mortys-morty-smith-rick-and-morty-season-3-meeseeks-and-destroy-others.jpg'
    let personImg = 'https://liveboldandbloom.com/wp-content/uploads/2021/09/Untitled_design_3_1-768x538.png'


    let onFirstCardClick = () => {
        let personCard1 = document.getElementById('personItem1')
        let personCard2 = document.getElementById('personItem2')
        let personCard3 = document.getElementById('personItem3')
        let personDemoTitle1 = document.querySelector(`#personItem1 .demoTitle`)
        let personDemoTitle2 = document.querySelector(`#personItem2 .demoTitle`)
        let personDemoTitle3 = document.querySelector(`#personItem3 .demoTitle`)
        let aboutPerson1 = document.querySelector(`#personItem1 .aboutPerson`)
        let aboutPerson2 = document.querySelector(`#personItem2 .aboutPerson`)
        let aboutPerson3 = document.querySelector(`#personItem3 .aboutPerson`)
        personCard1.classList.toggle('personItemActive')
        personCard2.classList.remove('personItemActive')
        personCard3.classList.remove('personItemActive')
        personDemoTitle1.classList.toggle('demoTitleHidden')
        personDemoTitle2.classList.remove('demoTitleHidden')
        personDemoTitle3.classList.remove('demoTitleHidden')
        aboutPerson1.classList.toggle('aboutPersonShow')
        aboutPerson2.classList.remove('aboutPersonShow')
        aboutPerson3.classList.remove('aboutPersonShow')
    }
    let onMiddleCardClick = () => {
        let personCard1 = document.getElementById('personItem1')
        let personCard2 = document.getElementById('personItem2')
        let personCard3 = document.getElementById('personItem3')
        let personDemoTitle1 = document.querySelector(`#personItem1 .demoTitle`)
        let personDemoTitle2 = document.querySelector(`#personItem2 .demoTitle`)
        let personDemoTitle3 = document.querySelector(`#personItem3 .demoTitle`)
        let aboutPerson1 = document.querySelector(`#personItem1 .aboutPerson`)
        let aboutPerson2 = document.querySelector(`#personItem2 .aboutPerson`)
        let aboutPerson3 = document.querySelector(`#personItem3 .aboutPerson`)
        personCard1.classList.remove('personItemActive')
        personCard2.classList.toggle('personItemActive')
        personCard3.classList.remove('personItemActive')
        personDemoTitle1.classList.remove('demoTitleHidden')
        personDemoTitle2.classList.toggle('demoTitleHidden')
        personDemoTitle3.classList.remove('demoTitleHidden')
        aboutPerson1.classList.remove('aboutPersonShow')
        aboutPerson2.classList.toggle('aboutPersonShow')
        aboutPerson3.classList.remove('aboutPersonShow')
    }
    let onLastCardClick = () => {
        let personCard1 = document.getElementById('personItem1')
        let personCard2 = document.getElementById('personItem2')
        let personCard3 = document.getElementById('personItem3')
        let personDemoTitle1 = document.querySelector(`#personItem1 .demoTitle`)
        let personDemoTitle2 = document.querySelector(`#personItem2 .demoTitle`)
        let personDemoTitle3 = document.querySelector(`#personItem3 .demoTitle`)
        let aboutPerson1 = document.querySelector(`#personItem1 .aboutPerson`)
        let aboutPerson2 = document.querySelector(`#personItem2 .aboutPerson`)
        let aboutPerson3 = document.querySelector(`#personItem3 .aboutPerson`)
        personCard1.classList.remove('personItemActive')
        personCard2.classList.remove('personItemActive')
        personCard3.classList.toggle('personItemActive')
        personDemoTitle1.classList.remove('demoTitleHidden')
        personDemoTitle2.classList.remove('demoTitleHidden')
        personDemoTitle3.classList.toggle('demoTitleHidden')
        aboutPerson1.classList.remove('aboutPersonShow')
        aboutPerson2.classList.remove('aboutPersonShow')
        aboutPerson3.classList.toggle('aboutPersonShow')
    }

    return (
        <div>
            <Typography variant={'h5'}><i>Сначала была Идея.</i></Typography>
            <Typography variant={'h5'}><i>Идея сложилась в картину.</i></Typography>
            <Typography variant={'h5'}><i>И картина ожила...</i></Typography>
            <div className='personMain'>
                <div className='personWrapper'>
                    <div onClick={onFirstCardClick} id='personItem1'
                        className='personItem neumorph'>
                        <div className="demoContentWrapper">
                            <h4 className='demoTitle'>Разработчик</h4>
                            <img src={avatarImg} alt="" />
                        </div>
                        <div className="aboutPerson">
                            <img className='personImage' src={personImgGusen} alt="" />
                            <div className="cardHeader">
                                <Typography variant={'h5'} className="personTitle">Разработчик</Typography>
                                <Typography variant={'h6'} className="personTitle"><strong>Гусен</strong></Typography>
                            </div>
                            <div className="badgeWrapper">
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={html5Logo} alt="HTML5" />}
                                    label="HTML5" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={css3Logo} alt="CSS3" />}
                                    label="CSS3" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={jsLogo} alt="JavaScript" />}
                                    label="JavaScript" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={reactLogo} alt="ReactJS" />}
                                    label="ReactJS" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={reduxLogo} alt="Redux" />}
                                    label="Redux" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={materialUILogo} alt="MaterialUI" />}
                                    label="MaterialUI" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={nodeJSLogo} alt="NodeJS" />}
                                    label="NodeJS" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={githubLogo} alt="GitHub" />}
                                    label="GitHub" variant="outlined"
                                />
                            </div>
                            <p className="personDescription">
                                <Typography variant={'h6'}>Ходил на собеседование с портфолио на флешке, не приняли.</Typography>
                                <Typography variant={'h6'}>Любит CSS, React и делать графики.</Typography>
                                <Typography variant={'h6'}>Думает, что умеет делать макеты, но это не так.</Typography>
                                <Typography variant={'h6'}>Готов работать за идею без еды, правда, недолго.</Typography>
                                <Typography variant={'h6'}>Не любит, когда фотографируют и реп.</Typography>
                                <Typography variant={'h6'}>Слушает NCS и Лепса</Typography>
                            </p>
                            <div className="soft">
                                <Typography variant={'h6'}><strong>Владение ПО: </strong></Typography>
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={figmaLogo} alt="Figma" />}
                                    label="Figma" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={afLogo} alt="Adobe Photoshop" />}
                                    label="Adobe Photoshop" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={miroLogo} alt="Miro" />}
                                    label="Miro" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={wsLogo} alt="WebStorm" />}
                                    label="WebStorm" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={ytLogo} alt="Яндекс Трекер" />}
                                    label="Яндекс Трекер" variant="outlined"
                                />
                            </div>
                            <div className="personSocialLinks">
                                <Typography variant={'h6'}><strong>Мои ссылки: </strong></Typography>
                                <Link to={'https://t.me/JS_FS'} target={'_blank'}>
                                    <Chip
                                        avatar={<img style={{ borderRadius: 50 }} src={tgLogo} alt="Telegram" />}
                                        label="Telegram" variant="outlined"
                                    />
                                </Link>
                                <Link to={'https://github.com/gusennn'} target={'_blank'}>
                                    <Chip
                                        avatar={<img style={{ borderRadius: 50 }} src={githubLogo} alt="GitHub" />}
                                        label="GitHub" variant="outlined"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div onClick={onMiddleCardClick} id='personItem2'
                        className='personItem neumorph'>
                        <div className="demoContentWrapper">
                            <h4 className='demoTitle'>Разработчик</h4>
                            <img src={personImgLinaAvatar} alt="" />
                        </div>
                        <div className="aboutPerson">
                            <img className='personImage' src={personImgLina} alt="" />
                            <div className="cardHeader">
                                <Typography variant={'h5'} className="personTitle">Разработчик</Typography>
                                <Typography variant={'h6'} className="personTitle"><strong>Лина</strong></Typography>
                            </div>
                            <div className="badgeWrapper">
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={html5Logo} alt="HTML5" />}
                                    label="HTML5" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={css3Logo} alt="CSS3" />}
                                    label="CSS3" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={jsLogo} alt="JavaScript" />}
                                    label="JavaScript" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={reactLogo} alt="ReactJS" />}
                                    label="ReactJS" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={reduxLogo} alt="Redux" />}
                                    label="Redux" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={materialUILogo} alt="MaterialUI" />}
                                    label="MaterialUI" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={nodeJSLogo} alt="NodeJS" />}
                                    label="NodeJS" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={githubLogo} alt="GitHub" />}
                                    label="GitHub" variant="outlined"
                                />
                            </div>
                            <p className="personDescription">
                                <Typography variant={'h6'}>Проводит с редактором кода больше времени, чем со своей семьей.</Typography>
                                <Typography variant={'h6'}>Умеет пользоваться гуглом и искать информацию.</Typography>
                                <Typography variant={'h6'}>Изучает язык PHP и говорит на нем на уровне "london is the capital of great britain".</Typography>
                                <Typography variant={'h6'}>Есть оконченное высшее техническое образование.</Typography>
                                <Typography variant={'h6'}>Очень любит животных, особенно морских свинок.</Typography>
                            </p>
                            <div className="soft">
                                <Typography variant={'h6'}><strong>Владение ПО: </strong></Typography>
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={figmaLogo} alt="Figma" />}
                                    label="Figma" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={afLogo} alt="Adobe Photoshop" />}
                                    label="Adobe Photoshop" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={vsLogo} alt="VS Code" />}
                                    label="VS Code" variant="outlined"
                                />
                            </div>
                            <div className="personSocialLinks">
                                <Typography variant={'h6'}><strong>Мои ссылки: </strong></Typography>
                                <Link to={'https://t.me/LinaCor96'} target={'_blank'}>
                                    <Chip
                                        avatar={<img style={{ borderRadius: 50 }} src={tgLogo} alt="Telegram" />}
                                        label="Telegram" variant="outlined"
                                    />
                                </Link>
                                <Link to={'https://github.com/LinaCor'} target={'_blank'}>
                                    <Chip
                                        avatar={<img style={{ borderRadius: 50 }} src={githubLogo} alt="GitHub" />}
                                        label="GitHub" variant="outlined"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div onClick={onLastCardClick} id='personItem3'
                        className='personItem neumorph'>
                        <div className="demoContentWrapper">
                            <h4 className='demoTitle'>Дизайнер</h4>
                            <img src={personImgDaryaAvatar} alt="" />
                        </div>
                        <div className="aboutPerson">
                            <img className='personImage' src={personImgDarya} alt="" />
                            <div className="cardHeader">
                                <Typography variant={'h5'} className="personTitle">Дизайнер</Typography>
                                <Typography variant={'h6'} className="personTitle"><strong>Дарья</strong></Typography>
                            </div>
                            <div className="badgeWrapper">
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={html5Logo} alt="HTML5" />}
                                    label="HTML5" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={css3Logo} alt="CSS3" />}
                                    label="CSS3" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={jsLogo} alt="JavaScript" />}
                                    label="JavaScript" variant="outlined"
                                />
                                <Chip
                                    label="UI/UX" variant="outlined"
                                />
                                <Chip
                                    label="SQL" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={githubLogo} alt="GitHub" />}
                                    label="GitHub" variant="outlined"
                                />
                            </div>
                            <p className="personDescription">
                                <Typography variant={'h6'}>Учитель информатики и технологии по образованию.</Typography>
                                <Typography variant={'h6'}>Готова творить в Фигме сутками напролёт.</Typography>
                                <Typography variant={'h6'}>Обожает дизайн, сериалы и все, что связано с творчеством.</Typography>
                            </p>
                            <div className="soft">
                                <Typography variant={'h6'}><strong>Владение ПО: </strong></Typography>
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={figmaLogo} alt="Figma" />}
                                    label="Figma" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={afLogo} alt="Adobe Photoshop" />}
                                    label="Adobe Photoshop" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={inkLogo} alt="Inkscape" />}
                                    label="Inkscape" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={cdLogo} alt="CorelDraw" />}
                                    label="CorelDraw" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={bdLogo} alt="Blender" />}
                                    label="Blender" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={gimpLogo} alt="GIMP" />}
                                    label="GIMP" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={sfLogo} alt="Synfig Studio" />}
                                    label="Synfig Studio" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{ borderRadius: 50 }} src={vsLogo} alt="VS Code" />}
                                    label="VS Code" variant="outlined"
                                />
                            </div>
                            <div className="personSocialLinks">
                                <Typography variant={'h6'}><strong>Мои ссылки: </strong></Typography>
                                <Link to={'https://t.me/gaandarya'} target={'_blank'}>
                                    <Chip
                                        avatar={<img style={{ borderRadius: 50 }} src={tgLogo} alt="Telegram" />}
                                        label="Telegram" variant="outlined"
                                    />
                                </Link>
                                <Link to={'https://vk.com/gaan.designer'} target={'_blank'}>
                                    <Chip
                                        avatar={<img style={{ borderRadius: 50 }} src={vkLogo} alt="ВКонтакте" />}
                                        label="ВКонтакте" variant="outlined"
                                    />
                                </Link>
                                <Link to={'https://www.instagram.com/gaan.designer'} target={'_blank'}>
                                    <Chip
                                        avatar={<img style={{ borderRadius: 50 }} src={instLogo} alt="Instagram" />}
                                        label="Instagram" variant="outlined"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DevTeam;