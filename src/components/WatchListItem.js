import React, { useState } from 'react'
import  { useContext } from "react";
import GeneralContext from "./GeneralContext"; // adjust the path if needed

// Material UI Icons (if used)
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import Tooltip from '@mui/material/Tooltip';
import Grow from '@mui/material/Grow';
import Button from '@mui/material/Button';
import {KeyboardArrowDown,KeyboardArrowUp} from "@mui/icons-material"
const WatchListItem=({stock})=>{
    const [showWatchlistActions,setShowWatchlistActions]=useState(false);
    const handleMouseEnter =(e)=>{
        setShowWatchlistActions(true);
    }
    const handleMouseExit =(e)=>{
        setShowWatchlistActions(false);
    }
    return(
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} >
            <div className='item'>
                <p className={stock.isDown ? "down":"up"}>{stock.name}</p>
                <div className='itemInfo'>
                    <span className='percent'>
                        {stock.percent}
                    </span>
                    {stock.isDown?(
                        <KeyboardArrowDown className="down"></KeyboardArrowDown>
                    ):(
                        <KeyboardArrowUp className="up"></KeyboardArrowUp>
                    )
                    }
                    <span className='price'>
                        {stock.price}
                    </span>
                </div>
            </div>
            {showWatchlistActions && <WatchListActions uid={stock.name}></WatchListActions>}
        </li>
    )
};




const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlinedIcon className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHorizIcon className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};


export default WatchListItem;