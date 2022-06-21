SUBHEADER COMPONENT

```jsx
import { SubHeader } from "master-react-lib";
import React, {useState} from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';

const breadcrumbsItems = [
      { title: "My campaigns", path: "/" },
      { title: "Manage", path: "/" },
      { title: "Current", current: true },
];

const buttonsItems = [
      { title: "VIEW", path: "/", class: "viewBtn", icon: <VisibilityIcon />},
      { title: "EDIT CAMPAIGN", path: "/", class: "editBtn", icon: <EditIcon /> },
];

const onButtonClick = (path) => {
    console.log("view click", path)
}

const onBreadcrumbClick = (path) => {
    console.log("breadcrumb navigate", path)
}

<>
  <SubHeader
    onButtonClick={onButtonClick}
    buttonsItems={buttonsItems}
    showProgressBar={true}
    progressPercentage={50}
    amountHeading={`$2,000`}
    secondHeading={`raised of $10,000`}
    sponsorTitle={"Sponsor an orphan for a month for £30 now!"}
    breadcrumbsItems={breadcrumbsItems}
    onBreadcrumbClick={onBreadcrumbClick}
  />
</> 
```
