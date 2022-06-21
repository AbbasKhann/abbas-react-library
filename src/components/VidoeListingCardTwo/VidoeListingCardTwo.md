ALERT COMPTwoNT

```jsx
import React, { useState } from "react";
import { VidoeListingCardTwo } from "master-react-lib";
import img from './img.png';
import playIcon from './playIcon.png';

import VideoPlayerModal from "../VideoPlayerModal/VideoPlayerModal"

const [isOpen, setOpen] = useState(false)

const videoListingTwoData = [

  {
    img:img,
    title:"Story of a Ruler and a Scholar",
    subtitle:"BIC ADMIN",
    date:"MAR 10, 2021",
    views:"157 VIEWS",
    path:"",
    onclick:() => setOpen(true)
  },
   {
    img:img,
    title:"Story of a Ruler and a Scholar",
    subtitle:"BIC ADMIN",
    date:"MAR 10, 2021",
    views:"157 VIEWS",
    path:"",
    onclick:() => setOpen(true)
  },

];


<>

  <VidoeListingCardTwo 
      videoListingTwoData={videoListingTwoData}
      col="12"
      spacing="1"
      Thumnailwidth=""

      playicon={playIcon}
      playiconStatus={true}
      borderLine={true}
  />

  <VideoPlayerModal
      vidoeID="B_UQ7iKZjRg"
      isOpen={isOpen}
      onClose={() => setOpen(false)}
    />


</> 
```