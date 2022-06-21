import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';

import PackageCard from "../../components/PackageCard/PackageCard"
import ButtonOne from "../../components/ButtonOne/ButtonOne"
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import StorefrontIcon from '@material-ui/icons/Storefront';
import TextInputFixedLabel from "../../components/TextInputFixedLabel/TextInputFixedLabel"
import SelectField from "../../components/SelectField/SelectField"
import PhoneInputField from "../../components/PhoneInputField/PhoneInputField"
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import Button from '@material-ui/core/Button';
import "../../styles/fonts.css"
import "../../styles/CheckoutPaymentExtended.css"





const Delivery = (props) => {

    const [phone, setPhone] = React.useState({
        country: "",
        number: "",
    });

    const cardFunction = (value) => {
        (value) && console.log("clicked");
    };

    const click = () => {
        console.log("Back Button Clicked");
    };
    const handleSelectChange = (event, newValue) => {
        setcontactData({ select: newValue.title });
    }

    return (
        <div className="Delivery">
            <Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <div className='FormDetailsContainer'>
                        <div className='FormDetailsContainerHdr'>
                            <div className='FormDetailsContainerDtl'>
                                <h3>Home delivery</h3>
                                <h2>Masukul Alam</h2>
                                <p>1234 Church Street #1B</p>
                                <p> #1B </p>
                                <p>Nashville, TN 37203</p>
                            </div>
                            <div className='AtdRightCol'>
                                <Button href="#text-buttons" className='atnEdit'>
                                    Edit
                                </Button>
                                <Button href="#text-buttons" className='atnDelete'>
                                    Delete
                                </Button>
                            </div>
                        </div>

                    </div>
                </Grid>

                <Grid item md={6} xs={12}>
                    <PackageCard
                        cardFunction={cardFunction}
                        header={"I'd like it delivered"}
                        color="#1B2121"
                        icon={<LocalShippingIcon />}
                        Link={false}
                        cardIconStatus={true}
                    />
                </Grid>

                <Grid item md={6} xs={12}>
                    <PackageCard
                        cardFunction={cardFunction}
                        header={"I'll pick it up"}
                        color="#1B2121"
                        icon={<StorefrontRoundedIcon />}
                        Link={false}
                        cardIconStatus={true}
                    />
                </Grid>

                <Grid item md={6} xs={12}>
                    <TextInputFixedLabel
                        label="First name"
                        labelStatus={true}
                        //helpertext="Helper text"
                        HelpertextStatus={true}
                        Errormessage="Error message"
                        errortextStatus={false}
                        count={false}
                        countStatus={false}
                        tooltipStatus={false}
                    />
                </Grid>

                <Grid item md={6} xs={12}>
                    <TextInputFixedLabel
                        label="Last name"
                        labelStatus={true}
                        helpertext="Helper text"
                        //HelpertextStatus={true}
                        Errormessage="Error message"
                        errortextStatus={false}
                        count={false}
                        countStatus={false}
                        tooltipStatus={false}
                    />
                </Grid>

                <Grid item md={6} xs={12}>
                    <TextInputFixedLabel
                        label="Resident street address"
                        labelStatus={true}
                        //helpertext="Helper text"
                        HelpertextStatus={true}
                        Errormessage="Error message"
                        errortextStatus={false}
                        count={false}
                        countStatus={false}
                        tooltipStatus={false}
                    />
                </Grid>

                <Grid item md={6} xs={12}>
                    <TextInputFixedLabel
                        label="Resident street address"
                        labelStatus={true}
                        helpertext="Helper text"
                        //HelpertextStatus={true}
                        Errormessage="Error message"
                        errortextStatus={false}
                        count={false}
                        countStatus={false}
                        tooltipStatus={false}
                    />
                </Grid>

                <Grid item md={4} xs={12}>
                    <TextInputFixedLabel
                        label="City/Town"
                        labelStatus={true}
                        // helpertext="Helper text"
                        HelpertextStatus={false}
                        Errormessage="Error message"
                        errortextStatus={false}
                        count={false}
                        countStatus={false}
                        tooltipStatus={false}
                    />
                </Grid>

                <Grid item md={4} xs={12}>
                    <SelectField
                        labelFixed="State/Province"
                        labelStatus={true}
                        helperText="Helper text"
                        Errormessage="Error message"
                        helpertext={false}
                        errortext={false}
                        selectOptions={[{ title: "New York" }, { title: "California" }, { title: "NY" }]}
                    />
                </Grid>

                <Grid item md={4} xs={12}>
                    <TextInputFixedLabel
                        label="Zip/Postal code"
                        labelStatus={true}
                        // helpertext="Helper text"
                        HelpertextStatus={false}
                        Errormessage="Error message"
                        errortextStatus={false}
                        count={false}
                        countStatus={false}
                        tooltipStatus={false}
                    />
                </Grid>




                <Grid item md={6} xs={12}>
                    <PhoneInputField
                        labelFixed="Phone number"
                        phoneInputVariant={"materialui"} // default, materialui, underlineInput, underlineWithFlag
                        country={'us'}
                        value={phone.number}
                        countryCodeEditable={false}
                        onChange={(phone, country) => console.log("onChange", phone, country)}
                        onBlur={() => console.log("onBlur")}
                        onKeyDown={(e) => console.log("onKeyDown", e.target.value)}
                        variant="outlined"
                        onlyCountries={["us", "ca", "gb", "my"]}
                        containerStyle={{}}
                        buttonStyle={{}}
                        inputStyle={{
                            marginLeft: "0px",
                            height: "40px",
                            width: "100%",
                            fontFamily: "Roboto-Regular",
                            fontSize: "16px",
                        }}
                        containerClass={{}}
                        errorText={"Phone number is required"}
                        error={false}
                        errorStyles={{ marginBottom: "5px" }}
                        autoFormat={true}
                        disableDropdown={false}
                        disabled={false}
                        disableCountryCode={false}
                        enableSearch={false}
                        disableSearchIcon={false}
                        placeholder={""}
                        inputProps={{}}
                        LabelStatus={true}
                        helpertext="In case of delivery questions"
                    // preferredCountries={[]}
                    // excludeCountries={[]}

                    />
                </Grid>

                <Grid item md={6} xs={12}>
                    <TextInputFixedLabel
                        label="Email"
                        labelStatus={true}
                        helpertext="We’ll email you a receipt and order updates"
                        HelpertextStatus={true}
                        Errormessage="Error message"
                        errortextStatus={false}
                        count={false}
                        countStatus={false}
                        tooltipStatus={false}
                    />
                </Grid>



                <Grid item md={12} xs={12}>
                    <div className='FormBtn'>
                        <ButtonOne
                            label="Continue"
                            onClick={click}
                            buttoncolor={props.buttonColor}
                            width="100%"
                            height="50px"
                            border="#ccc 0px solid"
                            borderRadius="4px"
                            color="#fff"
                            fontWeight="600"
                            textAlign="center"
                            disabled="disabled"
                        />
                    </div>

                </Grid>

                {/* <Grid item md={12} xs={12}>
                    <div className="deleverdOptionDetails">
                        <div>
                            <div className="deleverdOptionDetailsTitle">Pickup from:</div>
                            <div className="deleverdOptionDetailsAddress">Street address, City, State Zip code</div>
                            <div className="deleverdOptionDetailsPhoneNumber">+1 (123) 123-1234</div>
                        </div>
                        <div className="deleverdOptionDetailsRightText">In-Store pickup</div>   
                    </div>
                </Grid> */}

            </Grid>





        </div>

    )
}

export default Delivery;