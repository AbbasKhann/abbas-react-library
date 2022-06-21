import React from 'react';
import "./PageTitleTwo.css"
import "../../styles/fonts.css"
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';


function PageTitleTwo(props) {
  const { breadcrumbsData } = props;



  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (

    <div className="PageTitleTwoMainContainer" style={{ background: props.backgroundcolor, height: props.height }}>
      <div className='backgroundPattern'><img src={props.backgroundPattern} /></div>
      <div className="PageTitleTwoTextContainer">
        <div className='PageTitleTwoMain' style={{ color: props.color }}>{props.Title}</div>

        <div className='PageSubTitleTwo' style={{ color: props.color }}>
          <Breadcrumbs aria-label="breadcrumb">
          {breadcrumbsData.map((item, i) => (
            <Link color="inherit" href={item.paht} onClick={handleClick}>
              {item.page}
            </Link>
             ))}
            <Typography color="textPrimary">{props.currentPage}</Typography>
          </Breadcrumbs>
        </div>
      </div>

    </div>

  );
}

export default PageTitleTwo;