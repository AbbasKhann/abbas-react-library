import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import DateRangeIcon from '@material-ui/icons/DateRange';
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import "./VidoeListingCardOne.css"





function VidoeListingCardOne(props) {

    const { videoListingOneData } = props;

    

    return (

        <div className="VidoeListingCardOneMainContainer">


            <Grid container spacing={props.spacing}>

                {videoListingOneData.map((item, i) => (
                    <Grid item md={props.col} xs={12}>
                        <a href={item.link} to={item.path} onClick={item.onclick}>
                            <div className="VideoColOne">

                                <div className="videoImgOne">
                                    <img className="vidoeoneimg" src={item.img} alt="" />
                                    <img className="vidoeoneicon" src={props.playicon} alt="" />
                                    <div className="vidoeoneOverlay"></div>
                                </div>


                                <div className="videoDetailsOne">
                                    <div className="videoDetailsOneTitle">{item.title}</div>
                                    <div className="videoLocationOne">
                                        <div className="videoLocationOneText"><DateRangeIcon /> {item.date}</div>
                                        <div className="videoLocationOneText"> <RemoveRedEyeOutlinedIcon /> {item.views}</div>
                                    </div>

                                </div>
                            </div>
                        </a>

                        
                    </Grid>
                ))}

            </Grid>


        </div>

    );

}

export default VidoeListingCardOne;