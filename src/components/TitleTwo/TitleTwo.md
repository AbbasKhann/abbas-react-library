ALERT COMPONENT

```jsx
import { TitleTwo } from "master-react-lib";
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

const onClick = () => {
    console.log("Back Button Clicked");
};



<>
  <TitleTwo 

      Title="SERVICES FOR"
      TitleColor="#FFFFFF"

      background="#0B132B"

      Button={true}
      buttonLebel="All Events"
      //Link="https://xd.adobe.com/view/a9342815-a66f-42cf-aee5-8dc16dcb70eb-fc67/specs/"
      //target="blank"
      onClick={onClick}

      arrowIcon={<ArrowForwardRoundedIcon/>}
      arrowStatus={true}
      arrowColor="#0B132B"

      buttoncolor="none"
      width="auto"
      height="30px"
      border="#0053A5 0px solid"
      borderRadius="4px"
      colorlabel="#0B132B"
      fontWeight="600"
      textAlign="center"

  />
</> 
```