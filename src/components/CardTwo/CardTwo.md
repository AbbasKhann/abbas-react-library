ALERT COMPONENT

```jsx
import { CardTwo } from "master-react-lib";
import img from './img.png';

const cardTwoData = [
  {
    name: 'Hassan Akber',
    date: 'MAY 05, 2020',
    img:img, title:"Bic Family Night May 2015 2015", 
    Discription: "O you who believe fasting is prescribed to you as it was prescribed to those before you so that you ca...", 
    link:"#" 
  },

   {
    name: 'Hassan Akber',
    date: 'MAY 05, 2020',
    img:img, title:"Bic Family Night May 2015 2015", 
    Discription: "O you who believe fasting is prescribed to you as it was prescribed to those before you so that you ca...", 
    link:"#" 
  },
  
   {
    name: 'Hassan Akber',
    date: 'MAY 05, 2020',
    img:img, title:"Bic Family Night May 2015 2015", 
    Discription: "O you who believe fasting is prescribed to you as it was prescribed to those before you so that you ca...", 
    link:"#" 
  },

];



<>

  <CardTwo 
      cardTwoData={cardTwoData}
      col="4"
      Imgcol="12"
      Contentcol="12"
      spacing={2}
      buttonLabel="READ MORE"
      hoverbackground="#0052a5"
      titleColor="#0053a5"
      nameDateStatus={true}
  />

  <CardTwo 
      cardTwoData={cardTwoData}
      col="12"
      Imgcol="3"
      Contentcol="8"
      spacing={2}
      buttonLabel="READ MORE"
      hoverbackground="#0052a5"
      titleColor="#0053a5"
      nameDateStatus={false}
  />


</> 
```