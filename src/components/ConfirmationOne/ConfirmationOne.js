import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ButtonOne from '../ButtonOne/ButtonOne';
import "./ConfirmationOne.css"
import "../../styles/fonts.css"
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';


function ConfirmationOne(props) {

  return (

    <div className="TitleOneContainer">

      <div className="ConfirmationContainer">

        <Container maxWidth="md">
          <Grid container spacing={3}>

            <Grid item md={12} sm={12} xs={12}>
              <div className='iconContainer'><DoneOutlineIcon /></div>
              <h1>{props.title}</h1>
              <p>{props.Descrition}</p>
            </Grid>

            <Grid item md={12} sm={12} xs={12}>
              {props.Button &&
                <ButtonOne
                  label={props.buttonLebel}
                  onClick={props.onClick}
                  link={props.Link}
                  target={props.target}
                  arrowIcon={props.arrowIcon}
                  arrowColor={props.arrowColor}
                  arrowStatus={props.arrowStatus}
                  buttoncolor={props.buttoncolor}
                  width={props.width}
                  height={props.height}
                  border={props.border}
                  borderRadius={props.borderRadius}
                  color={props.colorlabel}
                  fontWeight={props.fontWeight}
                  textAlign={props.textAlign}
                />
              }

            </Grid>
          </Grid>
        </Container>
      </div>



    </div>

  );
}

export default ConfirmationOne;