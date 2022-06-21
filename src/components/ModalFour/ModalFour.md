ALERT COMPONENT

```jsx
import { ModalFour } from "master-react-lib";
import Button from '@material-ui/core/Button';

import banenr from './banner.png'

  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


<>
<Button className='TextBtnBlue' onClick={handleOpen}>Modal Four</Button>
  <ModalFour 
      open={open}
      handleClose={handleClose}
      width="920px"
      height="780px"
      title="Project details"
      img={banenr}
      imgstatus={true}
      location="New York, United States"
      Program="Covid-19"
      LocationStatus={true}
      eventTitle="Personal protective equipment (PPE)"
      eventTitleStatus={true}

      Programlink="http://localhost:3000/"

      buttonlabel="DONATE NOW"
      buttoncolor="#33B651"
      buttonarrowStatus="true"
      buttonarrowColor="#fff"
      color="#fff"
      buttonlink="http://localhost:3000/"
      target="_blank"
      buttonwidth="80%"
      buttonheight="50px"
      ButtonRadius="4px"
      textAlign="center"



      body={
        <div>
          <p>Personal protective equipment, commonly referred to as "PPE", is equipment worn to minimize exposure to hazards that cause serious workplace injuries and illnesses. These injuries and illnesses may result from contact with chemical, radiological, physical, electrical, mechanical, or other workplace hazards. Personal protective equipment may include items such as gloves, safety glasses and shoes, earplugs or muffs, hard hats, respirators, or coveralls, vests and full body suits. What can be done to ensure proper use of personal protective equipment? All personal protective equipment should be safely designed and constructed, and should be maintained in a clean and reliable fashion. It should fit comfortably, encouraging worker use. If the personal protective equipment does not fit properly, it can make the difference between being safely covered or dangerously exposed. When engineering, work practice, and administrative controls are not feasible or do not provide sufficient protection, employers must provide personal protective equipment to their workers and ensure its proper use. Employers are also required to train each worker required to use personal protective equipment to know</p>
        </div>
      }

  />


</> 
```