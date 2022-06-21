ALERT COMPONENT

```jsx
import React, { useState } from "react";
import { VidoeListingCardOne } from "master-react-lib";
import img from './img.png';
import playIcon from './playIcon.png';
import VideoPlayerModal from "../VideoPlayerModal/VideoPlayerModal"

const [isOpen, setOpen] = useState(false)

const videoListingOneData = [

  {
    img:img,
    title:"The Hajj Pilgrimage and Its Significance in Islam",
    date:"MAR 10, 2021",
    views:"157 VIEWS",
    path:"",
    link:"#",
    videoId:"L61p2uyiMSo",
    onclick:() => setOpen(true)
  },

   {
    img:img,
    title:"The Hajj Pilgrimage and Its Significance in Islam",
    date:"MAR 10, 2021",
    views:"157 VIEWS",
    path:"",
    link:"#",
    videoId:"B_UQ7iKZjRg",
    onclick:() => setOpen(true)
  },

  {
    img:img,
    title:"The Hajj Pilgrimage and Its Significance in Islam",
    date:"MAR 10, 2021",
    views:"157 VIEWS",
    path:"",
    link:"#",
    onclick:() => setOpen(true)
  },

];




<>

  <VidoeListingCardOne 
      videoListingOneData={videoListingOneData}
      col="6"
      spacing="2"
      playicon={playIcon}
  />

    <VideoPlayerModal
      vidoeID="B_UQ7iKZjRg"
      isOpen={isOpen}
      onClose={() => setOpen(false)}
    />


</> 
```