import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import basket from "../../../assets/svg/iconBasket.svg";
import hCSS from "../../header/header.module.css";
import {NavLink} from "react-router-dom";
import likeCss from "../liked.module.css";
import heart from "../../../assets/svg/icon_heart.svg";
import heartRed from "../../../assets/svg/icon_heart_red.svg";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

let AddLikeModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button onClick={handleOpen}
                    color={'dark'}
                    className={`btn likeBtn ${likeCss.likeBtn}`}>
                <img src={heartRed} alt="favorite"/>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Товар уже в Избранных
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        Вы можете посмотреть список Избранных, или же остаться в Каталоге ( нажмите вне окошка )
                    </Typography>
                    <NavLink className={'neumorph btn'} style={{width: 200, marginTop: 40}} to='/likes'>
                        Перейти к списку
                        <span className={hCSS.header__hidden}>Перейти в корзину</span>
                    </NavLink>
                </Box>
            </Modal>
        </div>
    );
}

export default AddLikeModal