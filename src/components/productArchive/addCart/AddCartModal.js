import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import pa from '../productArchive.module.css'
import basket from "../../../assets/svg/iconBasket.svg";
import hCSS from "../../header/header.module.css";
import { NavLink } from "react-router-dom";

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

let AddCartModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button color={'dark'} className={`neumorph btn ${pa.addBtn}`} onClick={handleOpen}>
                <Typography style={{ fontSize: 18 }}>В корзине <img style={{ opacity: .5 }} src={basket} alt="В корзине" />
                </Typography>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Товар уже добавлен
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Ваш выбор уже в Корзине. Вы можете перейти в неё, или же остаться в Каталоге ( нажмите вне окошка  )
                    </Typography>
                    <NavLink className={'neumorph btn'} style={{ width: 200, marginTop: 40 }} to='/cart'>
                        Перейти в Корзину
                        <span className={hCSS.header__hidden}>Перейти в корзину</span>
                    </NavLink>
                </Box>
            </Modal>
        </div>
    );
}

export default AddCartModal