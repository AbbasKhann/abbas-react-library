MAIN BANNER COMPONENT

```jsx
import { SliderTwo } from "master-react-lib";

import bannerImg from './banner.png'



const bannerData =[
  {
    img:bannerImg, 
    title:"New Largest Islamic Center with 68,000 Sq. Ft in the heart of NYC and need your generous support. New Largest Islamic Center with 68,000 Sq. Ft in the heart of NYC and need your generous support.",
    readmore:"READ MORE",
    link:"#",
    target:"blank",
  },
  {
    img:bannerImg, 
    title:"New Largest Islamic Center with 68,000 Sq. Ft in the heart of NYC and need your generous support.",
    readmore:"READ MORE",
    link:"#",
    target:"blank",
  },



  
];


<>
  <SliderTwo 
    bannerData={bannerData}
    background="#000"
    Buttonbackground="#FF6200"
    ButtonRadius="100px"
  />

  <SliderTwo 
    bannerData={bannerData}
    background="#000"
    Buttonbackground="#FF6200"
    ButtonRadius="0px"
  />
</> 
```
