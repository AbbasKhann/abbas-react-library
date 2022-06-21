Footer Two

```jsx
import { FooterTwo } from "master-react-lib";
import DCLogo from './DC_Logo.png';
import VideoCam from './videocam.svg'
import location from './location.svg'
import call from './call.svg' 
import email from './email.svg' 
import Locationicon from './Locationicon.svg'   

import facebook from './facebook-icon.png'   
import twitter from './twitter-icon.png'   
import youtube from './youtube-icon.png'   


const click = () => {
    console.log("Back Button Clicked");
};

const FooterTwoColOne = [  
   { description: "BIC provides weekly jumu’ah prayer facilities to the muslims of Kensington, Flatbush, and Prospect Park.", },
   { description: "Brooklyn Islamic Center is a 501(c)- Non-Profit Tax ID 16-1621062", }
];

const FooterTwoSocial =[
    {  icon:facebook, link:"https://www.facebook.com/"},
    {  icon:twitter, link:"https://www.facebook.com/"}, 
    {  icon:youtube, link:"https://www.facebook.com/"},   
];

const FooterTwoColTwo =[
    {  Title: "Story of a Ruler and a Scholar", subtitle:"BIC Admin", icon:VideoCam },
    {  Title: "Story of a Ruler and a Scholar", subtitle:"BIC Admin", icon:VideoCam },
    {  Title: "Story of a Ruler and a Scholar", subtitle:"BIC Admin", icon:VideoCam },
    
];

const FooterTwoContactinfo =[
    {  TextOne: "722 Church Ave", TextTwo:"Brooklyn, NY 11218", icon:location },
    {  TextOne: "718-469-4899", TextTwo:"929-340-0399", icon:call },
    {  TextOne: "team@bicny.org", icon: email },
    
];

const FooterTwoGiveUs =[
    {  TextOne: "Give us a visit and earn the Hasanah of praying together in Jam’at !",  icon: Locationicon},    
];

const tableBodyData = [
  {col1: "Al-Fajr", col2: "4:10 AM", },
  {col1: "Al-Żuhr", col2: "4:10 AM", },
  {col1: "1St Al-Jumu‘ah", col2: "4:10 AM", },
  {col1: "2Nd Al-Jumu‘ah", col2: "4:10 AM", },
  {col1: "Al-‘Asr", col2: "4:10 AM", },
  {col1: "Al-Maghrib", col2: "4:10 AM", },
  {col1: "Al-‘Ishā’", col2: "4:10 AM", },
];


<>
  <FooterTwo 
    background="#0053A5"
    color="#FFFFFF"
    listingBorder="#0868C9 1px solid"
    FooterTwoColOne={FooterTwoColOne}
    FooterTwoColTwo={FooterTwoColTwo}
    FooterTwoSocial={FooterTwoSocial}
    FooterTwoContactinfo={FooterTwoContactinfo}
    FooterTwoGiveUs={FooterTwoGiveUs}
    ContainerMaxWidth="1175px"
    
    ColTitleOne="ABOUT US"
    ColTitleTwo="RECENT VIDEOS"
    ColTitleThree="SALAT/ IQAMAH TIME SCHEDULE"
    SalatiqamaDataTime="March 08, 2021 l 12:35:01 AM EST"
    ColTitleFour="CONTACT INFO"
    ColTitleFive="GIVE US A VISIT"
    

    ////SUBSCRIBE FOR NEWSLETTER ////
    SubscribeSectoin={true}
    ColTitleSix="SUBSCRIBE FOR NEWSLETTER"
    FormDescription="SUBSCRIBE NOW for the latest news, articles, videos & much more from our awesome website!"


    ////Slat Table Style ////
    tableBodyData={tableBodyData}
    odd="#005EBB" 
    even="#0868C9" 
    colBorder="#E4E8EC 0px solid"
    col1Color="#fff"
    col2Color="#fff"
    ColPadding="9px 30px !important"

    //// Button Style ////
    ContactbuttonLebel="CONTACT US"
    ContactLink="https://xd.adobe.com/view/a9342815-a66f-42cf-aee5-8dc16dcb70eb-fc67/specs/"

    getDirectionbuttonLebel="GET DIRECTION"
    getDirectiontLink="https://xd.adobe.com/view/a9342815-a66f-42cf-aee5-8dc16dcb70eb-fc67/specs/"

    formButtonlink=""
    formButtonLabel="SUBSCRIBE NOW"
    
    target="blank"

    arrow={false}
    arrowColor="#fff"
    buttoncolor="#fff"
    width="auto"
    height="50px"
    border="#ccc 0px solid"
    borderRadius="4px"
    colorlabel="#0053A5"
    fontWeight="600"
    textAlign="center"

    FooterRowTwo={true}
    onClick={click}

  />
</> 
```
