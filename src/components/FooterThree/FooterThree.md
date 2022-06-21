FooterThree

```jsx
import { FooterThree } from "master-react-lib";
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


const FooterThreeColOne = [  
   { description: "We are 501(c)(3) tax-exempted organization.", },
];

const FooterThreeSocial =[
    {  icon:"https://dc-img-assets.s3.amazonaws.com/DEENCONNECT-manage-masjid-organization-facebook-icon.webp", link:"https://www.facebook.com/"},
    {  icon:"https://dc-img-assets.s3.amazonaws.com/DEENCONNECT-manage-masjid-organization-twitter-icon.webp", link:"https://www.facebook.com/"}, 
    {  icon:"https://dc-img-assets.s3.amazonaws.com/DEENCONNECT-manage-masjid-organization-youtube-icon.webp", link:"https://www.facebook.com/"},   
];



const FooterThreeContactinfo =[
    {  TextOne: "722 Church Ave", TextTwo:"Brooklyn, NY 11218", icon:location },
    {  TextOne: "718-469-4899", TextTwo:"929-340-0399", icon:call },
    {  TextOne: "team@bicny.org", icon: email },
    
];

const footerThreelinks =[
    { 
      label: "Home",
      link:"/",
     },
     { 
      label: "About Us",
      link:"/",
     },
     { 
      label: "Contact Us",
      link:"/",
     },
     { 
      label: "Volunteer",
      link:"/",
     },
     { 
      label: "Our Projects",
      link:"/",
     },

    
];




<>
  <FooterThree 
    background="#0B132B"
    color="#FFFFFF"
    FooterThreeColOne={FooterThreeColOne}
    FooterThreeSocial={FooterThreeSocial}
    FooterThreeContactinfo={FooterThreeContactinfo}
    footerThreelinks={footerThreelinks}
    ContainerMaxWidth="1175px"

    TitleOne="CONTACT"
    TitleTwo="IMPORTANT LINKS"


    logo={Logo}
    ColTitleOne="Helping Hand For Chittagonian"

    dividerLine="#676C7B"
    Bottomlogo={Logo_2}
    BottomTitle="Helping Hand For Chittagonian"

    TosLink="/"
    ppLink="/"

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

  />
</> 
```
