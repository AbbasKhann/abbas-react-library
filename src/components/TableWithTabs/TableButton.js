
import React, { useState } from 'react';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
function TableButton(props) {

    return (
        <div className='TableCellContainer'>
            {props.buttons.map((row, i) => (
                <>
                    {props.buttonStatus &&
                        <TableCell align="center">
                            <Button className='tableButton'>{row.buttonlabel}</Button>
                        </TableCell>
                    }
                </>
            ))}
        </div>
    );
}

export default TableButton;