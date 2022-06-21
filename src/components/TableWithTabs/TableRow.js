
import React, { useState } from 'react';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
function TableRwo(props) {

    return (
        <div className='TableCellContainer'>
            {props.rows.map((row, i) => (
                <TableCell align="center">
                    {row.label} 
                </TableCell>
            ))}
        </div>
    );
}

export default TableRwo;