PRICING TABLE COMPONENT

```jsx
import { TableWithTabs } from "master-react-lib";

const tableHeadData = [
  {title: "No", width:"130px" },
  {title: "Date", width:"130px"},
  {title: "ISHA", width:"130px"},
  {title: "AL-TAHAJJUD", width:"130px"},
  {title: "Action", width:"130px"},
];

const tableBodyData = [
  {
    rows: [
      {label:"01",},
      {label:"Taseef",},
      {label:"Rizwan",},
      {label:"Taseef",},
    ],

    buttons: [
      {buttonlabel:"SPONSOR NOW",},
    ],

  },

  {
    rows: [
      {label:"01",},
      {label:"Taseef",},
      {label:"Rizwan",},
      {label:"Taseef",},
    ],

    buttons: [
      {buttonlabel:"CO-SPONSOR",},
    ],
  },

];

const onSelectClick = (selectedPackageData) => {
  console.log("selectedPackageData", selectedPackageData)
}

<>
  <TableWithTabs 
    title={"HAJJ 2021 PACKAGES"}
    subTitle={"Text & Vat Included"}
    tableHeadData={tableHeadData}
    tableBodyData={tableBodyData}
    tableFooterCellText={`Hajj & Qurbani fees. Price per "The Ministry of Hajj and Umrah"`}
    onSelectClick={onSelectClick}
    colmThree={true}
    SelectlinkOne=""
    buttonStatus={true}
  />
</> 
```
