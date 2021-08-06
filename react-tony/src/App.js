import { useState, useCallback } from 'react';
// import isOdd from 'is-odd'

// components
import Button from './components/Button';
import StateComponent from './components/StateComponent';
import ConditionalRendering from './components/ConditionalRendering';
import ListKey from './components/ListKey';
import StylingCss from './components/StylingCss';
import Forms from './components/Forms';
import UseEffectHook from './components/UseEffectHook';
import BiglistsComponent from 'sampleApp/BigList/BiglistsComponent';

import Books from './components/Books/Books';
import UseReducerCounter from 'components/UseReducerCounter';
import UseRef from 'components/UseRef';
import MemoHook from 'components/MemoHook'
import CustomHooks from 'components/CustomHooks';
import CustomHooksB from 'components/CustomHooksB';

// sample app
import ComposeComponent from './sampleApp/ComposeComponent/ComposeComponent';
import GuestComponent from './sampleApp/GuestComponent/GuestComponent';
import GenerateBoxsComponent from './sampleApp/GenerateBoxsComponent/GenerateBoxsComponent';
import BoxesColorComponent from './sampleApp/BoxesColorComponent/BoxesColorComponent';
import FromRegisterComponent from './sampleApp/FormRegisterComponent/FromRegisterComponent';
import TodoComponent from './sampleApp/TodoComponent/TodoComponent';
import MovieComponent from 'sampleApp/MovieFilmComponent/MovieComponent';

function App() {
  // const abc = event.target.value;
  // const { value } = event.target;
  // const { target: { value } } = event.target;
  const [isUseEffect, setIsUseEffect] = useState(true)
  const [numberList, setNumberList] = useState([1])
  const renderElement_1 = <h3>Express JS: {5 + 5}</h3>
  const users = {
    firstName: 'truong',
    lastName: 'tony'
  }
  const handleClick = useCallback((item) => {
    console.log(item);
    setNumberList(item);
  }, []
  )

  // render a function out side UI
  function renderElement2() {
    return (
      <h3>render a function</h3>
    )
  }

  const handleTitle = useCallback(() => {
    console.log('handleTitle')
  }, [])

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
      <h5>From Register</h5>
      <FromRegisterComponent />
      <h5>TodoComponent</h5>
      <TodoComponent />
      <h5>Movie Film</h5>
      <MovieComponent />
      <h5>Big lists</h5>
      <BiglistsComponent  handleClick={handleClick}/>

      ---------------------------
      <h2>List & Keys</h2>
      <ListKey />

      ------------------------
      <h2>Styling CSS</h2>
      <StylingCss />

      -------------------------
      <h2>Forms</h2>
      <Forms />


      --------------------------
      <h2>GenerateBoxs</h2>
      <GenerateBoxsComponent />
      --------------------------
      <h2>Boxes Color</h2>
      <BoxesColorComponent />

      ------------------------
      <h2>useEffect hook</h2>
      {isUseEffect && <UseEffectHook />}
      
      <button type="button" onClick={() => setIsUseEffect(prevState => !prevState)}>test clean up</button>
      <br />
      ------------------------
      <h2>useContext</h2>
      <Books />

      ------------------------
      <h2>useReducer</h2>
      <UseReducerCounter />

      ------------------------
      <h2>useRef</h2>
      <UseRef />

      ------------------------
      <h2>memo hooks</h2>
      <MemoHook title="truong" handleTitle={handleTitle} />

      ------------------------
      <h2>Custom Hooks</h2>
      <CustomHooks />
      <br />
      <CustomHooksB />
      
    </div>
  );
}

export default App;
