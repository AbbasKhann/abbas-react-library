import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import TextInputFixedLabel from '../TextInputFixedLabel/TextInputFixedLabel';
import Tooltip from '@material-ui/core/Tooltip';

import "./CheckOrderSummary.css"
import "../../styles/fonts.css"

function CheckOrderSummary(props) {

    return (

        <div   className="OrderSummaryMainContainer">
            <div  className="OrderSummaryTitle">Order summary</div>

            <div  className="itemContainer">
                <Typography  className="itemText">8 items</Typography>
                <Button href="#" className="editButton">Edit Cart</Button>
            </div>

            <div  className="itemListContainer">
                <div className="itemListing">
                    <Typography  className="itemListText">Subtotal</Typography>
                    <Typography  className="itemAmountText">$100.00</Typography>
                </div>

                <div className="itemListing">
                    <Typography className="itemListText">Shipping</Typography>
                    <Typography className="itemAmountText">Free</Typography>
                </div>

                <div className="itemListing">
                    <Typography className="itemListText">
                        Estimated tax for: <spa className="itemBlueText">11218</spa>
                        <Tooltip title="The sales tax listed on the checkout page is only an estimate. 
                        Your invoice will contain the final sales tax, including state and local taxes,
                         as well as any applicable rebates or fees." arrow placement="top">
                             <HelpRoundedIcon className="infoIcon"/>
                        </Tooltip>
                    </Typography>
                    <Typography className="itemAmountText">$100.00</Typography>
                </div>

                <div className="itemListing">
                    <Typography className="itemListText">Discounts</Typography>
                    <Typography className="itemAmountText">$0.00</Typography>
                </div>

                <div className="FieldContainer">
                <TextInputFixedLabel 
                    helpertext="Helper text"
                    HelpertextStatus={false}
                    placeholder="Enter promo code"
                    Errormessage="Error message"
                    errortextStatus={true}
                    count={100}
                    countStatus={false}
                    tooltipStatus={false}
                />
                    <Button href="#"  className="ButtonApply">Apply</Button>
                </div>

                <div className="TotalContainer">
                    <Typography  className="TotalText">Total</Typography>
                    <Typography  className="TotalAmount">$120.00</Typography>
                </div>
                
            </div>

        </div>

    )
}

export default CheckOrderSummary;

const style = {
    
}