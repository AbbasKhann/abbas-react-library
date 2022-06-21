import React from "react";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import "./CardSixteen.css"




function CardSixteen(props) {

  return (
    <>

      <Link href={props.link} className="CardSixteen">
        <div className="CardSixteenImg">
          <img src={props.image} alt="eventImg" />
          <div className="VideoCardOnehover_over"></div>
          <div className='videoIcon'>{props.playicon}</div>

        </div>
        <div className="CardSixteenContents">
          <div className="CardSixteenDate">{props.date}</div>
          <div className="CardSixteenTitle">{props.title}</div>
          <span className="CardSixteenReadmore" style={{ color: props.readmoreColor }}>{props.buttonText} <ArrowForwardRoundedIcon /> </span>
        </div>
      </Link>



    </>
  );
}

export default CardSixteen;
