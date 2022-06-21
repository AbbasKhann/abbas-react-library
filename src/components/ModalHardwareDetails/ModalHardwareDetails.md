HARDWARE DETAILS MODAL COMPONENT

```jsx
import { ModalHardwareDetails } from "master-react-lib";
import HardwareSlide1 from '../../../assets/img/hard-slide1.png';
import Player from '../../../assets/img/player.png';

  const [numOfDevices, setnumOfDevices] = React.useState(0); 

	const onSelectClick = () => {
		console.log("numOfDevices", numOfDevices)
  };
  
  const hardwareSlideImages = [
    HardwareSlide1, HardwareSlide1, HardwareSlide1, HardwareSlide1, HardwareSlide1
  ];

  const includeInPackage = [
    { title: "DEENKIOSK Player", image: Player}, 
    { title: "Touch Display", image: Player}, 
  ];

  const hardwareFeatures = ["24 inch LED", "VESA Mount", "Enable/disable specific Salah", "Search and follow Masajid", "Add your own Salah", "Enable/disable specific Salah"];

<>
  <ModalHardwareDetails 
    numOfDevices={numOfDevices}
    setnumOfDevices={setnumOfDevices}
    deviceTitle={"DEENKIOSK Player"}
    devicePrice={10}
    hardwareSlideImages={hardwareSlideImages}
    includeInPackage={includeInPackage}
    hardwareFeatures={hardwareFeatures}
    onSelectClick={onSelectClick}
    modalButtonText={"SEE DETAILS"}
    modalButtonStyles={{background: "grey", color: "white"}}
  />
</> 
```
