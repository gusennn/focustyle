import React from 'react';
import likeCss from '../liked.module.css'
import heart from '../../../assets/svg/icon_heart.svg'
import heartRed from '../../../assets/svg/icon_heart_red.svg'
import AddLikeModal from "./AddLikeModal";

function AddLike(props) {

    let onLikeClick = () => {
        props.getAboutProduct(props.glassList[props.checkId], props.catName)
        props.isLikeChecker(props.checkId)
    }

    return (
        <div>

            {
                !props.disableStatus ?
                    <button color={'dark'}
                            className={`btn likeBtnActive ${likeCss.likeBtnActive}`}
                            onClick={onLikeClick}>
                        <img src={heart} alt="favorite"/>
                    </button>
                    : <AddLikeModal />
            }


        </div>
    );
}

export default AddLike;