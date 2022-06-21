import React from 'react'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import './ModalThree.css'

function ModalThree(props) {

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

          <div className='ModalThree'>

            <div className='ModalThreeContainer' style={{width:props.width}}>

                <div className='ModalThreeIconCtn'>
                  <CloseRoundedIcon className='closeIcon' onClick={() => props.handleClose()} />
                </div>

                <div className='ModalThreeMdlBody'>
                  <h2 style={{color:props.titileColor}}>{props.title}</h2>
                  {props.body}
                </div>



              </div>
            </div>

        </Fade>
      </Modal>


    </div>


  )
}






export default ModalThree;