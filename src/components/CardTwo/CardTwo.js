import React from 'react';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Grid from '@material-ui/core/Grid';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';

import "./CardTwo.css"
import "../../styles/fonts.css"


function CardTwo(props) {

  const { cardTwoData } = props;

  return (


    <Grid container spacing={props.spacing}>


      {cardTwoData.map((item, i) => (

        <Grid item md={props.col} xs={12}>
          <div className="CardTwoMainContainer">

            <a href={item.link} className="CardTwoMainInfoContainer">
              <div className="CardTwoboxed-grey">
                <div className="CardTwoInner">


                <Grid container spacing={props.spacing}>
                  <Grid item md={props.Imgcol} xs={12}>
                    <div className="CardTwoavatar"><img src={item.img} alt="" />
                      <div className="CardTwohover_over" style={{ background: props.hoverbackground }}></div>
                    </div>
                  </Grid>

                  <Grid item md={props.Contentcol} xs={12}>
                    <div className="CardTwoDetails">
                      {props.nameDateStatus &&
                      <div className="name_box"><span><PersonRoundedIcon /> {item.name}</span>
                        <span>|</span> <span><DateRangeRoundedIcon /> {item.date}
                        </span>
                      </div>}
                      <h2 style={{ color: props.titleColor }}>{item.title}</h2>
                      <div className="CardTwoDesBox">
                        <p className="CardTwoparagraph">{item.Discription}</p>
                        <span className="CardTworeadmore">{props.buttonLabel} <ArrowForwardIosRoundedIcon /> </span>
                      </div>
                    </div>
                  </Grid>
                  </Grid> 
                </div>
              </div>
            </a>

          </div>
        </Grid>

      ))}

</Grid>


  );
}

export default CardTwo;