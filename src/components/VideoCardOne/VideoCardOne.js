import React from 'react';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Grid from '@material-ui/core/Grid';

import "./VideoCardOne.css"
import "../../styles/fonts.css"


function VideoCardOne (props) {

  const {VideoCardOneData} = props;

  return (


        <div className="VideoCardOne">
          <a href={props.link} className="VideoCardOneInfoContainer">
            <div className="VideoCardOneboxed-grey">
              <div className={props.border}>
              <div className="VideoCardOneInner" style={{padding:props.ImgSpace,}}> 
                <div className="VideoCardOneavatar" style={{height:props.ImgHeight,}}>
                  <img src={props.img} alt="" />
                  <div className="VideoCardOnehover_over"></div>
                  <div className='videoIcon'>{props.icon}</div>
                </div>

                <div className="VideoCardOneDetails" style={{background:props.Titlebackground}}>
                  <h2 style={{color:props.titleColor}} className={props.underline}>{props.title}</h2>
                  <div className="VideoCardOneDesBox">
                    <span className="VideoCardOnereadmore" style={{color:props.ReadmoreColor}}>{props.buttonLabel} {props.ReadmoreIcon} </span>
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

export default VideoCardOne;