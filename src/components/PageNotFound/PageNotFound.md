ALERT COMPONENT

```jsx
import { PageNotFound } from "master-react-lib";

const click = () => {
  console.log("button clicked");
};

<>
  <PageNotFound 
    Title="Page not found"
    Description="Any available events will appear here."

    Contactlink="https://deenconnect.io/about#contact-us"
    ContactlinkColor="#0053A5"

    background="#F8F8F8"
    //// Button Style ////
      buttonLebel="GO TO HOMEPAGE"
      buttonLebelLink="https://xd.adobe.com/view/a9342815-a66f-42cf-aee5-8dc16dcb70eb-fc67/specs/"
      target="blank"
      path="/"
      arrow={false}
      arrowColor="#fff"
      buttoncolor="#0053A5"
      width="198px"
      height="50px"
      border="#ccc 0px solid"
      borderRadius="4px"
      colorlabel="#fff"
      fontWeight="600"
      textAlign="center"
      onClick={click}
  />
  
</> 
```
