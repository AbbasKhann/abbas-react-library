ALERT COMPONENT

```jsx
import { VideoCardOne } from "master-react-lib";
import img from './img.png';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded';




<>

  <VideoCardOne 
  
      img={img}
      title="Meet muslim genius teaching math in leicester at 14"
      link="#" 
      titleColor="#0A2540"
      buttonLabel="View Details"
      ReadmoreIcon={<ArrowForwardRoundedIcon />}
      ReadmoreColor="#676C7B"
      border="border"
      icon={<PlayCircleOutlineRoundedIcon />}
      ImgHeight="400px"
  />

  <VideoCardOne 
      img={img}
      title="Meet muslim genius teaching math in leicester at 14"
      link="#" 
      titleColor="#fff"
      Titlebackground="#0B132B"
      buttonLabel="View Details"
      ReadmoreIcon={<ArrowForwardRoundedIcon />}
      ReadmoreColor="#00D4FF"
      BottomLineColor="#FF6200"
      BottomLine={true}
      border="border"
      border="underline"
      icon={<SubscriptionsRoundedIcon />}
      ImgHeight="400px"
  />

  <VideoCardOne 
    img={img}
      title="Meet muslim genius teaching math in leicester at 14"
      link="#" 
      ImgSpace="3px"
      titleColor="#0A2540"
      buttonLabel="View Details"
      ReadmoreIcon={<ArrowForwardIosRoundedIcon />}
      ReadmoreColor="#676C7B"
      border="underline"
      icon={<PlayCircleOutlineRoundedIcon />}
      ImgHeight="400px"
  />


</> 
```