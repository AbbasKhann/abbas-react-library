MAIN BANNER COMPONENT

```jsx
import { SliderSeven } from "master-react-lib";
import Banner from "./banner.png"
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
const tutorialSteps = [
  {
    title: 'San Francisco – Oakland Bay Bridge, United States',
    //subtitle:"News",
    imgPath:Banner,
    discription:"That means all people — regardless of politics, religion, or ability to pay. Improving their lives is Direct Relief’s mission.",

    buttonlabel:"Details",
    link:"https://www.google.com/",
    target:"blank",
    Buttonstatus:true,
  },

  // {
  //   title: 'San Francisco – Oakland Bay Bridge, United States',
  //   subtitle:"News",
  //   imgPath:Banner,
  //   discription:"That means all people — regardless of politics, religion, or ability to pay. Improving their lives is Direct Relief’s mission.",

  //   buttonlabel:"Details",
  //   link:"https://www.google.com/",
  //   target:"blank",
  //   Buttonstatus:false,
  // },
  
  
];


<>
  <SliderSeven 
    tutorialSteps={tutorialSteps}
    Contentbackground="#005A1F"
    Buttonbackground="#56B149"
    ButtonRadius="0"
    SliderHieght="496px"

    subtitleColor="#cccc"

  // == Sldier Arrow Style =====//
    ArrowContainerBg="#FF6200"
    arrowBgColor="#FF6200"
    arrowColor="#fff"
    borderRadius="100px"
    leftArrowIcon={<ArrowBackRoundedIcon />}
    RightArrowIcon={<ArrowForwardRoundedIcon />}

    // == Button Style =====//
    arrowIcon={<ArrowForwardRoundedIcon />}
    arrowStatus={true}
    ButtonarrowColor="#fff"
    buttoncolor="#0053A5"
    width="100%"
    height="50px"slider
    border="#ccc 0px solid"
    borderRadius="100px"
    color="#fff"
    fontWeight="600"
    //textAlign="center"

  


  />

</> 
```
