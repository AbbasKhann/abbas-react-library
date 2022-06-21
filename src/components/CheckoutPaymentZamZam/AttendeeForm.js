import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import TextInputFixedLabel from "../TextInputFixedLabel/TextInputFixedLabel"
import SelectField from "../SelectField/SelectField"
import ButtonOne from "../ButtonOne/ButtonOne"
import PhoneInputField from "../PhoneInputField/PhoneInputField"


import "../../styles/fonts.css"
import "../../styles/CheckoutPaymentExtended.css"



const AttendeeForm = () => {

    const [phone, setPhone] = React.useState({
        country: "",
        number: "",
    });

    const click = () => {
        console.log("Back Button Clicked");
    };

    return (
        <div className="DeliveryDetailsContainer">
            <Grid container spacing={3}>

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
                        label="Gender"
                        labelStatus={true}
                        helperText="Helper text"
                        Errormessage="Error message"
                        helpertext={false}
                        errortext={false}
                    />
                </Grid>

                <Grid item md={4} xs={12}>
                    <SelectField
                        label="Hajj year"
                        labelStatus={true}
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
                        label="Select"
                        labelFixed="State"
                        labelStatus={true}
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


                <Grid item md={6} xs={12}>
                    <div className="checkOutAttendeePhone">
                        <PhoneInputField
                            labelFixed="Phone number"
                            LabelStatus={true}
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
                    </div>
                </Grid>

                <Grid item md={6} xs={12}>
                    <TextInputFixedLabel
                        label="Email"
                        labelStatus={true}
                        placeholder="someone@example.com"
                        // helpertext="Helper text"
                        HelpertextStatus={false}
                        Errormessage="Error message"
                        errortextStatus={false}
                        count={false}
                        countStatus={false}
                        tooltipStatus={false}
                    />
                </Grid>


                <Grid item xs={12}>
                    <div style={{ display: "flex", justifyContent: "end", paddingTop: "10px" }}>
                        <div style={{ paddingRight: "15px", }}>
                            <ButtonOne
                                label="ADD MORE ATTEENDEE"
                                onClick={click}
                                addIcon={true}
                                AddIconColor="#0590FA"
                                buttoncolor="#fff"
                                width="auto"
                                height="50px"
                                border="#0590FA 1px solid"
                                borderRadius="4px"
                                color="#0590FA"
                                fontWeight="600"
                                textAlign="center"
                            />
                        </div>

                        <ButtonOne
                            label="CONTINUE TO PAYMENT"
                            onClick={click}
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

    )
}

export default AttendeeForm;