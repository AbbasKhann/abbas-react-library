import PropTypes from 'prop-types'
import React, {useState} from 'react';
import {AppBar, Toolbar, IconButton, Typography, Container, ListItem , Box, TextField, Button} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import "../../styles/fonts.css"
import "../../styles/header.css"

function Header(props) {
    const [showDropdownItems, setshowDropdownItems] = useState(false)
    const [showSearchInput, setshowSearchInput] = useState(false)

        return (
            <>
                <AppBar position="static" className="mob-header-bar">
                    <Toolbar>
                        <div className="top-mob-container">
                            <div className="logo">
                                <a to={"/"}>
                                    <img src={props.logo} alt="logo" />
                                </a>
                            </div>
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                        </div>
                        
                        
                    </Toolbar>
                    <div className="header-menu-links">
                        <Typography className="menu-li-container">
                            {props.headerItems && props.headerItems.length ? props.headerItems.map((item, i) => {
                                if(item.title !== "Search") {
                                    return <ListItem key={i} onClick={() => props.navigate(item.path)}>{item.icon} {item.title} {item.children && item.children.length ? <KeyboardArrowDownIcon /> : null} </ListItem>
                                }
                            }) : null }
                            {props.showSearchInput && <form noValidate autoComplete="off" className="mob-search">
                               <SearchIcon /> <TextField id="standard-basic" label="Standard" />
                            </form>}
                        </Typography>
                    </div>
                </AppBar>

                <div className="headerContainer">
                <Container maxWidth="lg">

                    <div className="logo">
						<a href={"/"}>
                            <img src={props.logo} alt="logo" />
                        </a>
                    </div>
                    <div className="header-menu-links">
                        <Typography className="menu-li-container">
                            {props.headerItems && props.headerItems.length ? props.headerItems.map((item) => {
                                return <ListItem onClick={() => item.title === "Search" ? setshowSearchInput(true) : props.navigate(item.path)}>{item.icon} {item.title} {item.children && item.children.length ? <KeyboardArrowDownIcon /> : null} </ListItem>
                            }) : null }
                        </Typography>
                    </div>
                    <div className="profile-dropdown">
                        <span>AN</span> <KeyboardArrowDownIcon onClick={() => setshowDropdownItems(!showDropdownItems)} />
                        {showDropdownItems && <div className="profile-dropdown-submenus">
                            <Box className="top-arrow"> </Box>
                            <Typography>
                            {props.dropdownItems && props.dropdownItems.length ? props.dropdownItems.map((item) => {
                                return <ListItem onClick={() => props.navigate(item.path)}>{item.title}</ListItem>
                            }) : null }
                            </Typography>
                        </div> }
                    </div>

                    {showSearchInput && <form noValidate autoComplete="off" className="header-searchbar">
                        <SearchIcon />
                        <TextField id="standard-basic" label="Find fundraiser by name or location" 
                        onFocus={() => setshowSearchInput(true)} onBlur={() => setshowSearchInput(false)} />
                        <Button variant="contained" className="searchBtn">
                            SEARCH
                        </Button>
                    </form> }
                     
                    {props.headerSignupButton &&
                     <div className="header_button_col">
                        <Button className="signup_btn">Sign up</Button>
                        <Button className="login_button">login</Button>
                    </div>
                    }
                    
                </Container>
            </div>
            </>
        )
}

Header.propTypes = {
    headerItems: PropTypes.array,
    showSearchInput: PropTypes.bool,
    dropdownItems: PropTypes.array,
    navigate: PropTypes.func,
};


export default Header;