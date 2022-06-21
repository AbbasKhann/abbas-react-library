import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { InputAdornment , MenuItem} from '@material-ui/core';


import Typography from '@material-ui/core/Typography';
import tipIcon from '../../images/tip.svg';

import "../../styles/fonts.css"
import "../../styles/textInput.css"

function CreditCardList(props) {


    return (
        <div className="input_container textfield">
            <label className="input_label">{props.label}</label>

            <FormControl variant="outlined">
                <Select
                    // native
                    value={props.paymentWith}
                    onChange={(e) => props.handleSelectChange(e.target.value)}
                    inputProps={{
                        name: 'card',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    {props.cardListOptions && props.cardListOptions.length ? props.cardListOptions.map((option, i) => {
                        return <MenuItem value={option.cardNumber}>
                        <img src={option.cardImage} alt="card-img" className="option-card-image" />{option.cardName}
                    </MenuItem>
                    
                    }): null}
                    <MenuItem value={"newCard"}>
                        <img src={props.newCardImage} alt="card-img" className="option-card-image" />New Card
                    </MenuItem>
                    {/* <MenuItem value={"visaCard"}>
                        <img src={props.visaCardImage} alt="card-img" className="option-card-image" />Visa-4242
                    </MenuItem>
                    <MenuItem value={"masterCard"}>
                        <img src={props.masterCardImage} alt="card-img" className="option-card-image" />Master Card-9213
                    </MenuItem>
                    <MenuItem value={"newCard"}>
                        <img src={props.newCardImage} alt="card-img" className="option-card-image" />New Card
                    </MenuItem> */}
                </Select>
                <label className="change_label">Change</label>
            </FormControl>
            <div className="bottom_text_col">
                {props.helpertext && <span className="helper_text">{props.helperText}</span>}
                {props.errortext && <span className="error_text">{props.Errormessage}</span>}
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

    )
}

export default CreditCardList;