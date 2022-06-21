VIEW GALLERY COMPONENT

```jsx
import React, {useState} from 'react';
import { ImageGridFour } from "master-react-lib";
import Grid from '@material-ui/core/Grid';
import Lightbox from 'react-image-lightbox';

import img_1 from './img_1.png';
import img_2 from './img_2.png';
import img_3 from './img_3.png';
import img_4 from './img_4.png';
import img_5 from './img_5.png';

const images = [img_1, img_2,img_3,img_4,img_5,img_5,img_1, img_2 ];

const imgGridData =[
    {img:img_1,},
    {img:img_2,},
    {img:img_3,},
    {img:img_4},
    {img:img_5},
    {img:img_5},
    {img:img_1,},
    {img:img_2,},
];

 const imageClick = (i) => {
        setphotoIndex(i)
        setisOpen(true)
    }
                       
<>
  <ImageGridFour 
    images={images} 
    imageClick={imageClick}
    imgGridData={imgGridData}


  />
</> 
```
