ALERT COMPONENT

```jsx
import { AccordionThree } from "master-react-lib";
import FBicon from './icon.png';


const [expanded, setExpanded] = React.useState('1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


<>
  <AccordionThree 
    title="Who is Allah, and is He the same as God?"
    panel="1"
    expanded={expanded}
    handleChange={handleChange}

    ////// Styling ////////

    titleColor="#0053A5"
    titleFontSize="16px"
    TitleFontWeight="600"
    icon={FBicon}
    iconStatus={true}

    AccordionBody={
      <p>When Muslims talk about God, they automatically think of Allah. Allah is the Arabic word for “The One True God”. He is the Almighty, the Creator who created the universe, mankind and all other forms of life. Allah is the sustainer of life and the One who regulates all that happens in the universe. Throughout these questions, I will refer to god as Allah and so you know who I am talking about.</p>
    }

  />

  <AccordionThree 
    title="Who is Allah, and is He the same as God?"
    panel="2"
    expanded={expanded}
    handleChange={handleChange}

    ////// Styling ////////

    titleColor="#4d4d4d"
    titleFontSize="16px"
    TitleFontWeight="600"
    icon={FBicon}
    iconStatus={false}

    AccordionBody={
      <p>When Muslims talk about God, they automatically think of Allah. Allah is the Arabic word for “The One True God”. He is the Almighty, the Creator who created the universe, mankind and all other forms of life. Allah is the sustainer of life and the One who regulates all that happens in the universe. Throughout these questions, I will refer to god as Allah and so you know who I am talking about.</p>
    }

  />

  
</> 
```