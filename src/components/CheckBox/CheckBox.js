import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import "../../styles/fonts.css"
import "../../styles/textInput.css"


function CheckBox(props) {


    return (

        <div className="checkbox_container">
            <FormControlLabel
                value={props.value}
                control={<Checkbox onChange={(e) => props.onChange(e.target.checked)} checked={props.checked} color="primary" />}
                label={props.label}
                labelPlacement="end"
                  
            />
            
            {props.Tooltip && <div className="info_container">
                <Tooltip title={props.Tooltiptext} placement="right" style={{color:"red"}}>
               <span className="infoIcon"><InfoIcon /></span>
            </Tooltip>
            </div>}

            {props.Description && <div className="checkboxDescription">{props.description}</div>}

            
        </div>

    )
}

export default CheckBox;