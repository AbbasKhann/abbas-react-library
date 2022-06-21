import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, } from '@material-ui/core';
import TextInput from "../TextInput/TextInput"
import FieldPassword from "../FieldPassword/FieldPassword"
import CheckBox from "../CheckBox/CheckBox"
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

    forGotPass: {
        textAlign: "right",
        paddingTop: "4px",
    },

    forGotPassText: {
        fontSize: "12px",
        color: "#1B2121",
        textDecoration: "none",
    },

    passwordField:{
        position:"relative",
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


function SignIn(props) {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
      });
      
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    return (


        <div className={classes.Container}>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 className={classes.Title}>{props.Title}</h1>
                </Grid>
                <Grid item xs={12}>
                    <TextInput
                        label="Email address"
                    />
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.passwordField}>
                    <FieldPassword
                        value={values.password}
                        onChange={handleChange("password")}
                        //tick={Right}
                        //close={Close}
                        PasswordStrong={false}
                        />
                        <div className={classes.forGotPass}><Link className={classes.forGotPassText} href="#">Forgot password?</Link> </div>
                    </div>
                    
                </Grid>

                <Grid item xs={12}>
                    <CheckBox
                        label="Keep me signed in"
                        description="Uncheck if using a public device."
                        value="Keep me signed in"
                        Tooltip={false}
                        Description={true}
                    />
                </Grid>

                <Grid item xs={12}>
                    <ButtonOne
                        label="Sign in"
                        buttoncolor="#2A8853"
                        width="100%"
                    />
                    <div className={classes.signUpLinkFrom}>Don't have an account? <Link className={classes.signUpLinkFromLink} href="#">Sign up</Link></div>
                </Grid>

            </Grid>



        </div>

    );
}

export default SignIn;