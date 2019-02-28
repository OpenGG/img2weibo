#!/usr/bin/env node

const img2weibo = require('./main');

const help = () => {
  const defaultImg = 'https://wx3.sinaimg.cn/large/632dab64ly1g0m3f02heoj20dc08wq6j.jpg';

  const defaultMID = img2weibo(defaultImg);

  console.log(
    `
Usage:

  img2weibo <image url>

Example:

  $ img2weibo ${defaultImg}

    Image url: ${defaultImg}
    User id  : ${defaultMID}
    User home: https://weibo.com/u/${defaultMID}

`
  );
}

const main = () => {
  const imageUrl = process.argv[2] || '';

  const id = img2weibo(imageUrl);

  if (!id) {
    help();
    process.exitCode = 1;
    return;
  }

  console.log(`
    Image url: ${imageUrl}
    User id  : ${id}
    User home: https://weibo.com/u/${id}
`)
};

main();

