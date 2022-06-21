SelectFieldOne

```jsx

import { SelectFieldOne } from "master-react-lib";

    const selectdata =[
        {value:1, select:"About Us Page"},
        {value:2, select:"Services Page"},
        {value:3, select:"Contact Us Page"},
        {value:4, select:"Announcement Page"},
        {value:5, select:"Salah Page"},
        {value:6, select:"Events Page"},
        {value:7, select:"Donation Form"},
        {value:8, select:"Subscription Form"},
    ];

    const handleChange = (event, value) => {
        console.log(event.target.value, value);
    };

    <SelectFieldOne  
        label="Field label"
        selectdata={selectdata}
        defaultValue={1}
        handleChange={handleChange}
        error="error"
    />
```