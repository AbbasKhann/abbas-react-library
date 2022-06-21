MAIN BANNER COMPONENT

```jsx
import { SliderFive } from "master-react-lib";

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
  <SliderFive 
    bannerData={bannerData}
    background="#000"
    Buttonbackground="#56B149"
    ButtonRadius="0"
    SliderHieght="400px"
  />

</> 
```
