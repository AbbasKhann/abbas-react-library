FOOTER WEB COMPONENT

```jsx
import { FooterWeb } from "master-react-lib";
import DCLogo from './DC_Logo.png';

const footerLinks = [
  {
    headingTitle: "Helpful resources",
    columnOnelinks: [
      {name: "Hajj Checklist", url: "/", linkType: "internal"},
      {name: "Hajj Du’a Book - Bangla", url: "/", linkType: "internal"},
      {name: "Hajj Du’a Book - English", url: "/", linkType: "internal"},
    ],
    columnTwolinks: [
      {name: "Hajj Videos", url: "/", linkType: "internal"},
      {name: "Hajj Map", url: "/", linkType: "internal"},
      {name: "Hajj Requirements", url: "/", linkType: "internal"},
    ],
  },
  {
    headingTitle: "Zamzam",
    columnOnelinks: [
      {name: "About Us", url: "/", linkType: "internal"},
      {name: "Our Packages", url: "/", linkType: "internal"},
      {name: "Common Services", url: "/", linkType: "internal"},
    ],
    columnTwolinks: [
      {name: "10 Years of Service", url: "/", linkType: "internal" , target:"blank"},
      {name: "Registration", url: "/", linkType: "internal"},
      {name: "Contact Us", url: "/", linkType: "internal"},
    ],
  },
    {
    headingTitle: "Connect",
    columnOnelinks: [
      {name: "YouTube", url: "/", linkType: "external"},
      {name: "Facebook", url: "/", linkType: "external"},
      {name: "Twitter", url: "/", linkType: "external"},
    ],
    columnTwolinks: [
      {name: "WhatsApp", url: "/", linkType: "external"},
      {name: "Email Us", url: "/", linkType: "external"},
      {name: "Call Us", url: "/", linkType: "external"},
    ],
  },
];

const poweredBy = {
  logo: DCLogo,
  link: "https://deenconnect.io/",
};

const onLinkClick = (linkInfo) => {
  console.log("linkInfo", linkInfo);
};

<>
  <FooterWeb 
    footerLinks={footerLinks}
    copyRightsText={"© 2021 ZamZam Hajj and Umrah Services, Inc. All Rights Reserved"}
    termsOfServiceLink={"/terms"}
    privacyPolicyLink={"/privacy-ploicy"}
    poweredBy={poweredBy}
    onLinkClick={onLinkClick}
  />
</> 
```
