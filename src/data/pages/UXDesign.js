const webDevImage = require('../images/desert.png');
const birthday1 = require('../images/work/launch.png');
const birthday6 = require('../images/work/calendar.png');
const birthday2 = require('../images/work/list.png');
const birthday3 = require('../images/work/topbirthdays.png');
const birthday4 = require('../images/work/notifications.png');
const birthday5 = require('../images/work/lockscreen.png');


const uxDesign = {
  data: [
    {
      title: 'Web & UX Design',
      category: 'Design',
      banner: webDevImage,
      p1: 'As a long-time fan of Photoshop, I decided to journey into Web six years ago. Modern web browsers and touch screens bring a whole new element to user centered design: interactivity and user experience. There\'s nothing more satisfying than a clean design that offers interesting user interactions and feedback.',
      p2: 'I mostly design for eCommerce stores and informational websites, but in my spare time I love to ideate web and mobile apps. My process always begins with notebook sketches that evolve into digital wireframes, an app flow diagram, and then fully polished mockups. As we enter the age of 3D visual design with AR/VR, I plan to adapt my ideas to these new media. Check out a selection of my work below:'
    },
    {
      title: 'GymSpotter',
      id: 1,
      p1: 'GymSpotter is a simple gym discovery application that I\'m building in React Native for Android and iOS. The idea was born out of my frustration to find specific types of gyms in cities that I often visit. At its core, GymSpotter is an improved skin for querying Google Places with a pre-defined set of keywords.',
      p2: 'This style is heavily influenced by Google\'s Material Design guidelines. It neatly delivers all of the information you need to find your ideal workout, no matter where you go.',
      tools: 'Photoshop, Illustrator, Framer',
      images: [
        webDevImage,
        webDevImage,
        webDevImage,
        webDevImage
      ]
    },
    {
      title: 'Birthday Alert',
      id: 2,
      p1: 'Birthday Alert is my plan for a mobile app that uses your Contact list and Facebook account to schedule customized birthday reminders. I find that Facebook does a spotty job of sending birthday notifications, so an app like this would bail me out of all sorts of sticky situations. My design is minimal yet very practical.',
      p2: 'You can view upcoming birthdays in a calendar or a list view. You can also select specific individuals that merit multiple push notifications to ensure you don\'t forget to reach out.',
      tools: 'Photoshop, Illustrator',
      featuredImage: webDevImage,
      images: [
        birthday1,
        birthday6,
        birthday2,
        birthday3,
        birthday4,
        birthday5
      ]
    },
    {
      title: 'Ecommerce Designs',
      id: 3,
      p1: 'I\'ve designed several mockups for Shopify templates over the last few years so I now have a strong understanding of design conventions for online stores. Most of our clients have been Apparel businesses, but these designs can be skinned for any type of business.',
      p2: 'Included are a few snapshots of the process and the results of my ideas.',
      tools: 'Photoshop, Illustrator',
      featuredImage: webDevImage,
      images: [
        webDevImage,
        webDevImage,
        webDevImage
      ]
    },
    {
      title: 'SpaceX Mobile Redesign',
      id: 4,
      p1: 'Elon Musk has been a huge inspiration to me, so I was shocked to see the miserable state of the SpaceX website. You have a company with the biggest vision in human history rocking a boring, unresponsive website... What?!',
      p2: 'I don\'t normally do Fanboy projects, but this time I felt compelled. If I had the chance to redesign this site I would emphasize beautiful photography, video, and interactive tours of the Falcon 9 and Dragon rockets. I would also design it with a Mobile First mentality like you see here. I used the existing color palette and typography to avoid altering the SpaceX brand.',
      tools: 'Photoshop, Illustrator, Framer',
      featuredImage: webDevImage,
      images: [
        webDevImage,
        webDevImage,
        webDevImage
      ]
    }
  ]
};

export { uxDesign };
