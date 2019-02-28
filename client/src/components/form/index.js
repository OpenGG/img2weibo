import React, { useState } from 'react';

import img2weibo from 'img2weibo';

import {
  useDebounce
} from 'use-debounce';

import './index.styl';

const defaultImg = 'https://wx3.sinaimg.cn/large/632dab64ly1g0m3f02heoj20dc08wq6j.jpg'

const Form = () => {
  const [img, setImg] = useState(defaultImg);

  const [imgVal] = useDebounce(img, 100);

  const id = img2weibo(imgVal);
  console.log(id);

  const onInput = (e) => {
    setImg(e.target.value);
  };

  const resultUser = id ?
    (
      <a
        className="form-link"
        href={`https://weibo.com/u/${id}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        {id}
      </a>
    ) :
    'unknown';

  return (
    <div className="form">
      Paste you weibo image url:

        <input
        className="form-input"
        onChange={onInput}
        onInput={onInput}
        placeholder={defaultImg}
      />

      User id: {resultUser}
    </div>
  );
};

export default Form;
