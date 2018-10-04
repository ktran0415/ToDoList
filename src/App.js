import React, { Component } from 'react';
import List from './List';
import ToDoForm from './ToDoForm';


class App extends Component {

    state = { todos: [] }
   
    addItem = (name) => {
      //destructing todos
      const { todos } = this.state
      const thingthing = {id: Math.random(), name, complete: false }
      this.setState({todos: [thingthing, ...todos })
    }

   export default App; 