import PropTypes from 'prop-types'
import React, { Fragment } from 'react';
import { Typography, Container, Grid, Button, Divider} from '@material-ui/core';
import "../../styles/integrationDetails.css"
import Link from '@material-ui/core/Link';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import PricingModal from '../PricingModal/PricingModal';


function IntegrationDetails(props) {
    const {backLink, backLinkText, compatibleWith, title, features, DFLogo, logoSubHeading, planSelected, handlePlanDuration, planDuration, modalButtonText, paragraphText, checkCircleIcon} = props;

        return (
            <Fragment>
                <div className="integration-detail-section">
						<Container maxWidth="lg">

							{backLink && <Grid item xs={12} sm={12} md={12} lg={12}>
								<Link to={"/"} className="back-link">
									<ArrowBackIosIcon /> {backLinkText}
								</Link>
							</Grid> }

		    				<Grid container spacing={4}>
								<Grid item xs={12} sm={4} md={3} lg={3}>
									
									<div className="detail-dp">
										<div className="dp-container">
											<img src={props.deenLabelImg} alt="deen-label" />
										</div>
									</div>

                                    <PricingModal 
                                        logoSubHeading={logoSubHeading} 
                                        DFLogo={DFLogo}
                                        planDuration={planDuration}
                                        handlePlanDuration={handlePlanDuration}
                                        planSelected={planSelected}
                                        modalButtonText={modalButtonText}
                                        checkCircleIcon={checkCircleIcon}
                                        infoIcon={props.infoIcon}
                                    />
        							
									<Button variant="contained" className="view-web-btn">VIEW ON WEBSITE &nbsp;<i class="fa fa-external-link" aria-hidden="true"></i>
									</Button>

									<div className="distance-top">
										<Divider />
									</div>

									<div className="compatible-section">
										<Typography variant="body1" className="compatible-t">
											Compatible with
										</Typography>
										<div className="tag_row">
                                            {compatibleWith && compatibleWith.length ? compatibleWith.map((el, i) => {
                                                return <span key={i} className="tags">{el}</span>
                                            }) : null}
										</div>

									</div>
								</Grid>

								<Grid item xs={12} sm={8} md={8} lg={6} className="integration-detail-content">
									<Typography variant="body1" className="integ-t">
										{title}
									</Typography>

									<Typography variant="body1" className="integ-text" dangerouslySetInnerHTML={{ __html: paragraphText }}>
                                        
										
									</Typography>

									<div className="integration-feature">
										<Typography variant="body1" className="feature-t">
										Features
										</Typography>

                                        {features && features.length ? features.map((el, i) => {
                                                return <div key={i} className="feature-content">
                                                <img src={props.checkCircleIcon} alt="check-circle" />
                                                <div className="f-text">
                                                    <Typography variant="body1" className="feature-h">
                                                        {el.title}
                                                    </Typography>
    
                                                    <Typography variant="body1" className="feature-b">
                                                        {el.description}
                                                    </Typography>
                                                </div>
                                            </div>
                                        }) : null}

						
									</div>
								</Grid>
							</Grid>
						</Container>
					</div>

            </Fragment>
        )
}

IntegrationDetails.propTypes = {
    // message: PropTypes.string,
    // onCloseClick: PropTypes.func,
    // show: PropTypes.bool
};


export default IntegrationDetails;