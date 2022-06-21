VERTICAL TABS COMPONENT

```jsx
import { ServiceTabOne } from "master-react-lib";
import background from './services_bg.jpg'


const tabItems = [
      { 
        title: "DAILY AND JUMU'AH PRAYERS", 
        TabPanelTitle:"DAILY AND JUMU'AH PRAYERS",
        TabPanelPara: <div>
        <p>The BIC Masjid is open for the 5 daily prayers including the Friday Jumu’ah (congregational) prayers. The Jumu’ah prayers are led by well-renowned Sheiks of diverse ethnicities and schools of thought aiming to maintain unity amidst diversity. The Masjid also consists of a separate floor dedicated for the sisters to engage in prayers and various other activities.</p>

        <p>The Prophet Muhammad (PBUH) said, "The best day during which the sun have risen is Friday. It is the Day Adam was created. It is the day when Adam entered paradise and also when he was taken out from it. It is also the day on which the Day of Judgment takes place." [Sahih Muslim]</p>
        </div> 
      
      },

      { 
        title: "RAMADHAN IFTAR AND TARAWIH", 
        TabPanelTitle:"RAMADHAN IFTAR AND TARAWIH",
        TabPanelPara: <div>
        <p>The BIC Masjid is open for the 5 daily prayers including the Friday Jumu’ah (congregational) prayers. The Jumu’ah prayers are led by well-renowned Sheiks of diverse ethnicities and schools of thought aiming to maintain unity amidst diversity. The Masjid also consists of a separate floor dedicated for the sisters to engage in prayers and various other activities.</p>

        <p>The Prophet Muhammad (PBUH) said, "The best day during which the sun have risen is Friday. It is the Day Adam was created. It is the day when Adam entered paradise and also when he was taken out from it. It is also the day on which the Day of Judgment takes place." [Sahih Muslim]</p>
        </div> 
      
      },

      { 
        title: "EID PRAYERS", 
        TabPanelTitle:"EID PRAYERS",
        TabPanelPara: <div>
        <p>The BIC Masjid is open for the 5 daily prayers including the Friday Jumu’ah (congregational) prayers. The Jumu’ah prayers are led by well-renowned Sheiks of diverse ethnicities and schools of thought aiming to maintain unity amidst diversity. The Masjid also consists of a separate floor dedicated for the sisters to engage in prayers and various other activities.</p>
        </div> 
      
      },

      { 
        title: "MONTHLY/WEEKLY FAMILY NIGHT", 
        TabPanelTitle:"MONTHLY/WEEKLY FAMILY NIGHT",
        TabPanelPara: <div>
        <p>The BIC Masjid is open for the 5 daily prayers including the Friday Jumu’ah (congregational) prayers. The Jumu’ah prayers are led by well-renowned Sheiks of diverse ethnicities and schools of thought aiming to maintain unity amidst diversity. The Masjid also consists of a separate floor dedicated for the sisters to engage in prayers and various other activities.</p>
        </div> 
      
      },

      { 
        title: "WEEKEND & SUMMER SCHOOL", 
        TabPanelTitle:"WEEKEND & SUMMER SCHOOL",
        TabPanelPara: <div>
        <p>The BIC Masjid is open for the 5 daily prayers including the Friday Jumu’ah (congregational) prayers. The Jumu’ah prayers are led by well-renowned Sheiks of diverse ethnicities and schools of thought aiming to maintain unity amidst diversity. The Masjid also consists of a separate floor dedicated for the sisters to engage in prayers and various other activities.</p>
        </div> 
      
      },

      { 
        title: "HAJJ SEMINAR", 
        TabPanelTitle:"HAJJ SEMINAR",
        TabPanelPara: <div>
        <p>The BIC Masjid is open for the 5 daily prayers including the Friday Jumu’ah (congregational) prayers. The Jumu’ah prayers are led by well-renowned Sheiks of diverse ethnicities and schools of thought aiming to maintain unity amidst diversity. The Masjid also consists of a separate floor dedicated for the sisters to engage in prayers and various other activities.</p>
        </div> 
      
      },



];

<>
  <ServiceTabOne 
    tabItems={tabItems}  
    backgroundImg={background}
    TabBackground="#0053A5"
    DotColor="#0053A5"
    tabActivelabelcolor="#0053A5"
  />
</>
```
