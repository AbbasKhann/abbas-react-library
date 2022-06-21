ALERT COMPONENT

```jsx
import { NavBarFour } from "master-react-lib";
import Logo from './logo.png';
import MenuIcon from './menuIcon.svg';
import CloseIcon from './closeIcon.svg';

import facebook from './facebook.png';
import youtube from './youtube.png';
import twitter from './twitter.png';

import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

const menuData =[
  {
    label:"HOME",
    to:"/",
    //link:"https://www.google.com/",
    hasChildren: true,
    children: [
      {label:"Google", link:"https://www.google.com/"},
      {label:"facebook", link:"https://www.facebook.com/"},
    ]
  },

  {
    label:"ABOUT US",
    to:"/",
    //link:"https://www.google.com/",
    hasChildren: true,
    
  },

  {
    label:"PROGRAMS",
    to:"/",
    //link:"https://www.google.com/",
    hasChildren: false,
    
  },

  {
    label:"RESOURCES",
    to:"/",
    //link:"https://www.google.com/",
    hasChildren: false,
    
  },

  {
    label:"EVENTS",
    to:"/",
    //link:"https://www.google.com/",
    hasChildren: false,
    
  },


];

const socialIconData =[
  {
    icon:<img src={facebook} />,
    iconColor:"#1877F2",
    link:"https://www.facebook.com/",
  },

  {
    icon:<img src={youtube} />,
    iconColor:"#F44336",
    link:"https://www.youtube.com/",
  },

  {
    icon:<img src={twitter} />,
    iconColor:"#03A9F4",
    link:"https://twitter.com/",
  },
];


<>
  <NavBarFour 
   menuData={menuData}
   MenuStatus={true}
    logo={Logo}
    logoLink="/"
    MenuIcon={MenuIcon}
    CloseIcon={CloseIcon}  
    background="#fff"
    maxWidth="1175px"
    LogoSize="220px"
    position="relative"

    borderLine="#E4E8EC"

  
    socialIconData={socialIconData}

    vrLineBg="#ccc"

    //// Button Style ////
      buttonLebel="DONATE NOW"
      ButtonLink="https://xd.adobe.com/view/a9342815-a66f-42cf-aee5-8dc16dcb70eb-fc67/specs/"
      target="blank"
      path="/"
      arrowIcon={<ArrowForwardIosRoundedIcon/>}
      arrowStatus={true}
      arrowColor="#fff"
      buttoncolor="#FF6200"
      width="auto"
      height="47px"
      border="#ccc 0px solid"
      borderRadius="4px"
      colorlabel="#fff"
      fontWeight="600"
      textAlign="center"
      handIconStatus={true}
       
  />
</> 
```