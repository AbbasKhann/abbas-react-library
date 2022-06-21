import React from 'react';


import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import AttachMoneyRoundedIcon from '@material-ui/icons/AttachMoneyRounded';
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';


import "./CardEight.css"


function CardEight(props) {

    const { eventCardOneData } = props;

    return (

        <div className="CardEight MainSection">

            <Container maxWidth="lg">

                <Grid container spacing={3}>

                    {eventCardOneData.map((item, i) => (
                        <Grid item md={props.col} xs={12}>

                            <div className="UcomingEvents_col">

                                <div className="events_img">
                                    <img className='eventmainIme' src={item.img} alt="" style={{minWidth:props.ImgWidth, maxWidth:props.ImgWidth}}/>
                                    <div className='EventcardSocialIcon'>
                                        {props.SocialIcon}
                                    </div>
                                </div>

                                <div className="events_details">
                                    <h2>{item.title}</h2>

                                    {props.DateRangeStatus && <div className="eventLocation"><DateRangeIcon /> {item.date}</div>}
                                    {props.LocationStatus &&  <div className="eventLocation"><LocationOnIcon /> {item.location}</div>}
                                    {props.MoneyStatus && <div className="eventLocation"><AttachMoneyRoundedIcon /> {item.amount}</div>}
                                    {props.FoodStatus && <div className="eventLocation"><FastfoodRoundedIcon /> {item.food}</div>}
                                    {props.JoinStatus && <div className="eventLocation"><GroupRoundedIcon /> {item.join}</div>}


                                    {item.speakers ?
                                        <AvatarGroup max={4}>
                                            {
                                                item.speakers.map( (speaker, index) => {
                                                    return (
                                                        <Avatar key={index} alt={speaker.name} src={speaker.image} />
                                                    );
                                                })
                                            }
                                        </AvatarGroup>
                                    : null
                                    }

                                </div>


                                {props.viewdetailStatus &&
                                    <div className="event_detail_pop">
                                        <div className="blue_bg"></div>
                                        <a href={item.link}>{props.buttonLabel}</a>
                                    </div>
                                }

                            </div>

                        </Grid>
                    ))}

                </Grid>
            </Container>

        </div>

    );

}

export default CardEight;