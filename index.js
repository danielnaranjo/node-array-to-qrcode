const QRCode = require('qrcode');
const opts = {
  errorCorrectionLevel: 'H',
  type: 'image/png',
  quality: 0.3,
  margin: 1,
};

const fancyName = (value) => {
  return `${value.replace('.', '').split('//')[1]}`;
};

// URLs goes here
const urls = ['https://loultimoenlaweb.com', 'https://google.com'];

for (let url of urls) {
  // export in the browser
  /*
  QRCode.toString(url, (err, string) => {
    if (err) throw err;
  });
  */
  // export as file
  QRCode.toFile(`./upload/${fancyName(url)}.png`, url, opts, (err, string) => {
    if (err) throw err;
  });
}
