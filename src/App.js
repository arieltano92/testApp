import React, { Component } from 'react';
import {connect} from "react-redux";
import './App.css';
import {itemsFetchData} from './actions/content/content'
import PlayersList from "./components/PlayersList"

class App extends Component {

    constructor(props) {
        super(props);
    }


    componentWillMount(){
        this.props.dispatch(itemsFetchData('https://football-players-b31f2.firebaseio.com/players.json?print=pretty'));
    }

  render() {
      return (
      <div className="App">
          <PlayersList {...this.props}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
    let PlayersList = null;
    if (state.PlayersList !== null) {
        PlayersList = state.PlayersList;
    }
    return {
        PlayersList
    };
}

export default connect(mapStateToProps)(App);