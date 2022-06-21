MAIN BANNER COMPONENT

```jsx
import { SliderFour } from "master-react-lib";

import bannerImg from './banner.png'



const bannerData =[
  {
    img:bannerImg, 
    title:"Being a “Good Person” is Not Enough: Why Ethics Need Islam",
    readmore:"READ MORE",
    link:"#",
    target:"blank",
  },
  {
    img:bannerImg, 
    title:"New Largest Islamic Center with 68,000 Sq. Ft in the heart of NYC and need your generous support.",
    readmore:"READ MORE",
    link:"#",
    target:"new",
  },

];


<>
  <SliderFour 
    bannerData={bannerData}
    SliderHieght="400px"
    background="#000"
    Buttonbackground="#A0CE4E"
    ButtonRadius="0"
    BottomText="More: Bracing the Perfect Storm with an Air of Calm"
  />

</> 
```
