import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import CloseIcon from '@material-ui/icons/Close';
import "./AlertThree.css"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function AlertThree(props) {

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


  const [showElement, setShowElement] = React.useState(true);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, props.AlertDuration);
  }, []);


  const [show,setShow]=useState(true)

  return (

    <>
      {showElement ? (
        <div>
          {
            show ?
              <div className="AlertThree" style={{ background: props.background }} in={open}>



                <div className='AlertThreeInner' style={{ maxWidth: props.maxWidth }}>

                  <div className='AlertThreeLeft'>
                    <img className='AlertThreeleftIcon' src={props.leftIcon} alt="icon" />
                    <AutoPlaySwipeableViews
                      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                      index={activeStep}
                      onChangeIndex={handleStepChange}
                      enableMouseEvents
                    >
                      {tutorialSteps.map((step, index) => (
                        <div key={step.label}>
                          {Math.abs(activeStep - index) <= 2 ? (

                            <div className='AlertThreeLeftcontents'>
                              <h3 style={{ color: props.color, }}>{step.title}</h3>
                              <p style={{ color: props.color, }}>{step.description}</p>
                              {props.ButtonStatus && <a href={step.path} target={step.target} style={{ color: props.color, }}>{props.ButtonText} <KeyboardArrowRight /></a>}
                            </div>

                          ) : null}
                        </div>
                      ))}
                    </AutoPlaySwipeableViews>
                  </div>

                  <div className='AlertThreeRight'>
                    <MobileStepper
                      className="bannerSteps"
                      steps={maxSteps}
                      position="static"
                      variant="none"
                      activeStep={activeStep}

                      nextButton={ maxSteps > 1? (
                          <div className='arrownext arrow' style={{ background: props.arrowColor, }} onClick={handleNext} disabled={activeStep === maxSteps - 1}>

                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                          </div>
                        ):('')                        
                      }

                      backButton={ maxSteps > 1? (
                        <div className='arrowback arrow' style={{ background: props.arrowColor, }} onClick={handleBack} disabled={activeStep === 0}>
                          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}

                        </div>
                      ): ('')
                    }
                    />

                    <CloseIcon className='closeIcon' style={{ color: props.color, }} onClick={() => setShow(false)} />
                  </div>

                </div>

              </div> : null
          }
        </div>

      ) : (
        <div></div>
      )}{" "}
    </>
  );
}
export default AlertThree;