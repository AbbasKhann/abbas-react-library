import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import Button from '@material-ui/core/Button';
import TextInputFixedLabel from '../TextInputFixedLabel/TextInputFixedLabel'
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import CircularProgress from '@material-ui/core/CircularProgress';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';




import "../../styles/fonts.css"
import "./style.css"


const cardFunction = (value) => {
    (value) && console.log("clicked");
};


const OrderDetais = () => {

    const onCloseClick = () => {
        console.log("close")
    }


    return (
        <div className="OderDetailsCtn">
            <Grid container spacing={2}>

                <Grid item md={12} xs={12}>
                    <div className='OrderDtllst'>
                        <li>Order total: <span> $1,101.40</span></li>
                        <li><a href='#'>Show Order Summary</a></li>
                    </div>

                    <div className='OrderDtllst'>
                        <li>Order total: <span> $1,101.40</span> <MonetizationOnIcon className='amountIcon'/></li>
                        <li><a href='#'>Enter Coupon Code <KeyboardArrowDownRoundedIcon /></a> </li>
                    </div>
                </Grid>

                <Grid item md={6} xs={12}>
                    <div className='CpnTitle'>Apply a coupon</div>
                    <div className='CopnField'>
                        <TextInputFixedLabel
                            labelStatus={false}
                            placeholder="Enter coupon code"
                            Errormessage={<span><CancelRoundedIcon className='errorIcon' /> The promotion code you entered is invalid.</span>}
                            errortextStatus={true}
                        />

                        <div className='applyBtn'>
                            <Button variant="outlined" disabled>Apply</Button>
                            <Button className='cencelBtn' variant="outlined">Cancel</Button>
                            <div className='loader'><CircularProgress /></div>
                        </div>
                    </div>

                </Grid>

            </Grid>


        </div>

    )
}

export default OrderDetais;