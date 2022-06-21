import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import TextInputFixedLabel from "../../components/TextInputFixedLabel/TextInputFixedLabel"
import SelectField from "../../components/SelectField/SelectField"
import ButtonOne from "../../components/ButtonOne/ButtonOne"
import PhoneInputField from "../../components/PhoneInputField/PhoneInputField"


import "../../styles/fonts.css"
import "../../styles/CheckoutPaymentExtended.css"



const DeliveryDetails = () => {

    const [phone, setPhone] = React.useState({
        country: "",
        number: "",
      });

    return (
        <div className="DeliveryDetailsContainer">
            <Grid container spacing={2}>

                <Grid item md={4} xs={12}>
                    <TextInputFixedLabel
                        label="First/Given name"
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

                <Grid item md={4} xs={12}>
                    <TextInputFixedLabel
                        label="Middle name (optional)"
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
                        label="Last/Surname"
                        labelStatus={true}
                        //helpertext="Helper text"
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
                        //specialLabel={'Primary Phone'}
                    // preferredCountries={[]}
                    // excludeCountries={[]}
                    
                    />
                </Grid>

                <Grid item md={6} xs={12}>
                    <TextInputFixedLabel
                        label="Email"
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
                    <TextInputFixedLabel
                        label="Age"
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
                        labelFixed="Gender"
                        label="Select"
                        helperText="Helper text"
                        Errormessage="Error message"
                        helpertext={false}
                        errortext={false}
                    />
                </Grid>

                <Grid item md={4} xs={12}>
                    <SelectField
                        labelFixed="Hajj year"
                        label="Select"
                        helperText="Helper text"
                        Errormessage="Error message"
                        helpertext={false}
                        errortext={false}
                    />
                </Grid>

                <Grid item md={6} xs={12}>
                    <TextInputFixedLabel
                        label="Address line 1"
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
                    <TextInputFixedLabel
                        label="Address line 2 (Optional)"
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
                        label="Select"
                        helperText="Helper text"
                        Errormessage="Error message"
                        helpertext={false}
                        errortext={false}
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

                <Grid item md={12} xs={12}>
                    <div className="ContinueButton">
                        <ButtonOne
                            label="Continue"
                            buttoncolor="#0590FA"
                        />
                    </div>
                </Grid>



            </Grid>


        </div>

    )
}

export default DeliveryDetails;