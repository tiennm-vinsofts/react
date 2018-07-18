import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title= "Class component"/>, document.getElementById('root'));


function Welcome(props) {
  return [
  	<div className="App1" key>
  		<h1>{props.name}</h1>
  		<h1>Cuoc doi that lam eo le, <br/> Nhan sam thi it re tre thi nhieu</h1>
  	</div>
  	];
}
const element = <Welcome name="Functional component" />;

ReactDOM.render(element, document.getElementById('root1') );





function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div>
      <Avatar user={props.user} />
      <div>{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div>
      <UserInfo user={props.author} />
      <div>{props.text}</div>
      <div>
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64',
  },
};
ReactDOM.render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />,
  document.getElementById('root2')
);





registerServiceWorker();
