import React from 'react';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import "./CTATwo.css"
import "../../styles/fonts.css"



function CTATwo(props) {

  return (

    <div className="CTATwo" style={{background: props.backgroundColor, }}>
      <div className="DonationCardTwoIconContainer" style={{background: props.IconbackgroundColor, }}><img src={props.icon} /></div>
      <div className="DonationCardTwoInfoContainer">
      <h2>{props.Title}</h2>
      <a href={props.link} target={props.target} style={{color: props.ButtonColor, }}>{props.ButtonLebel} <ArrowForwardRoundedIcon /></a>
      </div>
    </div>

  );
}

export default CTATwo;