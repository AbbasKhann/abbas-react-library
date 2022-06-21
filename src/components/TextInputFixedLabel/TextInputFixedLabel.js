import React from 'react';


import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import tipIcon from '../../images/tip.svg';
import InputAdornment from '@material-ui/core/InputAdornment';

import "../../styles/fonts.css"
import "../../styles/textInput.css"

function TextInputFixedLabel(props) {  
        const {name, onChange, value, InputProps, onBlur, type} = props;
        
        return (
        
            <div className="input_container textfield">
               {props.labelStatus && <label className="input_label">{props.label}</label>}
                <TextField 
                    error={props.error}
                    id="outlined-basic"
                    variant="outlined"
                    label={props.labelfloat}
                    placeholder={props.placeholder}
                    name={name}
                    onChange={props.onChange}
                    value={value}
                    disabled = {props?.disabled ?? false}
                    // InputProps={InputProps}
                    onBlur={onBlur}
                    type={type}
                    color="primary"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{props.icon}</InputAdornment>,
                        ...InputProps,
                    }}
                />

                
                <div className="bottom_text_col">
                    {props.HelpertextStatus && <span className="helper_text">{props.helpertext}</span>}
                    
                    {props.errortextStatus && <span className="error_text">{props.Errormessage}</span>}

                    {props.countStatus && <span className="counter_text">{props.count ? `char ${props.charCount}/${props.count}` : null}</span>}
                </div> 

                {props.tooltipStatus &&
                <div className="pro_tip">pro tips <img src={tipIcon} alt="logo" />
                
                <div className="toolTip">
                <Typography className="tooltip_title">
                    Not sure where to start?
                </Typography>
                <Typography className="tooltip_description">
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    unde suscipit,
                </Typography>
                </div>

                </div>}



            </div>

        )
}

export default TextInputFixedLabel;