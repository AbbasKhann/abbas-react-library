import React from "react";
import Carousel from 'react-elastic-carousel'

import "../../styles/Carousel.css"




function CarouselOne(props) {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow:props.mobileview  },
    { width: 1200, itemsToShow:props.desktopview  },
  ];
  

  const { carouseldata } = props;
  return (
    <>
      <div className="CarouselContainer">
        <div className="CarouselTitle">{props.title}</div>

        <Carousel breakPoints={breakPoints}>

          {carouseldata.map((item, i) => (
            <div className="CarouselContainerItem">
              { item.sliderItem }
            </div>
          ))}

        </Carousel>
      </div>

    </>
  );
}

export default CarouselOne;
