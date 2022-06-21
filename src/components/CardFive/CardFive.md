ALERT COMPONENT

```jsx
import { CardFive } from "master-react-lib";

const cardData = {
    link: "#",
    image: "1235",
    title: "The Believer's Shield - The Prophet's Fast (PBUH)",
    eventDate: "Sunday, April 11, 2021",
    eventTime: "7:30 PM EST",
};

<>
  <CardFive
      cardData={cardData}
      col={3}
      spacing={2}
      buttonLabel="View Details" 
      color="#A0CE4E" />
</> 
```