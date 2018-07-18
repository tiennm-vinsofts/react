import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Lifecycle from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Lifecycle name="MOUNTING" />,
  document.getElementById('root')
);
// Sau 2s render lại lần 2. thay đổi prop.name
setTimeout(function(){
  ReactDOM.render(
    <Lifecycle name="UPDATING"/>,
    document.getElementById('root')
  );
}, 2000);

// Sau 4s không render component nữa, tức là đã remove component
setTimeout(function(){
  ReactDOM.render(
    <h1>Goodbye component</h1>,
    document.getElementById('root')
  );
}, 6000);
registerServiceWorker();
