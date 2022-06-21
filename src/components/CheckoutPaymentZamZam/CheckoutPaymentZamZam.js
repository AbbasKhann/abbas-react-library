import React, { Fragment } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PackageCard from "../../components/PackageCard/PackageCard"
import AttendeeForm from './AttendeeForm'
import PaymentComponent from './PaymentComponent'

import "../../styles/fonts.css"
import "../../styles/CheckoutPaymentExtended.css"
import "./CheckoutZamZam.css"


const CheckoutPaymentZamZam = (props) => {

    const onclick = (value) => {
        (value) && console.log("clicked");
    };



    const packegeData = [

        {
            GroupName: "Group A",
            TimePeriod: "7 Days",
            Details: "Sunday, July 15 to, Thursday, August 7",
            color: "#0590FA",
            onclick: "onclick",
            ButtonLabel: "Package details",

        },

        {
            GroupName: "Group B",
            TimePeriod: "7 Days",
            Details: "Sunday, July 15 to, Thursday, August 7",
            color: "#06D02F",
            onclick: "onclick",
            ButtonLabel: "Package details",

        },

        {
            GroupName: "VIP",
            TimePeriod: "7 Days",
            Details: "Sunday, July 15 to, Thursday, August 7",
            color: "#6200EE",
            onclick: "onclick",
            ButtonLabel: "Package details",

        }
    ];


    const click = () => {
        console.log("Back Button Clicked");
    };


    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <div className="SucureText">Secured checkout <LockOutlinedIcon /></div>
            <div className="CheckoutPaymentExtendedContainer">


                <Accordion className="CheckoutPaymentTabContainer" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>

                    <AccordionSummary
                        aria-controls="panel1bh-content"
                        id="panel1bh-content"
                    >

                        <Typography className="aAccordionTitle" ><span>1</span> {props.StepTitle_1}</Typography>

                        <div className="checkOutpaymentDetailsSection">
                            <div className="checkOutpaymentDetailsCol">
                                <h1>Sheikh Raihan</h1>
                                <p>Male, 34</p>
                                <p>Street address City, </p>
                                <p>State Zip code</p>
                                <p>+1 (123) 123-1234</p>
                                <p>customename@email.com</p>
                                <p>Package Group A, Hajj year 2021</p>
                            </div>

                            <div className="checkOutpaymentDetailsEdit">Edit</div>
                        </div>

                    </AccordionSummary>

                    <AccordionDetails>

                        <Grid container spacing={2}>
                            {packegeData.map((item, i) => (
                                <Grid item xs={4}>
                                    <PackageCard
                                        cardFunction={item.onclick}
                                        header={item.GroupName}
                                        dayText={item.TimePeriod}
                                        body={item.Details}
                                        color={item.color}
                                        icon={item.icon}
                                        Link={true}
                                        buttonLabel={item.ButtonLabel}
                                    />
                                </Grid>
                            ))}


                            <Grid item xs={12}>
                                <Typography className="aAccordionTitleSmall" >{props.StepTitle_2}</Typography>
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <AttendeeForm />
                            </Grid>

                        </Grid>





                    </AccordionDetails>

                </Accordion>

                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>

                    <AccordionSummary
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography className="aAccordionTitle" ><span>2</span> {props.StepTitle_3}</Typography>
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
                            CreditCard={props.CreditCard}
                            CashIcon={props.CashIcon}
                            Paycheck={props.Paycheck}
                        />
                    </AccordionDetails>

                </Accordion>

                {/* <Accordion className="CheckoutPaymentTabContainer" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>

                    <AccordionSummary
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >

                        <div className="checkOutpaymentDetailsSection">
                            <div className="checkOutpaymentDetailsCol">
                                <h1>Sheikh Raihan</h1>
                                <p>Male, 34</p>
                                <p>Street address City, </p>
                                <p>State Zip code</p>
                                <p>+1 (123) 123-1234</p>
                                <p>customename@email.com</p>
                                <p>Package Group A, Hajj year 2021</p>
                            </div>

                            <div className="checkOutpaymentDetailsEdit">Edit</div>
                        </div>

                    </AccordionSummary>

                    <AccordionDetails>
                        <Grid container spacing={4}>
                            <Grid item md={12} xs={12}>
                                <div className="AttendeeDetailsContainer">
                                    <div className="AttendeeDetailsCol">
                                        <h2>Sheikh Raihan</h2>
                                        <p>Male, 34</p>
                                        <p>Street address City, State Zip code</p>
                                        <p>+1 (123) 123-1234</p>
                                        <p>customename@email.com</p>
                                        <p>Package Group A, Hajj year 2021</p>
                                    </div>

                                    <div className="deleverdOptionDetailsRightText"> Attendee 1 <div className="checkOutpaymentAttendeeDetailsEdit">Edit</div> </div>
                                </div>

                                <div className="AttendeeDetailsContainer">
                                    <div className="AttendeeDetailsCol">
                                        <h2>Sheikh Raihan</h2>
                                        <p>Male, 34</p>
                                        <p>Street address City, State Zip code</p>
                                        <p>+1 (123) 123-1234</p>
                                        <p>customename@email.com</p>
                                        <p>Package Group A, Hajj year 2021</p>
                                    </div>

                                    <div className="deleverdOptionDetailsRightText"> Attendee 2 <div className="checkOutpaymentAttendeeDetailsEdit">Edit</div> </div>
                                </div>
                            </Grid>
                            
                        </Grid>
                    </AccordionDetails>

                </Accordion> */}





            </div>

        </>

    )
}

export default CheckoutPaymentZamZam;