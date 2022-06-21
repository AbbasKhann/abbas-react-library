import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ButtonOne from "../ButtonOne/ButtonOne"



import "./SliderSeven.css"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SliderSeven(props) {

  const { tutorialSteps } = props;


  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (

    <div className="SliderSeven">


      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label} className="BannerImgContainer" style={{ height:props.SliderHieght, }}>

            {Math.abs(activeStep - index) <= 2 ? (
              <div className="MainBannerInner">
                <img className="BannerImg" src={step.imgPath} alt={step.label} />
                <div className="BannerText" style={{background:props.Contentbackground}}>
                  <h3 style={{ color: props.subtitleColor }}>{step.subtitle}</h3>
                  <h2>{step.title}</h2>
                  <p className='bannerDescrition'>{step.discription}</p>

                  {step.Buttonstatus && 
                  <ButtonOne
                    label={step.buttonlabel}
                    link={step.link}
                    target={step.target}
                    path={props.path}
                    arrowIcon={props.arrowIcon}
                    arrowStatus={props.arrowStatus}
                    arrowColor={props.ButtonarrowColor}
                    buttoncolor={props.buttoncolor}
                    width={props.width}
                    height={props.height}
                    border={props.border}
                    borderRadius={props.borderRadius}
                    color={props.color}
                    textAlign={props.textAlign}
                  />
                }
                </div>
              </div>

            ) : null}
          </div>

        ))}
      </AutoPlaySwipeableViews>

      <div className='SliderArrobody' style={{ background: props.ArrowContainerBg }}>
        <MobileStepper
          className="bannerSteps"
          steps={maxSteps}
          position="static"
          variant="none"
          activeStep={activeStep}

          nextButton={
            <Button className='arrownext arrow' style={{ background: props.arrowBgColor, borderRadius: props.borderRadius }} onClick={handleNext} disabled={activeStep === maxSteps - 1}>

              {theme.direction === 'rtl' ? <span style={{ color: props.arrowColor, }}>{props.leftArrowIcon}</span> : <span style={{ color: props.arrowColor, }}>{props.RightArrowIcon}</span>}
            </Button>
          }

          backButton={
            <Button className='arrowback arrow' style={{ background: props.arrowBgColor, borderRadius: props.borderRadius }} onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <span style={{ color: props.arrowColor, }}>{props.RightArrowIcon}</span> : <span style={{ color: props.arrowColor, }}>{props.leftArrowIcon}</span>}

            </Button>
          }
        />
      </div>

    </div>
  );
}
export default SliderSeven;