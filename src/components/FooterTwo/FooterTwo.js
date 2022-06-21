import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import SalatTable from '../SalatTable/SalatTable'
import ButtonOne from '../ButtonOne/ButtonOne'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import "../../styles/fonts.css"
import "./FooterTwo.css"

const click = () => {
    console.log("Back Button Clicked");
};

function FooterTwo(props) {
    const { FooterTwoColOne, FooterTwoColTwo, FooterTwoSocial, FooterTwoContactinfo, FooterTwoGiveUs } = props;


    const CssTextField = withStyles({
        root: {
            '& label.Mui-focused': {
                color: '#E4E8EC',
                opacity: "0.4",

            },

            '& .MuiInput-underline:after': {
                borderBottomColor: 'yellow',
            },

            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: '#FFFFFF',
                },
                '&:hover fieldset': {
                    borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#E4E8EC',
                },
            },

            '& .MuiInputLabel-outlined': {
                color: "#fff",
                opacity: "0.4",
            },

            '& .MuiOutlinedInput-input': {
                color: "#fff",
            }
        },
    })(TextField);

    return (

        <div className="FooterTwoMainContainer" style={{ background: props.background }}>

            <div className="FooterTwoContainer" style={{ maxWidth: props.ContainerMaxWidth }}>
                <div className="FooterTwoRowOne">
                    <Grid container spacing={3}>

                        <Grid item xs={12}  md={3} lg={3}>
                            <div className="FooterTwoCol">
                                <div className="FooterTwoColTitle" style={{ color: props.color }}>{props.ColTitleOne}</div>

                                {FooterTwoColOne.map((item, i) => (
                                    <div className="FooterTwoColParagraph" style={{ color: props.color }}>{item.description}</div>
                                ))}

                                <div className="FooterTwoSocial">
                                    {FooterTwoSocial.map((item, i) => (
                                        <Link href={item.link} target="blank"><img src={item.icon} /></Link>
                                    ))}
                                </div>


                            </div>
                        </Grid>


                        <Grid item xs={12} md={4} lg={3}>
                            <div class="FooterTwoCol">
                                <div class="FooterTwoColTitle" style={{ color: props.color }}>{props.ColTitleTwo}</div>

                                {FooterTwoColTwo.map((item, i) => (
                                    <div class="FooterTwoListinCol" style={{ color: props.color, borderBottom: props.listingBorder, }}>
                                        <img class="FooterTwoListingIcon" src={item.icon} />
                                        <div class="FooterTwoListingInfo" style={{ color: props.color }}>
                                            <div class="FooterTwoListingTitle" style={{ color: props.color }}>{item.Title}</div>
                                            <div class="FooterTwoListingSubTitle" style={{ color: props.color }}>{item.subtitle}</div>
                                        </div>
                                    </div>
                                ))}


                            </div>
                        </Grid>


                        <Grid item xs={12} md={6} lg={6}>
                            <div class="FooterTwoCol">
                                <div class="FooterTwoColTitle" style={{ color: props.color }}>{props.ColTitleThree}</div>
                                <div class="FooterTwoColSubText" style={{ color: props.color }}>{props.SalatiqamaDataTime}</div>

                                <SalatTable
                                    title={"HAJJ 2021 PACKAGES"}
                                    tableBodyData={props.tableBodyData}
                                    odd={props.odd}
                                    even={props.even}
                                    colBorder={props.colBorder}
                                    col1Color={props.col1Color}
                                    col2Color={props.col2Color}
                                    ColPadding={props.ColPadding}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </div>

            </div>

            {props.FooterRowTwo &&
                <>
                    <div className="FooterTwoBorder" style={{ borderTop: "#014386 1px solid", borderBottom: "#0868C9 1px solid" }}></div>

                    <div className="FooterTwoContainer" style={{ maxWidth: props.ContainerMaxWidth }}>
                        <div className="FooterTwoRowTwo">
                            <Grid container spacing={3}>

                                <Grid item xs={12} md={4} lg={3}>
                                    <div class="FooterTwoCol">
                                        <div class="FooterTwoColTitle" style={{ color: props.color }}>{props.ColTitleFour}</div>

                                        {FooterTwoContactinfo.map((item, i) => (
                                            <div class="FooterTwoListinCol">
                                                <img class="FooterTwoListingIcon" src={item.icon} />
                                                <div class="FooterTwoListingContactInfo" style={{ color: props.color }}>
                                                    <div class="FooterTwoListingTitle" style={{ color: props.color }}>{item.TextOne}</div>
                                                    <div class="FooterTwoListingTitle" style={{ color: props.color }}>{item.TextTwo}</div>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="FooterTwoButtonContainer">
                                            <ButtonOne
                                                label={props.ContactbuttonLebel}
                                                onClick={click}
                                                link={props.ContactLink}
                                                target={props.target}
                                                arrow={props.arrow}
                                                arrowColor={props.arrowColor}
                                                buttoncolor={props.buttoncolor}
                                                width={props.width}
                                                height={props.height}
                                                border={props.border}
                                                borderRadius={props.borderRadius}
                                                color={props.colorlabel}
                                                fontWeight={props.fontWeight}
                                                textAlign={props.textAlign}
                                            />
                                        </div>
                                    </div>
                                </Grid>


                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <div class="FooterTwoCol">
                                        <div class="FooterTwoColTitle" style={{ color: props.color }}>{props.ColTitleFive}</div>

                                        {FooterTwoGiveUs.map((item, i) => (
                                            <div class="FooterTwoVisitCol">
                                                <div className="FooterTwoColParagraph" style={{ color: props.color }}>Give us a visit and earn the Hasanah of praying together in Jam’at !</div>
                                                <div class="FooterTwoLocatioIcon"><img src={item.icon} /></div>
                                            </div>
                                        ))}

                                        <div className="FooterTwoButtonContainer">
                                            <ButtonOne
                                                label={props.getDirectionbuttonLebel}
                                                onClick={click}
                                                link={props.getDirectiontLink}
                                                target={props.target}
                                                arrow={props.arrow}
                                                arrowColor={props.arrowColor}
                                                buttoncolor={props.buttoncolor}
                                                width={props.width}
                                                height={props.height}
                                                border={props.border}
                                                borderRadius={props.borderRadius}
                                                color={props.colorlabel}
                                                fontWeight={props.fontWeight}
                                                textAlign={props.textAlign}
                                            />
                                        </div>


                                    </div>
                                </Grid>
                                {props.SubscribeSectoin && 
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <div class="FooterTwoCol FooterTwoColform">
                                        <div class="FooterTwoColTitle" style={{ color: props.color }}>{props.ColTitleSix}</div>

                                        <Grid container spacing={3}>

                                            <Grid item xs={12} md={12} lg={12}>
                                                <div className="FooterTwoColParagraph" style={{ color: props.color }}>{props.FormDescription}</div> 
                                                <CssTextField
                                                    label="Full Name"
                                                    variant="outlined"
                                                    id="custom-css-outlined-input"
                                                    className="labelColor"
                                                />
                                            </Grid>

                                            <Grid item xs={12} md={12} lg={12}>
                                                <CssTextField
                                                    label="Enter Your Email"
                                                    variant="outlined"
                                                    id="custom-css-outlined-input"
                                                    className="labelColor"
                                                />
                                            </Grid>

                                        </Grid>

                                        <div className="FooterTwoButtonContainer">
                                            <ButtonOne
                                                label={props.formButtonLabel}
                                                onClick={props.onClick}
                                                link={props.formButtonlink}
                                                target={props.target}
                                                arrow={props.arrow}
                                                arrowColor={props.arrowColor}
                                                buttoncolor={props.buttoncolor}
                                                width="100%"
                                                height={props.height}
                                                border={props.border}
                                                borderRadius={props.borderRadius}
                                                color={props.colorlabel}
                                                fontWeight={props.fontWeight}
                                                textAlign={props.textAlign}
                                            />
                                        </div>


                                    </div>
                                </Grid> }


                            </Grid>
                        </div>

                    </div>
                </>
            }


        </div>

    )
}

export default FooterTwo;