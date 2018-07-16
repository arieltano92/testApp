/**
 * Created by acalodolce on 10/07/18.
 */
import {FILTER_SEARCH} from "../actions/filter/Filter"

const initialState = {
}

export default function FilterReducer(state = initialState , action = {}){
    switch(action.type) {
        case FILTER_SEARCH:
            return Object.assign(
                    {},
                    state,
                    {FilterSearch: {
                        name: action.payload.name,
                        position: action.payload.position,
                        age: action.payload.age
                    }}
                );
        default:
            return state;
    }
}