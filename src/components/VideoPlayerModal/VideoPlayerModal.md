ALERT COMPONENT

```jsx
import React, {useState} from "react";
import  {VideoPlayerModal}  from "master-react-lib";
import Player from '../../../assets/img/thumb.jpg';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
    thumb:{
        cursor:"pointer",
        width:"100%",
    }

}));
const [isOpen, setOpen] = useState(false)

const classes = useStyles();
<>
  <VideoPlayerModal 
    vidoeID="L61p2uyiMSo"
    isOpen={isOpen} 
    onClose={() => setOpen(false)}
  />
  
  <div className="btn-primary" onClick={() => setOpen(true)} >
    <img className={classes.thumb} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"} />
  </div>
</>

```
