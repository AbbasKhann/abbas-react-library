import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import "./TabOne.css"



function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function TabOne(props) {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (

    <div className="TabOneContainer">

      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">

          {props.tabItems && props.tabItems.length ? props.tabItems.map((item, i) => {
            return <Tab href={item.link} label={item.title} key={i} {...a11yProps(i)} />
          }) : null}

        </Tabs>
      </AppBar>

      {props.tabBody &&
        <div>
          {props.tabItems && props.tabItems.length ? props.tabItems.map((item, i) => {
            return <TabPanel key={i} value={value} index={i}> {item.body} </TabPanel>
          }) : null}
        </div>
      }

    </div>

  );
}

TabOne.propTypes = {
  tabItems: PropTypes.array,
};

export default TabOne;


