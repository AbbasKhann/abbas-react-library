ALERT COMPONENT

```jsx
import { ButtonOne } from "master-react-lib";
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
const click = () => {
    console.log("Back Button Clicked");
};

<>
  <ButtonOne 
    label="Placeholder"
    onClick={click}
    link="https://www.google.com/"
    //target="blank"
    path="/"

    arrowIcon={<ArrowForwardIosRoundedIcon/>}
    arrowStatus={true}
    arrowColor="#fff"

    addIcon={true}
    AddIconColor="#0053A5"

    handIconStatus={true}

    buttoncolor="#0053A5"
    width="100%"
    height="50px"
    border="#ccc 0px solid"
    borderRadius="4px"
    color="#fff"
    fontWeight="600"
    //textAlign="center"
    //disabled="disabled"
  />


  <ButtonOne
  // label={props.label}
  // link={props.link}
  // target={props.target}
  // path={props.path}
  // arrowIcon={props.arrowIcon} 
  // arrowStatus={props.arrowStatus}
  // arrowColor={props.arrowColor}
  // buttoncolor={props.buttoncolor}
  // width={props.width}
  // height={props.height}
  // border={props.border}
  // borderRadius={props.borderRadius}
  // color={props.color}
  // textAlign={props.textAlign}
  />





</> 
```
