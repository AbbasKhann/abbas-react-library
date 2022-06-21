import React from 'react';

import FormControl from '@material-ui/core/FormControl';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import "../../styles/fonts.css"
import "../../styles/textInput.css"

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
  ];

const SelectField = (props) => {
    const [inputValue, setInputValue] = React.useState(props?.value ?? '');
return (

    <div className="SelectFieldContainer">
        {props.labelStatus && <label className="input_label">{props.labelFixed}</label>}
        <Autocomplete
            id="combo-box-demo"
            options={props.selectOptions?.length ? props.selectOptions : top100Films}
            getOptionLabel={(option) => option.title}
            defaultValue={props?.selectOptions && props?.value ? props?.selectOptions.find(v => v.title === props?.value) : ''} 
            renderInput={(params) => <TextField {...params}  label={props.label} variant="outlined" />}
            onChange={(event, newValue) => props.onChange(event, newValue)}
            // inputValue={inputValue}
            // onInputChange={(event, newInputValue) => {
            //     console.log("newInputValue: ", newInputValue);
            //     setInputValue(newInputValue.title);
            // }}
        />
        <div className="bottom_text_col">
            {props.helpertext && <span className="helper_text">{props.helperText}</span>}
            {props.errortext && <span className="error_text">{props.Errormessage}</span>}
        </div>

    </div>

)
}

export default SelectField;