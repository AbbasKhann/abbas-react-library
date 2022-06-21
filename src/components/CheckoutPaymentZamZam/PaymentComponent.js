import React, { Fragment } from 'react';
import { Grid, InputAdornment } from '@material-ui/core';

import "../../styles/fonts.css"
import "../../styles/CheckoutPaymentForm.css"

import TextInputFixedLabel from "../../components/TextInputFixedLabel/TextInputFixedLabel"
import ButtonOne from "../../components/ButtonOne/ButtonOne"
import Link from '@material-ui/core/Link';
import NumberFormat from 'react-number-format';
import Tooltip from '@material-ui/core/Tooltip';
import PackageCard from "../../components/PackageCard/PackageCard"
import InfoIcon from '@material-ui/icons/Info';



const cardFunction = (value) => {
    (value) && console.log("clicked");
};


function PaymentComponent(props) {
    const { privacyPolicyLink, termsOfUseLink, cardDetails, setcardDetails, addressDetails, setaddressDetails, saveCardDetails, setsaveCardDetails, selectedCardDetails, CreditCard, Paycheck, CashIcon, visaCardImage, masterCardImage, helpImage, newCardImage, discoverCardImage, americanExpressImage, dinersCardImage } = props;

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
        console.log("test", e)
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
            <div className="ZamzamCheckoutPaymentForm">
                <Grid container spacing={3}>

                    <Grid item md={4} sm={4} xs={12}>
                        <PackageCard
                            cardFunction={cardFunction}
                            header={"Credit Card"}
                            color="#1B2121"
                            icon={CreditCard}
                            Link={false}
                            cardIconStatus={true}
                        />
                    </Grid>

                    <Grid item md={4} sm={4} xs={12}>
                        <PackageCard
                            cardFunction={cardFunction}
                            header={"Pay Check"}
                            color="#1B2121"
                            icon={Paycheck}
                            Link={false}
                            cardIconStatus={true}
                        />
                    </Grid>

                    <Grid item md={4} sm={4} xs={12}>
                        <PackageCard
                            cardFunction={cardFunction}
                            header={"Pay Cash"}
                            color="#1B2121"
                            icon={CashIcon}
                            Link={false}
                            cardIconStatus={true}
                        />
                    </Grid>

                    <div className="infoTextContainer"> <InfoIcon /> Please, use a card without interest/Riba. If possible, use a Debit Card instead.</div>


                    <Grid item xs={12}>
                        <div className="ZamzamPaymentDetailsContainer">
                            <li>
                                <h1>Check Payable to :</h1>
                                <h2>ZamZam Hajj & Umrah Services, Inc</h2>
                            </li>

                            <li>
                            <h1>Mail the check to:</h1>
                            <h2>Md D. Hossain</h2>

                            <p>ZamZam Hajj & Umrah Services, Inc</p>
                            <p>1049 Glenmore Ave, #5B</p>
                            <p>Brooklyn, NY 11208</p>
                            </li>

                        </div>
                    </Grid>



                    <Fragment>
                        <Grid item xs={6}>
                            <TextInputFixedLabel
                                label="Card number"
                                labelStatus={true}
                                placeholder="Card number"
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

                        <Grid item xs={3}>
                            <TextInputFixedLabel
                                label="Expiration"
                                labelStatus={true}
                                placeholder="MM/YY"
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

                        <Grid item xs={3}>
                            <div className="CVVField">
                            <TextInputFixedLabel
                                label="Security code"
                                labelStatus={true}
                                placeholder="CVC"
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
                            <div className="cvvTooltipContainer"> 
                            <Tooltip title="CVV is the last 3 digits on the back. In American Express, it is a 4 digit code in the front of the credit card" placement="top" style={{color:"red"}}>
                                <img src={helpImage} width="30px" alt="card img" />
                            </Tooltip>
                            </div>
                            </div>
                        </Grid>

                        <Grid item xs={6}>
                            <TextInputFixedLabel
                                label="Name on card"
                                labelStatus={true}
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
                                label="Zip/Postal code"
                                labelStatus={true}
                                helperText="Helper text"
                                placeholder="Same as billing address"
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


                    </Fragment>


                    <Grid item xs={12}>
                        <div className="separator_line"></div>
                    </Grid>

                    <Grid item xs={12}>
                        <div className="form_button_Contianer">
                            <span className="tos_text">By placing your order you agree to our <Link href={privacyPolicyLink}>Privacy Policy</Link> and <Link href={termsOfUseLink}>Terms of Use</Link></span>
                            <ButtonOne
                                label="Place order"
                                disabled={paymentWith !== "newCard" ? false : disableBtn} onclick={onSubmit}
                                arrow={false}
                                arrowColor="#fff"
                                buttoncolor="#0590FA"
                                width="auto"
                                height="50px"
                                border="#0590FA 0px solid"
                                borderRadius="4px"
                                color="#fff"
                                fontWeight="600"
                                textAlign="center"
                            />
                        </div>
                    </Grid>

                </Grid>
            </div>

        </>

    )
}

export default PaymentComponent;