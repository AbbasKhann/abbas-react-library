import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextInput from "../TextInput/TextInput"
import SelectField from "../SelectField/SelectField"
import MultilineText from "../MultilineText/MultilineText"
import ButtonOne from "../ButtonOne/ButtonOne"
import Link from '@material-ui/core/Link';
import TextInputFixedLabel from "../../components/TextInputFixedLabel/TextInputFixedLabel"
import "../../styles/fonts.css"
import "../../styles/ContactUs.css"

function ContactUs(props) {
    const { title, description, onContactFormSubmit, officeDetails, socialLinks, contacts } = props;
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

    return (
        <div className="ContactUsContainer">
            <div className="contactForm">
                <div className="ContactUsTitle">{title}</div>
                <div className="ContactUsDecription">{description}</div>

                <div className="contactFormContainer">
                    <Grid container spacing={3}>

                        <Grid item md={6} xs={12}>

                            <TextInputFixedLabel
                                value={firstName}
                                onChange={handleChange("firstName")}
                                labelfloat="First name"
                                labelStatus={false}
                                HelpertextStatus={true}
                                placeholder="First name"
                                Errormessage="Error message"
                                errortextStatus={false}
                            />
                        </Grid>

                        <Grid item md={6} xs={12}>

                            <TextInputFixedLabel
                                value={lastName}
                                onChange={handleChange("lastName")}
                                labelfloat="Last name"
                                labelStatus={false}
                                HelpertextStatus={true}
                                placeholder="Last name"
                                Errormessage="Error message"
                                errortextStatus={false}
                            />

                        </Grid>

                        <Grid item md={12} xs={12}>

                            <TextInputFixedLabel
                                value={email}
                                onChange={handleChange("email")}
                                labelfloat="Email"
                                labelStatus={false}
                                HelpertextStatus={true}
                                placeholder="Email"
                                Errormessage="Error message"
                                errortextStatus={false}
                            />

                        </Grid>

                        <Grid item md={12} xs={12}>
                            <SelectField
                                value={select}
                                onChange={handleSelectChange}
                                selectOptions={props.selectOptions}
                                label="Inquiry type"
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
                                placeholder="Placeholder"
                                Errormessage="Error message"
                                count={300}
                                helpertext={false}
                                errortext={false}
                                tooltip={false}

                            />
                        </Grid>

                        <Grid item md={12} xs={12}>

                            <ButtonOne
                                label={props.ButtonLabel}
                                onClick={onSubmit}
                                link="https://www.google.com/"
                                //target="blank"
                                path="/"

                                arrow={false}
                                arrowColor="#fff"

                                addIcon={false}
                                AddIconColor="#0053A5"

                                buttoncolor={props.ButtonColor}
                                width="100%"
                                height="50px"
                                //border="#ccc 0px solid"
                                borderRadius="4px"
                                color="#fff"
                                fontWeight="600"
                                textAlign="center"
                            />
                        </Grid>

                    </Grid>
                </div>

            </div>


            <div className="contactinfoContainer">
                <div className="contactinfoTitle">MAIN office</div>

                <div className="ContactIfoListContainer">
                    <li className="ContactIfoList"><span>Phone:</span> {officeDetails.primaryPhone ?? ""}{officeDetails.secondaryPhone ? ", " + officeDetails.secondaryPhone : ""}</li>
                    <li className="ContactIfoList"><span>Address:</span> {officeDetails.address ?? ""}</li>
                    <li className="ContactIfoList"><span>Email:</span> {officeDetails.email ?? ""}</li>
                </div>

                <div className="masterLiSocialLinks">
                    {socialLinks?.facebook && <a href={socialLinks.facebook} target="blank"><img src={props.FacebookIcon} alt="FACEBOOK" /></a>}
                    {socialLinks?.youtube && <a href={socialLinks.youtube} target="blank"><img src={props.YouTubeIcon} alt="YOUTUBE" /></a>}
                    {socialLinks?.twitter && <a href={socialLinks.twitter} target="blank"><img src={props.TwitterIcon} alt="YOUTUBE" /></a>}
                    {socialLinks?.whatsapp && <a href={socialLinks.whatsapp} target="blank"><img src={props.WhatsAppIcon} alt="YOUTUBE" /></a>}
                </div>

                <div className="ContactIfoAddressContainer">
                    <Grid container spacing={3}>

                        {contacts?.length ? contacts.map((el, i) => {
                            return <Grid key={i} item md={6} xs={12}>
                                <div className="ContactIfoAddressCard">
                                    <h5 className="ContactIfoAddressCol">{el.address ?? ""}</h5>
                                    <p className="ContactIfoNameCol">{el.name ?? ""}</p>
                                    <p className="ContactIfoNumberCol">{el.phone ?? ""}</p>
                                </div>
                            </Grid>
                        }) : null}

                    </Grid>
                </div>

                {props.WhatsAppIconButtonStatus &&
                    <div className="whatsappIcon"><Link href={props.whatsAppIconButtonLink}><img src={props.WhatsAppIconButton} alt="WHATSAPP" /></Link></div>
                }
            </div>


        </div>

    )
}

export default ContactUs;