import React from 'react'
import { Container, Box, Tabs, Tab, Typography, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import "../../styles/fonts.css"
import "../../styles/publishSteps.css"


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
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
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
  
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
            display: 'flex',
            height: 224,
        },
        tabs: {
            borderRight: `1px solid ${theme.palette.divider}`,
        },
    }));
    
function VerticalTabs(props) {
        const classes = useStyles();
        const [value, setValue] = React.useState(0);

        const handleChange = (event, newValue) => {
            setValue(newValue);
        };
    

        return(
            <Box className="PublishStepsContainer">
                <Container maxWidth="lg">
                    
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        >
                            {props.tabItems && props.tabItems.length ? props.tabItems.map((item, i) => {
                                return <Tab key={i} label={item.title} icon={<FiberManualRecordIcon />} {...a11yProps(i)}/>
                            }) : null}

                    </Tabs>
                    {props.tabItems && props.tabItems.length ? props.tabItems.map((item, i) => {
                            return <TabPanel key={i} value={value} index={i} className="tabpanel">
                                {item.component}
                            </TabPanel> 
                    }) : null}

                    
                </Container>
            </Box>
        )

}

VerticalTabs.propTypes = {
    tabItems: PropTypes.array,
};


export default VerticalTabs;