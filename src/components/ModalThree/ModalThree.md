ALERT COMPONENT

```jsx
import { ModalThree } from "master-react-lib";
import Button from '@material-ui/core/Button';




  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);





<>
<Button className='TextBtnBlue' onClick={handleOpen}>Get your order for free</Button>
  <ModalThree 

      open={open}
      handleClose={handleClose}
      width="660px"

      title="DONATE VIA ZELLE"
      titileColor="#33B651"

      body={
        <div>
          <p>ZELLE EMAIL</p>
          <a href="#">HelpCtg.USA@gmail.com</a>
        </div>
      }

  />


</> 
```