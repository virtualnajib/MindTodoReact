import React, {Component} from 'react';


class MindTodo extends Component {
  render(){
    return(
      <div>
        <h1>
          Mind ToDo App
        </h1>

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
    )
  }
}


export default MindTodo;
