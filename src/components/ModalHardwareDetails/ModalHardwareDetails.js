import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TextField from '@material-ui/core/TextField';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import { Carousel } from "react-responsive-carousel";
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../../styles/hardwareDetail.css"

// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

import ImageGallery from 'react-image-gallery';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',

	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

export default function ModalHardwareDetails(props) {
	const {numOfDevices, setnumOfDevices, deviceTitle, devicePrice, hardwareSlideImages, includeInPackage, hardwareFeatures, onSelectClick, modalButtonText, modalButtonStyles} = props;
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	// const handleDragStart = (e) => e.preventDefault();

	// const items = hardwareSlideImages && hardwareSlideImages.length ? hardwareSlideImages.map((el, i) => {
	// 	return <div key={i}><img src={el} onDragStart={handleDragStart} alt="deen-label" /></div>
	// }) : [];

	// const renderDotsItem = () => {
	// 	console.log("here")
	// 	// return <img src={hardwareSlideImages[0]} alt="deen-label" />
	// 	return "a"
	// }

	// const images = 
	
	// [
	// 	{
	// 	  original: 'https://picsum.photos/id/1018/1000/600/',
	// 	  thumbnail: 'https://picsum.photos/id/1018/250/150/',
	// 	},
	// 	{
	// 	  original: 'https://picsum.photos/id/1015/1000/600/',
	// 	  thumbnail: 'https://picsum.photos/id/1015/250/150/',
	// 	},
	// 	{
	// 	  original: 'https://picsum.photos/id/1019/1000/600/',
	// 	  thumbnail: 'https://picsum.photos/id/1019/250/150/',
	// 	},
	//   ];
	
	const images = hardwareSlideImages && hardwareSlideImages.length ? hardwareSlideImages.map((el, i) => {
				return {
						  original: el,
						  thumbnail: el,
					}
			}) : []

	return (
		<div>

			<Button style={{...modalButtonStyles}} className="see-feature-btn" onClick={handleOpen}>{modalButtonText}<ChevronRightIcon /></Button>

			<Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{ timeout: 500, }}
			>
				<Fade in={open}>

					<div className="hardware-details-modal">
						<div className="hardware-top-section">

							<Button variant="outlined" onClick={handleClose}> <ChevronLeftIcon /> BACK</Button>

							<span className="hd-title">Hardware details</span>
							<Typography variant="body1" className="top-label">
								Donation and fundraising platform
		          			</Typography>
							
						
							<CloseRoundedIcon className="close_icon" onClick={handleClose} />
						</div>

						<Divider />
						<div className="hardware-body-section">
							<Container maxWidth="lg">
								<Grid container spacing={4}>
									<Grid item xs={12} sm={6} md={5} lg={5}>
										{/* <Carousel>
                                            {hardwareSlideImages && hardwareSlideImages.length ? hardwareSlideImages.map((el, i) => {
                                                    return <div key={i}><img src={el} alt="deen-label" /></div>
                                                }) : null}
										</Carousel> */}

										{/* <AliceCarousel mouseTracking renderDotsItem={renderDotsItem} items={items} /> */}

										<ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} infinite={false} />

										<Typography variant="body1" className="include-t">Included in the package</Typography>
										<div className="available-packages">
                                            {includeInPackage && includeInPackage.length ? includeInPackage.map((el, i) => {
                                                    return <Fragment> <div className="package-line">
                                                                <img src={el.image} alt="player" />
                                                                <div className="package-text">
                                                                    <Typography variant="body1" className="package-title">{el.title}</Typography>
                                                                    <Button className="learn-m">LEARN MORE</Button>
                                                                </div>
                                                            </div>
                                                            <Divider className="hard-right-divider" />
                                                            </Fragment>
                                            }) : null}
											{/* <div className="package-line">
												<img src={""} alt="player" />
												<div className="package-text">
													<Typography variant="body1" className="package-title">DEENKIOSK Player</Typography>
													<Button className="learn-m">LEARN MORE</Button>
												</div>
											</div>

											<Divider className="hard-right-divider" />

											<div className="package-line">
												<img src={""} alt="player" />
												<div className="package-text">
													<Typography variant="body1" className="package-title">Touch display</Typography>
													<Button className="learn-m">LEARN MORE</Button>
												</div>
											</div> */}

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={7} lg={7} className="hardware-right-content">
										<Typography variant="body1" className="right-title">{deviceTitle}</Typography>
										<Typography variant="body1" className="price-plan">${devicePrice} <span className="light-price-color">/month per device</span></Typography>
										<Typography variant="body1" className="hardware-desc">Engage your visitors with organizations updates, announcements and much more Engage your visitors with organizations updates, announcements and much more</Typography>
										<Typography variant="body1" className="plus-one">+ One time setup cost $200/device</Typography>
										<Grid container spacing={4} className="select-btn-container">
											<Grid item xs={12} sm={12} md={6} lg={5} className="hard-select-box-cont">
												<TextField id="outlined-basic" variant="outlined" type="number" 
												 onChange={(e) => e.target.value >= 0 ? setnumOfDevices(e.target.value) : null} value={numOfDevices} />
											</Grid>
											<Grid item xs={12} sm={12} md={5} lg={6} className="select-opt">
                                                <Button variant="contained" color="primary" 
                                                onClick={() => {
													onSelectClick(numOfDevices, props.planName);
													setOpen(false);
												}} 
												disabled={numOfDevices ? false : true}
												>
													SELECT
												</Button>
											</Grid>
										</Grid>

										<Divider className="hard-right-divider" />

										<Typography variant="body1" className="feature-t">Features</Typography>

										<div className="feature-list">
											<ul>
                                                {hardwareFeatures && hardwareFeatures.length ? hardwareFeatures.map((el, i) => {
                                                    return <li key={i}>{el}</li>
                                                }) : null}
												{/* <li>24 inch LED</li>
												<li>VESA Mount</li>
												<li>Enable/disable specific Salah</li>
												<li>Search and follow Masajid</li>
												<li>Add your own Salah</li>
												<li>Enable/disable specific Salah</li> */}
											</ul>
										</div>

									</Grid>
								</Grid>
							</Container>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}