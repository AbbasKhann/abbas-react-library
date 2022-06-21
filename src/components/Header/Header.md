HEADER COMPONENT

```jsx
import { Header } from "master-react-lib";
import Logo from '../../../assets/img/DF_Logo_2020.png';
import SearchIcon from '@material-ui/icons/Search';

const headerItems = [
    {
        title: "START FUNDRAISING",
        path: "/",
      },
      {
        title: "ORGANIZATION",
        path: "/",
        children: [{
            title: "ORGANIZATION",
            path: "/",
        }]
      },
      {
        title: "HOW IT WORKS",
        path: "/",
      },
      {
        title: "Search",
        path: "/",
        icon: <SearchIcon />,
      },
];

const dropdownItems = [
      { title: "My campaigns", path: "/" },
      { title: "My donations", path: "/" },
      { title: "Organizations", path: "/" },
      { title: "Payment methods", path: "/" },
      { title: "Edit Profile", path: "/" },
      { title: "Logout", path: "/" },
]

const showSearchInput = true;

const navigate = (path) => {
  console.log(path)
}


<>
  <Header 
    logo={Logo} 
    headerItems={headerItems} 
    showSearchInput={showSearchInput}
    dropdownItems={dropdownItems}
    navigate={navigate}
    headerSignupButton={true}
    />
</> 
```
