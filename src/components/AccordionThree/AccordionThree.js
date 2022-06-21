import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';
import "./AccordionThree.css"



function AccordionThree(props) {



  return (

    <Accordion className="AccordionThreeMainContainer" expanded={props.expanded === props.panel} onChange={props.handleChange(props.panel)}>
      <AccordionSummary
        expandIcon={
          <span className="IconContianer">
            <AddCircleOutlineRoundedIcon className="addIcon" />
            <RemoveCircleOutlineRoundedIcon className="minusIcon" />
          </span>
        }
        aria-controls={props.panel}
        id={props.panel}
      >
        <Typography className="AccordionThreeTitle"
          style={{ color: props.titleColor, fontSize: props.titleFontSize, fontWeight: props.TitleFontWeight, }}>
          {props.iconStatus && <img className="AccordionThreeIcon" src={props.icon} />} {props.title}
        </Typography>

      </AccordionSummary>

      <AccordionDetails>
        {props.AccordionBody}
      </AccordionDetails>

    </Accordion>

  );
}

export default AccordionThree;