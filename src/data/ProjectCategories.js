const uxImage = require('./images/work/desert.png');
const webDevImage = require('./images/work/mountain.png');
const identityImage = require('./images/work/ocean.png');
const printImage = require('./images/work/snow.png');

const projectCategories = {
  data: [
    {
      id: 0,
      image: uxImage,
      title: 'Web & UX Design',
      column: 'col-sm-8',
      description: 'Clean design and delightful interactions',
      path: 'web-ux-design'
    },
    {
      id: 1,
      image: identityImage,
      title: 'Identity Design',
      column: 'col-sm-4',
      description: 'Logos and branding',
      path: 'identity-design'
    },
    {
      id: 2,
      image: printImage,
      title: 'Print Design',
      column: 'col-sm-4',
      description: 'Making it happen in CMYK',
      path: 'print-design'
    },
    {
      id: 3,
      image: webDevImage,
      title: 'Web & iOS Development',
      column: 'col-sm-8',
      description: 'Web apps, simple sites, and adventures in iOS',
      path: 'web-ios-development'
    }
  ]
};

export { projectCategories };
