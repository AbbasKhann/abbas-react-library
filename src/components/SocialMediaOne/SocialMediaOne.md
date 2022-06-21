ALERT COMPONENT

```jsx
import { SocialMediaOne } from "master-react-lib";

import facebook from './socialicons/FacebookRounded.svg'   
import twitter from './socialicons/TwitterRounded.svg'   
import youtube from './socialicons/YouTubeRounded.svg' 
import Whatsapp from './socialicons/WhatsappRounded.svg' 


const click = () => {
    console.log("Back Button Clicked");
};

const socialIconData =[
    {  icon:facebook,link:"https://www.facebook.com/"},
    {  icon:twitter, link:"https://www.facebook.com/"}, 
    {  icon:youtube, link:"https://www.facebook.com/"},  
    {  icon:Whatsapp, link:"https://www.facebook.com/"},
    
];

<>

  <SocialMediaOne 
      copyBackground="#029930"
      copyColor="#fff"
      socialIconData={socialIconData}
      copyButton={true}
      onClick={click}

  />


</> 
```