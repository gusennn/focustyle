import React from 'react';
import Draggable from 'react-draggable';
import dCss from './draggable.module.css'
import {Typography} from "@mui/material";

class DraggableGlass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: props.image,
            imgWidth: 150
        }
    }

    onImageIncrementSize = () => {
        let getStateImageSize = this.state.imgWidth
        this.setState({
            imgWidth: getStateImageSize + 5
        })
    }
    onImageDecrementSize = () => {
        let getStateImageSize = this.state.imgWidth
        this.setState({
            imgWidth: getStateImageSize - 5
        })
    }

    render() {
        return (
            <Draggable
                axis="both"
                handle=".handle"
                defaultPosition={{x: 0, y: 0}}
                position={null}
                scale={1}
                bounds={'parent'}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <div className={dCss.dragContainer}>
                    {
                        this.state.image ?
                            <img className={dCss.tryImage} src={this.state.image} style={{width: `${this.state.imgWidth}px`}}
                                 alt=""/>
                            : <Typography style={{width: 200, opacity: .5}}
                                          variant={'subtitle2'}>
                                Пока ничего не выбрано, но это можно исправить в Каталоге :)</Typography>
                    }

                    <div className="handle">
                        <svg width="64px" height="64px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                             className={dCss.pointSvg}>
                            <g>
                                <path
                                    d="M7.463.057A.748.748 0 007.22.22l-2 2a.75.75 0 001.06 1.06L7 2.56V7H2.56l.72-.72a.75.75 0 00-1.06-1.06l-2 2a.748.748 0 000 1.06l2 2a.75.75 0 101.06-1.06l-.72-.72H7v4.44l-.72-.72a.75.75 0 00-1.06 1.06l2 2a.748.748 0 001.06 0l2-2a.75.75 0 10-1.06-1.06l-.72.72V8.5h4.44l-.72.72a.75.75 0 101.06 1.06l2-2a.748.748 0 000-1.06l-2-2a.75.75 0 10-1.06 1.06l.72.72H8.5V2.56l.72.72a.75.75 0 101.06-1.06l-2-2a.748.748 0 00-.817-.163z"></path>
                            </g>
                        </svg>
                    </div>
                    <div className={`${dCss.glassControls}`}>
                        <button className={`btn ${dCss.incBtn}`} onClick={this.onImageIncrementSize}></button>
                        <button className={`btn ${dCss.decBtn}`} onClick={this.onImageDecrementSize}></button>
                    </div>
                </div>
            </Draggable>
        );
    }
}

export default DraggableGlass
