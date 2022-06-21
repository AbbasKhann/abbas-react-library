import React from "react";
import Carousel from 'react-elastic-carousel'
import Item from './Item'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

import "../../styles/fonts.css"
import "../../styles/Carousel.css"



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];

function HajjReadings(props) {
  const { carouselItems, title } = props;

  return (
    <>
      <div className="CarouselContainer">
        <div className="CarouselTitle">{title}</div>

        <Carousel breakPoints={breakPoints}>
          {carouselItems?.length ? carouselItems.map((item, i) => {
              return <Item key={i}>
              <div className="HajjReadingListContainer Card">
                <div className="ImgContainer"><img src={item.image} alt="item" /></div>
                  <Typography className="HajjReadingDescription">
                    {item.description}
                  </Typography>
                <Link href={item.link} className="CardReadmore">READ MORE <ArrowForwardIosRoundedIcon /> </Link>
              </div>
            </Item>
          }) : null}

        </Carousel>
      </div>

    </>
  );
}

export default HajjReadings;