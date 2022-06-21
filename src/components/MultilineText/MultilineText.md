ALERT COMPONENT

```jsx
import { MultilineText } from "master-react-lib";
import DoneImg from '../../../assets/img/Done.png';
import CloseIcon from '../../../assets/img/cancel.png';

const onCloseClick = () => {
  console.log("close")
}

<>
  <MultilineText
    label="Field label" 
    helperText="Helper text"
    placeholder="Enter your message here..."
    Errormessage="Error message"
    count={100}

    helpertext={true}
    errortext={false}
    count={true}
    tooltip={true}

    error="error"
  
  />
</> 
```
