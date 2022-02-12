import React, {useState} from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Dropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Categorias
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}><Link to="/category/indumentaria" className='Link'>Indumentaria</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/category/calzado" className='Link'>Calzado</Link> </MenuItem>
        <MenuItem onClick={handleClose}><Link to="/category/accesorios" className='Link'>Accesorios</Link></MenuItem>
      </Menu>
    </div>
  );
}

