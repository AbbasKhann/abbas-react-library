import PropTypes from 'prop-types'
import React, { useEffect, useState } from "react";
import { Typography, Container, Box } from '@material-ui/core';
import { Fragment } from 'react';
import './Alert.css'


function Alert(props) {
    const { closeIcon, doneIcon, onCloseClick, } = props;


    const [showElement, setShowElement] = React.useState(true);
    useEffect(() => {
        setTimeout(function () {
            setShowElement(false);
        }, props.AlertDuration);
    }, []);


    const [show, setShow] = useState(true)

    return (
        <Fragment>
            {showElement ? (

                <div>
                    {
                        show ?

                            <div className="SuccessAlertContainer" style={{ backgroundColor: props.backgroundColor }}>
                                <Container maxWidth="lg">
                                    <Box className="SuccessAlertText">
                                        <Box>
                                            <img src={doneIcon} alt="check" />
                                            <Typography variant="body1" className="SuccessAlertcheckText">{props.message}</Typography>
                                        </Box>

                                        <Box className="SuccessAlertcrossImg">
                                            <img src={closeIcon} alt="cancel" onClick={() => setShow(false)} />
                                        </Box>
                                    </Box>
                                </Container>
                            </div>

                            : null
                    }
                </div>


            ) : (
                <div></div>
            )}{" "}
        </Fragment>
    );
}

Alert.propTypes = {
    message: PropTypes.string,
    onCloseClick: PropTypes.func,
    show: PropTypes.bool
};


export default Alert;