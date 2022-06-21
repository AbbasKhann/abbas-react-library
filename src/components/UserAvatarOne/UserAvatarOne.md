ALERT COMPONENT

```jsx
import { UserAvatarOne } from "master-react-lib";
import img from './img.png';

const guestCardOneData = [

  {
    img:img,
    name:"Imam Siraj Wahhaj",
    Designation:"Imam, Masjid At-Taqwa, NY",
    email:"emailofthisperson@gmail.com",
    phone:"+1 (555) 555-5555",
    path:"",
    link:"https://www.google.com/",
  },
  {
    //img:img,
    name:"Imam Siraj Wahhaj",
    Designation:"Imam, Masjid At-Taqwa, NY",
    email:"emailofthisperson@gmail.com",
    phone:"+1 (555) 555-5555",
    path:"",
    link:"https://www.google.com/",
  },
  {
    img:img,
    name:"Imam Siraj Wahhaj",
    Designation:"Imam, Masjid At-Taqwa, NY",
    email:"emailofthisperson@gmail.com",
    phone:"+1 (555) 555-5555",
    path:"",
    link:"https://www.google.com/",
  },

  {
    img:img,
    name:"Imam Siraj Wahhaj",
    Designation:"Imam, Masjid At-Taqwa, NY",
    email:"emailofthisperson@gmail.com",
    phone:"+1 (555) 555-5555",
    path:"",
    link:"https://www.google.com/",
  },

];


<>

  <UserAvatarOne 
      guestCardOneData={guestCardOneData}
      col="3"
      spacing="2"
      width=""
      height="250px"

  />


</> 
```