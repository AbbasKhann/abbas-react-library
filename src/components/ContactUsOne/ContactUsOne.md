CONTACT US COMPONENT

```jsx
import { ContactUsOne } from "master-react-lib";


const onContactFormSubmit = (contactFormData) => {
  console.log("contactFormData", contactFormData);
};



<>
  <ContactUsOne 
    onContactFormSubmit={onContactFormSubmit}
    selectOptions={[{ title: "General Queries" }, { title: "Services/Activities" }, { title: "Masjid Tour" }, { title: "Donations" }, { title: " Volunteer" }, { title: "Media/Press" }]}

    disableBtn="disabled"

    //// Button Style ////
      buttonLebel="SEND MESSAGE"
      ButtonLink="https://xd.adobe.com/view/a9342815-a66f-42cf-aee5-8dc16dcb70eb-fc67/specs/"
      target="blank"
      path="/"
      arrow={false}
      arrowColor="#fff"
      buttoncolor="#0053A5"
      width="100%"
      height="47px"
      border="#ccc 0px solid"
      borderRadius="4px"
      colorlabel="#fff"
      fontWeight="600"
      textAlign="center"
  />
</> 
```
