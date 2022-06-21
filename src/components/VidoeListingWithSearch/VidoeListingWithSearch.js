import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateRangeIcon from '@material-ui/icons/DateRange';
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import Link from '@material-ui/core/Link';
import "./VidoeListingWithSearch.css"

import SearchField from "../SearchField/SearchField";
import DoneImg from '../../../assets/img/Done.png';
import CloseIcon from '../../../assets/img/cancel.png';



function VidoeListingWithSearch(props) {

    const click = () => {
        console.log("Back Button Clicked");
    };


    const { videoListingTwoData } = props;

    return (

        <div className="VidoeListingWithSearchMainContainer">

            {/* <div className='VidoeListingSearchMainContainer'>
                <SearchField
                    label="Field label"
                    labelStatus={true}
                    helpertext="Helper text"
                    HelpertextStatus={true}
                    placeholder="Search Videos"
                    Errormessage="Error message"
                    errortextStatus={false}
                    count={100}
                    countStatus={true}
                    tooltipStatus={true}
                    BorderColor="#0053A5 2px solid"

                    //// Button Style ////
                    buttonLebel="SEARCH"
                    buttonLebelLink="https://xd.adobe.com/view/a9342815-a66f-42cf-aee5-8dc16dcb70eb-fc67/specs/"
                    target="blank"
                    path="/"
                    arrow={false}
                    arrowColor="#fff"
                    buttoncolor="#0053A5"
                    width="auto"
                    height="52px"
                    border="#0053A5 0px solid"
                    borderRadius="0px"
                    colorlabel="#fff"
                    fontWeight="600"
                    textAlign="center"
                    onClick={click}


                />
            </div> */}

            <div className='VidoeListingBody'>
            <Grid container spacing={props.spacing}>

                {videoListingTwoData.map((item, i) => (
                    <Grid item md={props.col} xs={12}>
                        <Link to={item.path}>
                            <a href={item.link} to={item.path} onClick={item.onclick}>
                                <div className="VideoColTwo">

                                    <div className="videoImgTwo" style={{ minWidth: props.Thumnailwidth }}>
                                        <img className="vidoeTwoimg" src={item.img} alt="" />
                                        {props.playiconStatus && <img className="vidoeTwoicon" src={props.playicon} alt="" />}
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
                            </a>
                        </Link>
                    </Grid>
                ))}

            </Grid>
            </div>


        </div>

    );

}

export default VidoeListingWithSearch;