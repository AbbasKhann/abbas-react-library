import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import SalatTable from '../SalatTable/SalatTable'
import ButtonOne from '../ButtonOne/ButtonOne'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import "../../styles/fonts.css"
import "./FooterThree.css"

const click = () => {
    console.log("Back Button Clicked");
};

function FooterThree(props) {
    const { FooterThreeColOne, FooterThreeSocial, FooterThreeContactinfo, footerThreelinks } = props;




    return (

        <div className="FooterThreeMainContainer" style={{ background: props.background }}>

            <div className="FooterThreeContainer" style={{ maxWidth: props.ContainerMaxWidth }}>
                <div className="FooterThreeRowOne">
                    <Grid container spacing={3}>

                        <Grid item xs={12} sm={7} md={7}>
                            <div className="FooterThreeCol FooterThreeTopLeft">
                                <img src={props.logo} />
                                <div>
                                    <div className="FooterThreeOrgTitle" style={{ color: props.color }}>{props.ColTitleOne}</div>
                                    {FooterThreeColOne.map((item, i) => (
                                        <div className="FooterThreeOrgParagraph" style={{ color: props.color }}>{item.description}</div>
                                    ))}
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={5} md={5}>
                            <div className="FooterThreeCol">


                                <div className="FooterThreeSocial">
                                    {FooterThreeSocial.map((item, i) => (
                                        <Link href={item.link} target="blank"><img src={item.icon} /></Link>
                                    ))}
                                </div>


                            </div>
                        </Grid>

                    </Grid>
                </div>

            </div>

            {props.FooterRowTwo &&
                <>
                    <div className="FooterThreeBorder" style={{ background: props.dividerLine, height: "1px", }}></div>

                    <div className="FooterThreeContainer" style={{ maxWidth: props.ContainerMaxWidth }}>
                        <div className="FooterThreeRowTwo">
                            <Grid container spacing={3}>

                                <Grid item xs={12} sm={6} md={6}>
                                    <div class="">
                                        <div className="FooterThreeHelping">

                                            <div className="FooterThreeCol FooterThreeTopLeft logoBottom">
                                                <img src={props.Bottomlogo} />
                                                <div className="FooterThreeColTitleBottom">{props.BottomTitle}</div>
                                            </div>
                                            <div className="BottomBtnCtn">
                                            <ButtonOne
                                                label={props.label}
                                                link={props.link}
                                                target={props.target}
                                                path={props.path}
                                                arrowIcon={props.arrowIcon}
                                                arrowStatus={props.arrowStatus}
                                                arrowColor={props.arrowColor}
                                                buttoncolor={props.buttoncolor}
                                                width={props.width}
                                                height={props.height}
                                                border={props.border}
                                                borderRadius={props.borderRadius}
                                                color={props.color}
                                                textAlign={props.textAlign}
                                            />
                                            </div>

                                        </div>
                                    </div>
                                </Grid>

                                <Grid item xs={12} sm={3} md={3}>
                                    <div class="FooterThreeColTitle" style={{ color: props.color }}>{props.TitleOne}</div>
                                    {FooterThreeContactinfo.map((item, i) => (
                                        <div class="FooterThreeListinCol">
                                            <img class="FooterThreeListingIcon" src={item.icon} />
                                            <div class="FooterThreeListingContactInfo" style={{ color: props.color }}>
                                                <div class="FooterThreeListingTitle" style={{ color: props.color }}>{item.TextOne}</div>
                                                <div class="FooterThreeListingTitle" style={{ color: props.color }}>{item.TextTwo}</div>
                                            </div>
                                        </div>
                                    ))}
                                </Grid>

                                <Grid item xs={12} sm={3} md={3}>
                                    <div class="FooterThreeColTitle" style={{ color: props.color }}><a>{props.TitleTwo}</a></div>
                                    {footerThreelinks.map((item, i) => (
                                        <div class="FooterThreeLink" style={{ color: props.color }}>
                                            <a style={{ color: props.color }} href={item.link}>{item.label}</a>
                                        </div>
                                    ))}
                                </Grid>


                                <Grid item xs={12} sm={12} md={12}>
                                <div className="FooterThreeBorder" style={{ background: props.dividerLine, height: "1px", }}></div>
                                    <div className='PrivacySection'>
                                    
                                        <div className='PrivacySectionLeft'>
                                            <a href={props.TosLink} style={{ color: props.color }}>TERMS OF SERVICES</a>
                                            <span style={{ color: props.color }}>|</span>
                                            <a href={props.ppLink} style={{ color: props.color }}>PRIVACY POLICY</a>
                                        </div>

                                        <div className='PrivacySectionRight' style={{ color: props.color }}>
                                            © 2021 HELPING HAND FOR CHITTAGONIAN. ALL RIGHT RESERVED
                                        </div>
                                    </div>
                                </Grid>







                            </Grid>
                        </div>

                    </div>
                </>
            }


        </div>

    )
}

export default FooterThree;