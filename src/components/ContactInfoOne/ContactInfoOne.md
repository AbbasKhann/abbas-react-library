CONTACT US COMPONENT

```jsx
import { ContactInfoOne } from "master-react-lib";
import FacebookIcon from './socialicons/FacebookRounded.svg';
import YouTubeIcon from './socialicons/YouTubeRounded.svg';
import TwitterIcon from './socialicons/TwitterRounded.svg';
import WhatsAppIcon from './socialicons/WhatsappRounded.svg';
import WhatsAppIconButton from './socialicons/WhatsappRoundedGreen.svg';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';

import officeImg from "./banner.jpg";


const contactDetails = [
  {icon:<CallRoundedIcon />, details:"(917) 348-6417, (718) 348-1853"},
  {icon:<EmailRoundedIcon />, details:"info@afnanilab.com"},
  {icon:<LocationOnRoundedIcon />, details:"2668 Church Ave Brooklyn, NY 11208"},
];

const socialLinks = [
  {
    icon:<img src={FacebookIcon} />,
    link:"https://www.facebook.com/",
  },
  {
    icon:<img src={YouTubeIcon} />,
    link:"https://www.youtube.com/",
  },
  {
    icon:<img src={TwitterIcon} />,
    link:"https://twitter.com/",
  },
  {
    icon:<img src={WhatsAppIconButton} />,
    link:"",
  },



];



<>
  <ContactInfoOne 
    img={officeImg}
    title="MAIN OFFICE"
    titleColor="#56B149"
    contactDetails={contactDetails}
    socialLinks={socialLinks}
    imgStatus={true}
    

  />
</> 
```
