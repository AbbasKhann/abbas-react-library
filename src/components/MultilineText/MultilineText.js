import React from 'react';

import { TextareaAutosize, Typography } from '@material-ui/core';
import tipIcon from '../../images/tip.svg';

import "../../styles/fonts.css"
import "../../styles/textInput.css"




function MultilineText(props) {  
    const [message, setmessage] = React.useState("")
    const handleChange = (e) => {
        if(e.target.value?.length <= props.count) {
            props.onChange(e);
            setmessage(e.target.value)
        }
    }
        return (

            <div className={props.error}>
            <div className="input_container">
                <label className="input_label">{props.label}</label>

                <div className="MuiFormControl-root MuiTextField-root">
                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                     <TextareaAutosize 
                        placeholder={props.placeholder} 
                        value={props.value} 
                        onChange={(e) => handleChange(e)} />
                     </div>
                </div>

                <div className="bottom_text_col">
                    {props.helpertext && <span className="helper_text">{props.helperText}</span>}
                    {props.errortext && <span className="error_text">{props.Errormessage}</span>}
                    {props.count && <span className="counter_text">Char {message?.length ?? 0}/{props.count}</span>}
                </div> 

                {props.tooltip &&
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
            </div>

        )
}

export default MultilineText;