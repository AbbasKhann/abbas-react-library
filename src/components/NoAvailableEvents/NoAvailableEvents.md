ALERT COMPONENT

```jsx
import { NoAvailableEvents } from "master-react-lib";
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';


const click = () => {
  console.log("button clicked");
};

<>
  <NoAvailableEvents 
    Title="Oops! No available events"
    SubTitle="Any available events will appear here."
    Description="In the meantime, our secured donation form is superbly ready as we continuously need your generous donations. Please click on the button below to support us."


    background="#F8F8F8"
    //// Button Style ////
      buttonLebel="I WANT TO DONATE"
      link="https://xd.adobe.com/view/a9342815-a66f-42cf-aee5-8dc16dcb70eb-fc67/specs/"
      target="blank"

      arrowIcon={<ArrowForwardIosRoundedIcon/>}
      arrowStatus={true}
      arrowColor="#fff"

      buttoncolor="#0053A5"
      width="200px"
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
