import React from 'react';
import ForkMe from './components/fork-me';
import Header from './components/header';
import Form from './components/form';
import './App.styl';

const App = () =>  (
  <div className="App">
    <ForkMe
      url="https://github.com/OpenGG/img2weibo"
    />
    <Header />
    <Form />
  </div>
);

export default App;
