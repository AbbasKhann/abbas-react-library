INTEGRATION DETAILS COMPONENT

```jsx
import { IntegrationDetails } from "master-react-lib";
import DoneImg from '../../../assets/img/Done.png';
import CloseIcon from '../../../assets/img/cancel.png';
import DeenLabelImg from '../../../assets/img/deen-label.png';
import CheckCircle from '../../../assets/img/check-circle.png';
import DFLogo from '../../../assets/img/DF_Logo.png';
import info from '../../../assets/img/info.png';

const onCloseClick = () => {
  console.log("close")
}

const features = [
  {title: "Search and follow Masajid", description: "Engage your members and visitors, and manage your day-to-day activities with all-in-one simple platform to gear up your."},
  {title: "Add your own Salah", description: "More than 100+ organizations and Masajid rely on DEENCONNECT to take care of their tasks. Accept one-time and monthly."},
  {title: "Enable/disable specific Salah", description: "Engage your members and visitors, and manage your day-to-day activities with all-in-one simple platform to gear up your."},
  {title: "Search and follow Masajid", description: "More than 100+ organizations and Masajid rely on DEENCONNECT to take care of their tasks. Accept one-time and monthly."},
  {title: "Add your own Salah", description: "Engage your members and visitors, and manage your day-to-day activities with all-in-one simple platform to gear up your."},
  {title: "Enable/disable specific Salah", description: "More than 100+ organizations and Masajid rely on DEENCONNECT to take care of their tasks. Accept one-time and monthly."},
];

  const [planDuration, setplanDuration] = React.useState("monthly"); 

  const handlePlanDuration = (e) => {
      console.log(e.target.checked)
      setplanDuration(e.target.checked ? "annually" : "monthly");
  }; 

	const planSelected = (planName, planPrice) => {
		console.log("plan name: ", planName)
		console.log("plan price: ", planPrice)
	}

<>
  <IntegrationDetails 
    checkCircleIcon={CheckCircle}
    deenLabelImg={DeenLabelImg}
    backLink={true}
    backLinkText={"Back to Apps & Integrations"}
    compatibleWith={["DEENSCREEN", "DEENKIOSK", "DEENWEB", "DEENTEAM"]}
    title={"DEENFUND"}
    features={features}
    paragraphText={`Engage your members and visitors, and manage your day-to-day activities with all-in-one simple platform to gear up your organization and Masjid. <br />
    <br /> More than 100+ organizations and Masajid rely on DEENCONNECT to take care of their tasks. Accept one-time and monthly donations from awesome donors worldwide.`}

    //PRICING MODAL PROPS
    logoSubHeading="Donation and fundraising platform" 
    DFLogo={DFLogo}
    planDuration={planDuration}
    handlePlanDuration={handlePlanDuration}
    planSelected={planSelected}
    modalButtonText={"SEE PRICING"}
    infoIcon={info}
  />
</> 
```
