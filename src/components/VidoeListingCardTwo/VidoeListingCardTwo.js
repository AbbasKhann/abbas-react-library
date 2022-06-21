import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateRangeIcon from '@material-ui/icons/DateRange';
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import Link from '@material-ui/core/Link';
import "./VidoeListingCardTwo.css"



function VidoeListingCardTwo(props) {

    const { videoListingTwoData } = props;

    return (

        <div className="VidoeListingCardTwoMainContainer">


            <Grid container spacing={props.spacing}>

                {videoListingTwoData.map((item, i) => (
                    <Grid item md={props.col} xs={12}>
                        <Link to={item.path} onClick={item.onclick}>
                            <div className="VideoColTwo">
 
                                <div className="videoImgTwo" style={{minWidth:props.Thumnailwidth}}>
                                    <img className="vidoeTwoimg" src={item.img} alt="" />
                                    {props.playiconStatus &&<img className="vidoeTwoicon" src={props.playicon} alt="" /> }
                                    <div className="vidoeTwoOverlay"></div>
                                </div>
                                
                            
                                <div className="videoDetailsTwo">
                                    <div className="videoDetailsTwoTitle">{item.title}</div>
                                    <div className="videoDetailsTwoSubTitle">{item.subtitle}</div>
                                    <div className="videoLocationTwo">
                                        <div className="videoLocationTwoText"><DateRangeIcon /> {item.date}</div>
                                        <div className="videoLocationTwoText"> <RemoveRedEyeOutlinedIcon /> {item.views}</div>
                                    </div>

                                </div>
                            </div>
                        </Link>
                        {props.borderLine && <div className="VidoeListingCardTwoBorderLine"></div>}
                    </Grid>
                ))}

            </Grid>


        </div>

    );

}

export default VidoeListingCardTwo;