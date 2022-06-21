import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';

import PackageCard from "../../components/PackageCard/PackageCard"
import ButtonOne from "../../components/ButtonOne/ButtonOne"
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import StorefrontIcon from '@material-ui/icons/Storefront';

import "../../styles/fonts.css"
import "../../styles/CheckoutPaymentExtended.css"


const cardFunction = (value) => {
    (value) && console.log("clicked");
};


const DeliveryOptions = () => {




    return (
        <div className="DeliveryOptionsContainer">
            <Grid container spacing={2}>

                <Grid item md={6} xs={12}>
                    <PackageCard
                        cardFunction={cardFunction}
                        header={"I'd like it delivered"}
                        color="#1B2121"
                        icon={<LocalShippingIcon />}
                        Link={false}
                    />
                </Grid>

                <Grid item md={6} xs={12}>
                    <PackageCard
                        cardFunction={cardFunction}
                        header={"I'd like it delivered"}
                        color="#1B2121"
                        icon={<StorefrontIcon />}
                        Link={false}
                    />
                </Grid>

                <Grid item md={12} xs={12}>
                    <div className="deleverdOptionDetails">
                        <div>
                            <div className="deleverdOptionDetailsTitle">Pickup from:</div>
                            <div className="deleverdOptionDetailsAddress">Street address, City, State Zip code</div>
                            <div className="deleverdOptionDetailsPhoneNumber">+1 (123) 123-1234</div>
                        </div>
                        <div className="deleverdOptionDetailsRightText">In-Store pickup</div>   
                    </div>
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

export default DeliveryOptions;