import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, } from '@material-ui/core/styles';

import "./SalatTable.css"

function SalatTable(props) {
    const { tableBodyData, } = props;



    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: props.odd,
            },

            '&:nth-of-type(even)': {
                backgroundColor: props.even,
            },

            '& .MuiTableCell-root': {
                borderBottom: props.colBorder,
                padding:props.ColPadding,
            }, 
        },
    }))(TableRow);

    return (

        <div className="SalatTableContainer" style={{ border: props.tbaleBorder, background: props.TableBackground }}>

            {props.tabletitleStatus && <div className="SalatTaleTitle" style={{ color: props.TitleColor, background: props.TitleBackground }}>{props.TableTitle}</div>}
            <TableContainer >
                <Table>
                    <TableBody>

                        {tableBodyData?.length ? tableBodyData.map((el, i) => {
                            return <StyledTableRow key={i}>
                                <TableCell align="left" style={{ color: props.col1Color, fontWeight: props.col1fontWeight, fontSize: props.ColfontSizet, }}><div className='SlatNmaeCtn'>{el.icon}{el.col1}</div></TableCell>
                                <TableCell align="right" style={{ color: props.col2Color, fontWeight: props.col2fontWeight, fontSize: props.ColfontSizet, }}>{el.col2}</TableCell>
                            </StyledTableRow>
                        }) : null}

                    </TableBody>
                </Table>
            </TableContainer>
            {props.footerTextStatus && <div className="SlatTableFooter" style={{marginTop:props.bottomTextSpace }}>{props.footerText}</div>}
        </div>


    )
}

export default SalatTable;
