/**
 * Created by acalodolce on 12/07/18.
 */
import React, { Component } from 'react';
import {connect} from "react-redux";
import '../App.css';
import {itemsFetchData} from '../actions/content/Content';
import subPlayerListSelector from '../selectors/PlayerListSelector';
import App from '../components/App'

class AppContainer extends Component {

    componentWillMount(){
        this.props.dispatch(itemsFetchData('https://football-players-b31f2.firebaseio.com/players.json?print=pretty'));
    }

    render() {
        return (
            <div className="AppContainer">
                <App {...this.props}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    let PlayersList = {content : null, status : null};
    if (state.PlayersList && state.PlayersList.content) {
        PlayersList.content = subPlayerListSelector(state);
        PlayersList.status = state.PlayersList.status;
    }
    return {
        PlayersList,
    };
}

export default connect(mapStateToProps)(AppContainer);