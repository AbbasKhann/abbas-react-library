import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, } from '@material-ui/core';
import TextInput from "../TextInput/TextInput"
import FieldPassword from "../FieldPassword/FieldPassword"
import ButtonOne from "../ButtonOne/ButtonOne"
import Link from '@material-ui/core/Link';

import "../../styles/fonts.css"

const useStyles = makeStyles((theme) => ({

    Container: {
        maxWidth: "500px",
        margin: "0 auto",
    },

    Title: {
        fontSize: "24px",
        color: "#1B2121",
        fontWeight: "600",
        margin: "0",
        textAlign: "center",
        fontFamily: " 'Poppins', sans-serif",
    },

    captchaBox: {
        background: "#FFFFFF 0% 0% no-repeat padding-box;",
        border: "1px solid #E4E8EC",
        borderRadius: "4px",
        opacity: 1,
        padding: "27px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#B0B9C1",
        fontSize: "20px",
    },

    signUpLinkFrom: {
        color: "#4C5E67",
        fontSize: "14px",
        fontWeight: "500",
        marginTop: "24px",
        textAlign: "center",
        marginLeft: "16px",
    },

    signUpLinkFromLink: {
        color: " #2A8853",
        fontSize: "14px",
        fontWeight: "500",

    },

}));




function SignUp(props) {
    const classes = useStyles();

    return (

        <div className={classes.Container}>



            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 className={classes.Title}>{props.Title}</h1>
                </Grid>

                <Grid item xs={6}>
                    <TextInput
                        //labelfixed="Field label"
                        label="First name"
                        //helperText="Helper text"
                        Errormessage="Error message"
                        count={100}
                        helpertext={true}
                        errortext={false}
                        count={false}
                        tooltip={false}
                        LabelFixed={false}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextInput
                        //labelfixed="Field label"
                        label="Last name"
                        //helperText="Helper text"
                        Errormessage="Error message"
                        count={100}
                        helpertext={true}
                        errortext={false}
                        count={false}
                        tooltip={false}
                        LabelFixed={false}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextInput
                        //labelfixed="Field label"
                        label="Email address"
                        //helperText="Helper text"
                        Errormessage="Error message"
                        count={100}
                        helpertext={true}
                        errortext={false}
                        count={false}
                        tooltip={false}
                        LabelFixed={false}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FieldPassword
                        PasswordStrong={true}
                    />
                </Grid>

                <Grid item xs={12}>
                    <div className={classes.captchaBox}>captcha</div>
                    <div className={classes.signUpLinkFrom}>By signing up, you acknowledge you have read and agreed to our <Link className={classes.signUpLinkFromLink} href="#">Terms of Use</Link> and <Link className={classes.signUpLinkFromLink} href="#">Privacy policy.</Link></div>
                </Grid>

                <Grid item xs={12}>

                    <ButtonOne
                        label="SIGN UP"
                        buttoncolor="#2A8853"
                        width="100%"
                    />
                    <div className={classes.signUpLinkFrom}>Already have an account?<Link className={classes.signUpLinkFromLink} href="#"> Sign in</Link></div>
                </Grid>

            </Grid>



        </div>

    );
}

export default SignUp;