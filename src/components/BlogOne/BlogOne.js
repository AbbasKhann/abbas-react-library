import React from 'react';
import Grid from '@material-ui/core/Grid';
import ButtonOne  from '../ButtonOne/ButtonOne'

import "./BlogOne.css"


function BlogOne(props) {

  const { blogOneData } = props;

  return (

    <div className="BlogOneMainContainer">

      <Grid container spacing={props.Spacing}>

        {blogOneData.map((item, i) => (
          <Grid item md={props.col} xs={12}>
            <div className="BlogOneinfoContainer">
              <h2 style={{ color: props.color, fontSize:props.titleLightFontSise, }}>{item.titleLight}</h2>
              <h1 style={{ color: props.color, fontSize:props.titleBoldFontSise, }}>{item.titleBold}</h1>
              <div style={{ color: props.color,}}>{item.description}</div>

              <div className="BlogOneButtonContainer">
                <ButtonOne
                  label={props.buttonLebel}
                  link={props.link}
                  target={props.target}
                  path={props.path}
                  arrow={props.arrow}
                  arrowColor={props.arrowColor}
                  buttoncolor={props.buttoncolor}
                  width={props.width}
                  height={props.height}
                  border={props.border}
                  borderRadius={props.borderRadius}
                  color={props.colorlabel}
                  fontWeight={props.fontWeight}
                  textAlign={props.textAlign}
                />
              </div>
            </div>
          </Grid>
        ))}

      </Grid>
    </div>

  );

}

export default BlogOne;