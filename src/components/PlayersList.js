import React, { Component } from 'react';


class PlayersList extends Component {

    constructor(props) {
        super(props);
    }

    render(){

        return (<div className="players">{this.getPlayers()}</div>);
    }

    getPlayers(){
        console.log(this.props.PlayersList.PlayersList);
        return  this.props.PlayersList.PlayersList? this.props.PlayersList.PlayersList.content.map((player) => {
                return (<div className="player">
                    <div className="name">{player.name}</div>
                    <div className="position">{player.position}</div>
                </div>)
            }):'';
    };
}


export default PlayersList;