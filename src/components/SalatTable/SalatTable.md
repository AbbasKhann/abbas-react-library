PRICING TABLE COMPONENT

```jsx
import { SalatTable } from "master-react-lib";
import Sunrise from './Sunrise.png';
import Sun from './Sun.png';
import Moon from './Moon.png';


const tableBodyData = [
  {col1: "Al-Fajr", col2: "4:10 AM", icon: <img src={Sunrise} />, },
  {col1: "Al-Żuhr", col2: "4:10 AM", icon: <img src={Sun} />, },
  {col1: "1St Al-Jumu‘ah", col2: "4:10 AM", icon: <img src={Sun} />, },
  {col1: "2Nd Al-Jumu‘ah", col2: "4:10 AM", icon: <img src={Sun} />, },
  {col1: "Al-‘Asr", col2: "4:10 AM", icon: <img src={Sun} />, },
  {col1: "Al-Maghrib", col2: "4:10 AM", icon: <img src={Sunrise} />, },
  {col1: "Al-‘Ishā’", col2: "4:10 AM", icon: <img src={Moon} />, },
];


<>
  =============== Slah Table Footer ============
  
  <SalatTable 
    title={"HAJJ 2021 PACKAGES"}
    tableBodyData={tableBodyData}
    odd="#005EBB"
    even="#0868C9"
    colBorder="#E4E8EC 0px solid"
    col1Color="#fff"
    col2Color="#fff"
    ColPadding="9px 30px !important"
  />

  ===============  Slah Table Section ============

  <SalatTable 
    TableTitle="SALAT/IQAMAH TIME"
    tabletitleStatus={true}
    title={"HAJJ 2021 PACKAGES"}
    TitleColor="#FFFFFF"
    TitleBackground="#0053A5"
    tableBodyData={tableBodyData}
    footerText="Last updated: March 11, 2021 / 12:43 AM"
    footerTextStatus={true}
    bottomTextSpace="62px"

    TableBackground="#F4F9FC"
    tbaleBorder="#0053A5 1px solid"
    TalePadding="0 20px"

    odd="#F4F9FC"
    even="#F4F9FC"
    colBorder="#E4E8EC 1px solid"
    col1Color="#0053A5"
    col1fontWeight="600"
    col2Color="#0B132B"
    col2fontWeight="400"
    ColfontSizet="16px"
  />
</> 
```
