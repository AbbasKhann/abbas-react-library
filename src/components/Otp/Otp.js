import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, } from '@material-ui/core';
import ButtonOne from "../ButtonOne/ButtonOne"
import Link from '@material-ui/core/Link';

import "../../styles/fonts.css"
import "../../styles/otp.css"




function Otp(props) {


    return (

        <div className="OtpContainer">

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 className="SinginFormTitle">Sign Up</h1>
                    <div className="formSubTitle">Please enter the verification code sent to your email address <span><a href="#">shayanmahmud@email.com </a></span></div>
                </Grid>

                <Grid item xs={12}>

                    <div className="OtpFieldContainer wrongNumber">
                        <div className="OtpField">
                            <TextField id="outlined-basic" variant="outlined" value="1" />
                            <TextField id="outlined-basic" variant="outlined" value="2" />
                            <TextField id="outlined-basic" variant="outlined" value="3" />
                        </div>
                        <div className="OtpFieldLine">-</div>
                        <div className="OtpField">
                            <TextField id="outlined-basic" variant="outlined" value="4"/>
                            <TextField id="outlined-basic" variant="outlined" value="5" />
                            <TextField id="outlined-basic" variant="outlined" value="6" />
                        </div>
                    </div>

                </Grid>

                <Grid item xs={12}>
                     <ButtonOne 

                     label="Verify"
                     />
                     <div className="signUpLinkFrom">Didn't receive code yet? <Link href="#">Send again</Link></div>    
                </Grid>




            </Grid>

        </div>

    )
}

export default Otp;