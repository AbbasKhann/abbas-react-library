import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./AccordionOne.css"



function AccordionOne(props) {


  
  return (

      <Accordion className="AccordionOneMainContainer" expanded={props.expanded === props.panel } onChange={props.handleChange(props.panel)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={props.panel}
          id={props.panel}
        >
          <Typography className="AccordionOneTitle" 
            style={{color:props.titleColor, fontSize:props.titleFontSize, fontWeight:props.TitleFontWeight,}}> 
            {props.iconStatus && <img className="AccordionOneIcon" src={props.icon} /> } {props.title}
          </Typography>

        </AccordionSummary>

        <AccordionDetails>
          {props.AccordionBody}
        </AccordionDetails>

      </Accordion>

  );
}

export default AccordionOne;