PRICING TABLE COMPONENT

```jsx
import { PricingTable } from "master-react-lib";

const tableHeadData = [
  {title: "GROUP A", Subtitle:"PER PERSON", priceSign:"$", price: "9100", theme: "blueTheme", link:"", path:"", target:"_blank"},
  {title: "GROUP B", Subtitle:"PER PERSON", priceSign:"$", price: "9100", theme: "greenTheme"},
  {title: "GROUP C", Subtitle:"PER PERSON", priceSign:"$", price: "9100", theme: "greyTheme"},
];

const tableBodyData = [
  {featureName: "Total # days", col1: "21 Days", col2: "21 Days", col3: "15 Days", },
  {featureName: "Total # days", col1: "Monday, July 15", col2: "Monday, July 21", col3: "Monday, July 21", },
  {featureName: "Total # days", col1: "Monday, July 16", col2: "Tuesday, July 22", col3: "Tuesday, July 22", },
  {featureName: "Total # days", col1: "Wednesday, August 6", col2: "Wednesday, August 6", col3: "Wednesday, August 6", },
  {featureName: "Total # days", col1: "checked", col2: "checked", col3: "checked", },
  {featureName: "Total # days", col1: "checked", col2: "checked", col3: "checked", },
  {featureName: "Total # days", col1: "checked", col2: "checked", col3: "checked", },
  {featureName: "Total # days", col1: "Wednesday, August 6", col2: "Wednesday, August 6", col3: "Wednesday, August 6", },
  {featureName: "Total # days", col1: "Wednesday, August 6", col2: "Wednesday, August 6", col3: "Wednesday, August 6", },
  {featureName: "Total # days", col1: "Wednesday, August 6", col2: "Wednesday, August 6", col3: "Wednesday, August 6", },
];

const onSelectClick = (selectedPackageData) => {
  console.log("selectedPackageData", selectedPackageData)
}

<>
  <PricingTable 
    title={"HAJJ 2021 PACKAGES"}
    subTitle={"Text & Vat Included"}
    tableHeadData={tableHeadData}
    tableBodyData={tableBodyData}
    tableFooterCellText={`Hajj & Qurbani fees. Price per "The Ministry of Hajj and Umrah"`}
    onSelectClick={onSelectClick}
    colmThree={true}
    SelectlinkOne=""
    SelectlinkTwo=""
    Selectlinkthree=""
    target="_blank"
  />
</> 
```
