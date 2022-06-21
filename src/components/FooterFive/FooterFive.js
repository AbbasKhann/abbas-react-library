import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import SalatTable from '../SalatTable/SalatTable'
import "../../styles/fonts.css"
import "./FooterFive.css"

import DirectionsOutlinedIcon from '@material-ui/icons/DirectionsOutlined';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
function FooterFive(props) {
    const { footerFiveSocial, footerFivelinks } = props;




    return (

        <div className="FooterFiveMainContainer" style={{ background: props.background }}>



            {props.FooterRowTwo &&
                <>

                    <div className="FooterFiveContainer" style={{ maxWidth: props.ContainerMaxWidth }}>
                        <div className="FooterFiveRowTwo">
                            <Grid container spacing={3}>

                                <Grid item xs={12} sm={4} md={4}>
                                    <div class="FooterFiveColTitle" style={{ color: props.color, background:props.Titlebackground }}>{props.TitleAbout}</div>
                                    <div style={{ background:props.Titlebackground, height:"2px", width:"100%", marginBottom:"24px", }}></div>
                                    <div className='footerFiveAboutText'>
                                        <p style={{ color: props.color }}>{props.AboutTextOne}</p>
                                        <p style={{ color: props.color }}>{props.AboutTextTwo}</p>
                                    </div>

                                    <div className="FooterFiveCol">
                                        <div className="FooterFiveSocial">
                                            {footerFiveSocial.map((item, i) => (
                                                <Link href={item.link} target="blank"><img src={item.icon} /></Link>
                                            ))}
                                        </div>
                                    </div>
                                </Grid>

                                <Grid item xs={12} sm={4} md={4}>
                                    <div class="FooterFiveColTitle" style={{ color: props.color, background:props.Titlebackground }}>{props.TitleContactIfo}</div>
                                    <div style={{ background:props.Titlebackground, height:"2px", width:"100%", marginBottom:"24px", }}></div>

                                    <div class="FooterFiveListingContactInfo" >
                                        <h3 style={{ color: props.color }}>Address:</h3>
                                        <p style={{ color: props.color }}>{props.address}</p>

                                        <a href={props.getDirectionLink} style={{ color: props.color }} target={props.getDirectiontarget}>Get Directions <DirectionsOutlinedIcon /></a>
                                    </div>

                                    <div class="FooterFiveListingContactInfo" >
                                        <h3 style={{ color: props.color }}>Phone:</h3>
                                        <p style={{ color: props.color }}>{props.phoneOne}</p>
                                        <p style={{ color: props.color }}>{props.phoneOne}</p>
                                    </div>

                                    <div class="FooterFiveListingContactInfo" >
                                        <h3 style={{ color: props.color }}>Email:</h3>
                                        <p style={{ color: props.color }}>{props.email}</p>

                                        <a href={props.contactLink} style={{ color: props.color }} target={props.contactTarget}>Contact Us <ArrowForwardRoundedIcon /></a>
                                    </div>


                                </Grid>

                                <Grid item xs={12} sm={4} md={4}>
                                    <div class="FooterFiveColTitle" style={{ color: props.color, background:props.Titlebackground }}><a>{props.TitleIqamah}</a></div>
                                    <div style={{ background:props.Titlebackground, height:"2px", width:"100%", marginBottom:"24px", }}></div>
                                    <SalatTable
                                        title={"HAJJ 2021 PACKAGES"}
                                        tableBodyData={props.tableBodyData}
                                        //odd="#005EBB"
                                        //even="#0868C9"
                                        colBorder="#E4E8EC 1px solid"
                                        col1Color="#fff"
                                        col2Color="#fff"
                                        ColPadding="9px 0px !important"
                                        footerText={props.SlatTablebottomText}
                                        footerTextStatus={true}
                                        bottomTextSpace="10px"
                                    />
                                </Grid>


                                <Grid item xs={12} sm={12} md={12}>
                                    <div className="FooterFiveBorder" style={{ background: props.dividerLine, height: "1px", }}></div>
                                    <div className='PrivacySection'>

                                        <div className='PrivacySectionLeft'>
                                            <a href={props.TosLink} style={{ color: props.color }}>TERMS OF SERVICES</a>
                                            <span style={{ color: props.color }}>|</span>
                                            <a href={props.ppLink} style={{ color: props.color }}>PRIVACY POLICY</a>
                                        </div>

                                        <div className='PrivacySectionRight' style={{ color: props.color }}>
                                            {props.allRightText}
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

export default FooterFive;