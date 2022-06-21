HEADER COMPONENT

```jsx
import { HeaderWebsite  } from "master-react-lib";
import Logo from './LogoZamZam.png';
import SearchIcon from '@material-ui/icons/Search';

const headerItems = [
    {
        title: "HOME",
        //path: "/home",
        link:"https://www.google.com/",
      
      },

      {
        title: "ABOUT US",
        path: "/",

        children: [
          {
            title: "ORGANIZATION",
            path: "/",
            link:"/home",
        }, 
        
        {
            title: "NEW ORGANIZATION",
            //path: "/home",
            link:"https://www.google.com/",
        }
        
        ],
      },

      {
        title: "Hajj Packages",
        path: "/",

        children: [
          {
            title: "ORGANIZATION",
            path: "/",
            link:"/home",
        }, 
        
        {
            title: "NEW ORGANIZATION",
            path: "/home",
            link:"/home",
        }
        
        ],
      },

      {
        title: "UMRAH",
        path: "/",
      },

      {
        title: "Registration",
        //path: "/",
       

        children: [{
            title: "ORGANIZATION",
            //path: "/",
             link:"https://www.google.com/",
        }]
      },

       {
        title: "Gallery",
        path: "/",
      },

       {
        title: "Contact us",
        path: "/",
      },
];


const onLogoClick = () => {
  console.log("logoClicked");
};

const navigate = (path) => {
  console.log(path)
};

const topHeaderButton = {
  buttonText: "HAJJ REGISTRATION",
  buttonClick: () => console.log("header btn clicked"),
};

<>
  <HeaderWebsite  
    logo={Logo} 
    logolink="https://www.google.com/"
    headerItems={headerItems} 
    navigate={navigate}
    headerSignupButton={true}
    email1={"yeszamzam@gmail.com"}
    ContactNumber={"+1 (987) 435-6893"}
    topHeaderButton={topHeaderButton}
    // Buttonpath="/home"
    ButtonLink="https://www.google.com/"
    target="blank"



    />
</> 
```
