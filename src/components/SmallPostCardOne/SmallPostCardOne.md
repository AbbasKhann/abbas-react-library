ALERT COMPTwoNT

```jsx
import { SmallPostCardOne } from "master-react-lib";
import img from './img.png';
import playIcon from './playIcon.png';

const SmallPostCardOneData = [

  {
    img:img,
    title:"Story of a Ruler and a Scholar",
    subtitle:"BIC ADMIN",
    date:"MAR 10, 2021",
    path:"",
  },
   {
    img:img,
    title:"Story of a Ruler and a Scholar",
    subtitle:"BIC ADMIN",
    date:"MAR 10, 2021",
    path:"",
  },

];


<>

  <SmallPostCardOne 
      SmallPostCardOneData={SmallPostCardOneData}
      col="12"
      spacing="1"
      Thumnailwidth="83px"
      ThumnailHeight="83px"
      titleWieght="600"
      titleColor="#0B132B"
      playicon={playIcon}
      playiconStatus={true}
      borderLine={true}
      thumnailRadius="4px"
      titletextTransform="uppercase"
  />


</> 
```