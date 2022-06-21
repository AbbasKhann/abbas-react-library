import React from 'react'
import ModalVideo from 'react-modal-video'
import '../../styles/VidoeModal/modal-video.css';


function VideoPlayerModal(props) {

    
    return (
        <div>
            <ModalVideo channel='youtube' autoplay isOpen={props.isOpen} videoId={props.vidoeID} onClose={props.onClose} />
        </div >
);
}

export default VideoPlayerModal;