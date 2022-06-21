import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import PackageCard from "../../components/PackageCard/PackageCard"
import ButtonOne from "../../components/ButtonOne/ButtonOne"

import "../../styles/fonts.css"
import "../../styles/CheckoutPaymentExtended.css"


const cardFunction = (value) => {
    (value) && console.log("clicked");
  };


const SelectPackage = () => {

    


    return (
        <div className="FormdataContainer">
        <Grid container spacing={2}>

            <Grid item md={4} xs={12}> 
            <PackageCard 
                cardFunction={cardFunction} 
                header={"GROUP A"}
                dayText="21 Days"
                body={"Sunday, July 15 to, Thursday, August 7"}
                color="#0590FA"
                />
            </Grid>

            <Grid item md={4} xs={12}>  
            <PackageCard 
                cardFunction={cardFunction} 
                header={"GROUP B"}
                dayText="15 Days"
                body={"Monday, July 21 to, Thursday, August 7"}
                color="#06D02F"
                />
            </Grid>

            <Grid item md={4} xs={12}> 
            <PackageCard 
                cardFunction={cardFunction} 
                header={"VIP"}
                dayText="21 Days"
                body={"Monday, July 21 to, Thursday, August 7"}
                color="#6200EE"
                />
            </Grid>

            <Grid item md={12} xs={12}> 
                <div className="ContinueButton">
                    <ButtonOne 
                        label="Continue"
                        buttoncolor="#0590FA"
                    />
                </div>
            </Grid>

            </Grid>

            
        </div>

    )
}

export default SelectPackage;