ALERT COMPONENT

```jsx
import { PageTitleTwo } from "master-react-lib";
import backgroundPattern from "./BICPattern.svg";

const onClick = () => {
    console.log("Back Button Clicked");
};

const breadcrumbsData =[

  {page:"HOME" , paht:"/"},
  {page:"Event" , paht:"/"},

];



<>
  <PageTitleTwo 

      Title="Events Details"
      SubTitle="New Largest Islamic Center with 68,000 Sq. Ft in the heart of NYC and need your generous support."
      color="#fff"
      backgroundcolor="#029930"
      backgroundPattern={backgroundPattern}
      height="auto"
      breadcrumbsData={breadcrumbsData}
      currentPage="Events Details"
  />
</> 
```