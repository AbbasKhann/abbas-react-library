CONTACT US COMPONENT

```jsx
import { ContactUs } from "master-react-lib";


import FacebookIcon from './socialicons/FacebookRounded.svg';
import YouTubeIcon from './socialicons/YouTubeRounded.svg';
import TwitterIcon from './socialicons/TwitterRounded.svg';
import WhatsAppIcon from './socialicons/WhatsappRounded.svg';
import WhatsAppIconButton from './socialicons/WhatsappRoundedGreen.svg';

const onContactFormSubmit = (contactFormData) => {
  console.log("contactFormData", contactFormData);
};

const officeDetails = {
    primaryPhone: "(917) 348-6417", 
    secondaryPhone: "(718) 348-1853", 
    address: "1049 Glenmore Ave, #5B, Brooklyn, NY 11208", 
    email: "team@zamzamhajj.com"
};

const socialLinks = {
    facebook: "https://www.facebook.com", 
    youtube: "https://www.youtube.com", 
    twitter: "https://www.twitter.com", 
    whatsapp: "https://www.whatsapp.com"
};

const contacts = [
  {name: "Aminur Rahman", address: "Ozone park, ny", phone: "(929) 254-9138"},
  {name: "Imam Obaidul Haque", address: "Bronx, ny", phone: "(347) 320-7218"},
  {name: "Imam Azim Uddin", address: "Pennsylvania", phone: "(215) 917-9524"},
  {name: "Nurul Islam", address: "Florida", phone: "(347) 517-1432"},
  {name: "Hafiz Rayhan Uddin", address: "Detroit, Michigan", phone: "(313) 788-4913"},
  {name: "Abdul Mukit Azad", address: "Los angeles, CA", phone: "(323) 309-9827"},
];

<>
  <ContactUs 
    title={"Contact Us"}
    description={"We work directly with founders & managers and are 100% email-based. No more time wasted scheduling calls."}
    onContactFormSubmit={onContactFormSubmit}
    selectOptions={[{title: "New York"}, {title: "California"}, {title: "NY"}]}
    officeDetails={officeDetails}
    socialLinks={socialLinks}
    contacts={contacts}
    whatsAppIconButtonLink={"#"}
    FacebookIcon={FacebookIcon}
    YouTubeIcon={YouTubeIcon}
    TwitterIcon={TwitterIcon}
    WhatsAppIcon={WhatsAppIcon}
    WhatsAppIconButton={WhatsAppIconButton}
    WhatsAppIconButtonStatus={true}

    ButtonLabel="SEND MESSAGE"
    ButtonColor="#56B149"
    disableBtn="disabled"
  />
</> 
```
