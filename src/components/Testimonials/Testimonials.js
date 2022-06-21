import React, { useState, useEffect } from 'react';
import "../../styles/testimonials.css";
import { IconButton, Paper, Grid, Avatar } from "@material-ui/core";
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import PlayArrowIcon from "@material-ui/icons/PlayArrow";


function Testimonials(props) {
  const { users } = props;

  let [index, setIndex] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index === props.index ? 1 : index + 1);
    }, props.duration);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="TestimonialsContainer">

      <div className="M_TestimonialContainer" >
        <Paper className="M_TestimonialVideoImg"
          variant="outlined"
          square
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            backgroundImage: `url(${users[index - 1].video})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        >
          {props.PlayIcon &&
            <IconButton className="videoPlayIcon"
              component="span">
              <PlayArrowIcon />
            </IconButton>
          }
        </Paper>

        <div className='M_TestimonialRightCol'>



          <div className='M_TestimonialDetails'>
            {props.title && <div className="M_TestimonialTitle">
              {users[index - 1].title}
            </div>}

            <div className="M_TestimonialDescription">
              "{users[index - 1].description}"
            </div>

            <div className="M_TestimonialAurtherText">
              {users[index - 1].name}
              <br />
              {users[index - 1].address}
            </div>
          </div>



          <div className="M_TestimonialThumbnailContainer">
            <Grid item lg={12} md={12} sm={12} xs={12} container={true} spacing={1}>
              {users.map((data) => {
                return (
                  <Grid item>
                    <IconButton
                      size="small"
                      component="span"
                      onClick={() => setIndex(data.id)}
                     

                      className= {data.id === index ? "T_active" : "" }
                    >
                      <Avatar alt={data.name} src={data.img} className="AurtherThumbnail" />
                    </IconButton>
                  </Grid>
                );
              })}
            </Grid>
          </div>


          <div className="M_TestimonialArrowButton">
            <IconButton className="leftArrow TsArrow"
              size="small"
              component="span"
              onClick={() => {
                setIndex(index === 1 ? props.index : index - 1);
              }}
            >
              <ArrowBackIosRoundedIcon fontSize="inherit" />
            </IconButton>
            <IconButton className="RightArrow TsArrow"
              size="small"
              component="span"
              onClick={() => {
                setIndex(index === props.index ? 1 : index + 1);
              }}
            >
              <ArrowForwardIosRoundedIcon fontSize="inherit" />
            </IconButton>
          </div>

        </div>
      </div>









    </div>
  );
}

export default Testimonials;
