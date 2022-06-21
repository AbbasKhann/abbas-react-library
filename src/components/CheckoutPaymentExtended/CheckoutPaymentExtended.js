import React, { Fragment } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';


import SelectPackage from './SelectPackage'
import DeliveryOptions from './DeliveryOptions'
import DeliveryDetails from './DeliveryDetails'
import PaymentComponent from './PaymentComponent'

import "../../styles/fonts.css"
import "../../styles/CheckoutPaymentExtended.css"

const cardFunction = (value) => {
    (value) && console.log("clicked");
};


const CheckoutPaymentExtended = (props) => {


    return (
        <>
            <div className="SucureText">Secured checkout <LockOutlinedIcon /></div>
            <div className="CheckoutPaymentExtendedContainer">


                <Accordion>

                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" >
                        <Typography className="aAccordionTitle" ><span>1</span> {props.StepTitle_1}</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <SelectPackage />
                    </AccordionDetails>

                </Accordion>

                <Accordion >

                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" >
                        <Typography className="aAccordionTitle" ><span>2</span> {props.StepTitle_2}</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <DeliveryOptions />
                    </AccordionDetails>

                </Accordion>

                <Accordion >

                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" >
                        <Typography className="aAccordionTitle" ><span>3</span> {props.StepTitle_3}</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <DeliveryDetails />
                    </AccordionDetails>

                </Accordion>

                <Accordion defaultExpanded>

                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" >
                        <Typography className="aAccordionTitle" ><span>4</span> {props.StepTitle_4}</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <PaymentComponent
                            creditCardsList={props.creditCardsList}
                            handlePaymentSelectChange={props.handlePaymentSelectChange}
                            onPlaceOrderSubmit={props.onPlaceOrderSubmit}
                            cardDetails={props.cardDetails}
                            setcardDetails={props.setcardDetails}
                            addressDetails={props.addressDetails}
                            setaddressDetails={props.setaddressDetails}
                            saveCardDetails={props.saveCardDetails}
                            setsaveCardDetails={props.setsaveCardDetails}
                            selectedCardDetails={props.selectedCardDetails}
                            privacyPolicyLink={props.privacyPolicyLink}
                            termsOfUseLink={props.termsOfUseLink}
                            onEditBillingDetailClick={props.onEditBillingDetailClick}
                            visaCardImage={props.visaCardImage}
                            masterCardImage={props.masterCardImage}
                            newCardImage={props.newCardImage}
                            discoverCardImage={props.discoverCardImage}
                            americanExpressImage={props.americanExpressImage}
                            dinersCardImage={props.dinersCardImage}
                            helpImage={props.helpImage}
                        />
                    </AccordionDetails>

                </Accordion>

            </div>

        </>

    )
}

export default CheckoutPaymentExtended;