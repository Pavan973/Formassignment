import React, { Component } from 'react';
class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            Description:'',
            topic: 'react',
            date: ''
        }
    }

    handleUsernameChange = event =>{
        this.setState({
            username: event.target.value
        })
    }

    handleDescriptionChange = event =>{
        this.setState({
            Description: event.target.value
        })
    }
    handleTopicChange = event =>{
        this.setState({
            topic: event.target.value
        })
    }
    handledateChange = event =>{
        this.setState({
            date: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.Description} ${this.state.topic} ${this.state.date}`)
        event.preventDefault()
    }
    render(){
     return(
       <form onSubmit = {this.handleSubmit}>
           <div>
           <h1>Fill the Form </h1>
               <label> Username: </label>
               <input type ="text" value = {this.state.username} onChange = {this.handleUsernameChange} />
           </div>
           <br></br>
           <div>
               <label> Description: </label>
               <textarea value = {this.state.Description}  onChange = {this.handleDescriptionChange}></textarea>
           </div>
           <div>
            <label> Topic :</label>
            <select value = {this.state.topic} onChange = {this.handleTopicChange}>
               <option value = "react"> React </option>
               <option value = "angular"> Angular</option>
                <option value = "Vue"> Vue </option>
            </select>
           </div>
           <div>
               <label>Date and Time</label>
               <input type = "date" value ={this.state.date} onChange ={this.handledateChange} />
           </div>
           <br></br>
           <br></br>
           <button type = "submit">Save the form</button>
       </form>
     )
 }
}

export default Form