import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
//import pa from '../productArchive.module.css'
import likeIconeChosen from '../../../assets/svg/icon_heart_red.svg';
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

let AddCartlikeModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button color={'dark'} onClick={handleOpen}><img src={likeIconeChosen} alt="Избранное" style={{ width: "22px", height: "22px", cursor: "pointer" }} /></Button>
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
            Ваш выбор уже в Избранном. Вы можете перейти в него, или же остаться в Каталоге ( нажмите вне окошка  )
          </Typography>
          <NavLink className={'neumorph btn'} style={{ width: 200, marginTop: 40 }} to='/likes'>
            Перейти в Избранное
            <span className={hCSS.header__hidden}>Перейти в избранное</span>
          </NavLink>
        </Box>
      </Modal>
    </div>
  );
}

export default AddCartlikeModal