VIEW GALLERY COMPONENT

```jsx
import React, {useState} from 'react';
import { ViewGallery } from "master-react-lib";
import GalleryImg from '../../../assets/img/vew_gallery_img.png';
import Grid from '@material-ui/core/Grid';
import Lightbox from 'react-image-lightbox';

const images = [GalleryImg, GalleryImg, GalleryImg, GalleryImg, GalleryImg, GalleryImg, GalleryImg];
const titleText = "Alhamdulillah. Serving for 10 years.";
const buttonText =  "View Gallery";


const galleryData = [
    { Description: "Thursday, January 28, 2021 7:30 pm GMT-5", },
    { Description: "For purchase inquiries,", },
    { Description: "please call +1 (917) 348-6416",},    
];


const [isOpen, setisOpen] = useState(false)

    const [photoIndex, setphotoIndex] = useState(0)

       
    const imageClick = (i) => {
        setphotoIndex(i)
        setisOpen(true)
    }
                       
<>
  <ViewGallery 
    images={images} 
    titleText={titleText}
    buttonText={buttonText}
    imageClick={imageClick}

    galleryData={galleryData}

    GalleryGrid={

        <div className="PhotoGalleryContainer">
          <Grid container spacing={1}>

              <Grid item md={6} xs={12}>
                  <div className="GelleryImgContaier imgsize_268">
                      <img className="" src={images[0]} onClick={() => imageClick(0)}/>
                  </div>
              </Grid>

              <Grid item md={6} xs={12}>
                  <Grid container spacing={1}>

                      <Grid item md={6} xs={12}>
                          <div className="GelleryImgContaier imgsize_268">
                              <img className="" src={images[1]} onClick={() => imageClick(1)} />
                          </div>
                      </Grid>

                      <Grid item md={6} xs={12}>
                          <Grid container spacing={1}>

                              <Grid item md={12} xs={12}>
                                  <div className="GelleryImgContaier imgsize_130">
                                      <img className="" src={images[2]} onClick={() => imageClick(2)} />
                                  </div>
                              </Grid>

                              <Grid item md={12} xs={12}>
                                  <div className="GelleryImgContaier imgsize_130">
                                      <img src={images[3]} onClick={() => imageClick(3)} />
                                  </div>
                              </Grid>

                          </Grid>
                      </Grid>

                  </Grid>
              </Grid>


              <Grid item md={12} xs={12}>
                  <Grid container spacing={1}>

                      <Grid item md={3} xs={12}>
                          <div className="GelleryImgContaier imgsize_200">
                              <img className="" src={images[4]} onClick={() => imageClick(4)} />
                          </div>
                      </Grid>

                      <Grid item md={6} xs={12}>
                          <div className="GelleryImgContaier imgsize_200">
                              <img src={images[5]} onClick={() => imageClick(5)} />
                          </div>
                      </Grid>
                      <Grid item md={3} xs={12}>
                          <div className="GelleryImgContaier imgsize_200">
                              <img className="" src={images[6]} onClick={() => imageClick(6)} />
                          </div>
                      </Grid>

                  </Grid>
              </Grid>

          </Grid>

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

    }





  />
</> 
```
