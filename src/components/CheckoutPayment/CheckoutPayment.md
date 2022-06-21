CHECKOUT PAYMENT COMPONENT

```jsx
import { CheckoutPayment } from "master-react-lib";
import MasterCardImg from '../../../assets/img/masterCardIcon.png'
import VisaCardImg from '../../../assets/img/visa-icon.png'
import NewCardImg from '../../../assets/img/new-card.png'
import DiscoverCardImg from '../../../assets/img/discovercard.png';
import AmericanExpressImg from '../../../assets/img/american-express.png';
import DinersCardImg from '../../../assets/img/dinerscard.png';
import JcbCardImg from '../../../assets/img/jcb-card.png';
import UnionPayImg from '../../../assets/img/unionpay.png';
import HelpImg from '../../../assets/img/help-24px.svg'

import paycheck from '../../../assets/img/paycheck.svg'
import creditCard from '../../../assets/img/credit_card.svg'


    const [cardDetails, setcardDetails] = React.useState({
        cardNumber: "•••• •••• 	•••• 4242", expiration: "12/21", code: "123"
    })
    
    const [addressDetails, setaddressDetails] = React.useState({
        firstName: "", lastName: "", line1: "", line2: "", city: "", state: "Florida", postalCode: "", country: "",
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

    // const onPlaceOrderSubmit = (cardDetails) => {
    //     console.log(cardDetails)
    // };

    const onEditBillingDetailClick = () => {
        console.log("onEditBillingDetailClick");
    };

    const creditCardsList = [
      {cardName: "Visa-4242", cardNumber: "4242", cardImage: VisaCardImg},
      {cardName: "Master Card-9213", cardNumber: "9213", cardImage: MasterCardImg},
    ];

    const onclickremove = () => {
  console.log("button clicked");
};

 const onSubmit = () => {
  console.log("button clicked");
};

defaultCheckBox = (flag) => {
  console.log("Flag is: ", flag)
  setsaveCardDetails(flag)
}


<>
  <CheckoutPayment 
    paywithdropdown={true}
    //editMode = {true}
    //cardImage = {MasterCardImg}
    creditCardsList={creditCardsList}
    handlePaymentSelectChange={handlePaymentSelectChange}
    onPlaceOrderSubmit={onPlaceOrderSubmit}
    cardDetails={cardDetails}
    setcardDetails={setcardDetails}
    addressDetails={addressDetails}
    setaddressDetails={setaddressDetails}
    saveCardDetails={saveCardDetails}
    setsaveCardDetails={defaultCheckBox}
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
    jcbCardImg={JcbCardImg}
    unionPayImg={UnionPayImg}
    helpImage={HelpImg}
    ButtonLabel="Place Order"

    creditCard={creditCard}
    paycheck={paycheck}
    cardIconStatus={true}



    //RemoveButtonLabel="REMOVE CARD"
    ScuredLabel="Secured"
    checkboxLabel="Save my card details for future transaction"
    Tooltipcheckboxtext="Unsure about something? You can always update your campaign later."
    BottomHelperText="We don't save your credit card details, your credit card <a href = 'http://www.google.com'>information</a> is safe with our trusted partner Stripe"
    TooltipQuestionIcontext="CVV is the last 3 digits on the back. In American Express, it is a 4 digit code in the front of the credit card"

    onclickremove={onclickremove}
    //onSubmit={onSubmit}

    buttoncolor="#0053A5"
    buttonwidth="100%"
    buttonheight="50px"
    buttonborder="#ccc 0px solid"
    buttonRadiusr="100px"
    buttonTextcolor="#fff"
    buttonfontWeight="600"

    chequePayableTo = 'AFNAN INNOVATION LAB, INC'
    mailToName = 'Abdullah Al Razi'
    mailToStreet = '280 Glenmore Ave'
    mailToCity = 'Brooklyn'
    mailToState = 'NY'
    mailToPostalCode = '11208'

  />


</> 
```
