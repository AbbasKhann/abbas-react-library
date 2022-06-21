ALERT COMPONENT

```jsx
import { TitleOne } from "master-react-lib";
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

const onClick = () => {
    console.log("Back Button Clicked");
};



<>
  <TitleOne 
      TitleLight="OUR"
      TitleBold="SERVICES FOR"
      TitleLightEnd="THE COMMUNITY"

      lineColor="#0053A5"
      TitleBoldColor="#0053A5"

      Button={true}
      buttonLebel="ALL NEWS"
      //Link="https://xd.adobe.com/view/a9342815-a66f-42cf-aee5-8dc16dcb70eb-fc67/specs/"
      //target="blank"
      onClick={onClick}

      arrowIcon={<ArrowForwardIosRoundedIcon/>}
      arrowStatus={true}
      arrowColor="#0B132B"

      buttoncolor="none"
      width="auto"
      height="50px"
      border="#0053A5 1px solid"
      borderRadius="4px"
      colorlabel="#0B132B"
      fontWeight="600"
      textAlign="center"

  />
</> 
```