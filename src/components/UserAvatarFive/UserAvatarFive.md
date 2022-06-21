ALERT COMPONENT

```jsx
import { UserAvatarFive } from "master-react-lib";
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

  <UserAvatarFive 
      guestCardOneData={guestCardOneData}
      col="4"
      spacing="2"

  />


</> 
```