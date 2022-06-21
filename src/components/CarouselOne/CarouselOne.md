ALERT COMPONENT

```jsx
import { CarouselOne } from "master-react-lib";
import CardNine from "../CardNine/CardNine";
import Mosque from '../../../assets/img/mosque.png';


const carouseldata = [

  {
    sliderItem: <CardNine 
    image={Mosque}
    title="The Hajj Pilgrimage and Its Significance in Islam"
    subTitle= "Online Event"
    time="Thursday, January 28, 2021 7:30 pm GMT-5"
    buttonText="View Details"
    link= "#"
   
  />
  },

  {
    sliderItem: <CardNine 
    image={Mosque}
    title="The Hajj Pilgrimage and Its Significance in Islam"
    subTitle= "Online Event"
    time="Thursday, January 28, 2021 7:30 pm GMT-5"
    buttonText="View Details"
    link= "#"
   
  />
  },

  {
    sliderItem: <CardNine 
    image={Mosque}
    title="The Hajj Pilgrimage and Its Significance in Islam"
    subTitle= "Online Event"
    time="Thursday, January 28, 2021 7:30 pm GMT-5"
    buttonText="View Details"
    link= "#"
   
  />
  },

  {
    sliderItem: <CardNine 
    image={Mosque}
    title="The Hajj Pilgrimage and Its Significance in Islam"
    subTitle= "Online Event"
    time="Thursday, January 28, 2021 7:30 pm GMT-5"
    buttonText="View Details"
    link= "#"
   
  />
  },

];



  <CarouselOne 
    title="Upcoming Events"
    carouseldata={carouseldata}
    mobileview={2}
    desktopview={2}
  />

```