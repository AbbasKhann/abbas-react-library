import React, { Fragment } from 'react';
import { Grid, InputAdornment } from '@material-ui/core';

import "../../styles/fonts.css"
import "../../styles/CheckoutPaymentForm.css"

import CreditCardList from "../../components/CreditCardList/CreditCardList"
import TextInputFixedLabel from "../../components/TextInputFixedLabel/TextInputFixedLabel"
import SelectField from "../../components/SelectField/SelectField"
import CheckBox from "../../components/CheckBox/CheckBox"
import ButtonOne from "../../components/ButtonOne/ButtonOne"
import Link from '@material-ui/core/Link';
import ReactFlagsSelect from 'react-flags-select';
import NumberFormat from 'react-number-format';

import PackageCard from "../../components/PackageCard/PackageCard"

import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined'; 
import InfoIcon from '@material-ui/icons/Info';
// import CashIcon from '../../../assets/img/CashIcon.png';

const cardFunction = (value) => {
    (value) && console.log("clicked");
};


function PaymentComponent(props) {
    const { privacyPolicyLink, termsOfUseLink, cardDetails, setcardDetails, addressDetails, setaddressDetails, saveCardDetails, setsaveCardDetails, selectedCardDetails, onEditBillingDetailClick, visaCardImage, masterCardImage, helpImage, newCardImage, discoverCardImage, americanExpressImage, dinersCardImage } = props;

    const [paymentWith, setpaymentWith] = React.useState("newCard");

    const [cardDetailsError, setcardDetailsError] = React.useState({
        cardNumberError: false, expirationError: false, codeError: false
    });


    const onSubmit = () => {
        if (paymentWith === "newCard") {
            props.onPlaceOrderSubmit({ cardDetails, addressDetails })
            console.log(cardDetails, addressDetails)
        } else {
            props.onPlaceOrderSubmit({ selectedCardDetails })
            console.log(selectedCardDetails)
        }

    }

    const handleCardDetailChange = (e) => {
        setcardDetails({ ...cardDetails, [e.target.name]: e.target.value });
    }

    const handleAddressDetailChange = (e) => {
        console.log("test",e)
        setaddressDetails({ ...addressDetails, [e.target.name]: e.target.value });
    }

     const handleStateChange = (event, newValue) => {
        setaddressDetails({ ...addressDetails, state: newValue.title });
    }

    function NumberFormatCustom(props) {
        const { inputRef, onChange, ...other } = props;

        return (
            <NumberFormat
                {...other}
                getInputRef={inputRef}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.value,
                        },
                    });
                }}
                isNumericString
            />
        );
    }


    const cardImage = (number) => {
        // visa card
        if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(number)) {
            return (
                <InputAdornment position="end">
                    <img src={visaCardImage} className="masterCardImage" alt="card img" />
                </InputAdornment>
            )
        }
        //master card
        else if (/^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/.test(number)) {
            return (
                <InputAdornment position="end">
                    <img src={masterCardImage} className="masterCardImage" alt="card img" />
                </InputAdornment>
            )
        }

        // American Express
        else if (/^3[47][0-9]{13}$/.test(number)) {
            return (
                <InputAdornment position="end">
                    <img src={americanExpressImage} className="masterCardImage" alt="card img" />
                </InputAdornment>
            )
        }
        //Diners Club
        else if (/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(number)) {
            return (
                <InputAdornment position="end">
                    <img src={dinersCardImage} className="masterCardImage" alt="card img" />
                </InputAdornment>
            )
        }
        //Discover
        else if (/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(number)) {
            return (
                <InputAdornment position="end">
                    <img src={discoverCardImage} className="masterCardImage" alt="card img" />
                </InputAdornment>
            )
        }
    }

    const checkCVC = () => {
        const { cardNumber, code } = cardDetails;
        const numRegx = /^[0-9]*$/
        if (cardNumber[0] === '3' ? code.length !== 4 : code.length !== 3) {
            return false
        } else {
            return true
        }
    }

    const validateExpiration = () => {
        const { expiration } = cardDetails;
        if (/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiration)) {
            var today, someday;
            var exMonth = expiration.split("/")[0];
            var exYear = expiration.split("/")[1];
            today = new Date();
            someday = new Date();
            someday.setFullYear('20' + exYear, exMonth, 1);
            if (someday < today) {
                console.log("The expiry date is before today's date. Please select a valid expiry date");
                return false;
            }
            return true
        } else {
            return false
        }
    }

    const handlePaymentCardSelectChange = (selectedCard) => {
        props.handlePaymentSelectChange(selectedCard)
        setpaymentWith(selectedCard)
    }

    const { cardNumber, expiration, code } = cardDetails;
    const { cardNumberError, expirationError, codeError } = cardDetailsError;
    const { firstName, lastName, line1, line2, city, state, postalCode, country } = addressDetails;

    let disableBtn = cardImage(cardNumber) && validateExpiration(expiration) && checkCVC(code) && firstName && lastName && line1 && city && state && postalCode && country ? false : true;
    // let disableBtn = checkCVC(code) ? false : true;

    return (
        <>
            {/* <div className="SucureText">Secured checkout <LockOutlinedIcon/></div> */}
            <div className="CheckoutPaymentForm">
                <Grid container spacing={3}>

                <Grid item md={4} sm={4} xs={12}>
                    <PackageCard
                        cardFunction={cardFunction}
                        header={"Credit Card"}
                        color="#1B2121"
                        icon={<PaymentOutlinedIcon />}
                        Link={false}
                    />
                </Grid>

                <Grid item md={4} sm={4} xs={12}>
                    <PackageCard
                        cardFunction={cardFunction}
                        header={"Pay Check"}
                        color="#1B2121"
                        icon={<PaymentOutlinedIcon />}
                        Link={false}
                    />
                </Grid>

                <Grid item md={4} sm={4} xs={12}>
                    <PackageCard
                        cardFunction={cardFunction}
                        header={"Pay Cash"}
                        color="#1B2121"
                        icon={<PaymentOutlinedIcon />}
                        Link={false}
                    />
                </Grid>

                <div className="infoTextContainer"> <InfoIcon /> Please, use a card without interest/Riba. If possible, use a Debit Card instead.</div>
                    

                    <Grid item xs={12}>
                        <CreditCardList
                            label="Pay with"
                            //helperText="Helper text"
                            Errormessage="Error message"
                            helpertext={true}
                            errortext={false}
                            tooltip={false}
                            paymentWith={paymentWith}
                            handleSelectChange={handlePaymentCardSelectChange}
                            cardListOptions={props.creditCardsList}
                            // visaCardImage={visaCardImage}
                            // masterCardImage={masterCardImage}
                            newCardImage={newCardImage}
                        />
                    </Grid>

                    {paymentWith === "newCard" ? <Fragment>
                        <Grid item xs={6}>
                            <TextInputFixedLabel
                                label="Card number"
                                helperText="Helper text"
                                placeholder="4242424242424242"
                                Errormessage="Error message"
                                count={100}
                                helpertext={true}
                                errortext={false}
                                count={false}
                                tooltip={false}
                                inputlabel={true}
                                name="cardNumber"
                                onChange={handleCardDetailChange}
                                value={cardNumber}
                                InputProps={{
                                    endAdornment: cardImage(cardNumber),
                                    // inputComponent: NumberFormatCustom
                                }}
                                onBlur={() => cardImage(cardNumber) ? setcardDetailsError({ ...cardDetailsError, cardNumberError: false }) : setcardDetailsError({ ...cardDetailsError, cardNumberError: true })}
                                errortextStatus={!cardImage(cardNumber) && cardNumberError ? true : false}
                                Errormessage={!cardImage(cardNumber) && cardNumberError ? "Enter valid card number" : ""}
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <TextInputFixedLabel
                                label="Expiration"
                                placeholder="MM/YY"
                                Errormessage="Error message"
                                count={100}
                                helpertext={true}
                                errortext={false}
                                count={false}
                                inputlabel={true}
                                tooltip={false}
                                name="expiration"
                                onChange={handleCardDetailChange}
                                value={expiration}
                                onBlur={() => validateExpiration(expiration) ? setcardDetailsError({ ...cardDetailsError, expirationError: false }) : setcardDetailsError({ ...cardDetailsError, expirationError: true })}
                                // errortext={!validateExpiration(expiration) && expirationError ? true : false}
                                errortextStatus={!validateExpiration(expiration) && expirationError ? true : false}
                                Errormessage={!validateExpiration(expiration) && expirationError ? "Invalid exp date" : ""}
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <TextInputFixedLabel
                                label="Security code"
                                helperText="Helper text"
                                placeholder="CVV"
                                Errormessage="Error message"
                                count={100}
                                helpertext={true}
                                errortext={false}
                                count={false}
                                tooltip={false}
                                inputlabel={true}
                                name="code"
                                onChange={handleCardDetailChange}
                                value={code}
                                type="number"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">
                                        <img src={helpImage} width="30px" alt="card img" />
                                    </InputAdornment>,
                                }}
                                onBlur={() => checkCVC(code) ? setcardDetailsError({ ...cardDetailsError, codeError: false }) : setcardDetailsError({ ...cardDetailsError, codeError: true })}
                                errortextStatus={!checkCVC(code) && codeError ? true : false}
                                Errormessage={!checkCVC(code) && codeError ? "Enter Valid CVC Number" : ""}
                            />
                        </Grid>
                    </Fragment> : null}

                    <Grid item xs={12}>
                        <div className="formSectionTitle">Billing address</div>
                    </Grid>


                    {paymentWith !== "newCard" ? <Grid item xs={12}>
                        <div className="billingAddressContainer">
                            <div className="billingAddressTitle">
                                <span>{selectedCardDetails && selectedCardDetails.firstName}  {selectedCardDetails && selectedCardDetails.lastName}</span> <span style={{ color: "#0590FA", cursor: "pointer" }} onClick={onEditBillingDetailClick}>Edit</span>
                            </div>
                            <div className="billingaddressInfo">
                                <li>{selectedCardDetails && selectedCardDetails.line1}</li>
                                <li>{selectedCardDetails && selectedCardDetails.city}, {selectedCardDetails && selectedCardDetails.state} {selectedCardDetails && selectedCardDetails.postalCode}</li>
                                <li>{selectedCardDetails && selectedCardDetails.country}</li>
                            </div>
                        </div>
                    </Grid> : null}


                    {paymentWith === "newCard" ? <Fragment>
                        <Grid item xs={6}>
                            <TextInputFixedLabel
                                label="First name"
                                helperText="Helper text"
                                placeholder="First name"
                                Errormessage="Error message"
                                count={100}
                                helpertext={true}
                                errortext={false}
                                count={false}
                                tooltip={false}
                                inputlabel={true}
                                name="firstName"
                                onChange={handleAddressDetailChange}
                                value={firstName}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextInputFixedLabel
                                label="Last name"
                                helperText="Helper text"
                                placeholder="Last name"
                                Errormessage="Error message"
                                count={100}
                                helpertext={true}
                                errortext={false}
                                count={false}
                                tooltip={false}
                                inputlabel={true}
                                name="lastName"
                                onChange={handleAddressDetailChange}
                                value={lastName}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextInputFixedLabel
                                label="Address line 1"
                                helperText="Helper text"
                                placeholder="Street address, P.O. box, house etc."
                                Errormessage="Error message"
                                count={100}
                                helpertext={true}
                                errortext={false}
                                count={false}
                                tooltip={false}
                                inputlabel={true}
                                name="line1"
                                onChange={handleAddressDetailChange}
                                value={line1}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextInputFixedLabel
                                label="Address line 2 (Optional)"
                                helperText="Helper text"
                                placeholder="Street address, P.O. box, house etc."
                                Errormessage="Error message"
                                count={100}
                                helpertext={true}
                                errortext={false}
                                count={false}
                                tooltip={false}
                                inputlabel={false}
                                name="line2"
                                onChange={handleAddressDetailChange}
                                value={line2}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextInputFixedLabel
                                label="City/Town"
                                helperText="Helper text"
                                placeholder="Placeholder"
                                Errormessage="Error message"
                                count={100}
                                helpertext={true}
                                errortext={false}
                                count={false}
                                tooltip={false}
                                inputlabel={false}
                                name="city"
                                onChange={handleAddressDetailChange}
                                value={city}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <SelectField
                                label="State/Province"
                                //helperText="Helper text"
                                Errormessage="Error message"
                                helpertext={true}
                                errortext={false}
                                labelStatus={false} 
                                name="state"
                                onChange={handleStateChange}
                                value={state}
                                selectOptions={[{title: "New York"}, {title: "California"}]}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextInputFixedLabel
                                name="postalCode"
                                onChange={handleAddressDetailChange}
                                value={postalCode}
                                label="Zip/Postal code"
                                labelStatus={false}
                                //helpertext="Helper text"
                                HelpertextStatus={true}
                                placeholder="Placeholder"
                                Errormessage="Error message"
                                errortextStatus={false}
                                count={100}
                                countStatus={true}
                                tooltipStatus={false}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <ReactFlagsSelect searchable selected={country} onSelect={code => setaddressDetails({ ...addressDetails, country: code })} defaultCountry="US" />
                        </Grid>

                        <Grid item xs={12}>
                            <CheckBox 
                                onChange={setsaveCardDetails} 
                                checked={saveCardDetails}
                                label="Save my card details for future transaction"
                                description="Keep me signed in"
                                value=""
                                Tooltip={true}
                                Description={false}
                            />
                        </Grid>

                    </Fragment> : null}


                    <Grid item xs={12}>
                        <div className="separator_line"></div>
                    </Grid>

                    <Grid item xs={12}>
                        <div className="form_button_box">
                            <span className="tos_text">By placing your order you agree to our <Link href={privacyPolicyLink}>Privacy Policy</Link> and <Link href={termsOfUseLink}>Terms of Use</Link></span>
                            <ButtonOne disabled={paymentWith !== "newCard" ? false : disableBtn} onclick={onSubmit}  label="Placeholder"/>
                        </div>
                    </Grid>

                </Grid>
            </div>

            </>
        
    )
}

export default PaymentComponent;