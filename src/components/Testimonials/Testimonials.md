Testimonials COMPONENT

```jsx
import { Testimonials , SlideButton , VideoComponent } from "master-react-lib";

const users = [
  {
    id: 1,
    title: 'What Community Leaders Are Saying',
    description:"Startup institute is a career accelerator that allows proffesionals to learn new skill. that allows proffesionals to learn new skill.",
    name: "Imam Shayad Mahmud",
    address: "Islamic Center of Michigan, Brooklyn, NY",
    video: "https://i.pinimg.com/originals/bd/6a/eb/bd6aeb4dc105d77dc4e19b48ea124359.jpg",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"
  },
  {
    id: 2,
    title: "What Community Leaders",
    description:"Startup institute is a career accelerator that allows proffesionals to learn new skill.",
    name: "Muhammad Abubaker Siddiq",
    address: "Islamic Center of Michigan, Brooklyn, NY",
    video: "https://wallpapercave.com/wp/wp2789145.jpg",
    img: "https://wallpapercave.com/wp/wp2762057.jpg"
  },
  {
    id: 3,
    title: "What Community Leaders Are Saying",
    description:"Startup institute is a career accelerator that allows proffesionals to learn new skill.",
    name: "Israr Ali",
    address: "Islamic Center of Michigan, Brooklyn, NY",
    video: "https://i.pinimg.com/originals/bd/6a/eb/bd6aeb4dc105d77dc4e19b48ea124359.jpg",
    img: "https://wallpapercave.com/wp/wp2789145.jpg"
  },
  {
    id: 4,
    title: "What Community Leaders Are Saying",
    description:"Startup institute is a career accelerator that allows proffesionals to learn new skill.",
    name: "Absar Ali",
    address: "Islamic Center of Michigan, Brooklyn, NY",
    video: "https://i.pinimg.com/originals/bd/6a/eb/bd6aeb4dc105d77dc4e19b48ea124359.jpg",
    img: "https://material-ui.com/static/images/avatar/1.jpg"
  },
  {
    id: 5,
    title: "What Community Leaders Are Saying",
    description:"Startup institute is a career accelerator that allows proffesionals to learn new skill.",
    name: "Ansar Ali",
    address: "Islamic Center of Michigan, Brooklyn, NY",
    video: "https://wallpapercave.com/wp/wp2789145.jpg",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"
  },
  {
    id: 6,
    title: "What Community Leaders Are Saying",
    description:"Startup institute is a career accelerator that allows proffesionals to learn new skill.",
    name: "Abrar Ali",
    address: "Islamic Center of Michigan, Brooklyn, NY",
    video: "https://i.pinimg.com/originals/bd/6a/eb/bd6aeb4dc105d77dc4e19b48ea124359.jpg",
    img: "https://material-ui.com/static/images/avatar/1.jpg"
  },
  {
    id: 7,
    title: "What Community Leaders Are Saying",
    description:"Startup institute is a career accelerator that allows proffesionals to learn new skill.",
    name: "Sadiq Ali",
    address: "Islamic Center of Michigan, Brooklyn, NY",
    video: "https://i.pinimg.com/originals/bd/6a/eb/bd6aeb4dc105d77dc4e19b48ea124359.jpg",
    img: "https://material-ui.com/static/images/avatar/1.jpg"
  },
  {
    id: 8,
    title: "What Community Leaders Are Saying",
    description:"Startup institute is a career accelerator that allows proffesionals to learn new skill.",
    name: "Muhammad Hassan",
    address: "Islamic Center of Michigan, Brooklyn, NY",
    video: "https://i.pinimg.com/originals/bd/6a/eb/bd6aeb4dc105d77dc4e19b48ea124359.jpg",
    img: "https://material-ui.com/static/images/avatar/1.jpg"
  },

  {
    id: 8,
    title: "What Community Leaders Are Saying",
    description:"Startup institute is a career accelerator that allows proffesionals to learn new skill.",
    name: "Muhammad Hassan",
    address: "Islamic Center of Michigan, Brooklyn, NY",
    video: "https://i.pinimg.com/originals/bd/6a/eb/bd6aeb4dc105d77dc4e19b48ea124359.jpg",
    img: "https://material-ui.com/static/images/avatar/1.jpg"
  },

  {
    id: 8,
    title: "What Community Leaders Are Saying",
    description:"Startup institute is a career accelerator that allows proffesionals to learn new skill.",
    name: "Muhammad Hassan",
    address: "Islamic Center of Michigan, Brooklyn, NY",
    video: "https://i.pinimg.com/originals/bd/6a/eb/bd6aeb4dc105d77dc4e19b48ea124359.jpg",
    img: "https://material-ui.com/static/images/avatar/1.jpg"
  },

  {
    id: 8,
    title: "What Community Leaders Are Saying",
    description:"Startup institute is a career accelerator that allows proffesionals to learn new skill.",
    name: "Muhammad Hassan",
    address: "Islamic Center of Michigan, Brooklyn, NY",
    video: "https://i.pinimg.com/originals/bd/6a/eb/bd6aeb4dc105d77dc4e19b48ea124359.jpg",
    img: "https://material-ui.com/static/images/avatar/1.jpg"
  },

  {
    id: 8,
    title: "What Community Leaders Are Saying",
    description:"Startup institute is a career accelerator that allows proffesionals to learn new skill.",
    name: "Muhammad Hassan",
    address: "Islamic Center of Michigan, Brooklyn, NY",
    video: "https://i.pinimg.com/originals/bd/6a/eb/bd6aeb4dc105d77dc4e19b48ea124359.jpg",
    img: "https://material-ui.com/static/images/avatar/1.jpg"
  },

  {
    id: 8,
    title: "What Community Leaders Are Saying",
    description:"Startup institute is a career accelerator that allows proffesionals to learn new skill.",
    name: "Muhammad Hassan",
    address: "Islamic Center of Michigan, Brooklyn, NY",
    video: "https://i.pinimg.com/originals/bd/6a/eb/bd6aeb4dc105d77dc4e19b48ea124359.jpg",
    img: "https://material-ui.com/static/images/avatar/1.jpg"
  },

  {
    id: 8,
    title: "What Community Leaders Are Saying",
    description:"Startup institute is a career accelerator that allows proffesionals to learn new skill.",
    name: "Muhammad Hassan",
    address: "Islamic Center of Michigan, Brooklyn, NY",
    video: "https://i.pinimg.com/originals/bd/6a/eb/bd6aeb4dc105d77dc4e19b48ea124359.jpg",
    img: "https://material-ui.com/static/images/avatar/1.jpg"
  },
];


<>
  <Testimonials 
    users={users}
    index={14}
    duration={800000}
    PlayIcon={true}
    title={false}
  />


</> 
```
