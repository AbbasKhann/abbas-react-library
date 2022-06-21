ALERT COMPONENT

```jsx
import { CardThree } from "master-react-lib";
import img from './img.png';

const cardData = {
    img: null,  
    link: "#",
    eventDateTime: "Jul 08, 2020, 7:30 AM",
    heading: "Living Harmoniously in an Interfaith World, a Muslim" 
};

<>
  <CardThree
      cardData={cardData}
      col={3}
      spacing={2}
      buttonLabel="VIEW DETAILS" 
      color="#A0CE4E" />
</> 
```