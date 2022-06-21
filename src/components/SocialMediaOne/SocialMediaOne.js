import React from 'react';
import Button from '@material-ui/core/Button';
import InsertLinkRoundedIcon from '@material-ui/icons/InsertLinkRounded';

import "./SocialMediaOne.css"


function SocialMediaOne(props) {

  const { socialIconData } = props;

  return (

    <div className="SocialMediaOne">

      <div className="SocialCtn">
        {socialIconData.map((item, i) => (
          <a href={item.link} target="blank"><img src={item.icon} /></a>
        ))}
        {props.copyButton &&
        <Button onClick={props.onClick} className="CopyLink" variant="contained" color="primary" href="#contained-buttons" style={{ background: props.copyBackground, color:props.copyColor }}><InsertLinkRoundedIcon /> COPY LINK </Button>}

      </div>

    </div>

  );

}

export default SocialMediaOne;