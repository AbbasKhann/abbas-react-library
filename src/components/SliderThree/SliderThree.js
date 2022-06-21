import React from 'react';
import "../../styles/fonts.css"
import "./SliderThree.css"


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Link from '@material-ui/core/Link';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

function SliderThree(props) {
  const { bannerData } = props;


  return (
    <div className='SliderThree'>
      <Carousel autoPlay={true} emulateTouch={true} infiniteLoop={true} interval={8000} transitionTime={1000} swipeable={true} showThumbs={true} thumbWidth={146} swipeScrollTolerance={100}>
        
      {bannerData.map((item, i) => (
        <div>
          <img src={item.img} />
          <div className='bannerContentsWrapper'>
            <div className='bannerContentsContainer'>
              <div className="bannerContentsBG" style={{background:props.background}}></div>
              <div className="bannerContents">
                <h1> {item.title}</h1>
                {
                  item.link !== "" ?
                  <a href={item.link} target={item.target}>{item.readmore} <ArrowForwardIosRoundedIcon /></a>
                  : null
                }
              </div>

            </div>
          </div>
        </div>
        ))}


      </Carousel>
    </div>

    // https://www.npmjs.com/package/react-responsive-carousel


  );
}
export default SliderThree;