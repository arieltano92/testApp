import {createStore, applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import PlayerListReducer from '../reducers/PlayerListReducer';

export default function configureStore(){
    return createStore(combineReducers({
        PlayersList : PlayerListReducer
    }),    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ,applyMiddleware(thunk));

}