import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './SelectFieldOne.css'




function SelectFieldOne(props) {

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };


    const { selectdata } = props;
    return (


        <div>
            <div className="SelectFieldOne">
                <label  className="input_label">{props.label}</label>
                <FormControl error={props.error}>
                    <Select
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        onChange={props.handleChange}
                        defaultValue={props.defaultValue}

                    >

                        {selectdata.map((select, i) => (
                            <MenuItem key={i} value={select.value}>{select.select}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>

        </div>



    )
}

export default SelectFieldOne


