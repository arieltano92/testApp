import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import {filterSearch} from '../actions/filter/Filter'

class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
            playerName: '',
            age: '',
            position: '0',
            formErrors: {playerName: '', age: '' , position :''},
            playerNameValid: true,
            ageValid: true,
            formValid: true
        }
    }

    handleUserInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () =>  this.validateField(name, value) );
    };

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let playerNameValid = this.state.playerNameValid;
        let ageValid = this.state.ageValid;

        switch(fieldName) {
            case 'playerName':
                playerNameValid = value.match(/^[a-zA-Z ]*$/i) !== null;
                fieldValidationErrors.playerName = playerNameValid ? '' : ' is invalid.';
                break;
            case 'age':
                ageValid = (value.match(/^[0-9]*$/i) !== null && value > '17' && value < '41') || value == '' ;
                fieldValidationErrors.age = ageValid ? '' : ' is invalid.';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            playerNameValid,
            ageValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.playerNameValid && this.state.ageValid});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.dispatch(filterSearch(this.state.playerName,this.state.position,this.state.age));
    }

    render () {
        return (<div className = 'menu'>
                <h2>Footbal player finder</h2>
                <FormErrors formErrors={this.state.formErrors} />
                <form className="playersForm" onSubmit={this.handleSubmit}>
                <div className="panel panel-default">
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.playerName)}`}>
                    <input type="text" className="form-control" name="playerName"
                           placeholder="Player name"
                           value={this.state.playerName}
                           onChange={this.handleUserInput}  />
                </div>
                <select value={this.state.position} placeholder="Position" name="position" onChange={this.handleUserInput}>
                    <option value="0">Position</option>
                    <option value="Attacking Midfield">Attacking Midfield</option>
                    <option value="Central Midfield">Central Midfield</option>
                    <option value="Centre-Back">Centre-Back</option>
                    <option value="Centre-Forward">Centre-Forward</option>
                    <option value="Defensive Midfield">Defensive Midfield</option>
                    <option value="Keeper">Keeper</option>
                    <option value="Left Midfield">Left Midfield</option>
                    <option value="Left Wing">Left Wing</option>
                    <option value="Left-Back">Left-Back</option>
                    <option value="Right-Back">Right-Back</option>
                </select>
                <div className={`form-group ${this.errorClass(this.state.formErrors.playerName)}`}>
                    <input type="text"  className="form-control" name="age"
                           placeholder="Age"
                           value={this.state.age}
                           onChange={this.handleUserInput}
                    />
                </div>
                <button type="input" className="btn btn-primary" disabled={!this.state.formValid}>Search</button>
            </form>
            </div>
        )
    }
}

export default Form;