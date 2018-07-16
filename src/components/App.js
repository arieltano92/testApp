import React, { Component } from 'react';
import '../App.css';
import PlayersList from "../components/PlayersList";
import FormFilter from "../components/FormFilter";

class App extends Component {


  render() {
      return (
      <div className="App">
          <FormFilter {...this.props}/>
          <PlayersList {...this.props}/>
      </div>
    );
  }
}

export default App;
