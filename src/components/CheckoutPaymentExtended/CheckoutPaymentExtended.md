CHECKOUT PAYMENT COMPONENT

```jsx
import { CheckoutPaymentExtended } from "master-react-lib";
import MasterCardImg from '../../../assets/img/masterCardIcon.png'
import VisaCardImg from '../../../assets/img/visa-icon.png'
import NewCardImg from '../../../assets/img/new-card.png'
import DiscoverCardImg from '../../../assets/img/discovercard.png';
import AmericanExpressImg from '../../../assets/img/american-express.png';
import DinersCardImg from '../../../assets/img/dinerscard.png';
import HelpImg from '../../../assets/img/help-24px.svg'


    const [cardDetails, setcardDetails] = React.useState({
        cardNumber: "", expiration: "", code: ""
    });
    
    const [addressDetails, setaddressDetails] = React.useState({
        firstName: "", lastName: "", line1: "", line2: "", city: "", state: "", postalCode: "", country: "",
    });
    
    const [saveCardDetails, setsaveCardDetails] = React.useState(false);

    let selectedCardDetails = {
        firstName: "Sheikh", lastName: "Rehman", line1: "Street Address", line2: "", city: "City", state: "State", postalCode: "Zip Code", country: "United States",
    };
    
    const handlePaymentSelectChange = (selectedPaymentCard) => {
        console.log("selectedPaymentCard: ", selectedPaymentCard);
    };

    const onPlaceOrderSubmit = (cardDetails) => {
        console.log(cardDetails)
    };
    
    const onEditBillingDetailClick = () => {
        console.log("onEditBillingDetailClick");
    };

    const creditCardsList = [
      {cardName: "Visa-4242", cardNumber: "4242", cardImage: VisaCardImg},
      {cardName: "Master Card-9213", cardNumber: "9213", cardImage: MasterCardImg},
    ];

<>
  <CheckoutPaymentExtended 
    creditCardsList={creditCardsList}
    handlePaymentSelectChange={handlePaymentSelectChange}
    onPlaceOrderSubmit={onPlaceOrderSubmit}
    cardDetails={cardDetails}
    setcardDetails={setcardDetails}
    addressDetails={addressDetails}
    setaddressDetails={setaddressDetails}
    saveCardDetails={saveCardDetails}
    setsaveCardDetails={setsaveCardDetails}
    selectedCardDetails={selectedCardDetails}
    privacyPolicyLink={"/privacy-policy"}
    termsOfUseLink={"/terms-of-use"}
    onEditBillingDetailClick={onEditBillingDetailClick}
    visaCardImage={VisaCardImg}
    masterCardImage={MasterCardImg}
    newCardImage={NewCardImg}
    discoverCardImage={DiscoverCardImg}
    americanExpressImage={AmericanExpressImg}
    dinersCardImage={DinersCardImg}
    helpImage={HelpImg}

    StepTitle_1="Select Package"
    StepTitle_2="Delivery options"
    StepTitle_3="Delivery Details"
    StepTitle_4="Payment"
    


  />


</> 
```
