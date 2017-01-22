const webDevImage = require('../images/work/snow.png');

const cavReportSM = require('../images/work/print/cavagnaReport.jpg');
const cavReportLG = require('../images/work/print/cavagnaReport@2x.jpg');
const cavBoxSM = require('../images/work/print/cavagnaBox.jpg');
const cavBoxLG = require('../images/work/print/cavagnaBox@2x.jpg');
const cavHoseSM = require('../images/work/print/cavagnaHose.jpg');
const cavHoseLG = require('../images/work/print/cavagnaHose@2x.jpg');
const realEstateSM = require('../images/work/print/realestate.jpg');
const realEstateLG = require('../images/work/print/realEstate@2x.jpg');
const catCardSM = require('../images/work/print/catCard.jpg');
const catCardLG = require('../images/work/print/catCard@2x.jpg');

const printDesign = {
  data: [
    {
      title: 'Print Design',
      category: 'Design',
      banner: webDevImage,
      p1: 'Any young designer knows that when you use Photoshop in high school or college, you become the go-to friend for creating posters, T-Shirts, and signs. These types of print tasks played a big role in developing my interest for design.',
      p2: 'I haven\'t done a ton of print work lately, but there\'s no denying the  overlap between print and digital design principles. Whenever I get the chance, I enjoy working on projects that will make it from the computer screen to the printer.'
    },
    {
      title: 'Assorted Projects',
      id: 2,
      p1: 'Because my recent work has mostly been digital, I\'m going to cheat here and lump several print samples under one umbrella.',
      p2: '',
      tools: 'Pencil, Paper, InDesign, Illustrator, Photoshop',
      featuredImage: webDevImage,
      images: [
        [cavReportSM, cavReportLG],
        [cavBoxSM, cavBoxLG],
        [cavHoseSM, cavHoseLG],
        [realEstateSM, realEstateLG],
        [catCardSM, catCardLG]
      ]
    }
  ]
};

export { printDesign };
