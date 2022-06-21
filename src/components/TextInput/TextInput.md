ALERT COMPONENT

```jsx
import { TextInput } from "master-react-lib";
import DoneImg from '../../../assets/img/Done.png';
import CloseIcon from '../../../assets/img/cancel.png';

const onCloseClick = () => {
  console.log("close")
}

<>
  <TextInput 
    label="Field label"
    helperText="Helper text"
    error=""
    placeholder="Placeholder"
    count={100}
    count={true}
    tooltip={true}
    onChange={onChange}
    focusColor="#56b149"

  />
</> 
```
