import React from 'react';
import "./PageTitleOne.css"
import "../../styles/fonts.css"



function PageTitleOne(props) {

  return (

    <div className="PageTitleOneMainContainer" style={{background:props.backgroundcolor, height:props.height}}>
      <div className='backgroundPattern'><img src={props.backgroundPattern} /></div>
      <div className="PageTitleOneTextContainer">
          <div className='PageTitleOneMain' style={{color:props.color}}>{props.Title}</div>
          <div className='PageSubTitleOne' style={{color:props.color}}>{props.SubTitle}</div>
      </div>

    </div>

  );
}

export default PageTitleOne;