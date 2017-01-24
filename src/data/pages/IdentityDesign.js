const identityImage = require('../images/work/ocean.png');

// Logos

const scooperSM = require('../images/work/logos/scooper.png');
const scooperLG = require('../images/work/logos/scooper@2x.png');
const scooperFullSM = require('../images/work/logos/scooperFull.png');
const scooperFullLG = require('../images/work/logos/scooperFull@2x.png');
const sozaeSM = require('../images/work/logos/sozae.png');
const sozaeLG = require('../images/work/logos/sozae@2x.png');
const hmbySM = require('../images/work/logos/hmby.png');
const hmbyLG = require('../images/work/logos/hmby@2x.png');
const eventzapSM = require('../images/work/logos/eventzap.png');
const eventzapLG = require('../images/work/logos/eventzap@2x.png');
const rrSM = require('../images/work/logos/riverwalkrehab.png');
const rrLG = require('../images/work/logos/riverwalkrehab@2x.png');

const identityDesign = {
  data: [
    {
      title: 'Identity Design',
      category: 'Design',
      banner: identityImage,
      p1: 'Jeff Bezos and dozens of other business leaders say that \'Your brand is what people say about you behind your back\'. I think it\'s incredible how terrible products can be saved by powerful branding, and amazing products might never be recognized if they lack a strong identity.',
      p2: 'Sexy logos and corresponding brand standards are two disciplines that have always drawn me to design. In the last 3 years, I\'ve had the chance to develop or co-develop brand identities on a few different projects. I have worked on the visual components as well as the less tangible guidelines for company voice and messaging. Below is a small sample of my work.'
    },
    {
      title: 'Logo Design',
      id: 1,
      p1: 'Here is a small collection of my favorite logos and logo marks for new brands and existing companies.',
      p2: '',
      tools: 'Pencils & Paper, Illustrator',
      images: [
        [scooperFullSM, scooperFullLG],
        [scooperSM, scooperLG],
        [hmbySM, hmbyLG],
        [sozaeSM, sozaeLG],
        [eventzapSM, eventzapLG],
        [rrSM, rrLG]
      ]
    }
  ]
};

export { identityDesign };
