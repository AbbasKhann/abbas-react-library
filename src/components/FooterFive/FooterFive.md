FooterFive

```jsx
import { FooterFive } from "master-react-lib";
import Logo from './logo.png';
import Logo_2 from './logo_2.png';
import VideoCam from './videocam.svg'
import location from './location.svg'
import call from './call.svg' 
import email from './email.svg' 
import Locationicon from './Locationicon.svg'   
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import facebook from './facebook-icon.png'   
import twitter from './twitter-icon.png'   
import youtube from './youtube-icon.png'


import Sunrise from './Sunrise.png';
import Sun from './Sun.png';
import Moon from './Moon.png'


const footerFiveSocial =[
    {  icon:"https://dc-img-assets.s3.amazonaws.com/DEENCONNECT-manage-masjid-organization-facebook-icon.webp", link:"https://www.facebook.com/"},
    {  icon:"https://dc-img-assets.s3.amazonaws.com/DEENCONNECT-manage-masjid-organization-twitter-icon.webp", link:"https://www.facebook.com/"}, 
    {  icon:"https://dc-img-assets.s3.amazonaws.com/DEENCONNECT-manage-masjid-organization-youtube-icon.webp", link:"https://www.facebook.com/"},   
];


const tableBodyData = [
  {col1: "Al-Fajr", col2: "4:10 AM", icon: <img src={Sunrise} />, },
  {col1: "Al-Żuhr", col2: "4:10 AM", icon: <img src={Sun} />, },
  {col1: "1St Al-Jumu‘ah", col2: "4:10 AM", icon: <img src={Sun} />, },
  {col1: "2Nd Al-Jumu‘ah", col2: "4:10 AM", icon: <img src={Sun} />, },
  {col1: "Al-‘Asr", col2: "4:10 AM", icon: <img src={Sun} />, },
  {col1: "Al-Maghrib", col2: "4:10 AM", icon: <img src={Sunrise} />, },
  {col1: "Al-‘Ishā’", col2: "4:10 AM", icon: <img src={Moon} />, },
];




<>
  <FooterFive 
    background="#0B132B"
    color="#FFFFFF"
    footerFiveSocial={footerFiveSocial}
    ContainerMaxWidth="1175px"

    Titlebackground="#0053A5"

    //// ABOUT COL ////

    TitleAbout="ABOUT US"
    AboutTextOne="Masjid Baitus Salam provides daily Salawat, weekly Jumu’ah and facilitates community activities to the muslims of Flatbush, Prospect Park and Kensington areas."
     AboutTextTwo="Masjid Baitus Salam is a 501(c)- Non-Profit Tax ID 16-1621062."



    //// CONTACT INFO COL ////

    TitleContactIfo="CONTACT INFO"

    address="167 East 43rd St. Brooklyn, NY 11203"
    getDirectionLink="https://www.google.com/maps"
    getDirectiontarget="_new"

    phoneOne="718-469-4899"
    phoneTwo="929-340-0399"

    email="team@masjidbaitussalam.org"

    contactLink="https://www.google.com/maps"
    contactTarget=""


  //// IQAMAH COL ////

    TitleIqamah="IQAMAH TIME"


//// BOTTOM FOOTER COL ////

    dividerLine="#676C7B"
    TosLink="/"
    ppLink="/"
    allRightText="© 2022 HELPING HAND FOR CHITTAGONIAN. ALL RIGHT RESERVED"








    //// Button Style ////
    label="FOLLOW US ON FACEBOOK"
    link="https://www.google.com/"
    target="blank"
    path="/"
    arrowIcon={<ArrowForwardIosRoundedIcon/>}
    arrowStatus={true}
    arrowColor="#fff"
    buttoncolor="#4267B2"
    width="100%"
    height="50px"
    border="#ccc 0px solid"
    borderRadius="0px"
    color="#fff"
    fontWeight="600"
    //textAlign="center"
    //disabled="disabled"

    FooterRowTwo={true}

    tableBodyData={tableBodyData}
    SlatTablebottomText="Updated: March 11, 2021"



  />
</> 
```
