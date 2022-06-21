import React, { useState } from 'react';
import "./NavBarFour.css"
import "../../styles/fonts.css"
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import ButtonOne from '../ButtonOne/ButtonOne'
import Link from '@material-ui/core/Link';
import Dropdown from './Dropdown';
import CallIcon from '@material-ui/icons/Call';

function NavBarFour(props) {
  const { menuData, socialIconData } = props;


  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push('menuq2');
  } else {
    boxClass.push('');
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  return (

    <div className="NavBarFour" style={{ background: props.background, position: props.position }}>

      <div className="HeaderOneContainer" style={{ maxWidth: props.maxWidth }}>

        <div className="header__middle__menus">

          <div className='headerTopContainer'>

            <div className='headerTopContentContainer'>

              <div className='NavBarFourSoial'>
                {socialIconData.map((item, i) => (
                  <a className='SocialIcon' style={{ background: item.iconColor }} href={item.link} target="_blank">
                    <span >
                      {item.icon}
                    </span>
                  </a>
                ))}
              </div>

              <div className="HeaderOnesiteLogo DekstopView">
                <a exact activeClassName='is-active' href={props.logoLink} style={{ maxWidth: props.LogoSize }}>
                  <img src={props.logo} alt="logo" />
                </a>
              </div>

              <div>
                <ButtonOne
                  label={props.buttonLebel}
                  link={props.ButtonLink}
                  target={props.target}
                  path={props.path}
                  arrowIcon={props.arrowIcon}
                  arrowStatus={props.arrowStatus}
                  arrowColor={props.arrowColor}
                  buttoncolor={props.buttoncolor}
                  width={props.width}
                  height={props.height}
                  border={props.border}
                  borderRadius={props.borderRadius}
                  color={props.colorlabel}
                  fontWeight={props.fontWeight}
                  textAlign={props.textAlign}
                  handIconStatus={props.handIconStatus}
                />
              </div>

            </div>

            <div style={{ background: props.borderLine, height: "1px", width: "100%", }}></div>

          </div>

          <div className='menuContainer'>

            <div className="HeaderOnesiteLogo MobileView">
              <a exact activeClassName='is-active' href={props.logoLink} style={{ maxWidth: props.LogoSize }}>
                <img src={props.logo} alt="logo" />
              </a>
            </div>

            {props.MenuStatus && <nav className="main-nav " >

              {/* Responsive Menu Button */}
              {isResponsiveclose === true ? <>
                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <img src={props.CloseIcon} /></span>
              </> : <>
                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <img src={props.MenuIcon} /></span>
              </>}


              <ul className={boxClass.join(' ')}>

                {menuData.map((item, i) => (

                  <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" >
                    <Link exact activeClassName='is-active' to={item.to} href={item.link}> {item.label}
                      {item.hasChildren && <KeyboardArrowDownRoundedIcon />}
                    </Link>

                    <Dropdown children={item.children} />

                  </li>
                ))}
              </ul>

            </nav>}

          </div>


        </div>

      </div>

    </div>

  );
}

export default NavBarFour;