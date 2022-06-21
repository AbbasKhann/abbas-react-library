Date(dd/mm/yy) - 11/5/2020

```jsx
import { PhoneInputField } from "master-react-lib";

const [phone, setPhone] = React.useState({
  country: "",
  number: "",
});


<PhoneInputField
  phoneInputVariant={"materialui"} // default, materialui, underlineInput, underlineWithFlag
  country={'us'}
  value={phone.number}
  countryCodeEditable={false}
  onChange={(phone, country) => console.log("onChange", phone, country)}
  onBlur={() => console.log("onBlur")}
  onKeyDown={(e) => console.log("onKeyDown", e.target.value)}
  variant="outlined"
  // onlyCountries={["us", "ca", "gb", "my"]}
  containerStyle={{}}
  buttonStyle={{}}
  inputStyle={{
    marginLeft: "0px",
    height: "40px",
    width: "100%",
    fontFamily: "Roboto-Regular",
    fontSize: "16px",
  }}
  containerClass={{}}
  errorText={"Phone number is required"}
  error={false}
  errorStyles={{marginBottom: "5px"}}
  autoFormat={true}
  disableDropdown={false}
  disabled={false}
  disableCountryCode={false}
  enableSearch={false}
  disableSearchIcon={false}
  placeholder={""}
  inputProps={{}}
  specialLabel={'Primary Phone'}
  // preferredCountries={[]}
  // excludeCountries={[]}
  labelFixed="Field label"
  LabelStatus={true}
  helpertext="Helper text"
  error="error"
/>;
```
