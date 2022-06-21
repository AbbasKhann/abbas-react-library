MAIN BANNER COMPONENT

```jsx
import { MainBanner1 } from "master-react-lib";


const tutorialSteps = [
  {
    label: 'Welcome to ZamZam',
    Descrition: 'The Muslim greeting of salam “saying as-salamu alaykum” in Arabic means “peace be upon you”',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',

      Link:"https://www.google.com/"
  },
  {
    label: 'Bird',
    Descrition: 'The Muslim greeting of salam “saying as-salamu alaykum” in Arabic means “peace be upon you”',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
      Link:"https://www.facebook.com/"
  },
  {
    label: 'Bali, Indonesia',
    Descrition: 'The Muslim greeting of salam “saying as-salamu alaykum” in Arabic means “peace be upon you”',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'Welcome to ZamZam',
    Descrition: 'The Muslim greeting of salam “saying as-salamu alaykum” in Arabic means “peace be upon you”',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Goč, Serbia',
    Descrition: 'The Muslim greeting of salam “saying as-salamu alaykum” in Arabic means “peace be upon you”',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

<>
  <MainBanner1 

    tutorialSteps={tutorialSteps}
    BannerButton="Button Label"
  />
</> 
```