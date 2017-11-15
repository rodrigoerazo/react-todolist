import React, { Component } from 'react';
import Tasks from './Tasks.js'
import Do from './Do.js'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            term: '',
            tasks: ['Learn React Js', 'Learn Node Js', 'Learn Angular Js']
        }
        this.deleteTask = this.deleteTask.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.deleteAll = this.deleteAll.bind(this);
        this.whatIdo = this.whatIdo.bind(this)
        this.hasTasks = this.hasTasks.bind(this)
    }

    deleteTask(index) {
        var tasksup = this.state.tasks.slice()
        tasksup.splice(index, 1)
        this.setState(() => {
            return {
                tasks: tasksup
            }
        })
    }

    onChange(event) {
        this.setState({ term: event.target.value })
    }

    onSubmit(event) {
        event.preventDefault()
        this.setState(() =>{
            return {
                term: '',
                tasks: [...this.state.tasks, this.state.term]
            }
        })
    }
    deleteAll() {
        this.setState(() =>{
            return {
                tasks: []
            }
        })
    }
    hasTasks() {
        alert('no available tasks!')
    }
    whatIdo() {
        const randNum = Math.floor(Math.random() * this.state.tasks.length)
        const task = this.state.tasks[randNum]
        alert(task)
    }
      
    render() {
        return (
            <div className="container todo">
                <h2>Simple todo React app</h2>
                <div className="card create">
                    <form onSubmit={this.onSubmit}>
                        <div className="input-field purple-input">
                            <span className="task-icon"></span>
                            <input type="text" value={this.state.name} onChange={this.onChange} />
                        </div>
                        <div className="center-text">
                            <button className="btn btn-rounded btn-outlined purple-btn">Submit</button>
                        </div>
                    </form>
                </div>
                <Do
                whatIdo={this.whatIdo} 
                hasTasks={this.state.tasks.length > 0 }/>
                <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask}/>

                <div className="center-text">
                    <button 
                            className="btn btn-rounded btn-outlined orange-btn"
                            onClick={this.deleteAll}
                    >
                    Delete all
                    </button>
                </div>
            </div>
        );
    }
}