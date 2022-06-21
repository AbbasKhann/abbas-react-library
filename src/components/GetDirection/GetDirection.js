import React, { useState, useEffect, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import TextInputFixedLabel from "../TextInputFixedLabel/TextInputFixedLabel"
import ButtonOne from "../ButtonOne/ButtonOne"
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';


import "../../styles/fonts.css"
import "../../styles/ContactUs.css"

function GetDirection(props) {
    

    const [toAddress, settoAddress] = useState("")
    const [fromAddress, setfromAddress] = useState("")
    const getDirectionRef = useRef(null);

    const submitHandler = (e) => {
        e.preventDefault();
        if (toAddress) {
            console.log("calculate", toAddress, fromAddress);

            window.open(`https://www.google.com/maps/dir/${fromAddress}/${toAddress}`);
        }
    }


    useEffect(() => {
        const orgAdrress = props.To;

        settoAddress(orgAdrress)

        if (props?.scrollTo === 'getDirection') {
            getDirectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        };

    }, [props])




    return (
        <div className="GetFormContainer">
            <Grid container spacing={3}>

                <Grid item md={12} xs={12}> 
                    <div className="GetDirectionField">
                        <span className="GetDirectionIconLabel" style={{background:props.ThemeColor}}>From <LocationOnRoundedIcon /></span>
                        <TextInputFixedLabel 
                            placeholder={props.From}
                            onChange={(e) => setfromAddress(e.target.value)}
                        />
                    </div>
                </Grid>

                <Grid item md={12} xs={12}>
                    <div className="GetDirectionField">
                    <span className="GetDirectionIconLabel" style={{background:props.ThemeColor}}>To <LocationOnRoundedIcon /></span>
                    <TextInputFixedLabel 
                            placeholder={props.To}
                            disabled="disabled"
                            onChange={(e) => settoAddress(e.target.value)}

                        />
                    </div>
                </Grid>

                <Grid item md={12} xs={12}>
                    <ButtonOne
                        label={props.buttonLebel}
                        buttoncolor={props.ThemeColor}
                        width={props.width}
                        height={props.height}
                        border={props.border}
                        borderRadius={props.borderRadius}
                        color={props.colorlabel}
                        fontWeight={props.fontWeight}
                        textAlign={props.textAlign}
                        onClick={submitHandler}
                    />
                </Grid>

            </Grid>
        </div>

    )
}

export default GetDirection;