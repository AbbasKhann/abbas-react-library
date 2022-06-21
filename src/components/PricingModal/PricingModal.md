PRICING MODAL COMPONENT

```jsx
import { PricingModal } from "master-react-lib";
import DFLogo from '../../../assets/img/DF_Logo.png';
import CheckCircle from '../../../assets/img/check-circle.png';
import info from '../../../assets/img/info.png';
import HardwareSlide1 from '../../../assets/img/hard-slide1.png';
import Player from '../../../assets/img/player.png';

  let data = {
    imageMetaData: {
        imageUrl: "https://dc-hikmah-dev.s3.amazonaws.com/1617276765038113914b3-4553-4219-abca-684703f64d79.png",
    },
    name: "Deenfund",
    shortDescription: "All donations goes here",
    features: [{
        _id: "60618ec0b2b130000897fe4b",
        title: "Donation",
        description: "Accept one-time and recurring donations from generous donors in creative & easy ways supported by DEENCONNECT.",
        featureType: "Free",
        price: 0,
        billingPeriod: "",
        status: "Available"
    }],
    plans: [{
        monthlyBilling: {
            price: 0,
            billingPeriod: "Monthly",
            discountPercentage: 0,
        },
        annuallyBilling: {
            price: 0,
            billingPeriod: "Annually",
            discountPercentage: 0,
        },
        features: [{
            _id: "60618ec0b2b130000897fe4b",
            title: "Donation",
            description: "Accept one-time and recurring donations from generous donors in creative & easy ways supported by DEENCONNECT.",
            featureType: "Add-on",
            price: 0,
            billingPeriod: "",
            status: "Available"
        }],
        _id: "606585f5b5d8e80008f84fe4",
        id: "Standard_1",
        name: "Free",
        status: "Available"
    }, {
        monthlyBilling: {
            price: 20,
            billingPeriod: "Monthly",
            discountPercentage: 0,
            stripePlanId : "price_1J14JTCVVsjUQDTvfd3Qz3Jq"
        },
        annuallyBilling: {
            price: 200,
            billingPeriod: "Annually",
            discountPercentage: 10,
            stripePlanId : "price_1J18KWCVVsjUQDTva6KZluN1"
        },
        features: [{
            _id: "60618ec0b2b130000897fe4b",
            title: "Donation",
            description: "Accept one-time and recurring donations from generous donors in creative & easy ways supported by DEENCONNECT.",
            featureType: "Add-on",
            price: 0,
            billingPeriod: "",
            status: "Available"
        }],
        _id: "606585f5b5d8e80008f84fe4",
        id: "Standard_1",
        name: "Premium",
        status: "Available"
    }],
    hardware: [{
        name: "DEENKIOSK Player",
        setupCost: 150,
        price: 10,
        billingPeriod: "Monthly",
        shipping: "Required"
    }],
};

  const [selectedPlan, setselectedPlan] = React.useState("monthly"); 
  const [openModal, setModal] = React.useState(false); 

  const handleSelectedPlan = (e) => {
      console.log(e.target.checked)
      setselectedPlan(e.target.checked ? "annually" : "monthly");
  }; 

	const handleSelectedPlanData = (plan) => {
		console.log("plan name: ", plan)
	}

  // HARDWARE MODAL
  const hardwareSlideImages = [
    HardwareSlide1, HardwareSlide1, HardwareSlide1, HardwareSlide1, HardwareSlide1
  ];

  const includeInPackage = [
    { title: "DEENKIOSK Player", image: Player}, 
    { title: "Touch Display", image: Player}, 
  ];

  const hardwareFeatures = ["24 inch LED", "VESA Mount", "Enable/disable specific Salah", "Search and follow Masajid", "Add your own Salah", "Enable/disable specific Salah"];

<>
  <PricingModal 
    openModal={openModal} 
    setModal={setModal} 
    selectedPlan={selectedPlan} 
    handleSelectedPlan={handleSelectedPlan} 
    handleSelectedPlanData={handleSelectedPlanData} 
    applicationInfo={data}
    checkCircleIcon={CheckCircle}
    modalButtonText={"SEE PRICING"}
    buttonStyle={{
      // backgroundColor: ""
    }}
    infoIcon={info}
    currentPlanName={"standard"}
    onSeeDetailsClick={() => console.log("onSeeDetailsClick")}
    planDiscount={"20"}
    // HARDWARE MODAL
    // numOfDevices={numOfDevices}
    // setnumOfDevices={setnumOfDevices}
    deviceTitle={"DEENKIOSK Player"}
    devicePrice={10}
    hardwareSlideImages={hardwareSlideImages}
    includeInPackage={includeInPackage}
    hardwareFeatures={hardwareFeatures}
    // onSelectClick={onSelectClick}
    modalButtonText={"SEE DETAILS"}
    modalButtonStyles={{color: "white"}}
  />
</> 
```
