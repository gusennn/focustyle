import React from 'react';
import {Chip, Typography} from "@mui/material";
import jsLogo from "../../assets/icons/JavaScript-logo.png";
import reactLogo from "../../assets/icons/react-logo.png";
import reduxLogo from "../../assets/icons/redux.png";
import materialUILogo from "../../assets/icons/muilogo.png";
import nodeJSLogo from "../../assets/icons/node-js.png";
import {Link} from "react-router-dom";
import tgLogo from "../../assets/icons/Telegram-logo.png";
import githubLogo from "../../assets/icons/gh.png";


function DevTeam() {

    let avatarImg = 'https://p7.hiclipart.com/preview/814/977/80/rick-sanchez-pocket-mortys-morty-smith-rick-and-morty-season-3-meeseeks-and-destroy-others.jpg'
    let personImg = 'https://liveboldandbloom.com/wp-content/uploads/2021/09/Untitled_design_3_1-768x538.png'

    let onFirstCardClick =()=> {
        let personCard = document.getElementById('personItem1')
        let personDemoTitle = document.querySelector(`#personItem1 .demoTitle`)
        let aboutPerson = document.querySelector(`#personItem1 .aboutPerson`)
        personCard.classList.toggle('personItemActive')
        personDemoTitle.classList.toggle('demoTitleHidden')
        aboutPerson.classList.toggle('aboutPersonShow')
    }

    let onMiddleCardClick =()=> {
        let personCard = document.getElementById('personItem2')
        let personDemoTitle = document.querySelector(`#personItem2 .demoTitle`)
        let aboutPerson = document.querySelector(`#personItem2 .aboutPerson`)
        personCard.classList.toggle('personItemActive')
        personDemoTitle.classList.toggle('demoTitleHidden')
        aboutPerson.classList.toggle('aboutPersonShow')
    }
    let onLastCardClick =()=> {
        let personCard = document.getElementById('personItem3')
        let personDemoTitle = document.querySelector(`#personItem3 .demoTitle`)
        let aboutPerson = document.querySelector(`#personItem3 .aboutPerson`)
        personCard.classList.toggle('personItemActive')
        personDemoTitle.classList.toggle('demoTitleHidden')
        aboutPerson.classList.toggle('aboutPersonShow')
    }

    return (
        <div>
            <div className='personMain'>
                <div className='personWrapper'>
                    <div onClick={onFirstCardClick} id='personItem1'
                         className='personItem neumorph'>
                        <div className="demoContentWrapper">
                            <h4 className='demoTitle'>Разработчик</h4>
                            <img src={avatarImg} alt=""/>
                        </div>
                        <div className="aboutPerson">
                            <img className='personImage' src={personImg} alt=""/>
                            <div className="cardHeader">
                                <h4 className="personTitle">Разработчик</h4>
                                <h4 className="personTitle">John Doe</h4>
                            </div>
                            <div className="badgeWrapper">
                                <Chip
                                    avatar={<img style={{borderRadius: 50}} src={jsLogo} alt="JavaScript"/>}
                                    label="JavaScript" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{borderRadius: 50}} src={reactLogo} alt="ReactJS"/>}
                                    label="ReactJS" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{borderRadius: 50}} src={reduxLogo} alt="Redux"/>}
                                    label="Redux" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{borderRadius: 50}} src={materialUILogo} alt="MaterialUI"/>}
                                    label="MaterialUI" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{borderRadius: 50}} src={nodeJSLogo} alt="NodeJS"/>}
                                    label="NodeJS" variant="outlined"
                                />
                            </div>
                            <div className="personDescription">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Architecto asperiores dolor esse, laborum neque non officia perspiciatis quis sit suscipit.
                            </div>
                            <div className="personSocialLinks">
                                <Typography variant={'h6'}>Мои ссылки: </Typography>
                                <Link to={'https://skillboxcode.mave.digital/'} target={'_blank'}>
                                    <Chip
                                        avatar={<img style={{borderRadius: 50}} src={tgLogo} alt="Telegram"/>}
                                        label="Telegram" variant="outlined"
                                    />
                                </Link>
                                <Chip
                                    avatar={<img style={{borderRadius: 50}} src={githubLogo} alt="GitHub"/>}
                                    label="GitHub" variant="outlined"
                                />
                            </div>
                        </div>
                    </div>
                    <div onClick={onMiddleCardClick} id='personItem2'
                         className='personItem neumorph'>
                        <div className="demoContentWrapper">
                            <h4 className='demoTitle'>Разработчик</h4>
                            <img src={avatarImg} alt=""/>
                        </div>
                        <div className="aboutPerson">
                            <img className='personImage' src={personImg} alt=""/>
                            <div className="cardHeader">
                                <h4 className="personTitle">Разработчик</h4>
                                <h4 className="personTitle">John Doe</h4>
                            </div>
                            <div className="badgeWrapper">
                                <Chip
                                    avatar={<img style={{borderRadius: 50}} src={jsLogo} alt="JavaScript"/>}
                                    label="JavaScript" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{borderRadius: 50}} src={reactLogo} alt="ReactJS"/>}
                                    label="ReactJS" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{borderRadius: 50}} src={reduxLogo} alt="Redux"/>}
                                    label="Redux" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{borderRadius: 50}} src={materialUILogo} alt="MaterialUI"/>}
                                    label="MaterialUI" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{borderRadius: 50}} src={nodeJSLogo} alt="NodeJS"/>}
                                    label="NodeJS" variant="outlined"
                                />
                            </div>
                            <div className="personDescription">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Architecto asperiores dolor esse, laborum neque non officia perspiciatis quis sit suscipit.
                            </div>
                            <div className="personSocialLinks">
                                <Typography variant={'h6'}>Мои ссылки: </Typography>
                                <Link to={'https://skillboxcode.mave.digital/'} target={'_blank'}>
                                    <Chip
                                        avatar={<img style={{borderRadius: 50}} src={tgLogo} alt="Telegram"/>}
                                        label="Telegram" variant="outlined"
                                    />
                                </Link>
                                <Chip
                                    avatar={<img style={{borderRadius: 50}} src={githubLogo} alt="GitHub"/>}
                                    label="GitHub" variant="outlined"
                                />
                            </div>
                        </div>
                    </div>
                    <div onClick={onLastCardClick} id='personItem3'
                         className='personItem neumorph'>
                        <div className="demoContentWrapper">
                            <h4 className='demoTitle'>Дизайнер</h4>
                            <img src={avatarImg} alt=""/>
                        </div>
                        <div className="aboutPerson">
                            <img className='personImage' src={personImg} alt=""/>
                            <div className="cardHeader">
                                <h4 className="personTitle">Дизайнер</h4>
                                <h4 className="personTitle">John Doe</h4>
                            </div>
                            <div className="badgeWrapper">
                                <Chip
                                    avatar={<img style={{borderRadius: 50}} src={jsLogo} alt="JavaScript"/>}
                                    label="JavaScript" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{borderRadius: 50}} src={reactLogo} alt="ReactJS"/>}
                                    label="ReactJS" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{borderRadius: 50}} src={reduxLogo} alt="Redux"/>}
                                    label="Redux" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{borderRadius: 50}} src={materialUILogo} alt="MaterialUI"/>}
                                    label="MaterialUI" variant="outlined"
                                />
                                <Chip
                                    avatar={<img style={{borderRadius: 50}} src={nodeJSLogo} alt="NodeJS"/>}
                                    label="NodeJS" variant="outlined"
                                />
                            </div>
                            <div className="personDescription">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Architecto asperiores dolor esse, laborum neque non officia perspiciatis quis sit suscipit.
                            </div>
                            <div className="personSocialLinks">
                                <Typography variant={'h6'}>Мои ссылки: </Typography>
                                <Link to={'https://skillboxcode.mave.digital/'} target={'_blank'}>
                                    <Chip
                                        avatar={<img style={{borderRadius: 50}} src={tgLogo} alt="Telegram"/>}
                                        label="Telegram" variant="outlined"
                                    />
                                </Link>
                                <Chip
                                    avatar={<img style={{borderRadius: 50}} src={githubLogo} alt="GitHub"/>}
                                    label="GitHub" variant="outlined"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DevTeam;