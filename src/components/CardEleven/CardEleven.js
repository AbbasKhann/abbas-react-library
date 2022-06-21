import React from 'react';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Grid from '@material-ui/core/Grid';

import "./CardEleven.css"
import "../../styles/fonts.css"


function CardEleven (props) {


  return (
    

        <div className="CardEleven">
          <a href={props.link} className="CardElevenInfoContainer">
            <div className="CardElevenboxed-grey">
              <div className={props.border}>
              <div className="CardElevenInner" style={{padding:props.ImgSpace,}}> 
                <div className="CardElevenavatar"><img src={props.img} alt="" />
                  <div className="CardElevenhover_over"></div>
                </div>

                <div className="CardElevenDetails" style={{background:props.Titlebackground}}>
                  <h2 style={{color:props.titleColor}} className={props.underline}>{props.title}</h2>
                  <div className="CardElevenDesBox">
                    <span className="CardElevenreadmore" style={{color:props.ReadmoreColor}}>{props.buttonLabel} {props.ReadmoreIcon} </span>
                  </div>
                </div>
                {props.BottomLine && <div className='bottomLine' style={{background:props.BottomLineColor}}></div> }
              </div>
              </div>
              
            </div>
          </a>
          
        </div>



  );
}

export default CardEleven;