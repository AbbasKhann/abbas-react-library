ALERT COMPONENT

```jsx
import { CardOne } from "master-react-lib";
import img from './img.png';

const cardOneData = [
  {
    img:img, 
    title:"DAILY AND JUMU'AH PRAYERS", 
    Discription: "O you who believe fasting is prescribed to you as it was prescribed to those before you so that you ca...", 
    link:"#" 
  },

   {
    img:img, 
    title:"DAILY AND JUMU'AH PRAYERS", 
    Discription: "O you who believe fasting is prescribed to you as it was prescribed to those before you so that you ca...", 
    link:"#" 
  },

   {
    img:img, 
    title:"DAILY AND JUMU'AH PRAYERS", 
    Discription: "O you who believe fasting is prescribed to you as it was prescribed to those before you so that you ca...", 
    link:"#" 
  },

   {
    img:img, 
    title:"DAILY AND JUMU'AH PRAYERS", 
    Discription: "O you who believe fasting is prescribed to you as it was prescribed to those before you so that you ca...", 
    link:"#" 
  },

];



<>

  <CardOne 
      cardOneData={cardOneData}
      col={3}
      spacing={2}
      buttonLabel="READ MORE"
      hoverbackground="#0052a5"
  />


</> 
```