ALERT COMPONENT

```jsx
import { TabOne } from "master-react-lib";

const tabItems = [
      { 
        title: "ABOUT US", 
        link:"https://www.google.com/",
        body:"BODY 1",
      },

      { 
        title: "OUR MISSION & VISION", 
        body:"BODY 2",
      },

      { 
        title: "BIC SERVICE", 
        body:"BODY 3",
      },

      { 
        title: "CONTACT US", 
        body:"BODY 4",
      },

      { 
        title: "GET DIRECTIONS", 
        body:"BODY 4",
      },


];



<>
  <TabOne 
    tabItems={tabItems}
    tabBody={true}



//Copy this css and past your project css file and costmize with your design
//  .TabOneContainer .MuiAppBar-colorPrimary {
//   color: #fff;
//   background-color: #3f51b5;
// }

// .TabOneContainer .MuiTabs-indicator {
//     background-color: #ff0000;
// }

// .TabOneContainer .MuiTabs-flexContainer {
//     justify-content: center;
//     display: flex;
// }

  />

 


</> 
```