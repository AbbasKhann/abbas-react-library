ALERT COMPONENT

```jsx
import { CardFifteen  } from "master-react-lib";
import img from './img.png';
import BangladeshFlag from './Bangladesh-Flag.jpg';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';


import ModalFour   from '../ModalFour/ModalFour'

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


const cardFifteenData = [
  {
    img:img, 
    titleTop:"Covid-19",
    flag:BangladeshFlag,
    countryname:"Bangladesh",
    title:"Personal protective equipment (PPE)",
    description:"Personal protective equipment, commonly referred to as PPE, is equipment",  
    link:"#",
    onClick:handleOpen,
  },

];


<>



  <CardFifteen  
      cardFifteenData={cardFifteenData}
      col={6}
      colSpacing={2}
      titleColor="#fff"
      Titlebackground="#0B132B"
      discriptionColor="#707070"
      buttonLabel="Read More"
      //ReadmoreIcon={<ArrowForwardRoundedIcon />}
      ReadmoreColor="#FF6200"
      BottomLineColor="#FF6200"
      BottomLine={true}
      border="border"
      titleTopLeftcolor="#FF6200"



    // == Button Style =====//
    label="Make a donation"
    arrowIcon={<ArrowForwardRoundedIcon />}
    arrowStatus={true}
    arrowColor="#fff"
    buttoncolor="#33B651"
    width="100%"
    height="50px"slider
    border="#ccc 0px solid"
    borderRadius="0px"
    color="#fff"
    fontWeight="600"
    //textAlign="center"
  />



  <ModalFour 
      open={open}
      handleClose={handleClose}
      width="920px"
      height="780px"
      title="Project details"
      img={img}
      location="New York, United States"
      Program="Covid-19"
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