import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import tipIcon from '../../images/tip.svg';
import "./TextField.css"
import "../../styles/fonts.css"






function TextInput(props) {
  const { name, onChange, value, InputProps, onBlur, type } = props;



  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: props.focusColor,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'yellow',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#E4E8EC',
        },
        '&:hover fieldset': {
          borderColor: '#E4E8EC',
        },
        '&.Mui-focused fieldset': {
          borderColor:props.focusColor,
        },
      },
    },
  })(TextField);



  return (

    <div className="TextFieldMainContainer">

      {props.tooltip &&
        <div className="TooltipContainer">
          <div className="TooltipTitle">pro tips <img className="TooltipImg" src={tipIcon} alt="logo" />
            <div className="TooltipInfo">
              <Typography className="TooltipInfoTitle">Not sure where to start?</Typography>
              <Typography className="TooltipInfoDes"> body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit,</Typography>
            </div>
          </div>
        </div>}

        <CssTextField
          variant="outlined"
          id="custom-css-outlined-input"
          error={props.error}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={value}
          InputProps={InputProps}
          onBlur={onBlur}
          type={type}
          label={props.label}
          color="primary"
          helperText={props.helperText}
          disabled={props.disabled}
        />


      <div className="Count">
        {props.count && <span className="countText">char 0/80 {props.count}</span>}
      </div>
    </div>

  );
}

export default TextInput;