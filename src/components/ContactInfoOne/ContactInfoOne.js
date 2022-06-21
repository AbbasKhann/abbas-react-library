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
import "./ContactInfoOne.css"

function ContactInfoOne(props) {
    const { contactDetails, socialLinks, } = props;


    return (
        <div className="ContactInfoOne">

            <div className="contactinfoContainer">

               {props.imgStatus && <div className='ContactInfoOneImg'><img src={props.img} alt="Office image" /></div>}

                <div className="contactinfoTitle" style={{ color: props.titleColor }}>{props.title}</div>

                <div className="ContactIfoListContainer">
                    {contactDetails.map((item, i) => (
                        <li className="ContactIfoList"><span>{item.icon} </span> {item.details}</li>
                    ))}
                </div>

                <div className="masterLiSocialLinks">
                    {socialLinks.map((item, i) => (
                        <a href={item.link} target="blank">{item.icon}</a>
                    ))}
                </div>

            </div>


        </div>

    )
}

export default ContactInfoOne;