
import React, { useState } from 'react';


function Dropdown(props) {

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    let boxClassSubMenu = ["sub__menus"];

    isMenuSubMenu ?  boxClassSubMenu.push('sub__menus__Active') : boxClassSubMenu.push(''); 

  return (
       <ul className={boxClassSubMenu.join(' ')} >
            {props.children && props.children.map((child, i) => (
                <li> <a activeClassName='is-active' href={child.link}> {child.label} </a> </li>
            ))} 
         </ul>
    );
}

export default Dropdown;