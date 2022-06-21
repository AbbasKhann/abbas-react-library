ALERT COMPONENT

```jsx
import { CardEight } from "master-react-lib";
import img from './img.png';

import facebookIcon from './facebook.png'
import twitter from './twitter.png'
import AddIcon from './AddIcon.png'

const eventCardOneData = [

  {
    img:img,
    title:"The Hajj Pilgrimage and Its Significance in Islam",
    date:"MAR 10, 2021, 7:30 PM - MAR 10, 2021, 8:30 PM EST",
    location:"BROOKLYN ISLAMIC CENTER",
    amount:"FREE",
    food:"LIGHT REFRESHMENT",
    join:"ANYONE CAN JOIN",
    link:"",
  
  }

];


<>

  <CardEight 
      eventCardOneData={eventCardOneData}
      col="12"
      buttonLabel="View event Details"
      ImgWidth="255px"
      groupStatus={true}
      viewdetailStatus={true}
      DateRangeStatus={true}
      LocationStatus={true}
      MoneyStatus={true}
      FoodStatus={true}
      JoinStatus={true}

      SocialIcon={
        <div>
            <a href="#"><img src={AddIcon} /></a>
            <a href="#"><img src={facebookIcon} /></a>
            <a href="#"><img src={twitter} /></a>
        </div>
      }
  />


</> 
```