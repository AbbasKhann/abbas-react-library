import React, { Fragment } from 'react';
import { Grid, InputAdornment } from '@material-ui/core';

import "../../styles/fonts.css"
import "../../styles/CheckoutPaymentForm.css"

import CreditCardList from "../CreditCardList/CreditCardList"
import TextInputFixedLabel from "../TextInputFixedLabel/TextInputFixedLabel"
import SelectField from "../SelectField/SelectField"
import CheckBox from "../CheckBox/CheckBox"
import ButtonOne from "../ButtonOne/ButtonOne"
import Link from '@material-ui/core/Link';
import ReactFlagsSelect from 'react-flags-select';
import NumberFormat from 'react-number-format';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { usStates } from "../../exampleComponents/states"
import Tooltip from '@material-ui/core/Tooltip';
import parse from 'html-react-parser';
import PackageCard from "../../components/PackageCard/PackageCard"
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';





function CheckoutPayment(props) {
    const { privacyPolicyLink, termsOfUseLink, cardDetails, setcardDetails, addressDetails, setaddressDetails, saveCardDetails, setsaveCardDetails, selectedCardDetails, onEditBillingDetailClick, visaCardImage, masterCardImage, helpImage, newCardImage, discoverCardImage, americanExpressImage, dinersCardImage } = props;

    const [paymentWith, setpaymentWith] = React.useState("newCard");
    const [paymentMethod, setPaymentMethod] = React.useState("creditCard");

    const [cardDetailsError, setcardDetailsError] = React.useState({
        cardNumberError: false, expirationError: false, codeError: false
    });

    const cardFunction = (value) => {
        (value) && console.log("clicked");
    };


    const onSubmit = () => {
        if (paymentMethod === 'creditCard') {
            if (paymentWith === "newCard") {
                let newNumber = cardDetails?.cardNumber?.replace(/\s/g, '');
                const { cardNumber } = cardDetails;

                if ((cardNumber[0] !== '3' && newNumber.length < 16) || (cardNumber[0] === '3' && newNumber.length < 14)) {
                    setcardDetailsError({ ...cardDetailsError, cardNumberError: true })
                    return
                }
                else if ((cardNumber?.startsWith('37') && code.length < 4) || (!cardNumber?.startsWith('37') && code.length < 3)) {
                    setcardDetailsError({ ...cardDetailsError, cardNumberError: true })
                    return
                }

                let cardData = { ...cardDetails, cardNumber: newNumber };
                props.onPlaceOrderSubmit({ cardData, addressDetails })
            } else {
                props.onPlaceOrderSubmit({ selectedCardDetails })
            }
        } else {
            props.onPlaceOrderSubmit({ paymentCheque: true });
        }
    }

    const handleCardDetailChange = (e) => {
        if (e.target.name === 'expiration') {
            let input = e.target.value;
            if (!/^\d{0,2}\/?\d{0,2}$/.test(input)) {
                return
            }

            if (/^\d{3,}$/.test(input)) {
                input = input.match(new RegExp('.{1,2}', 'g')).join('/')
            }
            setcardDetails({ ...cardDetails, [e.target.name]: input });
        } else {
            setcardDetails({ ...cardDetails, [e.target.name]: e.target.value });
        }
    }

    const handleAddressDetailChange = (e) => {
        if (e.target.name === "postalCode") {
            const numRegx = /^\d+$/
            if (e.target.value.length <= 5 && numRegx.test(e.target.value)) {
                setaddressDetails({ ...addressDetails, [e.target.name]: e.target.value });
            } else if (event.target.value.length < 1) {
                setaddressDetails({ ...addressDetails, [e.target.name]: e.target.value });
            }
        } else {
            setaddressDetails({ ...addressDetails, [e.target.name]: e.target.value });
        }
    }

    const handleStateChange = (event, newValue) => {
        setaddressDetails({ ...addressDetails, state: newValue.title });
    }

    // function NumberFormatCustom(props) {
    //     const { inputRef, onChange, ...other } = props;

    //     return (
    //         <NumberFormat
    //             {...other}
    //             getInputRef={inputRef}
    //             onValueChange={(values) => {
    //                 onChange({
    //                     target: {
    //                         name: props.name,
    //                         value: values.value,
    //                     },
    //                 });
    //             }}
    //             isNumericString
    //         />
    //     );
    // }


    // const cardImage = (number) => {
    //     // visa card
    //     if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(number)) {
    //         return (
    //             <InputAdornment position="end">
    //                 <img src={visaCardImage} className="masterCardImage" alt="card img" />
    //             </InputAdornment>
    //         )
    //     }
    //     //master card
    //     else if (/^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/.test(number)) {
    //         return (
    //             <InputAdornment position="end">
    //                 <img src={masterCardImage} className="masterCardImage" alt="card img" />
    //             </InputAdornment>
    //         )
    //     }

    //     // American Express
    //     else if (/^3[47][0-9]{13}$/.test(number)) {
    //         return (
    //             <InputAdornment position="end">
    //                 <img src={americanExpressImage} className="masterCardImage" alt="card img" />
    //             </InputAdornment>
    //         )
    //     }
    //     //Diners Club
    //     else if (/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(number)) {
    //         return (
    //             <InputAdornment position="end">
    //                 <img src={dinersCardImage} className="masterCardImage" alt="card img" />
    //             </InputAdornment>
    //         )
    //     }
    //     //Discover
    //     else if (/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(number)) {
    //         return (
    //             <InputAdornment position="end">
    //                 <img src={discoverCardImage} className="masterCardImage" alt="card img" />
    //             </InputAdornment>
    //         )
    //     }
    // }

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

    const creditCardFormat = (card, regex) => {
        if (!card) return card
        if (card[0] === '3') {
            let str = card;
            let str2;
            if (str.length === 4) {
                str = str + ' '
                return str
            }
            else if (str.length === 10) {
                str = str + ''
                return str
            }
            else if (str.length === 11) {
                str = str + ' '
                return str
            }
            else {
                return str
            }
        }
        const cardWithoutSpace = card.replace(/\s/g, '')
        const cardTemp = cardWithoutSpace.match(/.{1,4}/g)
        return cardTemp.join(' ')
    }

    const { cardNumber, expiration, code } = cardDetails;
    const { cardNumberError, expirationError, codeError } = cardDetailsError;
    const { firstName, lastName, line1, line2, city, state, postalCode, country } = addressDetails;

    const isError = cardNumber?.length < 14;
    let disableBtn = !isError && !cardNumberError && validateExpiration(expiration) && checkCVC(code) && firstName && lastName && line1 && city && state && postalCode && country ? false : true;
    // let disableBtn = checkCVC(code) ? false : true;

    console.log("disableBtn", disableBtn)

    return (
        <>
            <div className="SucureText">{props.ScuredLabel} <LockOutlinedIcon /></div>
            <div className="CheckoutPaymentForm">


                <Grid container spacing={3}>
                    <Grid item md={12} sm={12} xs={12}> 
                        <h1 className='FormTitle'>Select payment method</h1>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                        <PackageCard
                            cardFunction={() => setPaymentMethod('creditCard')}
                            header={"Credit Card"}
                            color="#1B2121"
                            icon={props.creditCard}
                            cardIconStatus={props.cardIconStatus}
                            Link={false}
                        />
                    </Grid>

                    <Grid item md={6} sm={6} xs={12}>
                        <PackageCard
                            cardFunction={() => setPaymentMethod('cheque')}
                            header={"Pay Check"}
                            color="#1B2121"
                            icon={props.paycheck}
                            cardIconStatus={props.cardIconStatus}
                            Link={false}

                        />
                    </Grid>

                </Grid>


                <Grid container spacing={3}>
                    {paymentMethod === 'creditCard' ?
                        <> {props.paywithdropdown &&
                            <Grid item xs={12}>
                                <CreditCardList
                                    label="Pay with"
                                    helperText="Helper text"
                                    Errormessage="Error message"
                                    helpertext={false}
                                    errortext={false}
                                    tooltip={false}
                                    paymentWith={paymentWith}
                                    handleSelectChange={handlePaymentCardSelectChange}
                                    cardListOptions={props.creditCardsList}
                                    // visaCardImage={visaCardImage}
                                    // masterCardImage={masterCardImage}
                                    newCardImage={newCardImage}
                                />
                            </Grid>}

                            {paymentWith === "newCard" ? <Fragment>
                                <Grid item xs={6}>
                                    <TextInputFixedLabel
                                        label="Card number"
                                        labelStatus={true}
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
                                        disabled={props?.editMode ?? false}
                                        // onChange={handleCardDetailChange}
                                        onChange={(e) => {
                                            if (e.target.value.replace(/\s/g, '').match(/^\d+$/)) {
                                                const card = creditCardFormat(e.target.value)
                                                const cardWithoutSpace = card.replace(/\s/g, '')

                                                setcardDetails({
                                                    ...cardDetails,
                                                    cardNumber: cardWithoutSpace.length > 16 ? cardNumber : card,
                                                    code: !e.target.value?.startsWith('37') && code.length >= 4 ? code.slice(0, 3) : code
                                                });
                                            } else if (!e.target.value) {
                                                setcardDetails({
                                                    ...cardDetails,
                                                    cardNumber: ''
                                                });
                                            }
                                        }}
                                        value={cardNumber}
                                        // InputProps={{
                                        //     endAdornment: cardImage(cardNumber),
                                        // }}
                                        // onBlur={() => cardImage(cardNumber) ? setcardDetailsError({ ...cardDetailsError, cardNumberError: false }) : setcardDetailsError({ ...cardDetailsError, cardNumberError: true })}

                                        onBlur={() => {
                                            let newNumber = cardNumber?.replace(/\s/g, '');
                                            if (cardNumber.length !== 0) {
                                                const isError = cardNumber.length < 14;
                                                setcardDetailsError({ ...cardDetailsError, cardNumberError: isError })
                                            } else if ((cardNumber[0] !== '3' && newNumber.length < 16) || (cardNumber[0] === '3' && newNumber.length < 14)) {
                                                setcardDetailsError({ ...cardDetailsError, cardNumberError: true })
                                            }
                                            else if ((cardNumber?.startsWith('37') && code.length < 4) || (!cardNumber?.startsWith('37') && code.length < 3)) {
                                                setcardDetailsError({ ...cardDetailsError, cardNumberError: true })
                                            }
                                        }}
                                        errortextStatus={cardNumberError ? true : false}
                                        Errormessage={cardNumberError ? "Enter valid card number" : ""}
                                        icon={props?.editMode && <img className="field_card" src={props?.cardImage ?? ''} />
                                            || cardNumber[0] === '4' && <img className="field_card" src={visaCardImage} />
                                            || cardNumber[0] === '2' && <img className="field_card" src={masterCardImage} />
                                            || (cardNumber?.startsWith('51') || cardNumber?.startsWith('52') || cardNumber?.startsWith('53') || cardNumber?.startsWith('54') || cardNumber?.startsWith('55')) && <img className="field_card" style={{ border: '1px solid #000066', backgroundColor: '#000066' }} src={masterCardImage} />
                                            || (cardNumber?.startsWith('37') || cardNumber?.startsWith('34')) && <img className="field_card" src={americanExpressImage} />
                                            || cardNumber?.startsWith('60') && <img className="field_card" src={discoverCardImage} />
                                            || (cardNumber?.startsWith('2131') || cardNumber?.startsWith('1800') || cardNumber?.startsWith('35')) && <img className="field_card" src={props.jcbCardImg} />
                                            || cardNumber?.startsWith('62') && <img className="field_card" src={props.unionPayImg} />
                                            || (cardNumber?.startsWith('30') || cardNumber?.startsWith('36')) && <img className="field_card" src={dinersCardImage} />
                                        }
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
                                        inputlabel={true}
                                        tooltip={false}
                                        name="expiration"
                                        onChange={handleCardDetailChange}
                                        value={expiration}
                                        onBlur={() => validateExpiration(expiration) ? setcardDetailsError({ ...cardDetailsError, expirationError: false }) : setcardDetailsError({ ...cardDetailsError, expirationError: true })}
                                        // errortext={!validateExpiration(expiration) && expirationError ? true : false}
                                        errortextStatus={!validateExpiration(expiration) && expirationError ? true : false}
                                        Errormessage={!validateExpiration(expiration) && expirationError ? "Invalid exp date" : ""}
                                        disabled={props?.editMode ?? false}
                                    />
                                </Grid>

                                <Grid item xs={3}>
                                    <TextInputFixedLabel
                                        label="Security code"
                                        labelStatus={true}
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
                                        onChange={(e) => (cardNumber?.startsWith('37') || cardNumber?.startsWith('34')) && e.target.value.length >= 0 && e.target.value.length <= 4 ? handleCardDetailChange(e) : e.target.value.length >= 0 && e.target.value.length < 4 ? handleCardDetailChange(e) : null}
                                        value={code}
                                        type={props?.editMode ? "password" : "number"}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">
                                                <Tooltip title={props.TooltipQuestionIcontext} placement="top" style={{ color: "red" }}>
                                                    <img src={helpImage} width="30px" alt="card img" />
                                                </Tooltip>
                                            </InputAdornment>,
                                        }}
                                        onBlur={() => checkCVC(code) ? setcardDetailsError({ ...cardDetailsError, codeError: false }) : setcardDetailsError({ ...cardDetailsError, codeError: true })}
                                        errortextStatus={!checkCVC(code) && codeError ? true : false}
                                        Errormessage={!checkCVC(code) && codeError ? "Enter Valid CVC Number" : ""}
                                        disabled={props?.editMode ?? false}
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
                                        labelStatus={true}
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
                                        labelStatus={true}
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
                                        labelStatus={true}
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
                                        labelStatus={true}
                                        helperText="Helper text"
                                        placeholder="Address line 2 (Optional)"
                                        Errormessage="Error message"
                                        count={100}
                                        helpertext={true}
                                        errortext={false}
                                        count={false}
                                        tooltip={false}
                                        inputlabel={true}
                                        name="line2"
                                        onChange={handleAddressDetailChange}
                                        value={line2}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <TextInputFixedLabel
                                        label="City/Town"
                                        labelStatus={true}
                                        helperText="Helper text"
                                        placeholder="City/Town"
                                        Errormessage="Error message"
                                        count={100}
                                        helpertext={true}
                                        errortext={false}
                                        count={false}
                                        tooltip={false}
                                        inputlabel={true}
                                        name="city"
                                        onChange={handleAddressDetailChange}
                                        value={city}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <SelectField
                                        label="State/Province"
                                        labelStatus={true}
                                        helperText="Helper text"
                                        Errormessage="Error message"
                                        helpertext={false}
                                        errortext={false}
                                        name="state"
                                        onChange={handleStateChange}
                                        value={state}
                                        selectOptions={usStates?.map((state) => { return { title: state.name } })}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <TextInputFixedLabel
                                        label="Zip/Postal code"
                                        labelStatus={true}
                                        name="postalCode"
                                        onChange={handleAddressDetailChange}
                                        value={postalCode}
                                        label="Zip/Postal code"
                                        helpertext=""
                                        HelpertextStatus={false}
                                        placeholder="Zip/Postal code"
                                        Errormessage="Error message"
                                        errortextStatus={false}
                                        count={100}
                                        countStatus={false}
                                        tooltipStatus={false}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <label class="input_label">Country</label>
                                    <ReactFlagsSelect
                                        searchable selected={country}
                                        onSelect={code =>
                                            setaddressDetails({ ...addressDetails, country: code })}
                                        defaultCountry="US" />
                                </Grid>

                                <Grid item xs={12}>
                                    <CheckBox
                                        onChange={setsaveCardDetails}
                                        checked={saveCardDetails}
                                        label={props.checkboxLabel}
                                        description="Keep me signed in"
                                        value=""
                                        Tooltip={true}
                                        Tooltiptext={props.Tooltipcheckboxtext}
                                        Description={false}
                                    />
                                </Grid>

                            </Fragment> : null}
                        </>
                        : <Grid item xs={12}>
                            <div className="billingAddressContainer">
                                <div className="billingAddressTitle">
                                    <span>CHECK PAYABLE TO :</span>
                                </div>
                                <span>{props?.chequePayableTo}</span>
                                <div className="billingaddressInfo">
                                    <li><b>{props?.mailToName}</b></li>
                                    <li>{props?.chequePayableTo}</li>
                                    <li>{props?.mailToStreet}</li>
                                    <li>{props?.mailToCity + (props?.mailToState ? ', ' + props.mailToState : '') + (props?.mailToPostalCode ? ' ' + props.mailToPostalCode : '')}</li>
                                    {/* <li>{selectedCardDetails && selectedCardDetails.country}</li> */}
                                </div>
                            </div>
                        </Grid>}
                    <Grid item xs={12}>
                        <div className="separator_line"></div>
                    </Grid>

                    <Grid item xs={12}>
                        <div className="form_button_box">
                            <span className="CheckoutTostext">{parse(props.BottomHelperText)}</span>
                            <div className="form_button_Contianer">
                                <div className="CheckoutRemovebutton">
                                    <ButtonOne onClick={props.onclickremove} label={props.RemoveButtonLabel} />
                                </div>
                                <ButtonOne
                                    disabled={paymentMethod === 'cheque' ? false : paymentWith !== "newCard" ? false : disableBtn}
                                    onClick={onSubmit} label={props.ButtonLabel}
                                    buttoncolor={paymentWith !== "newCard" || !disableBtn || paymentMethod === 'cheque' ? props.buttoncolor ?? "#0053A5" : ""}
                                    color={paymentWith !== "newCard" || !disableBtn || paymentMethod === 'cheque' ? props.buttonTextcolor ?? "#fff" : ""}

                                    //buttoncolor={props.buttoncolor}
                                    width={props.buttonwidth}
                                    height={props.buttonheight}
                                    border={props.buttonborder}
                                    borderRadius={props.buttonRadiusr}
                                    //color= {props.buttonTextcolor}
                                    fontWeight={props.buttonfontWeight}
                                //textAlign="center"

                                />
                            </div>
                        </div>
                        {/* <Link href={privacyPolicyLink}>Privacy Policy</Link> and <Link href={termsOfUseLink}>Terms of Use</Link> */}
                    </Grid>

                </Grid>
            </div>

        </>

    )
}

export default CheckoutPayment;