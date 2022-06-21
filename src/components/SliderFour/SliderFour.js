import React from 'react';
import "../../styles/fonts.css"
import "./SliderFour.css"


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Link from '@material-ui/core/Link';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

function SliderFour(props) {
  const { bannerData } = props;


  return (
    <div className='SliderFour'>

      <Carousel autoPlay={true} emulateTouch={true} infiniteLoop={true} interval={8000} transitionTime={1000} swipeable={true} showThumbs={false} thumbWidth={146} swipeScrollTolerance={100}>

        {bannerData.map((item, i) => (
          <div>
            <img src={item.img} style={{ height:props.SliderHieght, }} />
            <div className='bannerContentsWrapper'>
              <div className='bannerContentsContainer'>
                <div className="bannerContentsBG" style={{ background: props.background }}></div>
                <div className="bannerContents">
                  <h1> <Link href={item.link} target={item.target}>{item.title}</Link></h1>
                  <div className='SldierReadBtn'>
                    <Link
                      href={item.link}
                      target={item.target}
                      style={{ background: props.Buttonbackground, borderRadius: props.ButtonRadius, }}>
                      {item.readmore}
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}

      </Carousel>
      <div className='BottomTextSlider'>{props.BottomText}</div>
    </div>

    // https://www.npmjs.com/package/react-responsive-carousel


  );
}
export default SliderFour;