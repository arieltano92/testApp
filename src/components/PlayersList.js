import React, { Component } from 'react';


class PlayersList extends Component {


    render(){
        return (<div className="players">{this.getPlayers(this.props)}</div>);
    }

    getPlayers(props){
        const {content} =  props.PlayersList? props.PlayersList : null;
        return  content? content.map((player,index) => {
                return (<div className="player">
                    <div className="name">{player.name}</div>
                    <div className="position">{player.position}</div>
                    <div className="nationality">{player.nationality}</div>
                    <div className="date_birth">{player.age}</div>
                </div>)
            }):'';
    };
}


export default PlayersList;