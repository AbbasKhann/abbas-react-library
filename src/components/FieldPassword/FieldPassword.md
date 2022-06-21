Date(dd/mm/yy) - 11/5/2020

```jsx
import { FieldPassword } from "master-react-lib";
import Right from './done-14px.svg';
import Close from './clear-24px.svg';
const [values, setValues] = React.useState({
  password: "",
  showPassword: false,
});

const handleChange = (prop) => (event) => {
  setValues({ ...values, [prop]: event.target.value });
};

<FieldPassword
  value={values.password}
  onChange={handleChange("password")}
  tick={Right}
  close={Close}
  PasswordStrong={true}
/>;
```
