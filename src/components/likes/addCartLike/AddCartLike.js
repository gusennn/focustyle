import React from 'react';
import { Button, Modal, Paper, Typography } from "@mui/material";
//import pa from '../productArchive.module.css'
import AddCartlikeModal from "./AddCartLikeModal";
import likeIcon from '../../../assets/svg/icon_heart.svg';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function AddCartLike(props) {
  props.getCatName(props.catName)

  let onCartClick = () => {
    props.cartCatName(props.catName)
    props.getAboutProduct(props.glassList[props.checkId], props.catName)
    props.isCartChecker(props.checkId)
  }
  return (
    <div>
      {
        props.disableStatus ?
          <AddCartlikeModal />
          : <Button disabled={props.disableStatus} color={'dark'} onClick={onCartClick}><img src={likeIcon} alt="Избранное" style={{ width: "22px", height: "22px", cursor: "pointer" }} /></Button>
      }
    </div>
  );
}

export default AddCartLike;