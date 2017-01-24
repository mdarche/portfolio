const webDevImage = require('../images/work/desert.png');

// GymSpotter

const filterSM = require('../images/work/gymspot/filter.png');
const filterLG = require('../images/work/gymspot/filter@2x.png');
const loginSM = require('../images/work/gymspot/login.jpg');
const loginLG = require('../images/work/gymspot/login@2x.jpg');
const menuSM = require('../images/work/gymspot/mainMenu.png');
const menuLG = require('../images/work/gymspot/mainMenu@2x.png');
const mapSM = require('../images/work/gymspot/map.jpg');
const mapLG = require('../images/work/gymspot/map@2x.jpg');
const calloutSM = require('../images/work/gymspot/mapCallout.jpg');
const calloutLG = require('../images/work/gymspot/mapCallout@2x.jpg');
const searchSM = require('../images/work/gymspot/search.jpg');
const searchLG = require('../images/work/gymspot/search@2x.jpg');

// Birthday Alert

const launchSM = require('../images/work/birthday/launch.jpg');
const launchLG = require('../images/work/birthday/launch@2x.jpg');
const calendarSM = require('../images/work/birthday/calendar.png');
const calendarLG = require('../images/work/birthday/calendar@2x.png');
const listSM = require('../images/work/birthday/list.png');
const listLG = require('../images/work/birthday/list@2x.png');
const topbdaySM = require('../images/work/birthday/topbirthdays.png');
const topbdayLG = require('../images/work/birthday/topbirthdays@2x.png');
const notificationsSM = require('../images/work/birthday/notifications.png');
const notificationsLG = require('../images/work/birthday/notifications@2x.png');
const lockSM = require('../images/work/birthday/lockscreen.jpg');
const lockLG = require('../images/work/birthday/lockscreen@2x.jpg');

// SpaceX

const homeTopSM = require('../images/work/spacex/homeTop.jpg');
const homeTopLG = require('../images/work/spacex/homeTop@2x.jpg');
const homeBottomSM = require('../images/work/spacex/homeBottom.jpg');
const homeBottomLG = require('../images/work/spacex/homeBottom@2x.jpg');
const f9SM = require('../images/work/spacex/f9.png');
const f9LG = require('../images/work/spacex/f9@2x.png');
const f9openSM = require('../images/work/spacex/f9open.png');
const f9openLG = require('../images/work/spacex/f9open@2x.png');
const fhSM = require('../images/work/spacex/fh.png');
const fhLG = require('../images/work/spacex/fh@2x.png');
const dragonSM = require('../images/work/spacex/dragon.png');
const dragonLG = require('../images/work/spacex/dragon@2x.png');

const uxDesign = {
  data: [
    {
      title: 'Web & UI Design',
      category: 'Design',
      banner: webDevImage,
      p1: 'As a long-time fan of Photoshop, I decided to journey into Web six years ago. Modern web browsers and touch screens bring a whole new element to user centered design: interactivity and user experience. There\'s nothing more satisfying than a clean design that offers interesting user interactions and feedback.',
      p2: 'I mostly design for eCommerce stores and informational websites, but in my spare time I love to ideate web and mobile apps. My process always begins with notebook sketches that evolve into digital wireframes, an app flow diagram, and then fully polished mockups. As we enter the age of 3D visual design with AR/VR, I plan to adapt my ideas to these new media. Check out a selection of my work below:'
    },
    {
      title: 'Birthday Alert',
      id: 2,
      p1: 'Birthday Alert is my concept for a mobile app that uses your contact list and Facebook account to schedule customized birthday reminders. I find that Facebook does a spotty job of sending push notifications for birthdays, so an app like this would be extremely helpful for people who also suffer from this issue. It\'s a minimal design that covers all of the bases.',
      p2: 'You can view upcoming birthdays in a calendar or a list view. You can also select specific individuals that warrant multiple push notifications to ensure you don\'t forget to reach out.',
      tools: 'Photoshop, Illustrator',
      featuredImage: webDevImage,
      images: [
        [launchSM, launchLG],
        [calendarSM, calendarLG],
        [listSM, listLG],
        [topbdaySM, topbdayLG],
        [notificationsSM, notificationsLG],
        [lockSM, lockLG]
      ]
    },
    {
      title: 'GymSpotter',
      id: 1,
      p1: 'GymSpotter is a simple gym discovery application that I\'m building in React Native for Android and iOS. The idea was born out of my frustration to find specific types of gyms in cities that I often visit. GymSpotter is basically an improved skin for querying Google Places with a pre-defined set of keywords.',
      p2: 'This style is heavily influenced by Google\'s Material Design guidelines. It delivers all of the information you need to find your ideal workout, no matter where you go.',
      tools: 'Photoshop, Illustrator, Framer',
      images: [
        [loginSM, loginLG],
        [mapSM, mapLG],
        [calloutSM, calloutLG],
        [filterSM, filterLG],
        [menuSM, menuLG],
        [searchSM, searchLG]
      ]
    },
    {
      title: 'SpaceX Mobile Redesign',
      id: 4,
      p1: 'Elon Musk has been a huge inspiration to me, so I was shocked to see the miserable state of the SpaceX website. SpaceX is a company with the biggest vision in human history, but their site is boring and unresponsive... What?!',
      p2: 'I don\'t normally do Fanboy Projects, but this time I felt compelled. If I had the chance to redesign this site I would emphasize beautiful photography, video (& live video), and interactive tours of the Falcon 9 and Dragon rockets. I would also design it with a Mobile First mentality like you see here. I used the existing color palette and typography to avoid altering the SpaceX brand.',
      tools: 'Photoshop, Illustrator, Framer',
      featuredImage: webDevImage,
      images: [
        [homeTopSM, homeTopLG],
        [homeBottomSM, homeBottomLG],
        [f9SM, f9LG],
        [f9openSM, f9openLG],
        [fhSM, fhLG],
        [dragonSM, dragonLG]
      ]
    }
  ]
};

export { uxDesign };
