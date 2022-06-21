ALERT COMPONENT

```jsx
import { CTAEight } from "master-react-lib";
import ModalThree  from "../ModalThree/ModalThree"

import Df from './Df.png';
import Paypal from './paypal.svg';
import Zelle from './Zelle.png';
import Chase from './Chase.png';


    const [OpenZelle, setOpenZelle] = React.useState(false); 
    const handleOpenZelle = () => setOpenZelle(true);
    const ZellehandleClose = () => setOpenZelle(false);

    const [OpenQuickPay, setOpenQuickPay] = React.useState(false);
    const handleOpenQuickPay = () => setOpenQuickPay(true);
    const QuickPayhandleClose = () => setOpenQuickPay(false);

    const [OpenSendCheck, setOpenSendCheck] = React.useState(false);
    const handleSendCheck = () => setOpenSendCheck(true);
    const SendCheckhandleClose = () => setOpenSendCheck(false);


const cTAEightData =[
  { icon:Df, link:"https://www.paypal.com/us/signin", target:"_blank"},
  { icon:Paypal, link:"https://www.paypal.com/us/signin"},
  
  { icon:Zelle, onClick: handleOpenZelle,}, 
  { icon:Chase, onClick: handleOpenQuickPay, TitleafterLogo:"QuickPay"},
  { lebel:"SEND CHECK BY MAIL", onClick: handleSendCheck,},
];


<>
  <CTAEight 
      cTAEightData={cTAEightData}
      backgroundColor="#2DA047"
      backgroundColorRight="#33B651"
      color="#fff"
      btnlebelcolor="#33B651"

      Title="MANY WAYS TO SUPPORT HHC"
      SubTitle="Al-Tirmidhi"
      ButtonLebel="DONATE NOW"
      minHeight="250px"

      //=== left col content ===/
      TitleLeft="SUPPORT HHC"
      LeftDescription="The Prophet ﷺ said, the most beloved of deeds to Allah are those that are most consistent, even if it is small."
      bookname="(Sahih Bukhari)"
      LeftBottomText="Please donate $5-$10/ every month Auto recurring by DEENFUND"

  />

   <ModalThree 
      open={OpenZelle}
      handleClose={ZellehandleClose}
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

  <ModalThree 
      open={OpenQuickPay}
      handleClose={QuickPayhandleClose}
      width="660px"
      title="DONATE VIA CHASE QUICKPAY"
      titileColor="#33B651"

      body={
        <div>
          <p>EMAIL</p>
          <a href="#">HelpCtg.USA@gmail.com</a>
        </div>
      }

  />

  <ModalThree 
      open={OpenSendCheck}
      handleClose={SendCheckhandleClose}
      width="660px"
      title="SEND CHECK BY MAIL"
      titileColor="#33B651"

      body={
        <div>
          <p>CHECK PAYABLE TO :</p>
          <a href="#">Helping Hand For Chittagonian</a>
        </div>
      }

  />

  
</> 
```