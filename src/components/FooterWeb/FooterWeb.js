import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import "../../styles/fonts.css"
import "../../styles/FooterWeb.css"


function FooterWeb(props) {
    const { footerLinks } = props;

    return (

        <div className="FooterWebContainer">

            <div className="footerWebTop">
                <Grid container spacing={3}>

                    {footerLinks?.length ? footerLinks.map((el, i) => {
                        return <Grid key={i} item md={4} sm={6} xs={12}>
                            <div className="FootermenuTitle">{el.headingTitle}</div>

                            <Grid container spacing={3} className="footerWebLinks footerDynamicLinks">

                                <Grid item md={6} sm={6} xs={12}>
                                    {el?.columnOnelinks?.length ? el.columnOnelinks.map((link, index) => {
                                        return link.linkType === "external" ?
                                            <Link key={index} href={link.url} target={link.target}>{link.name}</Link> :
                                            <Link key={index} onClick={() => props.onLinkClick({ ...link })} href={link.url} target={link.target}>{link.name}</Link>
                                    }) : null}
                                </Grid>

                                <Grid item md={6} sm={6} xs={12}>
                                    {el?.columnTwolinks?.length ? el.columnTwolinks.map((link, index) => {
                                        return link.linkType === "external" ?
                                            <Link key={index} href={link.url} target={link.target}>{link.name}</Link> :
                                            <Link key={index} onClick={() => props.onLinkClick({ ...link })} href={link.url} target={link.target}>{link.name}</Link>
                                    }) : null}
                                </Grid>
                            </Grid>

                        </Grid>
                    }) : null}

                </Grid>
            </div>

            <div className="footerWebBottom">
                <p>{props.copyRightsText}</p>
                <div className="linkFooterBototm">
                    <Link href={props.termsOfServiceLink}>Terms of Services</Link>
                    <Link href={props.privacyPolicyLink}>Privacy Policy</Link>
                </div>
                <div className="footerWebBottompowrdBy">Powered by <a href={props?.poweredBy?.link} target="blank"><img src={props?.poweredBy?.logo} alt="logo" /></a></div>
            </div>

        </div>

    )
}

export default FooterWeb;