import React from 'react';
import TextField from '@material-ui/core/TextField';
import ButtonOne from '../ButtonOne/ButtonOne'
import InputAdornment from '@material-ui/core/InputAdornment';

import "./SearchField.css"





function SearchField(props) {
    const { name, onChange, value, InputProps, onBlur, type } = props;

    return (

        <div className="SearchOneFieldMainContainer" style={{border:props.BorderColor,}}>
            <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder={props.placeholder}
                name={name}
                onChange={onChange}
                value={value}
                disabled={props?.disabled ?? false}
                // InputProps={InputProps}
                onBlur={onBlur}
                type={type}
                color="primary"
                InputProps={{
                    endAdornment: <InputAdornment position="end">{props.icon}</InputAdornment>,
                    ...InputProps,
                }}
            />

            <ButtonOne
                label={props.buttonLebel}
                link={props.getDirectiontLink}
                target={props.target}
                path={props.path}
                arrow={props.arrow}
                arrowColor={props.arrowColor}
                buttoncolor={props.buttoncolor}
                width={props.width}
                height={props.height}
                border={props.border}
                borderRadius={props.borderRadius}
                color={props.colorlabel}
                fontWeight={props.fontWeight}
                textAlign={props.textAlign}
                onClick={props.onClick}
            />

        </div>

    )
}

export default SearchField;