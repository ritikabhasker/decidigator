import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    question: "",
    answer: "",
    toggle: false
  }
  handleChange = e => {
    this.setState({ question: e.target.value })
  }
  handleSubmit = () => {
    this.setState({ answer: this.generateAnswer(), toggle: !this.state.toggle })
  }
  generateAnswer = () => {
    if (this.state.question.length % 2 === 0) { return "Yes" }
    else { return "No" }
  }
  render() {
    return (
      <div className="App" >
        <h1>
          There's a 50% chance of absolutely anything happening on a given day: it either does or it doesn't. This is science.
        </h1>
        <h2>
          Enter a yes or no question and let the universe predict whether or not it's going to happen today!
          </h2>
        <input className='input' placeholder="Type in a yes/no question" onChange={this.handleChange}></input>
        <div>
          <button className='button' onClick={this.handleSubmit}>{this.state.toggle ? "Try again you cheat" : "Click me to submit"}</button>
        </div>
        {this.state.toggle ?
          <div className='output'>
            The answer to
            <div className='question output'>{this.state.question}</div> is:
            <div className='answer'>
              {this.state.answer}
            </div>
          </div>
          : null
        }
      </div>
    );
  }
}
export default App;
