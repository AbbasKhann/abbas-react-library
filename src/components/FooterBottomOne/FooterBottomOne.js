import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';


import FavoriteIcon from '@material-ui/icons/Favorite';


import "./FooterBottomOne.css"


function FooterBottomOne(props) {

  return (

    <div className="FooterMainBoxBottomMainContainer">

      <div className="FooterMainBoxBottomGrey">

      <div className="FooterMainBoxBottomContainer" style={{maxWidth:props.Container}}>
        {/* <div className="FooterMainBoxBottomGreyText">
          AWESOMELY DEVELOPED BY DEENCONNECT
        </div> */}

        <div className="FooterMainBoxBottomGreyText">
          <a href={props.TermsLink} className="FooterBottomtermlink" target={props.target}> Terms of Services </a>
          <span>|</span>
          <a href={props.PrivacyLink} className="FooterBottomtermlink" target={props.target}> Privacy Policy </a>
        </div>

        <div className="FooterMainBoxBottomGreyText">
          Crafted With <FavoriteIcon className="FooterBottomtheartIcon" /> In Islam
        </div>

        
        
        </div>
      </div>


      <div className="FooterMainBoxBottomWhite">
      <div className="FooterMainBoxBottomContainer" style={{maxWidth:props.Container}}>
        <div className="FooterMainBoxBottomWhiteText">
          © 2022 DEECONNECT. ALL RIGHTS RESERVED
        </div>

        <div gutterBottom className="FooterMainBoxBottompweredText">
         <span>POWERED BY</span> <a href="https://deenconnect.io/" target="_blank"><img className="FooterMainBoxBottomdclogoftr" src="https://dc-img-assets.s3.amazonaws.com/DEENCONNECT-manage-masjid-organization-logo.png" alt="DC Logo" /></a>
        </div>

        <div className="FooterMainBoxBottomWhiteText">
          Visit us - <a className="visitUs" href="https://deenconnect.io/" target="_blank">www.deenconnect.io</a>
        </div>

        </div>

      </div>
      <div  style={{background:props.bordercolor, height:"4px",}}></div>

    </div >

  );
}

export default FooterBottomOne;