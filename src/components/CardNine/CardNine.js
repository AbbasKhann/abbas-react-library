import React from "react";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import "./CardNine.css"




function CardNine(props) {

  return (
    <>
      
          <Link href={props.link} className="CardNine" target="blank">
              <div className="UpcomingEventImg"><img src={props.image} alt="eventImg" /></div>
              <div className="UpcomingEventContents">
                <Typography className="EventCardTitle GreenText" variant="h1" component="h1" gutterBottom>{props.time}</Typography>
                <Typography className="EventCardSubTitle" variant="h1" component="h1" gutterBottom>{props.title}</Typography>
                <Typography className="EventCardSubText">{props.subTitle}</Typography>
                <span className="CardReadmore">{props.buttonText} <ArrowForwardIosRoundedIcon /> </span>
              </div>
          </Link>
   


    </>
  );
}

export default CardNine;
