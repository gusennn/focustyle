import React, {Component} from "react";
import Container from "@mui/material/Container";
import loadImg from './LoadPhoto.module.css'
import Button from "@mui/material/Button";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import defaultPhoto from '../../assets/image/defaultMan.svg'
import {Typography} from "@mui/material";
import DraggableGlass from "./draggableGlassItem/DraggableGlass";

class UserPhotoLoad extends Component {
    constructor(props) {
        super (props);
        this.state = {
            glassImage: props.image,
            image: defaultPhoto,
            imageOpacity: 0.2,
            display: 'block'
        };

        this.onImageChange = this.onImageChange.bind (this);
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState ({
                image: URL.createObjectURL (img),
                imageOpacity: 1,
                display: 'none'
            });
        }
    };

    render() {
        return (
            <div className={loadImg.userMain}>
                <Container className={loadImg.uploadBtn}>
                    <button variant={'contained'} className={'neumorph'}>
                        <label className="custom-file-upload"> Моё фото
                            <input type="file" name="myImage" onChange={this.onImageChange}/>
                            <FileUploadIcon/><br/>
                        </label>
                    </button>
                </Container>
                <div className={loadImg.userPhotoBox}>
                    <DraggableGlass image={this.state.glassImage} />
                    <img className={loadImg.userImg} src={this.state.image} style={{opacity: this.state.imageOpacity}}/>
                    <Typography display={this.state.display} variant={'h2'} align={'center'} style={{opacity: this.state.imageOpacity}}>Ваше фото</Typography>
                </div>
            </div>

        );
    }
}

export default UserPhotoLoad;