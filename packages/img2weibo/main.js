const base = require('./base');

const regImg = /\.sinaimg\.cn\/[^/]+\/([^.\/]+)(?:\.\w+)?/;

const img2weibo = (url) => {
  const matches = url.match(regImg);

  if (!matches) {
    return 0;
  }

  const accountEncoded = matches[1].slice(0, 8);

  const radix = /^00/.test(accountEncoded) ? 62 : 16;

  return base(accountEncoded, radix);
};

module.exports = img2weibo;
