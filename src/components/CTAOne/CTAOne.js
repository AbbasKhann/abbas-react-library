import React from 'react';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import "../../styles/fonts.css"
import "./CTAOne.css"




function CTAOne(props) {

  return (

    <div className="CTAOne" style={{background: props.backgroundColor , minHeight:props.minHeight}}>
      <h2>{props.Title}</h2>
      <p>{props.SubTitle}</p>
      <a href={props.link} target={props.target} style={{background:props.Btnbackground, color:props.Btncolor, padding:props.BtnPadding}}>{props.ButtonLebel} <ArrowForwardRoundedIcon /></a>
    </div>

  );
}

export default CTAOne;