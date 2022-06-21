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

import { withStyles, makeStyles } from '@material-ui/core/styles';

import "../../styles/fonts.css"
import "../../styles/PricingTable.css"

function PricingTable(props) {
    const { title, subTitle, tableHeadData, tableBodyData, onSelectClick, history } = props;



    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    return (
        <div className="PricingTableContainer">
            <TableContainer component={Paper}>
                <Table>


                    <TableHead>
                        <TableRow>
                            <TableCell className="PricingPackageTitleContainerTh">
                                <div className="PricingPackageTitleContainer">
                                    <h3>{title}</h3>
                                    <p className="Tax_text"> <CheckCircleRoundedIcon />{subTitle}</p>
                                </div>
                            </TableCell>

                            {tableHeadData?.length ? tableHeadData.map((el, i) => {
                                return <TableCell>
                                    <div className={`pricingTitle ${el.theme}`}>
                                        <h1 className="prTitleName">{el.title}</h1>

                                        <div className="pricingTitleBottomBody">
                                            <div className='priceTabConInfo'>
                                                <h2><span>{el.priceSign} </span> {el.price}</h2>
                                                <p>{el.Subtitle}</p>
                                                <Link className="priceSelectButton" variant="outlined" color="secondary" href={el.link} to={el.path} target={el.target}>SELECT</Link>
                                            </div>
                                        </div>

                                    </div>
                                </TableCell>
                            }) : null}
                        </TableRow>
                    </TableHead>



                    <TableBody>

                        {tableBodyData?.length ? tableBodyData.map((el, i) => {
                            return <StyledTableRow key={i}>
                                <TableCell align="left"> {el.featureName} <Tooltip className="tooltipStyle" title="Customize your own donation form to match organization brand and embed in your website." arrow><InfoOutlinedIcon className="PrcInfoIcon" /></Tooltip></TableCell>
                                <TableCell align="center">{el.col1 === "checked" ? <CheckCircleOutlineRoundedIcon className="tableCheckIcon" /> : el.col1}</TableCell>
                                <TableCell align="center">{el.col2 === "checked" ? <CheckCircleOutlineRoundedIcon className="tableCheckIcon" /> : el.col2}</TableCell>
                                {props.colmThree && <TableCell align="center">{el.col3 === "checked" ? <CheckCircleOutlineRoundedIcon className="tableCheckIcon" /> : el.col3}</TableCell>}

                            </StyledTableRow>
                        }) : null}


                        <TableRow >
                            <TableCell align="left">
                                <div className="TextWithIcon">
                                    <Tooltip className="tooltipStyle" title="Customize your own donation form to match organization brand and embed in your website." arrow><InfoRoundedIcon className="PrcInfoIcon leftAling" /></Tooltip> <div>{props.tableFooterCellText}</div>
                                </div>
                            </TableCell>
                            <TableCell align="center">
                                <Link className="priceSelectButton BlueButton" variant="outlined" color="secondary" href={props.SelectlinkOne} target={props.target}>SELECT</Link>
                            </TableCell>
                            <TableCell align="center">
                                <Link className="priceSelectButton GreemButton" variant="outlined" color="secondary" href={props.SelectlinkTwo} target={props.target}>SELECT</Link>
                            </TableCell>
                            {props.colmThree && <TableCell align="center">
                                <Link className="priceSelectButton GreyButton" variant="outlined" color="secondary" href={props.Selectlinkthree} target={props.target}>SELECT</Link>
                            </TableCell>}
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>


        </div>

    )
}

export default PricingTable;
