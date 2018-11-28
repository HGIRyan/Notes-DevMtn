import React, { Component } from 'react';
import axios from 'axios'; 
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todoList: [],
    }
  }
  componentDidMount(){
    console.log('componentDidMount')
    axios.get('/api/todo').then((res)=>{
      this.setState({todoList:res.data})
    
    })
  }

  render() {
    const mappedTodos = this.state.todoList.map((todo)=>
      <h1 key={todo.id}>{todo.title}</h1>
    )
    return (
      <div className="App">
        <header className="App-header">
          <div>{mappedTodos}</div>
        </header>
      </div>
    );
  }
}

export default App;
