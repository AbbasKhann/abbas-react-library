ALERT COMPONENT

```jsx
import { PageTitleOne } from "master-react-lib";
import backgroundPattern from "./BICPattern.svg";

const onClick = () => {
    console.log("Back Button Clicked");
};



<>
  <PageTitleOne 

      Title="ABOUT US"
      SubTitle="New Largest Islamic Center with 68,000 Sq. Ft in the heart of NYC and need your generous support."
      color="#fff"
      backgroundcolor="#0053A5"
      backgroundPattern={backgroundPattern}
      height="250px"
  />
</> 
```