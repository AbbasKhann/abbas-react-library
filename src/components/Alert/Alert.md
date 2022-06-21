ALERT COMPONENT

```jsx
import { Alert } from "master-react-lib";
import DoneImg from '../../../assets/img/Done.png';
import CloseIcon from '../../../assets/img/cancel.png';

const onCloseClick = () => {
  console.log("close")
}

<>
  <Alert 
    message="Your campaign has been created successfully." 
    closeIcon={CloseIcon}
    doneIcon={DoneImg}
    backgroundColor="#56B149"
    AlertDuration={800000}
    />
</> 
```
