import React from 'react'
import { Container, Box, Tabs, Tab, Typography, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import "../../styles/fonts.css"
import "./ServiceTabOne.css"


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div p={3}>
                    <Typography>{children}</Typography>
                </div>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}



function ServiceTabOne(props) {
    
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const useStyles = makeStyles((theme) => ({
        root: {
            '& .ServicesTabOneManContainer .ServicesTabOneTabContainer .Mui-selected .MuiTab-wrapper':{
                color:props.tabActivelabelcolor,
            }
        },
    
    }));

    const classes = useStyles();
    return (
        <div className={classes.root}>
        <div className="ServicesTabOneManContainer">
            <img className="ServicesTabOnebackground" src={props.backgroundImg} />

            <div className="ServicesTabOneStepsContainer">

                <div className="ServicesTabOneTabContainer">
                
                    <div style={{ background: props.TabBackground, width: "100%", height: "100%", position: 'absolute', opacity: "0.8", }}></div>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                    >
                        {props.tabItems && props.tabItems.length ? props.tabItems.map((item, i) => {
                            return <Tab key={i} label={item.title} icon={<FiberManualRecordIcon style={{color:props.DotColor, background:props.DotColor }} />} {...a11yProps(i)} />
                        }) : null}

                    </Tabs>
                    
                </div>
                
                <div className="ServicesTabOnePanelContainer">
                <div className="ServicesTabOnePanelInnerContainer">
                {props.tabItems && props.tabItems.length ? props.tabItems.map((item, i) => {
                    return <TabPanel key={i} value={value} index={i} className="tabpanel">
                        <h1>{item.TabPanelTitle}</h1>
                        {item.TabPanelPara}
                    </TabPanel>
                }) : null}
                </div>
                </div>

            </div>
        </div>
        </div>
       
    )

}

ServiceTabOne.propTypes = {
    tabItems: PropTypes.array,
};


export default ServiceTabOne;


