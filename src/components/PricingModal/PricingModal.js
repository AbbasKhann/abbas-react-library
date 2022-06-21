import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
// import PricingFeatureTooltip from '../pricing-page-feature-tooltip';
import HardwareDetailsModal from '../ModalHardwareDetails/ModalHardwareDetails';
// import { discountedPrice2, discountedPriceMonthly } from '../../constants/PricingConstants';
import { TableHead, TableFooter } from '@material-ui/core';
import CustomToolTip from '../CustomToolTip/CustomToolTip.js'
import "../../styles/pricingPlan.css";

export const discountedPriceMonthly = (price, rate) => {
    if(!rate || rate === undefined) return price;
    return  parseInt(price) - (parseInt(price) * rate);
}

export const discountedPrice2 = (price, rate) => {
    if(!rate || rate === undefined) return { price, disPrice: price };
    rate = parseInt(rate) / 100;
    return {
        price: price,
        disPrice: (parseInt(price)) - (parseInt(price) * rate)
    } 
}

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

export default function PricingModal(props) {
	const [deviceCount, setdeviceCount] = useState({})
	// const [handleOpen, sethandleOpen] = useState(false)

	console.log("devicePrice is: ", props?.devicePrice);
	const {selectedPlan, handleSelectedPlan,handleSelectedPlanData, setModal, applicationInfo, devicePrice} = props;
	const classes = useStyles();
	
	const [customOptions, setcustomOptions] = useState([])

	const addToSelectedArray = (e, data) => {
		if(e.target.checked) {
			let prevSelected = [...customOptions];
			prevSelected.push({...data})
			setcustomOptions([...prevSelected])
		} else {
			let prevSelected = [...customOptions];
			prevSelected = prevSelected.filter((el) => el.name !== data.name)
			setcustomOptions([...prevSelected])
		}
	}

	useEffect(() => {
		setcustomOptions([])
	}, [selectedPlan])

	const planSelected = (planName, disPrice, planPrice, app, noOfDevicesSelected) => {
// console.log(planName, planPrice, app, noOfDevicesSelected)
		if(applicationInfo?.hardware?.length) {
			const deviceAndPlanTotal = parseInt(noOfDevicesSelected) > 0 ? disPrice + parseInt(noOfDevicesSelected) * (devicePrice ? parseInt(devicePrice) : 200) : disPrice;
			let selectedPlanData;
			if(planName.toLowerCase() === "custom"){
				selectedPlanData = {
					plan: deviceAndPlanTotal,
					planPrice: parseInt(noOfDevicesSelected) > 0 ? planPrice + parseInt(noOfDevicesSelected) * 200 : planPrice,
					total: customOptions.reduce((acc, curr) => curr.selected === true ? acc + curr.price : acc , 0), 
					stripePlanId: selectedPlan === "monthly" ? plan?.monthlyBilling?.stripePlanId : plan?.annuallyBilling?.stripePlanId,
					planData: customOptions.filter((el) => el.selected === true),
					devices: noOfDevicesSelected > 0 ? noOfDevicesSelected : 0
				};
			} else {
				let plan = applicationInfo?.plans?.length ? applicationInfo?.plans.find((plan) => plan.name.toLowerCase() === planName?.toLowerCase()) : null;
				selectedPlanData = {
					plan: planName, 
					total: deviceAndPlanTotal, 
					// planPrice: parseInt(noOfDevicesSelected) > 0 ? planPrice + parseInt(noOfDevicesSelected) * 200 : planPrice,
					planPrice,
					stripePlanId: selectedPlan === "monthly" ? plan?.monthlyBilling?.stripePlanId : plan?.annuallyBilling?.stripePlanId,
					devices: noOfDevicesSelected > 0 ? noOfDevicesSelected : 0,
					planData: plan?.features?.length ? plan.features.map((el) => {
					return { name: el.title, price: monthPriceForPlan(el)}
				}) : []};
			}
	
			handleSelectedPlanData({[app]: {...selectedPlanData}});
			setModal(false)
		} else {
			let selectedPlanData;
			if(planName.toLowerCase() === "custom"){
				selectedPlanData = {
					plan: planName,
					total: customOptions.reduce((acc, curr) => curr.selected === true ? acc + curr.price : acc , 0), 
					planData: customOptions.filter((el) => el.selected === true),
					planPrice: parseInt(noOfDevicesSelected) > 0 ? planPrice + parseInt(noOfDevicesSelected) * 200 : planPrice,
					stripePlanId: selectedPlan === "monthly" ? plan?.monthlyBilling?.stripePlanId : plan?.annuallyBilling?.stripePlanId,
				};
			} else {
				let plan = applicationInfo?.plans?.length ? applicationInfo?.plans.find((plan) => plan.name.toLowerCase() === planName?.toLowerCase()) : null;
				selectedPlanData = {
					plan: planName, 
					total: disPrice, 
					planPrice: parseInt(noOfDevicesSelected) > 0 ? planPrice + parseInt(noOfDevicesSelected) * 200 : planPrice,
					stripePlanId: selectedPlan === "monthly" ? plan?.monthlyBilling?.stripePlanId : plan?.annuallyBilling?.stripePlanId,
					planData: plan?.features?.length ? plan.features.map((el) => {
					return { name: el.title, price: monthPriceForPlan(el)}
				}) : []};
			}
	
			// console.log("select plan", selectedPlanData)
			handleSelectedPlanData({[app]: {...selectedPlanData}});
			setModal(false)
		}
	}
	
	let customPlanPrice = customOptions && customOptions.length ? customOptions.reduce((acc, curr) => curr.selected === true ? acc + curr.price : acc , 0) : 0;

	const monthPriceForPlan2 = (plan) => {
        return selectedPlan === "monthly" ? discountedPrice2(plan?.monthlyBilling?.price, plan?.monthlyBilling?.discountPercentage) : discountedPrice2(plan?.annuallyBilling?.price, plan?.annuallyBilling?.discountPercentage);        
	}

	const monthPriceForAnnualPlan = (price) => {
        return price ? (price / 12).toFixed(2) : price;    
	}
	
	const monthPriceForPlan = (data) => {
		return selectedPlan === "monthly" ? data?.monthlyBilling?.price ?? 0 : data?.annuallyBilling?.price;
	}


	const [numOfDevices, setnumOfDevices] = React.useState(0); 

	const onSelectClick = (numOfDevices, planName) => {
		console.log("numOfDevices", numOfDevices, planName)
		setdeviceCount({...deviceCount, [planName]: numOfDevices})
  	};

	// console.log("deviceCount", deviceCount)
	return (
		<div>

			<Button style={{...props.buttonStyle}} className="see-feature-btn" onClick={() =>{ props.setModal(true); }}>{props.modalButtonText}</Button>

			<Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description"
				className={classes.modal}
				open={props.openModal}
				onClose={() => props.setModal(false)}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{ timeout: 500, }}
			>
				<Fade in={props.openModal}>

					<div className="pricing-modal">
						<CloseRoundedIcon className="close_icon" onClick={() => props.setModal(false)} />
						{/* <Typography variant="body1" className="see-feature-top-bar">	
							<span className="dark-blue-circle">&nbsp;</span>
							<span className="deenkiosk-t">DEENKIOSK</span>
						</Typography> */}
						<Typography variant="body1" className="see-feature-top-bar img">
							<img src={applicationInfo?.imageMetaData?.imageUrl ?? ""} alt="DFLogoImg" />
						</Typography>
						<Typography variant="body1" className="logo_tagline">
							{applicationInfo?.shortDescription}
						</Typography>

						<Divider />

						<TableContainer component={Paper} className="modal-pricing-table kiosk-pricing-modal">
							<Table className={classes.table} aria-label="simple table">
								<TableHead>
								<TableRow>
										<TableCell scope="row" className="billed_monthly">
											<span className="monthly-l">
												Billed Monthly</span>

											<Switch onChange={handleSelectedPlan} checked={selectedPlan === "monthly" ? false : true} inputProps={{ 'aria-label': 'primary checkbox' }} />

											<span className="billed-a">Billed Annually <br />
												<span className="save-t"><i>{selectedPlan === "annually" && props.planDiscount ? `(Save ${props.planDiscount}%)` : `` }</i></span>
											</span>
										</TableCell>

										{applicationInfo?.plans?.length ? applicationInfo.plans.filter((plan) => plan.status?.toLowerCase() === "available").map((plan, i) => {
											// let price = selectedPlan === "monthly" ? plan.monthlyBilling.price : discountedPrice2(plan.monthlyBilling.price, plan?.annuallyBilling?.discountPercentage);
											let calculatedPrice = monthPriceForPlan2(plan);
											let planPrice = calculatedPrice.price;
											let disPrice = calculatedPrice.disPrice;

											let planName = plan?.name?.toLowerCase();
											let currentPlan = plan?.name?.toLowerCase() === props.currentPlanName ? true : false;

											return <TableCell key={i} align="center">
											{currentPlan && <Typography variant="body1" className="current-plan">{"Your Current Plan"}</Typography>}
											<Typography variant="body1" className={`modal-label ${currentPlan ? "modal-label-select-btn" : ""}`}>{plan.name}</Typography>
											<Typography variant="body1" className="modal-label-price">
												{
													selectedPlan === "monthly" ? `$${plan.name?.toLowerCase() === "custom" ? customPlanPrice : disPrice}` : <span><span className="cut-price">{plan?.monthlyBilling?.price ? <strike>${discountedPriceMonthly(plan?.monthlyBilling?.price, plan?.monthlyBilling?.discountPercentage) ?? 0}</strike> : null}</span>
													${monthPriceForAnnualPlan(disPrice)}</span>
												}
											</Typography>
											<Typography variant="body1" className="modal-label-plan">/month</Typography>

											<Button variant="contained" className={`${currentPlan ? "disabled-select-btn" : ""} modal-select-btn`} disabled={currentPlan} 
											onClick={() => planSelected(plan.name?.toLowerCase(), planName === "custom" ? customPlanPrice : disPrice, planPrice, applicationInfo?.name?.toLowerCase(), deviceCount[planName] ? deviceCount[planName] : 0)}>
											{plan.name?.toLowerCase() === 'free' ? 'ADD NOW' : 'SELECT'}</Button>
										</TableCell>
										}) : null}

									</TableRow>
								</TableHead>
								<TableBody className="scrollbar-width-none">
									
								{applicationInfo?.features?.length ? applicationInfo.features.map((feature, i) => {

									return <TableRow key={i}>
									<TableCell scope="row" className="most-left">
										<Typography variant="body1" className="monthly-left">
											{feature.title}
										</Typography>
										{/* <PricingFeatureTooltip title={feature.description} /> */}
										<CustomToolTip message={feature.description} infoIcon={props.infoIcon} />
									</TableCell>

									{ applicationInfo?.plans?.filter((plan) => plan.status?.toLowerCase() === "available").map((plan, i) => {
									let found = plan.features.find((el) => el.title?.toLowerCase() === feature.title?.toLowerCase())
									// console.log("found",found)
									return <TableCell key={i} align="center" className="dark-coming">
											{found?.status?.toLowerCase() === "available" && (found?.featureType?.toLowerCase() === "included" || found?.price <= 0) ? <img src={props.checkCircleIcon} alt="check-circle" /> : null } 

											{found?.status?.toLowerCase() === "available" && found?.featureType?.toLowerCase() === "add-on" && plan.name?.toLowerCase() === "custom" ? <><Checkbox name={found?.title} color="yellow" checked={customOptions.find((el) => el.name === found?.title) ? true : false} 
											onChange={(e) => addToSelectedArray(e, { name: found?.title, price: found?.price, selected: true})} 
											/> 
											{`+$${found?.price}/${found?.billingPeriod}`}</> : null }

											{found?.status?.toLowerCase() === "available" && found?.featureType?.toLowerCase() === "add-on" && found?.price > 0 ? <>{`+$${found?.price}/${found?.billingPeriod}`}</> : null }
											
											{found?.status?.toLowerCase() === "coming soon" ? "Coming Soon" : ""}
										</TableCell>
									}) }
									</TableRow>
									}) : null}


								</TableBody>

								{applicationInfo?.hardware?.length ? <TableFooter>
								<TableRow>
										<TableCell scope="row" className="most-left">
											<Typography variant="body1" className="monthly-left">

											</Typography>

										</TableCell>

										{applicationInfo?.plans?.length ? applicationInfo.plans?.filter((plan) => plan.status?.toLowerCase() === "available").map((plan, i) => {
											// let price = selectedPlan === "monthly" ? plan.monthlyBilling.price : discountedPrice2(plan.monthlyBilling.price, plan?.annuallyBilling?.discountPercentage);
											let calculatedPrice = monthPriceForPlan2(plan);
											let planPrice = calculatedPrice.price;
											let disPrice = calculatedPrice.disPrice;

											let planName = plan?.name?.toLowerCase();
											let currentPlan = plan?.name?.toLowerCase() === props.currentPlanName ? true : false;

											return <TableCell key={i} align="center" className="hardware-details-number-of-devices-input-label">
											<Typography variant="body1" className="monthly-left">
												+ Hardware $10/month per device
											</Typography>
											<Typography variant="body1" className="monthly-left">
												+ One time setup cost ${devicePrice ?? 200}/device
											</Typography>
											<Typography variant="body1" className="see-detail-btn">
												<HardwareDetailsModal 
												    numOfDevices={numOfDevices}
													setnumOfDevices={setnumOfDevices}
													deviceTitle={props.deviceTitle}
													devicePrice={props.devicePrice}
													hardwareSlideImages={props.hardwareSlideImages}
													includeInPackage={props.includeInPackage}
													hardwareFeatures={props.hardwareFeatures}
													onSelectClick={onSelectClick}
													modalButtonText={props.modalButtonText}
													modalButtonStyles={props.modalButtonStyles}
													planName={planName}
												/>
												{/* <Button className="see-feature-btn" onClick={props.onSeeDetailsClick}>SEE DETAILS <ChevronRightIcon /></Button> */}

											</Typography>
											<TextField id="outlined-basic" variant="outlined" type="number" label="Number Of Devices" className="number_select" 					
											onChange={(e) => e.target.value >= 0 ? setdeviceCount({...deviceCount, [planName]: e.target.value}) : null} 
											value={deviceCount[planName] ?? 0}  
											/>

											<Typography variant="body1">
												<Button variant="contained" className={`${currentPlan ? "disabled-select-btn" : ""} select-btn`} disabled={currentPlan} 
												onClick={() => {
													planSelected(planName, planName === "custom" ? customPlanPrice : disPrice, planPrice, applicationInfo?.name?.toLowerCase(), deviceCount[planName] ? deviceCount[planName] : 0)
												}}
												>SELECT</Button>
											</Typography>
											<Typography variant="body1" className="total-cost">
											Total: ${deviceCount[planName] ? deviceCount[planName] * 10 : 0}/mo <span className="hd_amount">+$200 hardware</span>
											</Typography>
										</TableCell>
										}) : null }
									
									</TableRow>
								</TableFooter> : null }
							</Table>
						</TableContainer>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}
