import React, {Component} from 'react'
import TodoList from './Components/TodoList'


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render(){
    return(
      <>
      <h1>To Do List</h1>
      <TodoList  />
      </>
    )
  }
}

export default App