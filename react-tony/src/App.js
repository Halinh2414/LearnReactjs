
// import isOdd from 'is-odd'

// components
import Button from './components/Button';
import StateComponent from './components/StateComponent';

function App() {
  // const abc = event.target.value;
  // const { value } = event.target;
  // const { target: { value } } = event.target;
  const renderElement_1 = <h3>Express JS: {5 + 5}</h3>
  const users = {
    firstName: 'truong',
    lastName: 'tony'
  }

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


      <h2>Component</h2>
      <Button name="truong" text="Submit" users={users} />
      <Button name="linh" text="Add" />
      <Button name="xx" text="Cancel" />

      -------------------------------------
      <h2>State hooks</h2>
      <StateComponent />
    </div>
  );
}

export default App;
