import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Grid from '@material-ui/core/Grid';

import "../../styles/fonts.css"
import "./ImageGridFour.css"

function ImageGridFour(props) {

    const { images, imgGridData } = props;


    const [isOpen, setisOpen] = useState(false)

    const [photoIndex, setphotoIndex] = useState(0)




    const imageClick = (i) => {
        setphotoIndex(i)
        setisOpen(true)
    }

    return (
        <div className="ImageGridFour">

            {imgGridData.map((item, i) => (
                    <div className="GridCol">
                        <img className="" src={item.img} onClick={() => imageClick(i)} />
                    </div>
            ))}

            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setisOpen(false)}
                    onMovePrevRequest={() =>
                        setphotoIndex((photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setphotoIndex((photoIndex + 1) % images.length)
                    }
                    animationDisabled={false}
                    animationOnKeyInput={true}
                />
            )}
        </div>




    )
}

export default ImageGridFour;