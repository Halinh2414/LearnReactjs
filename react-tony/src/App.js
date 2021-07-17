import logo from './logo.svg';
import './App.css';

import isOdd from 'is-odd'

function App() {
  // const abc = event.target.value;
  // const { value } = event.target;
  // const { target: { value } } = event.target;
  const renderElement_1 = <h3>Express JS: {5 + 5}</h3>

  // render a function out side UI
  function renderElement2() {
    return (
      <h3>render a function</h3>
    )
  }

  return (
    <div>
      <input type="text" />
      <div />
      <div>
        item 1
      </div>
      <div>
        tem 2
      </div>
      <hr />

      {renderElement_1}
      {renderElement2()}

    </div>
  );
}

export default App;
