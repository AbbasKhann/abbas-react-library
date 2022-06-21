import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PhoneInput from 'react-phone-input-2'
import "./PhoneField.css"
import "../../styles/fonts.css"




let excludeCountriesArr = ["by", "mm", "bi", "cn", "cu", "ir", "lb", "ly", "kp", "so", "sd", "sy", "ua", "ve", "zw"];

export function PhoneInputField(props) {
  const [stylePath, setstylePath] = useState("")

  useEffect(() => {
    if (props.phoneInputVariant === "materialui") {
      require('react-phone-input-2/lib/material.css')
    } else if (props.phoneInputVariant === "underlineWithFlag") {
      require('react-phone-input-2/lib/style.css')
    } else if (props.phoneInputVariant === "default") {
      require('react-phone-input-2/lib/style.css')
    }
  }, [])


  return (
    <div className={props.error}>
    <div className="PhoneFieldManContainer">
      <div className={`phone-text-field_container ${props.phoneInputVariant ? props.phoneInputVariant : ""}`}>
        {props.LabelStatus &&  <label className="input_label">{props.labelFixed}</label> }
        <link rel="stylesheet" type="text/css" href={stylePath} />
        <PhoneInput
          country={props.country}
          value={props.value}
          countryCodeEditable={props.countryCodeEditable}
          onChange={props.onChange}
          onBlur={props.onBlur}
          onKeyDown={props.onKeyDown}
          variant={props.variant}
          onlyCountries={props.onlyCountries}
          containerStyle={props.containerStyle}
          buttonStyle={props.buttonStyle}
          inputStyle={props.inputStyle}
          containerClass={props.containerStyle}
          errorText={props.errorText}
          error={props.error}
          autoFormat={props.autoFormat}
          disableDropdown={props.disableDropdown}
          disabled={props.disabled}
          disableCountryCode={props.disableCountryCode}
          enableSearch={props.enableSearch}
          disableSearchIcon={props.disableSearchIcon}
          placeholder={props.placeholder}
          inputProps={props.inputProps}
          specialLabel={props.specialLabel}
          preferredCountries={props.preferredCountries}
          excludeCountries={props.excludeCountries?.length ? props.excludeCountries : excludeCountriesArr}
          showDropdown={false}
        />
        <div class="bottom_text_col"><span class="helper_text">{props.helpertext}</span></div>
        {props.error && (
          <span
            className="error"
            style={props.errorStyles}
          >
            {props.errorText}
          </span>
        )}
      </div>
    </div>
    </div>
  );
}


export default PhoneInputField;
