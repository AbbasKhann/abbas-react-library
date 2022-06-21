import React from 'react'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import './ModalFour.css'
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import ButtonOne from '../ButtonOne/ButtonOne'

function ModalFour(props) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <div>


      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>

          <div className='ModalFour'>

            <div className='ModalFourContainer' style={{ width: props.width }}>

              <div className='ModalFourIconCtn'>
                <h2>{props.title}</h2>
                <CloseRoundedIcon className='closeIcon' onClick={() => props.handleClose()} />
              </div>

              <div className='ModalFourMdlBody' style={{ height: props.height }}>
                {props.imgstatus &&
                  <img className='ModalFourimg' src={props.img} />
                }
                {props.eventTitleStatus &&
                  <h1 className='ModalFoureventTitle'>{props.eventTitle}</h1>
                }
                {props.LocationStatus &&
                <div className='ModalFoureventdetails'>
                  <div className='ModalFoureventdetailsinner'>
                    <h4>Location:</h4>
                    <p>{props.location}</p>
                  </div>
                  <div className='ModalFoureventdetailsinner'>
                    <h4>Program:</h4>
                    <a href={props.Programlink}>{props.Program}</a>
                  </div>
                </div>}
                <div className='ModalFourBody'>
                  {props.body}
                </div>
              </div>



            </div>

            <div className='ModalFourFooter'>
              <ButtonOne
                label={props.buttonlabel}
                link={props.buttonlink}
                target={props.target}
                path={props.path}
                arrowIcon={<ArrowForwardRoundedIcon />}
                arrowStatus={props.buttonarrowStatus}
                arrowColor={props.buttonarrowColor}
                buttoncolor={props.buttoncolor}
                width={props.buttonwidth}
                height={props.buttonheight}
                borderRadius={props.ButtonRadius}
                color={props.color}
                textAlign={props.textAlign}
              />
            </div>

          </div>

        </Fade>
      </Modal>


    </div>


  )
}






export default ModalFour;