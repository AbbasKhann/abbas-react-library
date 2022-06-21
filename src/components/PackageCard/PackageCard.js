import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import PropTypes from "prop-types";
import Link from '@material-ui/core/Link';

import "../../styles/fonts.css"
import "../../styles/PackageCard.css"


export default function PackageCard(props) {
  const [value, setValue] = React.useState({
    tickVisibility: props?.isTickVisible ? props.isTickVisible: false ,
  });

  const onClick = () => {
    setValue({ ...value, tickVisibility: !value.tickVisibility });
    props.cardFunction(value);
  };
  return (
    <div className="packageCardContainer">
        <Card
          variant={"outlined"}
          style={value.tickVisibility == true ? styles.mainTicked : styles.main}
          onClick={() => onClick()}
        >
          <CardActionArea>
            <CardContent>
              <section style={styles.baseIcon}>
                {value.tickVisibility && (
                  <CheckCircleIcon style={styles.icon} />
                )}
              </section>
              <Typography className="PackageTitle" style={{color:props.color}}>{props.cardIconStatus && props.icon} {props.header}</Typography>
              <Typography className="DayText">{props.dayText}</Typography>
              <Typography className="PackageText">{props.body}</Typography>
              {props.Link &&  <Link className="PackageDetailLink">{props.buttonLabel}</Link>}
            </CardContent>
          </CardActionArea>
        </Card>
     
    </div>
  );
}

const styles = {
  
  baseIcon: {
    position:"absolute",
    right:"10px",
    top:"10px",
  },
  icon: {
    color: "#2490F9",
  },
 
};

PackageCard.propTypes = {
  /** icon name if available in BaseIcon or svg code*/
  icon: PropTypes.string,
  /** selection of the card */
  cardFunction: PropTypes.func,
  header: PropTypes.string,
  body: PropTypes.string,
};
