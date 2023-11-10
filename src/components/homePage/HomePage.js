import React from "react";
import hpCss from './homePage.module.css'
import bg from '../../../src/assets/image/background.jpg'


const HomePage =()=> {
    return (
        <div className='componentContainer'>
            <p className={hpCss.test}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloribus hic itaque iusto nobis non voluptas? Culpa ducimus ipsum itaque magni, minima necessitatibus possimus quidem voluptatem! Eaque illo odit perspiciatis!</p>
        </div>
    )
}

export default HomePage