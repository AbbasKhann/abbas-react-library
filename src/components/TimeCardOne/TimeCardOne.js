import React from 'react';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ButtonOne  from '../ButtonOne/ButtonOne';
import "./TimeCardOne.css"
import "../../styles/fonts.css"



function TimeCardOne(props) {

  return (

    <div className="TimeCardOneMainContainer">

      <div className='TimeCardOneTopText' style={{color:props.TopTextcolor,}}>{props.TopText}</div>
      <div className='TimeCardOneTopBorderLine' style={{background:props.TopBorderLine, }}></div>

      <div className='TimeCardOneCard' style={{background:props.Cardbackground, }}>
        <img className='TimeCardOneCardIcon' src="https://dc-img-assets.s3.amazonaws.com/DEENCONNECT-website-for-masjid-organization-development-sun-icon.webp" alt="sun icon"/>
        <div className='TimeCardOneCardTime' style={{color:props.Textcolor,}}>{props.CardTextOne}</div>
        <div className='TimeCardOneCardTimeFormate' style={{color:props.Textcolor,}}>{props.CardTextTwo}</div>

      </div>

    </div>

  );
}

export default TimeCardOne;