ALERT COMPONENT

```jsx
import { ConfirmationOne } from "master-react-lib";
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

const onClick = () => {
    console.log("Back Button Clicked");
};



<>
  <ConfirmationOne 

    title="Volunteer request sent to NAHAR"
    Descrition="We've received your request. One of our team member will respond to your request shortly"



      Button={true}
      buttonLebel="RETURN TO HOMEPAGE"
      //Link="https://xd.adobe.com/view/a9342815-a66f-42cf-aee5-8dc16dcb70eb-fc67/specs/"
      //target="blank"
      onClick={onClick}

      //arrowIcon={<ArrowForwardIosRoundedIcon/>}
      //arrowStatus={true}
      //arrowColor="#0B132B"

      buttoncolor="#4AAB10"
      width="auto"
      height="50px"
      border="#0053A5 0px solid"
      borderRadius="4px"
      colorlabel="#fff"
      fontWeight="600"
      textAlign="center"

  />
</> 
```