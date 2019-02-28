# img2weibo

Get Weibo user id from image url.

## Demo

[demo](http://opengg.github.io/img2weibo)

## Use in node

0. Install: run `npm install img2weibo`
0. Get user id and url:

```js
const userId = img2weibo('https://wx3.sinaimg.cn/large/632dab64ly1g0m3f02heoj20dc08wq6j.jpg'); // 1663937380

const userHome = `https://weibo.com/u/${userId}` // https://weibo.com/u/1663937380
```

## Use as cli

```bash
$ npx img2weibo https://wx3.sinaimg.cn/large/632dab64ly1g0m3f02heoj20dc08wq6j.jpg

    Image url: https://wx3.sinaimg.cn/large/632dab64ly1g0m3f02heoj20dc08wq6j.jpg
    User id  : 1663937380
    User home: https://weibo.com/u/1663937380
```
