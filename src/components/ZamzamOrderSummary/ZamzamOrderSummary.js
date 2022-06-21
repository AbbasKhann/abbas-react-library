import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import TextInputFixedLabel from '../TextInputFixedLabel/TextInputFixedLabel';
import Tooltip from '@material-ui/core/Tooltip';

import "./ZamzamOrderSummary.css"
import "../../styles/fonts.css"

function ZamzamOrderSummary(props) {

    return (

        <div   className="OrderSummaryMainContainer">
            <div  className="OrderSummaryTitle">Summary</div>

            <div  className="itemListContainer">
                <div className="itemListing">
                    <Typography  className="itemListText">Pre-Registration Fee/Person</Typography>
                    <Typography  className="itemAmountText">$1000.00</Typography>
                </div>

                <div className="itemListing">
                    <Typography className="itemListText">Number of members</Typography>
                    <Typography className="itemAmountText">2</Typography>
                </div>

                <div className="itemListing">
                    <Typography className="itemListText">Total due</Typography>
                    <Typography className="itemAmountText">$2000</Typography>
                </div>

                <div className="itemListing">
                    <Typography className="itemListText">Pay now</Typography>
                    <Typography className="itemAmountText">$2000</Typography>
                </div>


                <div className="FieldContainer">
                <TextInputFixedLabel 
                    helpertext="Helper text"
                    HelpertextStatus={false}
                    placeholder="Enter custom ammount here"
                    Errormessage="Error message"
                    errortextStatus={true}
                    count={100}
                    countStatus={false}
                    tooltipStatus={false}
                />
                    <Button href="#"  className="ButtonApply">Apply</Button>
                </div>

                <div className="TotalContainer">
                    <Typography  className="TotalText">Paying now</Typography>
                    <Typography  className="TotalAmount">$2000.00</Typography>
                </div>
                
            </div>

        </div>

    )
}

export default ZamzamOrderSummary;

const style = {
    
}