import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src="https://s3.amazonaws.com/codecademy-content/courses/web-101/web101-image_brownbear.jpg" width="80" height="80" align="left" />
        <header>
          <h1>
            Mind ToDo App
          </h1>
        </header>
        <nav>
          <a href="./index.html">Home</a> | <a href="./apps.html">Apps</a> | <a href="./about.html">About</a>
        </nav>
        <div class="section">
          <main>
            <input type="text" placeholder="Whats on your mind?" id="inputMind"></input>
            <button type="button" name="submit" id="submitButton">submit</button>
          </main>
          <input type="text" placeholder="search" id="search"></input>
          <button type="button" id="searchButton">Search</button>
          <div class="container" id="listMind">


          </div>
        </div>
      </div>
    );
  }
}

export default App;
