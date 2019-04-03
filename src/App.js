import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//This is a jsx file, no html

import { tasks } from './tasks.json';
//console.log(tasks);

//import components
import TaskForm from './components/TaskForm';

class App extends Component {
  constructor(){ // save data
    super(); //herite all functionality of react or error
    this.state = {
      tasks
    };
    this.handleAddTask = this.handleAddTask.bind(this);
  }

//adding function event to store the data of form
  handleAddTask(task){//method par task
    this.setState({//update the task (state of app)
     tasks : [...this.state.tasks,task] // link present state with the new state
      //this add new task to tasks.json
    })
  }

  handleRemoveTask(index){
   // console.log(index);
   this.setState({
     tasks: this.state.tasks.filter((e, i) => {// this method generate new array under condition
      return i !== index //if a task is different to the index, it'll return it. easy way to delete the index
    })
  })
}
  render() {
   //console.log ("before render component");
  //console.log(this.state.tasks);
    const tasks = this.state.tasks.map((task, i) => {
      return (
        <div className="col-md-3 ml-2" key={i}>
          <div className="card bg-light text-dark">
          <div className='card-header'>
            <h3>{task.title}</h3>
            <span className ="badge badge-pill badge-warning">
            {task.priority}
            </span>
          </div>
          <div className ="card-body text-center">
            <p>{task.description}</p>
            <p><mark>{task.responsible}</mark></p>
          </div> 
          <div className="card-footer">
            <button className="btn btn-danger"
            onClick={this.handleRemoveTask.bind(this, i)}>
              Delete
            </button>
          </div>
        </div>
        
        
        </div>
    )
  })

    return (
      <div className="App"> 
       
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a href=" " className="text-dark" >
                Tasks
                <span className= "badge badge-pill badge-success ml-2">
                  {this.state.tasks.length}
                </span>
            </a>
           </nav>

           <div className= "container">
            <div className="row mt-4 ml-2">
          
            

           <div className="col-md-4 text-center">
        <img src={logo} className="App-logo" alt='logo' />
        <TaskForm onAddTask = {this.handleAddTask}/>   
          </div>

        <div className="col-md-8">
        <div className="row">
        {tasks}
        </div>

        </div>


        </div>
      </div>
    </div>
    );
  }
}

export default App;
