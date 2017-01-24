const webDevImage = require('../images/work/mountain.png');

// Scooper

const scoopHomeSM = require('../images/work/scooper/scooperHome.jpg');
const scoopHomeLG = require('../images/work/scooper/scooperHome@2x.jpg');
const scoopvSM = require('../images/work/scooper/scooperVs.jpg');
const scoopvLG = require('../images/work/scooper/scooperVs@2x.jpg');
const scoopVidSM = require('../images/work/scooper/scooperVid.jpg');
const scoopVidLG = require('../images/work/scooper/scooperVid@2x.jpg');
const scoopSearchSM = require('../images/work/scooper/scooperSearch.jpg');
const scoopSearchLG = require('../images/work/scooper/scooperSearch@2x.jpg');
const scoopProfileSM = require('../images/work/scooper/scooperProfile.jpg');
const scoopProfileLG = require('../images/work/scooper/scooperProfile@2x.jpg');
const scoopInviteSM = require('../images/work/scooper/scooperInvite.jpg');
const scoopInviteLG = require('../images/work/scooper/scooperInvite@2x.jpg');

// Wordpress
const catalyzeSM = require('../images/work/wordpress/catalyze.jpg');
const catalyzeLG = require('../images/work/wordpress/catalyze@2x.jpg');
const assuritySM = require('../images/work/wordpress/assurity.jpg');
const assurityLG = require('../images/work/wordpress/assurity@2x.jpg');
const greengearSM = require('../images/work/wordpress/greengear.jpg');
const greengearLG = require('../images/work/wordpress/greengear@2x.jpg');
const mattvoSM = require('../images/work/wordpress/mattVo.jpg');
const mattvoLG = require('../images/work/wordpress/mattVo@2x.jpg');

const webDev = {
  data: [
    {
      title: 'Web & iOS Development',
      category: 'Code',
      banner: webDevImage,
      p1: 'I first dabbled with front-end web development after taking a series of classes on Codecademy in 2012. This seemed like a big deal to me at the time, but I quickly realized that most sites aren\'t built on markup, styles, and jQuery alone. I decided to wiggle my way into Object Oriented Programming by taking a Ruby on Rails class at school.',
      p2: 'Code quickly became my grown up version of Legos. I gained a much better understanding of how static design translates into applications by actually building a few different projects. I also learned Swift soon after its initial release so I could break into the mobile app world. Right now my focus has shifted to ReactJS in preparation for ReactVR and cross-platform mobile experiences.'
    },
    {
      title: 'Scooper',
      id: 1,
      p1: 'Scooper was a 1v1 video challenge application where users could capture a Vine-style video, send it to a friend, and be judged by their peers. I originally contracted developers to build this, but I was very unhappy with the outcome. I decided redesign and rebuild the iOS portion myself.',
      p2: 'I spent over 8 months learning Swift and mastering the Storyboard to rebuild the application on Parse and AWS. Unfortunately my team fell apart and Facebook announced its plan to terminate Parse. I still think video challenge is a great idea, but I decided to take my new knowledge and apply it to other projects. Scooper is no longer on the App Store, but you can see screenshots here:',
      tools: 'Swift, Xcode, Photoshop, Illustrator',
      images: [
        [scoopHomeSM, scoopHomeLG],
        [scoopvSM, scoopvLG],
        [scoopVidSM, scoopVidLG],
        [scoopSearchSM, scoopSearchLG],
        [scoopProfileSM, scoopProfileLG],
        [scoopInviteSM, scoopInviteLG]
      ]
    },
    {
      title: 'Assorted Wordpress Projects',
      id: 2,
      p1: 'At Catalyze, we build informational websites and eCommerce stores depending on our clients\' needs. I regularly build sites on Wordpress because of its user-friendly CMS dashboard.',
      p2: 'My Wordpress development usually entails manipulating Theme PHP files, editing plugins, and styling custom selectors. For client projects, I like to use theme builders for their responsive grids so I can write my own HTML and CSS. The visual grid also helps clients understand how to use their sites after we finish development.',
      tools: 'Wordpress, HTML & CSS, Javascript, Photoshop, Illustrator, Dev Tools',
      featuredImage: webDevImage,
      images: [
        [catalyzeSM, catalyzeLG],
        [assuritySM, assurityLG],
        [greengearSM, greengearLG],
        [mattvoSM, mattvoLG]
      ]
    },
    {
      title: 'Portfolio Site',
      id: 3,
      p1: 'It may seem overkill, but this entire website was built from scratch using React and Redux... Why such powerful tools to create something so simple? Easy - it\'s an excellent opportunity to learn! Through this experience I learned ES2015 Javascript, Webpack 2, and the unfamiliar concepts of a virtual DOM with state.',
      p2: 'Each page is modular and rendered from static data that passes through actions and reducers, much like dummy network requests. I also created all of the vector artwork with Illustrator to add my own unique style. The whole project is Open Source, hosted on Github Pages, and available on my Github account.',
      tools: 'ReactJS, Webpack, Sass, Illustrator, Photoshop, Dev Tools',
      featuredImage: webDevImage,
      images: [
        ['https://media.giphy.com/media/oQUc6bVmcxsR2/giphy.gif', 'https://media.giphy.com/media/oQUc6bVmcxsR2/giphy.gif']
      ]
    }
  ]
};

export { webDev };
