ALERT COMPONENT

```jsx
import { TextInputFixedLabel } from "master-react-lib";
import DoneImg from '../../../assets/img/Done.png';
import CloseIcon from '../../../assets/img/cancel.png';

const onCloseClick = () => {
  console.log("close")
}

<>
  <TextInputFixedLabel 
    label="Field label"
    labelfloat="Field label"
    labelStatus={true}
    helpertext="Helper text"
    HelpertextStatus={true}
    placeholder="Placeholder"
    Errormessage="Error message"
    errortextStatus={false}
    count={100}
    countStatus={true}
    tooltipStatus={true}
    error="error"
    onChange={onChange}
    
  
  />
</> 
```
