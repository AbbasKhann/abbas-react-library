import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateRangeIcon from '@material-ui/icons/DateRange';
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import Link from '@material-ui/core/Link';
import "./SmallPostCardOne.css"



function SmallPostCardOne(props) {

    const { SmallPostCardOneData } = props;

    return (

        <div className="SmallPostCardOneMainContainer">


            <Grid container spacing={props.spacing}>

                {SmallPostCardOneData.map((item, i) => (
                    <Grid item md={props.col} xs={12}>
                        <Link to={item.path}>
                            <div className="SmallPostCardOneCol">

                                <div className="SmallPostCardOneImg" style={{ minWidth: props.Thumnailwidth, minHeight: props.ThumnailHeight, borderRadius:props.thumnailRadius,  }}>
                                    <img className="SmallPostCardOneThumbnail" src={item.img} alt="" />
                                    <div className="SmallPostCardOneTwoOverlay"></div>
                                </div>


                                <div className="SmallPostCardOneDetails">
                                    <div className="SmallPostCardOneLocation">
                                        <div className="SmallPostCardOneLocationText"><DateRangeIcon /> {item.date}</div>
                                    </div>
                                    <div className="SmallPostCardOneDetailsTitle" style={{ fontWeight:props.titleWieght, color:props.titleColor, textTransform:props.titletextTransform, }}>{item.title}</div>
                                    <div className="SmallPostCardOneDetailsSubTitle">{item.subtitle}</div>

                                </div>
                            </div>
                        </Link>
                        {props.borderLine && <div className="SmallPostCardOneBorderLine"></div>}
                    </Grid>
                ))}

            </Grid>


        </div>

    );

}

export default SmallPostCardOne;