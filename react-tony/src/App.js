
// import isOdd from 'is-odd'

// components
import Button from './components/Button';
import StateComponent from './components/StateComponent';
import ConditionalRendering from './components/ConditionalRendering';
import ListKey from './components/ListKey';
import StylingCss from './components/StylingCss';
import Forms from './components/Forms';

// sample app
import ComposeComponent from './sampleApp/ComposeComponent/ComposeComponent';
import GuestComponent from './sampleApp/GuestComponent/GuestComponent';

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

      -------------------------------------
      <h2>Conditional Rendering</h2>
      <ConditionalRendering />

      --------------------------------------
      <h2>Sample App</h2>
      <h5>ComposeComponent</h5>
      <ComposeComponent />
      <h5>GuestGreeting</h5>
      <GuestComponent />



      ---------------------------
      <h2>List & Keys</h2>
      <ListKey />

      ------------------------
      <h2>Styling CSS</h2>
      <StylingCss />

      -------------------------
      <h2>Forms</h2>
      <Forms />
    </div>
  );
}

export default App;
