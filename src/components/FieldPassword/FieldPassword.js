import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import PropTypes from "prop-types";

import "../../styles/fonts.css"



export function FieldPassword(props) {
  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const hasNumber = (value) => {
    return new RegExp(/[0-9]/).test(value);
  };

  const hasMixed = (value) => {
    return new RegExp(/[a-z]/).test(value) && new RegExp(/[A-Z]/).test(value);
  };

  const hasSpecial = (value) => {
    return new RegExp(/[!#@$%^&*)(+=._-]/).test(value);
  };

  const hasUpperCase = (value) => {
    return new RegExp(/[A-Z]/).test(value);
  };

  const strengthColor = (count) => {
    if (count < 2) return "red";
    if (count < 3) return "coral";
    if (count < 4) return "orange";
    if (count < 5) return "lightgreen";
    if (count < 6) return "green";
  };

  const strengthIndicator = (value) => {
    let strengths = 0;
    if (value.length > 5) strengths++;
    if (value.length > 7) strengths++;
    if (hasNumber(value)) strengths++;
    if (hasSpecial(value)) strengths++;
    if (hasMixed(value)) strengths++;
    return strengths;
  };

  const hasaUpperCase = hasUpperCase(props.value);
  const hasaSpecial = hasSpecial(props.value);
  const hasaNumber = hasNumber(props.value);
  const strength = strengthIndicator(props.value);
  const color = strengthColor(strength);
  return (
    <div className="FieldPasswordMainContainer">

      <TextField
        type={values.showPassword ? "text" : "password"}
        required={props.required}
        id={props.id}
        color={props.color}
        label={props.label}
        value={props.value}
        onChange={props.onChange}
        error={props.error}
        margin={props.margin}
        name={props.name}
        variant="outlined"
        placeholder={props.placeholder}
        className="inputHover"
        
        helperText={!props.hidePasswordStrength ? <span
          style={{
            color: props.error
              ? "#f44336"
              : (strength === 1 && "#f44336") ||
              (strength === 2 && "#FF5353") ||
              (strength === 3 && "orange") ||
              (strength === 4 && "#3CC480") ||
              (strength === 5 && "#3CC480"),
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {(props.helperText !== "" && props.helperText) ||
            (strength === 1 && "Weak") ||
            (strength === 2 && "Fair") ||
            (strength === 3 && "Good") ||
            (strength === 4 && "Strong") ||
            (strength === 5 && "Very Strong")}
        </span> : ""
        }
        style={props.style}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="toggle password visibility"
                onClick={() => handleClickShowPassword()}
                style={{ width: 24, height: 24, marginRight: 7, padding: 0 }}
              >
                {values.showPassword ? (
                  <Visibility style={{ width: 24, height: 24 }} />
                ) : (
                    <VisibilityOff style={{ width: 24, height: 24 }} />
                  )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      

      {props.PasswordStrong &&
      <>
      <div
        style={{
          width: "100%",
          justifyContent: "space-evenly",
          margin: 0,
          display: props.visible,
          marginBottom: 0,
          marginTop:"10px",
        }}
      >
        <div
          style={{
            background: strength >= 1 ? color : "#E8E9E9",
            width: "100%",
            height: "2px",
            flex: 1,
            margin: "0 5px"
          }}
        ></div>
        <div
          style={{
            background: strength >= 2 ? color : "#E8E9E9",
            width: "100%",
            height: "2px",
            flex: 1,
            margin: "0 5px"
          }}
        ></div>
        <div
          style={{
            background: strength >= 3 ? color : "#E8E9E9",
            width: "100%",
            height: "2px",
            flex: 1,
            margin: "0 5px"
          }}
        ></div>
        <div
          style={{
            background: strength >= 4 ? color : "#E8E9E9",
            width: "100%",
            height: "2px",
            flex: 1,
            margin: "0 5px"
          }}
        ></div>
        <div
          style={{
            background: strength >= 5 ? color : "#E8E9E9",
            width: "100%",
            height: "2px",
            flex: 1,
            margin: "0 5px"
          }}
        ></div>
      </div>

      
        <div
          style={{
            width: "370px",
            flexDirection: "column",
            display: props.showCheck,
            marginTop: 24
          }}
        >
          {hasaNumber === true ? (
            <div
              className="passwordCheck"
              style={style.checkConditionsstatements}
            >
              <img src={props.tick} style={{ marginRight: 3 }} />A Number
            </div>
          ) : (
              <div
                className="passwordCheck"
                style={style.checkConditionsstatements}
              >
                <img src={props.close} style={{ marginRight: 3 }} />A Number
              </div>
            )}
          {hasaUpperCase === true ? (
            <div
              className="passwordCheck"
              style={style.checkConditionsstatements}
            >
              <img src={props.tick} style={{ marginRight: 3 }} />
              An Upper Case
            </div>
          ) : (
              <div
                className="passwordCheck"
                style={style.checkConditionsstatements}
              >
                <img src={props.close} style={{ marginRight: 3 }} />
              An Upper Case
              </div>
            )}
          {props.value.length >= 8 ? (
            <div
              className="passwordCheck"
              style={style.checkConditionsstatements}
            >
              <img src={props.tick} style={{ marginRight: 3 }} />
              At Least 8 Characters
            </div>
          ) : (
              <div
                className="passwordCheck"
                style={style.checkConditionsstatements}
              >
                <img src={props.close} style={{ marginRight: 3 }} />
              At Least 8 Characters
              </div>
            )}
          {hasaSpecial === true ? (
            <div
              className="passwordCheck"
              style={style.checkConditionsstatements}
            >
              <img src={props.tick} style={{ marginRight: 3 }} />A Special
              Character
            </div>
          ) : (
              <div
                className="passwordCheck"
                style={style.checkConditionsstatements}
              >
                <img src={props.close} style={{ marginRight: 3 }} />A Special
              Character
              </div> 
          )}
        </div>
        </>
        }

    </div>
  );
}

FieldPassword.propTypes = {
  /** Optional */
  id: PropTypes.string,
  /** default, inherit, primary, secondary */
  color: PropTypes.string,
  /** true or false */
  required: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  /** true or false */
  error: PropTypes.bool,
  margin: PropTypes.string,
  name: PropTypes.string,
  /** standard, outlined, filled */
  variant: PropTypes.string,
  helperText: PropTypes.string,
  onClick: PropTypes.func,
  visible: PropTypes.string,
  showCheck: PropTypes.string,
};

FieldPassword.defaultProps = {
  id: "",
  color: "primary",
  required: false,
  label: "Password",
  value: "",
  onChange: FieldPassword.handleChange,
  error: false,
  margin: "normal",
  name: "password",
  placeholder: "Placeholder Text",
  variant: "standard",
  helperText: "Helper text",
  onClick: FieldPassword.handleClickShowPassword,
  visible: "flex",
  showCheck: "flex",
};

const style = {
  textfield: {
    margin: 0,
    width: 370,
  },
  checkConditionsstatements: {
    display: "flex",
    alignItems: "center",
  },
};

export default FieldPassword;
