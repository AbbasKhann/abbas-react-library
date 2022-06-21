import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Grid from '@material-ui/core/Grid';

import "../../styles/fonts.css"
import "../../styles/ViewGallery.css"

function ViewGallery(props) {

    const { buttonText, titleText, galleryData ,} = props;


    return (
        <div className="GalleryContainer">

            <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                    <Typography className="GalleryTitle">
                        {titleText}
                    </Typography>


                    {galleryData.map((item, i) => (
                            <Typography className="GalleryDescription">
                                {item.Description} 
                            </Typography>
                    ))}

                    <Button className="ViewMoreGaleryButton" variant="outlined" color="primary" onClick={props.buttonClicked} >{buttonText}</Button>
                </Grid>

                <Grid item md={6} xs={12}>
                    {props.GalleryGrid}
                </Grid>
            </Grid>


        </div>

    )
}

export default ViewGallery;