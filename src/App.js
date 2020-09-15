import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
   state = {}
   render() {
      return (<div className="App">
         <h1>Hi I'm a react App</h1>
         <p>This is really Working</p>
         <button>Switch name</button>
         <Person name="Divin" age="22">Admin</Person>
         <Person name="patrick" age="14">Student</Person>
      </div>);
   }
}
export default App;
