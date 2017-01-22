// Import Image Files
const pinterestLogo = require('./images/resources/pinterest.png');
const awwwardsLogo = require('./images/resources/awwwards.png');
const alistapartLogo = require('./images/resources/alistapart.png');
const smashingLogo = require('./images/resources/smashing.png');
const unsplashLogo = require('./images/resources/unsplash.png');
const pixedenLogo = require('./images/resources/pixeden.png');
const freepikLogo = require('./images/resources/freepik.png');
const flaticonLogo = require('./images/resources/flaticon.png');
const adweekLogo = require('./images/resources/adweek.png');
const codesignLogo = require('./images/resources/codesign.png');
const behanceLogo = require('./images/resources/behance.png');
const dribbbleLogo = require('./images/resources/dribbble.png');

const ideoLogo = require('./images/resources/ideo.png');
const mediumLogo = require('./images/resources/medium.png');
const gravitytankLogo = require('./images/resources/gravitytank.png');
const uxblogLogo = require('./images/resources/uxblog.png');

const udemyLogo = require('./images/resources/udemy.png');
const codeschoolLogo = require('./images/resources/codeschool.png');
const stackoverflowLogo = require('./images/resources/stackoverflow.png');
const githubLogo = require('./images/resources/github.png');
const devtoolsLogo = require('./images/resources/devtools.png');
const codecademyLogo = require('./images/resources/codecademy.png');
const apiaryLogo = require('./images/resources/apiary.png');
const youtubeLogo = require('./images/resources/youtube.png');
const redditLogo = require('./images/resources/reddit.png');
const bwLogo = require('./images/resources/builtwith.png');

const trelloLogo = require('./images/resources/trello.png');
const togglLogo = require('./images/resources/toggl.png');
const slackLogo = require('./images/resources/slack.png');
const evernoteLogo = require('./images/resources/evernote.png');
const asanaLogo = require('./images/resources/asana.png');
const driveLogo = require('./images/resources/drive.png');


const designResources = {
  data: [
    {
      id: 0,
      title: 'Pinterest',
      image: pinterestLogo,
      type: 'Inspiration',
      description: 'Hands-down my favorite source for inspiration. Best of Dribble, Behance, and the web.',
      url: 'https://www.pinterest.com/'
    },
    {
      id: 1,
      title: 'Awwwards',
      image: awwwardsLogo,
      type: 'Inspiration',
      description: 'The greatest showcase of beautiful websites, UX and leading edge design on the Internet.',
      url: 'http://www.awwwards.com/'
    },
    {
      id: 2,
      title: 'A List Apart',
      image: alistapartLogo,
      type: 'Learning',
      description: 'Excellent articles on web design and the latest conventions for web designers.',
      url: 'http://alistapart.com/'
    },
    {
      id: 3,
      title: 'Smashing Magazine',
      image: smashingLogo,
      type: 'Learning',
      description: 'Another helpful reading resource for all things web design.',
      url: 'https://www.smashingmagazine.com/'
    },
    {
      id: 4,
      title: 'FastCo Design',
      image: codesignLogo,
      type: 'Learning',
      description: 'Another helpful reading resource for web and UX designers.',
      url: 'https://www.fastcodesign.com/'
    },
    {
      id: 5,
      title: 'Adweek',
      image: adweekLogo,
      type: 'Learning',
      description: 'Learn about the successful design implemented in the latest popular ad campaigns.',
      url: 'http://www.adweek.com/'
    },
    {
      id: 6,
      title: 'Unsplash',
      image: unsplashLogo,
      type: 'Tool',
      description: 'Free stock photography! And not your average cheesy shots',
      url: 'https://unsplash.com/'
    },
    {
      id: 7,
      title: 'Freepik',
      image: freepikLogo,
      type: 'Tool',
      description: 'Awesome free graphic resource for backgrounds/textures, and anything you need in vector format.',
      url: 'http://www.freepik.com/'
    },
    {
      id: 8,
      title: 'Flaticon',
      image: flaticonLogo,
      type: 'Tool',
      description: 'Free vector icons to get you started on your custom creations or for placeholding.',
      url: 'http://www.flaticon.com/'
    },
    {
      id: 9,
      title: 'Pixeden',
      image: pixedenLogo,
      type: 'Tool',
      description: 'Free Photoshop templates for staging your work or pitching clients your vision.',
      url: 'http://www.pixeden.com/'
    },
    {
      id: 10,
      title: 'Behance',
      image: behanceLogo,
      type: 'Inspiration',
      description: 'Unlike Pinterest pins, you can see and read about full projects from inception to finish.',
      url: 'http://www.behance.net/'
    },
    {
      id: 11,
      title: 'Dribbble',
      image: dribbbleLogo,
      type: 'Inspiration',
      description: 'A great showcase for design in the form of snapshots. I\'ll get on here soon...',
      url: 'https://dribbble.com/'
    }
  ]
};

const designThinkingResources = {
  data: [
    {
      id: 0,
      title: 'IDEO',
      image: ideoLogo,
      type: 'Learning',
      description: 'The OGs who pioneered Design Thinking in business offer all sorts of useful tips',
      url: 'https://designthinking.ideo.com/'
    },
    {
      id: 1,
      title: 'Medium',
      image: mediumLogo,
      type: 'Learning',
      description: 'A super clean blog with thoughts by designers and researchers from all walks of life.',
      url: 'https://medium.com/tag/design-thinking'
    },
    {
      id: 2,
      title: 'gravitytank',
      image: gravitytankLogo,
      type: 'Learning',
      description: 'These guys have one of the best blogs for tips on user research / feedback on the web.',
      url: 'http://workdifferently.gravitytank.com/'
    },
    {
      id: 3,
      title: 'TheUXblog',
      image: uxblogLogo,
      type: 'Learning',
      description: 'Really great articles on User Experience by some awesome people',
      url: 'https://theuxblog.com/'
    }
  ]
};

const developmentResources = {
  data: [
    {
      id: 0,
      title: 'Udemy',
      image: udemyLogo,
      type: 'Learning',
      description: 'My favorite online course platform. Brilliant UX and some of the best courses Ive seen.',
      url: 'https://www.udemy.com/courses/'
    },
    {
      id: 2,
      title: 'Codecademy',
      image: codecademyLogo,
      type: 'Learning',
      description: 'The original in-browser code editor and tutorial site for learning web technologies.',
      url: 'https://www.codecademy.com/'
    },
    {
      id: 1,
      title: 'CodeSchool',
      image: codeschoolLogo,
      type: 'Learning',
      description: 'Another in-browser code editor and tutorial site for learning web technologies.',
      url: 'https://www.codeschool.com/'
    },
    {
      id: 3,
      title: 'Stack Overflow',
      image: stackoverflowLogo,
      type: 'Learning',
      description: 'Google Search on steroids for devs. Chances are high that somebody has encountered your problem before.',
      url: 'http://stackoverflow.com/'
    },
    {
      id: 4,
      title: 'Github',
      image: githubLogo,
      type: 'Tool',
      description: 'Version control is a Godsend. Open source projects on Github are also fantastic resources.',
      url: 'https://github.com/'
    },
    {
      id: 5,
      title: 'Chrome Dev Tools',
      image: devtoolsLogo,
      type: 'Tool',
      description: 'I love Dev Tools for debugging JS, profiling performance, and live-styling while I work on web pages.',
      url: 'https://developer.chrome.com/devtools'
    },
    {
      id: 6,
      title: 'Apiary',
      image: apiaryLogo,
      type: 'Tool',
      description: 'This nifty tool lets you build mock APIs that send static json to your front-end applications. Excellent for prototyping.',
      url: 'https://apiary.io/'
    },
    {
      id: 7,
      title: 'Youtube',
      image: youtubeLogo,
      type: 'Tool',
      description: 'Some of the best tutorials and language overviews are publicly available on Youtube.',
      url: 'https://www.youtube.com/'
    },
    {
      id: 8,
      title: 'Reddit',
      image: redditLogo,
      type: 'Learning',
      description: 'Subreddits for programming languages are a great place to stay on top of news.',
      url: 'https://www.reddit.com/'
    },
    {
      id: 9,
      title: 'BuiltWith',
      image: bwLogo,
      type: 'Tool',
      description: 'Top level tech profiling for any website on the Internet. Learn all of the services a site is using.',
      url: 'https://builtwith.com/'
    }
  ]
};

const projectResources = {
  data: [
    {
      id: 0,
      title: 'Trello',
      image: trelloLogo,
      type: 'Tool',
      description: 'The ultimate digital collaborative whiteboard for tracking tasks over a project lifecycle.',
      url: 'https://trello.com/'
    },
    {
      id: 1,
      title: 'Toggl',
      image: togglLogo,
      type: 'Tool',
      description: 'The best time and task tracker out there. Easy to use and even easier to see detailed time reports.',
      url: 'https://toggl.com/'
    },
    {
      id: 2,
      title: 'Slack',
      image: slackLogo,
      type: 'Tool',
      description: 'Basically AIM for business and project management + all sorts of great/customizable features.',
      url: 'https://slack.com/'
    },
    {
      id: 3,
      title: 'Evernote',
      image: evernoteLogo,
      type: 'Tool',
      description: 'Evernote is runner up to an actual moleskin notebook and ballpoint pen.',
      url: 'https://evernote.com/'
    },
    {
      id: 4,
      title: 'Google Drive',
      image: driveLogo,
      type: 'Tool',
      description: 'Cloud storage that comes bundled with your Gmail account. Access your files from anywhere.',
      url: 'https://www.google.com/drive/'
    },
    {
      id: 5,
      title: 'Asana',
      image: asanaLogo,
      type: 'Tool',
      description: 'Really powerful team management dashboard for task and project management.',
      url: 'https://asana.com/'
    }
  ]
};

export { designResources, designThinkingResources, developmentResources, projectResources };
