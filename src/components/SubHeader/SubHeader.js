import React from 'react';
import PropTypes from 'prop-types';
import { Container, Box, Breadcrumbs, Typography, LinearProgress, Button, ListItem } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import "../../styles/fonts.css"
import "../../styles/progressContainer.css"


function SubHeader(props) {
    const {buttonsItems, onButtonClick, showProgressBar, secondHeading, amountHeading, progressPercentage, breadcrumbsItems, onBreadcrumbClick} = props

        return (
            <>
                <Box className="ProgressBarContainer">
                    <Container maxWidth="lg">
                        { breadcrumbsItems && breadcrumbsItems.length ? <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                            { breadcrumbsItems.map((item, i) => {
                                return item.current ? <Typography key={i} color="textPrimary" className="active-breadcrumb">{ item.title }</Typography> : <ListItem key={i} color="inherit" onClick={() => onBreadcrumbClick(item.path)}> {item.title} </ListItem>
                            })}
                        </Breadcrumbs> : null }

                        <div className="t_container">
                       <div className="title_section">
                        <Typography variant="body1" gutterBottom className="sponsor-text2">
                            {props.sponsorTitle}
                        </Typography>
                        
                            <Box className="statusContainer">
                                {showProgressBar && <LinearProgress className="progressRow" variant="determinate" value={progressPercentage} />}
                                {/* 100 * collectedFunds / totalFunds */}
                                <Typography variant="body1" gutterBottom className="raised-text">
                                   <span>{amountHeading}</span> {secondHeading}
                                </Typography>
                            </Box>
                            </div> 

                            <Box className="statusBtn">
                                {buttonsItems && buttonsItems.length ? buttonsItems.map((btn, i) => {
                                    return <Button key={i} variant="outlined" className={btn.class} startIcon={btn.icon}
                                    onClick={() => onButtonClick(btn.path)}>
                                        {btn.title}
                                    </Button>
                                }) : null}
                            </Box>
                            </div>
                    </Container>
                </Box>
            </>
        )

}

SubHeader.propTypes = {
    onButtonClick: PropTypes.func,
    buttonsItems: PropTypes.array,
    showProgressBar: PropTypes.bool,
    progressPercentage: PropTypes.number,
    sponsorTitle: PropTypes.string,
    amountHeading: PropTypes.string,
    secondHeading: PropTypes.string,
    onBreadcrumbClick: PropTypes.func,
    breadcrumbsItems: PropTypes.array
};

export default SubHeader;