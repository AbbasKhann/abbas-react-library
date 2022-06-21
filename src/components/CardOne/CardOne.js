import React from 'react';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Grid from '@material-ui/core/Grid';

import "./CardOne.css"
import "../../styles/fonts.css"


function CardOne (props) {

  const {cardOneData} = props;

  return (
    <Grid container spacing={props.spacing}>


    {cardOneData.map((item, i) => (
      <Grid item md={props.col} xs={12}>

        <div className="CardOneMainContainer">
          <a href={item.link} className="CardOneMainInfoContainer">
            <div className="CardOneboxed-grey">
              <div className="CardOneInner">
                <div className="CardOneavatar"><img src={item.img} alt="" />
                  <div className="CardOnehover_over" style={{background:props.hoverbackground}}></div>
                </div>

                <div className="CardOneDetails">
                  <h2>{item.title}</h2>
                  <div className="CardOneDesBox">
                    <p className="CardOneparagraph">{item.Discription}</p>
                    <span className="CardOnereadmore">{props.buttonLabel} <ArrowForwardIosRoundedIcon /> </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

      </Grid>
      ))}

    </Grid>


  );
}

export default CardOne;