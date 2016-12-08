const webDevImage = require('../images/mountain.png');

const webDev = {
  data: [
    {
      title: 'Web & iOS Development',
      category: 'Code',
      banner: webDevImage,
      p1: 'I first dabbled with front-end web development after taking a series of interactive classes on Codecademy in 2012. This seemed HUGE at the time, but I quickly realized that I wasn\'t really programming, and that most sites aren\'t built on markup, styles, and jQuery alone. I decided to wiggle my way into Object Oriented Programming by taking a Ruby on Rails class at my University.',
      p2: 'From there, code became my grown up version of Legos. I gained a much better understanding of how static design actually translates into applications by building a few of them myself. I also learned Swift soon after its initial 2014 release so I could break into the native mobile app world. Right now my focus has shifted to ReactJS in preparation for ReactVR and cross-platform mobile experiences.'
    },
    {
      title: 'Scooper',
      id: 1,
      p1: 'Scooper was a 1v1 video challenge application where users could capture a Vine-style video, send it to a friend, and be judged by their peers. I originally contracted developers to build this, but I was unhappy with the outcome (many required features didn\'t work). Naturally, I decided redesign and rebuild the iOS portion myself.',
      p2: 'I spent over 8 months learning Swift and mastering the Storyboard to rebuild the application on Parse and AWS. Unfortunately my team fell apart and Facebook announced its plan to eliminate Parse. I still think video challenge is a great idea, but I decided to take my new knowledge and apply it to other projects. Scooper is no longer on the App Store, but you can see screenshots here:',
      tools: 'Swift, Xcode, Photoshop, Illustrator',
      images: [
        webDevImage,
        webDevImage,
        webDevImage,
        webDevImage
      ]
    },
    {
      title: 'Assorted Wordpress Projects',
      id: 2,
      p1: 'At Catalyze, we build informational websites or eCommerce stores depending on our clients\' needs. I regularly build informational sites on Wordpress. No user wants to be caught with their pants around their ankles when making a minor edit, so we opt for WP as our CMS of choice because of its user-friendly client dashboard.',
      p2: 'My Wordpress development usually entails manipulating Theme PHP files, editing plugin styles, and styling custom selectors. For client projects, I like to use theme builders solely for their responsive grids so I can write my own HTML and CSS. The visual grid also helps clients understand how to use their sites post-build.',
      tools: 'Wordpress, HTML & CSS, Javascript, Photoshop, Illustrator, Dev Tools',
      featuredImage: webDevImage,
      images: [
        webDevImage,
        webDevImage,
        webDevImage
      ]
    },
    {
      title: 'Portfolio Site',
      id: 3,
      p1: 'It may seem overkill, but this entire website was built from scratch using React and Redux (gasp). Why such powerful tools to create something so simple? Easy - it\'s an excellent opportunity to learn! Through this experience I brushed up on ES6 Javascript and I finally grasped the concept of a virtual DOM with state.',
      p2: 'Each page is completely modular and rendered from data objects that pass through actions and reducers, much like dummy network requests. I also created all of the vector artwork using Illustrator to add my own unique touch. The whole project is Open Source, hosted on Github Pages, and available on my Github account.',
      tools: 'ReactJS, Webpack, Sass, Illustrator, Photoshop, Dev Tools',
      featuredImage: webDevImage,
      images: [
        webDevImage,
        webDevImage,
        webDevImage
      ]
    }
  ]
};

export { webDev };
