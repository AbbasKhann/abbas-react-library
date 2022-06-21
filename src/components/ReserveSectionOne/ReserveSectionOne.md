ALERT COMPONENT

```jsx
import { ReserveSectionOne } from "master-react-lib";
import ReserveSectionOneBg from "./ReserveSectionOneBg.jpg"


const OnclickDownload = () => {
    console.log("Back Button Clicked");
};


<>
  <ReserveSectionOne
    title="RESERVE YOURS TODAY" 
    description="And the life of this world is nothing but play and amusement. But far better is the house in the hereafter for those who are Al-Muttaqun (the pious). Will you not then understand?"
    reference="(Quran, Al-An’aam: 32)"
    OnclickDownload={OnclickDownload}
    background={ReserveSectionOneBg}
    buttonLabel="DOWNLOAD FORM"
    Textcolor="#fff"

    //// Button Style ////
    buttonLebel="DOWNLOAD FORM"
    buttonLink="https://xd.adobe.com/view/a9342815-a66f-42cf-aee5-8dc16dcb70eb-fc67/specs/"
    target="blank"
    arrow={false}
    arrowColor="#fff"
    buttoncolor="#0053A5"
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