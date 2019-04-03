import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(){ 
        super(); 
        this.state = {
            title: "",
            responsible: "",
            description: "",
            priority : "low"
        };
        this.handleInput = this.handleInput.bind(this); // link handle input with the class taskform
        this.handleSubmit = this.handleSubmit.bind(this);
    }


handleInput(e){
   // console.log("writing....");
  // console.log(e.target.value, e.target.name);
  const { value, name } = e.target;
  this.setState({ //value to modify the data on state
        [name] : value
  })
   console.log(this.state);
}

handleSubmit (e) {
   // alert("sending data...")
    e.preventDefault(); // avoid refresh
   // console.log (this.state) checking the data first
   this.props.onAddTask(this.state);
   console.log("sending data...")
}



render (){
    return (
        <div className="card">
            <form className="card-body" onSubmit = {this.handleSubmit}>
                <div className="form-group">
                    <input 
                    type="text"
                    name="title"
                    className="form-control"
                    onChange={this.handleInput}                    
                    placeholder="Title"/>
                </div>
                <div className="form-group">
                    <input 
                    type="text"
                    name="responsible"
                    className="form-control"
                    onChange={this.handleInput} 
                    placeholder="Responsible"
                    />
                </div>
                <div className="form-group">
                    <input 
                    type="text"
                    name="description"
                    className="form-control"
                    onChange={this.handleInput} 
                    placeholder="Description"/>
                </div>
                <div className="form-group">
                    <select 
                    name="priority"
                    className="form-control"
                    onChange={this.handleInput} 
                   >
                   <option>Low</option>
                   <option>Medium</option>
                   <option>High</option>
                </select>
                </div>
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </form>

        </div>
    )
}
}

export default TaskForm;