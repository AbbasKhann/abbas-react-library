import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextInput from "../TextInput/TextInput"
import SelectField from "../SelectField/SelectField"
import MultilineText from "../MultilineText/MultilineText"
import ButtonOne from "../ButtonOne/ButtonOne"
import PhoneInputField from "../PhoneInputField/PhoneInputField"
import SelectFieldOne from "../SelectFieldOne/SelectFieldOne"


import Link from '@material-ui/core/Link';
import TextInputFixedLabel from "../../components/TextInputFixedLabel/TextInputFixedLabel"
import "../../styles/fonts.css"
import "./ContactUsThree.css"

function ContactUsThree(props) {
    const { title, description, onContactFormSubmit, selectdata } = props;
    const [contactData, setcontactData] = React.useState({
        firstName: "", lastName: "", email: "", message: "", select: ""
    })

    let handleChange = (prop) => (event) => {
        setcontactData({ ...contactData, [prop]: event.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, message, select } = contactData;
        if (firstName && lastName && email && message && select) {
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


   

    const handleChangeSelect = (event, value) => {
        // console.log(event.target.value, value);
        setcontactData({ ...contactData, ['select']: event.target.value });
    };

    return (
        <div className="ContactUsThree">
            <div className="contactForm">
                <div className="ContactUsTitle">{title}</div>
                <div className="ContactUsDecription">{description}</div>

                <div className="contactFormContainer">
                    <Grid container spacing={3}>

                        <Grid item md={6} xs={12}>

                            <TextInputFixedLabel
                                value={firstName}
                                onChange={handleChange("firstName")}
                                label="First name"
                                labelStatus={true}
                                HelpertextStatus={true}
                                placeholder="First name"
                                Errormessage="Error message"
                                errortextStatus={false}
                                error="error"
                            />
                        </Grid>

                        <Grid item md={6} xs={12}>

                            <TextInputFixedLabel
                                value={lastName}
                                onChange={handleChange("lastName")}
                                label="Last name"
                                labelStatus={true}
                                HelpertextStatus={true}
                                placeholder="Last name"
                                Errormessage="Error message"
                                errortextStatus={false}
                                error="error"
                            />

                        </Grid>

                        <Grid item md={6} xs={12}>

                            <TextInputFixedLabel
                                value={email}
                                onChange={handleChange("email")}
                                label="Email"
                                labelStatus={true}
                                HelpertextStatus={true}
                                placeholder="Email"
                                Errormessage="Error message"
                                errortextStatus={false}
                                error="error"
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
                                labelFixed="Phone Number (Optional)"
                                LabelStatus={true}
                                error={props.phoneNumberError}
                            />
                        </Grid>

                        <Grid item md={12} xs={12}>
   
                            <SelectFieldOne
                                label="Inquiry type"
                                selectdata={props.selectdata}
                                defaultValue={1}
                                handleChange={handleChangeSelect}
                                error="error"
                            />
                        </Grid>

                        <Grid item md={12} xs={12}>
                            <MultilineText
                                value={message}
                                onChange={handleChange("message")}
                                //helperText="Helper text"
                                placeholder="Write your message"
                                Errormessage="Error message"
                                count={300}
                                helpertext={false}
                                errortext={false}
                                tooltip={false}
                                error="error"

                            />
                        </Grid>

                        <Grid item md={12} xs={12}>

                            <ButtonOne
                                label={props.ButtonLabel}
                                onClick={onSubmit}

                                arrow={false}
                                arrowColor="#fff"

                                addIcon={false}
                                AddIconColor="#0053A5"

                                buttoncolor={props.ButtonColor}
                                width="100%"
                                height="50px"
                                borderRadius="4px"
                                color="#fff"
                                fontWeight="600"
                                textAlign="center"
                                disabled={props.disableBtn}
                            />
                        </Grid>

                    </Grid>
                </div>

            </div>


        </div>

    )
}

export default ContactUsThree;