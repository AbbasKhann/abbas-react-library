import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import CallMadeRoundedIcon from '@material-ui/icons/CallMadeRounded';
import Link from '@material-ui/core/Link';
import "../../styles/fonts.css"
import "./LinkCard.css"



function LinkCard(props) {
  const { cardData, } = props;

  return (

    <div>

      {
        cardData.map((item, i) => (

          <Link className="LinkCardMainContainer" to={props.path} href={props.link}>

            {props.Arrow && <CallMadeRoundedIcon className="LinkCararrow" />}

            <div className="LinkCarTitleContainer">
              <div  className="LinkCarTitle">{item.title}</div>
              {props.singleImg && <Avatar  className="SingleImg" alt="Remy Sharp" src={item.singleImg} />}
            </div>

            {props.AvatarGroup &&
            <AvatarGroup max={5} className="AvatarGroup">
              <Avatar alt="Remy Sharp" src={item.GroupImg} /> 
              <Avatar alt="Remy Sharp" src={item.GroupImg2} /> 
              <Avatar alt="Remy Sharp" src={item.GroupImg3} /> 
              <Avatar alt="Remy Sharp" src={item.GroupImg4} /> 
              <Avatar alt="Remy Sharp" src={item.GroupImg5} /> 
            </AvatarGroup>}
          </Link>

        ))
      }
    </div >
  );
}
export default LinkCard;
