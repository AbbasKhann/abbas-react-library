import React from 'react';

import "./Section.css"


function Section (props) {

  const {cardTwoData} = props;

  return (
   
      <div className="SectionMainContainer" style={{background:props.background, paddingTop:props.Spacing, paddingBottom:props.Spacing, }}>

          <div className="SectionInnerContainer" style={{maxWidth:props.ContainerWidth, }}>{props.Container}</div>

      </div>
    
  );

}

export default Section;