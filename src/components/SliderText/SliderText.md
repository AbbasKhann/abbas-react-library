ALERT COMPONENT

```jsx
import { SliderText } from "master-react-lib";
import img from './img.png';

const guestCardOneData = [

  {
    img:img,
    name:"Imam Siraj Wahhaj",
    Designation:"Imam, Masjid At-Taqwa, NY",

    path:"",
    link:"https://www.google.com/",
  },
  {
    img:img,
    name:"Imam Siraj Wahhaj",
    Designation:"Imam, Masjid At-Taqwa, NY",
    path:"",
    link:"https://www.google.com/",
  },
  {
    img:img,
    name:"Imam Siraj Wahhaj",
    Designation:"Imam, Masjid At-Taqwa, NY",
    path:"",
    link:"https://www.google.com/",
  },

];


<>

  <SliderText 
      guestCardOneData={guestCardOneData}
      col="4"
      spacing="2"

  />


</> 
```