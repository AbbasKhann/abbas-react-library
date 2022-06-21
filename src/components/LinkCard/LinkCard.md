MAIN BANNER COMPONENT

```jsx
import { LinkCard } from "master-react-lib";

const cardData = [
    { 
      title: "About ZamZam Hajj Kafela",
      singleImg:"https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
      GroupImg:"https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
      GroupImg2:"https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
      GroupImg3:"https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
      
    },
     
];

<>
  <LinkCard 
    cardData={cardData}
    singleImg={true}
    Arrow={false}
    AvatarGroup={true}
    path=""
    link="https://www.google.com/"
  />

</> 
```
