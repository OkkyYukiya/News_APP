import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const SymbolMenu = ({ Dow, Nsdq, AAPL, TSLA, NIKKE, SPX }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Opne Symbols
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={Dow}>DOW</MenuItem>
        <MenuItem onClick={Nsdq}>NASDAQ</MenuItem>
        <MenuItem onClick={SPX}>S&P500</MenuItem>
        <MenuItem onClick={AAPL}>APPLE</MenuItem>
        <MenuItem onClick={TSLA}>TESLA</MenuItem>
        <MenuItem onClick={NIKKE}>NIKKE</MenuItem>
      </Menu>
    </div>
  );
};

export default SymbolMenu;
