ALERT COMPONENT

```jsx
import { SearchField } from "master-react-lib";
import DoneImg from '../../../assets/img/Done.png';
import CloseIcon from '../../../assets/img/cancel.png';

const click = () => {
    console.log("Back Button Clicked");
};

<>
  <SearchField 
    label="Field label"
    labelStatus={true}
    helpertext="Helper text"
    HelpertextStatus={true}
    placeholder="Placeholder"
    Errormessage="Error message"
    errortextStatus={false}
    count={100}
    countStatus={true}
    tooltipStatus={true}
    BorderColor="#FF6200 2px solid"

    //// Button Style ////
      buttonLebel="SEARCH"
      buttonLebelLink="https://xd.adobe.com/view/a9342815-a66f-42cf-aee5-8dc16dcb70eb-fc67/specs/"
      target="blank"
      path="/"
      arrow={false}
      arrowColor="#fff"
      buttoncolor="#FF6200"
      width="auto"
      height="52px"
      border="#ccc 0px solid"
      borderRadius="0px"
      colorlabel="#fff"
      fontWeight="600"
      textAlign="center"
      onClick={click}
    
  
  />
</> 
```
