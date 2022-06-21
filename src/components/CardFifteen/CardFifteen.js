import React from 'react';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Grid from '@material-ui/core/Grid';
import ButtonOne from "../ButtonOne/ButtonOne"

import "./CardFifteen.css"
import "../../styles/fonts.css"


function CardFifteen(props) {

  const { cardFifteenData } = props;

  return (
    <Grid container spacing={props.colSpacing}>


      {cardFifteenData.map((item, i) => (
        <Grid item xs={12} md={props.col}>

          <div className="CardFifteen">
            <a href={item.link} className="CardFifteenInfoContainer" onClick={item.onClick}>
              <div className="CardFifteenboxed-grey">
                <div className={props.border}>
                  <div className="CardFifteenInner" style={{ padding: props.ImgSpace, }}>
                    <div className="CardFifteenavatar"><img src={item.img} alt="" />
                      <div className="CardFifteenhover_over"></div>
                    </div>

                    <div className="CardFifteenDetails" style={{ background: props.Titlebackground }}>
                      <div className='CardFifteenTopSec'>
                        <h4 style={{color:props.titleTopLeftcolor}}>{item.titleTop}</h4>
                        <span>
                          <img src={item.flag} /> {item.countryname}
                        </span>
                      </div>
                      <h2 style={{ color: props.titleColor }} className={props.underline}>{item.title}</h2>
                      <p style={{ color: props.discriptionColor }} className={props.underline}>{item.description} <span className="CardFifteenreadmore" style={{ color: props.ReadmoreColor }}>{props.buttonLabel} {props.ReadmoreIcon} </span></p>

                      <div className='CardFifteenTwo'>
                      <ButtonOne
                        label={props.label}
                        arrowIcon={props.arrowIcon}
                        arrowStatus={props.arrowStatus}
                        arrowColor={props.arrowColor}
                        buttoncolor={props.buttoncolor}
                        width={props.width}
                        height={props.height}
                        border={props.border}
                        borderRadius={props.borderRadius}
                        color={props.color}
                        textAlign={props.textAlign}
                    />
                    </div>
                    </div>

                    

                  </div>
                </div>

              </div>


            </a>



          </div>

        </Grid>
      ))}

    </Grid>


  );
}

export default CardFifteen;