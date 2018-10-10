import mockjs from 'mockjs';

// function getFakeCaptcha(req, res) {
//   return res.json('captcha-xxx');
// }

// export default {
// //   'POST /api/forms': (req, res) => {
// //     res.send({ message: 'Ok' });
// //   },
//   'POST /api/menuClickAnalysis': mockjs.mock({
//     'status': 'ok',
//     'list|10': [{ x: '@datetime("yyyy-MM-dd")', y1: 1 }],
//   }),
// };
const chartData = [];
for (let i = 0; i < 20; i += 1) {
  chartData.push({
    x: (new Date().getTime()) + (1000 * 60 * 30 * i),
    y1: Math.floor(Math.random() * 100) + Math.floor(Math.random() * 1000)
  });
}
export default {
  'POST /api/menuClickAnalysis': (req, res) => {
    res.send({
      status: 'ok',
      list: chartData,
    });
  },
};
