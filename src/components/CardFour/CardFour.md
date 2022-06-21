ALERT COMPONENT

```jsx
import { CardFour } from "master-react-lib";

const cardData = {
    link: "#",
    title: "Introduction to I’jāz al-Qur’ān: The Role of Muhammad ﷺ",
    eventDate: "Jan 28",
    eventDay: "Thursday",
    eventTime: "7:30 PM EST",
    eventType: "ONLINE EVENT",
};

<>
  <CardFour
      cardData={cardData}
      col={3}
      spacing={2}
      buttonLabel="VIEW DETAILS" 
      color="#A0CE4E" />
</> 
```