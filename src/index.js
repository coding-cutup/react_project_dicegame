import ReactDOM from 'react-dom/client';
import {Fragment} from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
const me = "rock";
const other = "scissor";

const WINS = {
  scissor : 'paper',
  rock : 'scissor',
  paper : 'rock',
};

function getResult(left, right) {
  if (WINS[left] === right){
    return '승리';
  }
  else if (left === WINS[right]){
    return '패배';
  }
  return '무승부';
}

function handleClick() {
  console.log('가위바위보!');
}

root.render(
  <Fragment>
    <h1>가위바위보</h1>
    <h2>{getResult(me, other)}</h2>
    <button onClick={handleClick}>가위</button>
    <button onClick={handleClick}>바위</button>
    <button onClick={handleClick}>보</button>
  </Fragment>
);

