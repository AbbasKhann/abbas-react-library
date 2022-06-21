// <<<<<<< HEAD
// import React from 'react';

// import "./CardSeven.css"
// import "../../styles/fonts.css"

// import ArrowRightIcon from "@material-ui/icons/ArrowRightAlt";
// import eventPattern from './EventPattern.png';

// function CardSeven (props) {
//     const { 
//         cardData,
//         buttonLabel,
//         color,
//      } = props;

//     return (
//         <a href={cardData.link}>
//             <div className="CardSevenMainContainer">
//                 <div className="CardSevenRow">
//                     <div className="CardSevenLeftColumn" style={(cardData.image && 
//                         cardData.image !== "") && { backgroundImage: `url('${cardData.image}')` }}></div>
//                     <div className="CardSevenRightColumn">
//                         <div className="CardSevenDateTimeRow">
//                             <div className="CardSevenDateTimeLeftColumn">
//                                 <h1 className="CardSevenDay">21</h1>
//                             </div>
//                             <div className="CardSevenDateTimeRightColumn">
//                                 <h1 className="CardSevenDate">AUG, 2021<br />
//                                     <span className="CardSevenTime">7:30 AM (EST)</span>
//                                 </h1>
//                             </div>
//                         </div>
//                         <h1 className="CardSevenTitle">Are Hadith Necessary? An Examination of the Authority of Hadith in Islam</h1>
//                         <h1 className="CardFiveViewDetails">READ MORE<ArrowRightIcon /></h1>
//                     </div>
//                 </div>
//             </div>
//         </a>
//     );
// }

// export default CardSeven;
// =======
// import React from "react";
// import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
// import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
// import "./CardSeven.css"




// function CardSeven(props) {

//   return (
//     <>
      
//           <Link href={props.link} className="CardSevenContainer" target="blank">
//               <div className="UpcomingEventImg"><img src={props.image} alt="eventImg" /></div>
//               <div className="UpcomingEventContents">
//                 <Typography className="EventCardTitle GreenText" variant="h1" component="h1" gutterBottom>{props.time}</Typography>
//                 <Typography className="EventCardSubTitle" variant="h1" component="h1" gutterBottom>{props.title}</Typography>
//                 <Typography className="EventCardSubText">{props.subTitle}</Typography>
//                 <span className="CardReadmore">{props.buttonText} <ArrowForwardIosRoundedIcon /> </span>
//               </div>
//           </Link>
   


//     </>
//   );
// }

// export default CardSeven;
// >>>>>>> 73bf3235ba438e77eb53cf8aa8df50af887504b1
