VERTICAL TABS COMPONENT

```jsx
import { VerticalTabs } from "master-react-lib";
import VerticalTabContent from "../../exampleComponents/VerticalTabContent.js"

const tabItems = [
      { title: "Overview", component: <VerticalTabContent title={"Overview"} /> },
      { title: "Donations", component: <VerticalTabContent title={"Donations"} /> },
      { title: "Messages", component: <VerticalTabContent title={"Messages"} /> },
      { title: "Post update", component: <VerticalTabContent title={"Post update"} />},
      { title: "Share", component: <VerticalTabContent title={"Share"} /> },
      { title: "Withdrawal", component: <VerticalTabContent title={"Withdrawal"} /> },
      { title: "Settings", component: <VerticalTabContent title={"Settings"} /> },
      { title: "Timeline", component: <VerticalTabContent title={"Timeline"} /> },
      { title: "Campaign Champion", component: <VerticalTabContent title={"Campaign Champion"} /> },
];

<>
  <VerticalTabs tabItems={tabItems}  />
</>
```
