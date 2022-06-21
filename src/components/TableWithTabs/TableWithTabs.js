import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import Tooltip from '@material-ui/core/Tooltip';

import { withStyles } from '@material-ui/core/styles';



import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import TableRwo from "./TableRow"
import TableButton from "./TableButton"


import "./TableWithTabs.css"

function TableWithTabs(props) {
    const { title, subTitle, tableHeadData, tableBodyData, onSelectClick, history } = props;



    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(even)': {
                backgroundColor: "#FCFCFC",
            },
        },
    }))(TableRow);





    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };



    return (
        <div className="TableWithTabsContainer">

            <div className='TableWithTabTitleandTabContainer'>
                <div className='TableWithTabsTableTitle'>Ramadan 2021</div>
                <div className='TableWithTabsTabContainer'>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label="FIRST 10 DAYS" {...a11yProps(0)} />
                            <Tab label="MID 10 DAYS" {...a11yProps(1)} />
                            <Tab label="LAST 10 DAYS" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                </div>
            </div>


            <TabPanel value={value} index={0} dir={theme.direction}>
                <TableContainer component={Paper}>
                    <Table>

                        <TableHead>
                            <TableRow>

                                {tableHeadData?.length ? tableHeadData.map((el, i) => {
                                    return <TableCell>
                                        <div className='Tablehead' style={{ width: el.width }}>{el.title}</div>
                                    </TableCell>
                                }) : null}
                            </TableRow>
                        </TableHead>



                        <TableBody>

                            {tableBodyData?.length ? tableBodyData.map((el, i) => {
                                return <StyledTableRow key={i}>
                                    <TableRwo rows={el.rows} />
                                    <TableButton 
                                        buttons={el.buttons}
                                        buttonStatus={props.buttonStatus}
                                        
                                    />
                                    
                                </StyledTableRow>
                            }) : null}

                        </TableBody>
                    </Table>
                </TableContainer>
            </TabPanel>

            <TabPanel value={value} index={1} dir={theme.direction}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                Item Three
            </TabPanel>






        </div>

    )
}

export default TableWithTabs;



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div>
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
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

