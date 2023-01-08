
import { useState } from "react";
// import Employee from './components/employee'
import Counter from './components/counter'


function App() {
  const [state,setState]=useState(false)

    return (
    <div className="app">
      <h1 onClick={()=>setState(!state)}>Show/Hide</h1>
      {state ? <Counter/> :null}
    </div>
  );
}


export default App;
