ALERT COMPTwoNT

```jsx
import { VidoeListingWithSearch } from "master-react-lib";
import img from './img.png';
import playIcon from './playIcon.png';

const videoListingTwoData = [

  {
    img:img,
    title:"Story of a Ruler and a Scholar",
    subtitle:"BIC ADMIN",
    date:"MAR 10, 2021",
    views:"157 VIEWS",
    path:"",
  },
   {
    img:img,
    title:"Story of a Ruler and a Scholar",
    subtitle:"BIC ADMIN",
    date:"MAR 10, 2021",
    views:"157 VIEWS",
    path:"",
  },

  {
    img:img,
    title:"Story of a Ruler and a Scholar",
    subtitle:"BIC ADMIN",
    date:"MAR 10, 2021",
    views:"157 VIEWS",
    path:"",
  },
   {
    img:img,
    title:"Story of a Ruler and a Scholar",
    subtitle:"BIC ADMIN",
    date:"MAR 10, 2021",
    views:"157 VIEWS",
    path:"",
  },

  {
    img:img,
    title:"Story of a Ruler and a Scholar",
    subtitle:"BIC ADMIN",
    date:"MAR 10, 2021",
    views:"157 VIEWS",
    path:"",
  },
   {
    img:img,
    title:"Story of a Ruler and a Scholar",
    subtitle:"BIC ADMIN",
    date:"MAR 10, 2021",
    views:"157 VIEWS",
    path:"",
  },

];


<>

  <VidoeListingWithSearch 
      videoListingTwoData={videoListingTwoData}
      col="6"
      spacing="2"
      Thumnailwidth="160px"

      playicon={playIcon}
      playiconStatus={false}
  />


</> 
```