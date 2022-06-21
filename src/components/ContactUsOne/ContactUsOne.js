import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextInputFixedLabel  from "../TextInputFixedLabel/TextInputFixedLabel"
import SelectField from "../SelectField/SelectField"
import MultilineText from "../MultilineText/MultilineText"
import ButtonOne from "../ButtonOne/ButtonOne"
import PhoneInputField from "../PhoneInputField/PhoneInputField"
import Link from '@material-ui/core/Link';

import "../../styles/fonts.css"
import "../../styles/ContactUs.css"

function ContactUsOne(props) {
    const { onContactFormSubmit, } = props;
    const [contactData, setcontactData] = React.useState({
        firstName: "", lastName: "", email: "", message: "", select: ""
    })

    let handleChange = (prop) => (event) => {
        setcontactData({ ...contactData, [prop]: event.target.value });
    }

    const handleSelectChange = (event, newValue) => {
        setcontactData({ ...contactData, select: newValue.title });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, message, select } = contactData;
        if (firstName && email && message && select) {
            onContactFormSubmit({ ...contactData })
            setcontactData({
                firstName: "", lastName: "", email: "", message: "", select: ""
            })
        }
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const { firstName, lastName, email, message, select } = contactData;
    let disableBtn = firstName && lastName && validateEmail(email) && message && select ? false : true;



    const [phone, setPhone] = React.useState({
        country: "",
        number: "",
    });

    const onCloseClick = () => {
        console.log("close")
      }

    return (
        <div className="contactFormContainer">
            <Grid container spacing={3}>

                <Grid item md={6} xs={12}>

                    <TextInputFixedLabel
                        label="Full name"
                        labelfloat="Full name"
                        labelStatus={false}
                        HelpertextStatus={true}
                        placeholder="Full name"
                        Errormessage="Error message"
                        errortextStatus={false}
                        onChange={handleChange("firstName")}


                    />
                </Grid>

                <Grid item md={6} xs={12}>
                    <PhoneInputField
                        phoneInputVariant={"materialui"} // default, materialui, underlineInput, underlineWithFlag
                        country={'us'}
                        value={phone.number}
                        countryCodeEditable={false}
                        onChange={(phone, country) => console.log("onChange", phone, country)}
                        onBlur={() => console.log("onBlur")}
                        onKeyDown={(e) => console.log("onKeyDown", e.target.value)}
                        variant="outlined"
                        // onlyCountries={["us", "ca", "gb", "my"]}
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
                        specialLabel={'Phone Number (Optional)'}
                    />
                </Grid>

                <Grid item md={6} xs={12}>
                     <TextInputFixedLabel
                        label="Email"
                        labelfloat="Email"
                        labelStatus={false}
                        placeholder="Email"
                        Errormessage="Error message"
                        errortextStatus={false}
                        onChange={handleChange("email")}
                    />
                </Grid>

                <Grid item md={6} xs={12}>
                    <SelectField
                        value={select}
                        onChange={handleSelectChange}
                        selectOptions={props.selectOptions}
                        label="Inquiry Type"
                        //helperText="Helper text"
                        Errormessage="Error message"
                        helpertext={true}
                        errortext={false}
                    />
                </Grid>

                <Grid item md={12} xs={12}>
                    <MultilineText
                        value={message}
                        onChange={handleChange("message")}
                        //helperText="Helper text"
                        placeholder="Enter your message here..."
                        Errormessage="Error message"
                        count={300}
                        helpertext={false}
                        errortext={false}
                        tooltip={false}

                    />
                </Grid>

                <Grid item md={12} xs={12}>
                    <ButtonOne
                        label={props.buttonLebel}
                        link={props.ButtonLink}
                        target={props.target}
                        path={props.path}
                        arrow={props.arrow}
                        arrowColor={props.arrowColor}
                        buttoncolor={props.buttoncolor}
                        width={props.width}
                        height={props.height}
                        border={props.border}
                        borderRadius={props.borderRadius}
                        color={props.colorlabel}
                        fontWeight={props.fontWeight}
                        textAlign={props.textAlign}
                    />
                </Grid>

            </Grid>
        </div>

    )
}

export default ContactUsOne;