import PropTypes from 'prop-types'
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, ListItem, TextField, Button } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import MenuIcon from '@material-ui/icons/Menu';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import CallIcon from '@material-ui/icons/Call';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';

import "../../styles/fonts.css"
import "./HeaderWebsite.css"

function HeaderWebsite (props) {
    const [showDropdownItems, setshowDropdownItems] = useState(false)
    const [showMenuItems, setshowMenuItems] = useState([])

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event, children) => {
        setshowMenuItems(children);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (path) => {
        if (path) {
            props.navigate(path)
        }
        setAnchorEl(null);
    };

    const [show, setShow] = useState(false)

    return (
        <>
            <AppBar position="static" className="mob-header-bar">

                <Toolbar>
                    <div className="top-mob-container">
                        <div className="logo">
                            <span onClick={props.onLogoClick}>
                            <Link href={props.logolink}><img src={props.logo} alt="logo" /></Link>
                            </span>
                        </div>
                        <IconButton aria-controls="simple-menu" onClick={() => setShow(!show)}>
                            <MenuIcon />
                        </IconButton>

                    </div>
                </Toolbar>

                <div className="header-menu-links">
                    {show ? <Typography className="menu-li-container">
                        {props.headerItems && props.headerItems.length ? props.headerItems.map((item, i) => {
                            return <Link key={i} onClick={() => props.navigate(item.path)} href={item.link} target={props.target}>{item.icon} {item.title} {item.children && item.children.length ? <KeyboardArrowDownIcon onClick={handleClick} /> : null} </Link>
                        }) : null}
                    </Typography> : null}
                </div>
            </AppBar>

           

                <div className="WebHeaderContainer">

                    <div className="WebsiteHeaderLogo">
                        <span onClick={() => props.onLogoClick()}>
                            <Link href={props.logolink}><img src={props.logo} alt="logo" /></Link>
                        </span>
                    </div>

                    <div className="ManuRightCol">

                        <div className="TopHeaderContaier">

                            <div className="TopHeaderdDataCol">
                                <EmailOutlinedIcon />
                                <div>
                                    <div className="Th-Label">Email us at</div>
                                    <div className="Th-Text">{props.email1}</div>
                                </div>
                            </div>

                            <div className="TopHeaderdDataCol">
                                <CallIcon />
                                <div>
                                    <div className="Th-Label">Call us</div>
                                    <div className="Th-Text">{props.ContactNumber}</div>
                                </div>
                            </div>

                            <div className="TopHeaderdDataCol">
                                <Link onClick={() => props.topHeaderButton?.buttonClick()} className="TpHrButton" variant="outlined" to={props.Buttonpath} href={props.ButtonLink} target={props.target}>{props?.topHeaderButton?.buttonText ?? ""}</Link>
                            </div>

                        </div>


                        <div className="headerMenuLinks">
                            <Typography className="menu-li-container">
                                {props.headerItems && props.headerItems.length ? props.headerItems.map((item) => {
                                    return <Link href={item.link} to={item.path} target={props.target}>{item.icon} {item.title} {item?.children?.length ? <KeyboardArrowDownIcon onClick={(e) => handleClick(e, item.children)} /> : null} </Link>
                                }) : null}
                                
                                <div className="menuDropdown">
                                {showMenuItems?.length ? <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}

                                >
                                    {showMenuItems.map((el, i,) => <Link href={el.link} target={props.target}  key={i} onClick={() => handleClose(el.path)}>{el.title}</Link>)}
                                </Menu> : null} </div>
                            </Typography>
                        </div>
                    </div>
                </div>
           
        </>
    )
}

HeaderWebsite.propTypes = {
    headerItems: PropTypes.array,
    showSearchInput: PropTypes.bool,
    dropdownItems: PropTypes.array,
    navigate: PropTypes.func,
};


export default HeaderWebsite ;


