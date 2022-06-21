import React from 'react';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import "../../styles/fonts.css"
import "./CTAEight.css"




function CTAEight(props) {
  const { cTAEightData, } = props;


  return (

    <div className="CTAEight" style={{ background: props.backgroundColor, minHeight: props.minHeight }}>

      <div className='CTAEightLeftCol' style={{ background: props.backgroundColor, minHeight: props.minHeight }}>
        <div className='CTAEightInner'>
          <div className='CTAEightLeftColTitle'>{props.TitleLeft}</div>
          <div className='CTAEightLeftColDescription'>{props.LeftDescription} <span>{props.bookname}</span></div>
          <div className='CTAEightLeftBottomText'>{props.LeftBottomText}</div>
        </div>

      </div>


      <div className='CTAEightRightCol' style={{ background: props.backgroundColorRight, minHeight: props.minHeight }}>
        <div className='CTAEightInner'>
          <h2 style={{ color: props.color }}>{props.Title}</h2>

          <div className='CTAEightRightColBtn'>
            {cTAEightData.map((item, i) => (
              <a href={item.link} target={props.target} style={{ color: props.btnlebelcolor }} onClick={item.onClick}> 
                {item.lebel}
                <div className='CTAEightLogoCtn'>
                  <img src={item.icon} /> <span>{item.TitleafterLogo}</span>
                </div>
                <ArrowForwardRoundedIcon />
              </a>
            ))}
          </div>

        </div>
      </div>


    </div>

  );
}

export default CTAEight;