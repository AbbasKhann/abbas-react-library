ALERT COMPONENT

```jsx
import { BlogOne } from "master-react-lib";
import img from './img.png';

const blogOneData =[
  {
    titleLight:"YOUR SECOND HOME",
    titleBold:" LET'S BUILD TOGETHER",
    description:<div><p>12000 SQ. FT. space at the corner of Church Ave & E8 St will facilitate the community with a second home.</p> <p>The Prophet (peace be upon him) said: “Whoever builds a mosque for Allah, Allah will build for him likewise in Paradise. [Sahîh al-Bukhârî and Sahîh Muslim]</p></div>,
  }

];

<>

  <BlogOne 
      col="12"
      Spacing="40px"
      blogOneData={blogOneData}
      color="#000"
      titleLightFontSise="34px"
      titleBoldFontSise="34px"
      descriptionFontSise="13px"

      //// Button Style ////
      buttonLebel="SEE MORE DETAILS"
      link="https://xd.adobe.com/view/a9342815-a66f-42cf-aee5-8dc16dcb70eb-fc67/specs/"
      target="blank"
      path="/"
      arrow={false}
      arrowColor="#fff"
      buttoncolor="#FF6200"
      width="auto"
      height="47px"
      border="#ccc 0px solid"
      borderRadius="4px"
      colorlabel="#fff"
      fontWeight="600"
      textAlign="center"


  />


</> 
```