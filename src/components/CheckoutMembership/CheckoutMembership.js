import React, { Fragment } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import OrderDetais from './OrderDetais'
import Delivery from './Delivery'
import Payment from './Payment'

import "../../styles/fonts.css"
import "../../styles/CheckoutPaymentExtended.css"

const cardFunction = (value) => {
    (value) && console.log("clicked");
};


const CheckoutMembership = (props) => {


    return (
        <>
            <div className="SucureText">Secured checkout <LockOutlinedIcon /></div>
            <div className="CheckoutMembership">


                <Accordion >

                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" >
                        <Typography className="aAccordionTitle" ><CheckCircleRoundedIcon className='checkIcon'/> {props.StepTitle_1}</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <OrderDetais />
                    </AccordionDetails>

                </Accordion>

                <Accordion >

                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" >
                        <Typography className="aAccordionTitle" ><CheckCircleRoundedIcon className='checkIcon'/> {props.StepTitle_2}</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Delivery buttonColor={props.buttonColor}/>
                    </AccordionDetails>

                </Accordion>

                <Accordion defaultExpanded>

                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" >
                        <Typography className="aAccordionTitle" ><CheckCircleRoundedIcon className='checkIcon'/> {props.StepTitle_3}</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Payment
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

export default CheckoutMembership;