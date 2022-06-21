HAJJ READINGS COMPONENT

```jsx
import { HajjReadings } from "master-react-lib";
import Mosque from '../../../assets/img/vew_gallery_img.png';

  const carouselItems = [
    { image: Mosque, description: "The Kaaba is so central to the Islamic faith that, across the world.", link: "#" },
    { image: Mosque, description: "A Fun-filled Occasion – Eid Poem", link: "#" },
    { image: Mosque, description: "Lessons Learned By A Muslim Traveler.", link: "#" },
    { image: Mosque, description: "Ramadan - The Most Honored Month", link: "#" },
    { image: Mosque, description: "The Kaaba is so central to the Islamic faith that, across the world.", link: "#" },
    { image: Mosque, description: "A Fun-filled Occasion – Eid Poem", link: "#" },
    { image: Mosque, description: "Lessons Learned By A Muslim Traveler.", link: "#" },
    { image: Mosque, description: "Ramadan - The Most Honored Month", link: "#" },
  ];

<>
  <HajjReadings 
    title="Hajj Reading"
    carouselItems={carouselItems}
  />
</>
```