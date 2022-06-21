ALERT COMPONENT

```jsx
import { PackageCard } from "master-react-lib";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';


const cardFunction = (value) => {
  (value) && console.log("clicked");
};

<PackageCard 
  cardFunction={cardFunction} 
  header={"Group A"}
  dayText="21 Days"
  body={"Publish to app or services"}
  color="#0590FA"
  icon={<LocalShippingIcon />}
  buttonLabel="Package Details"
  Link={true}
  cardIconStatus={true}
/>