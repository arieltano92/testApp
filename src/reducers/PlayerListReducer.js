import {CONTENT_FETCH_FAILED,CONTENT_FETCHED,CONTENT_FETCHING} from "../actions/content/Content"

const initialState = {
}

export default function PlayerListReducer(state = initialState , action = {}){
    switch(action.type) {
        case CONTENT_FETCH_FAILED:
            return Object.assign(
                    {},
                    state,
                    {error: {
                        content: action.payload.content,
                        status: action.payload.status
                    }}
                );
        case CONTENT_FETCHING:
            return Object.assign(
                    {},
                    state,
                    {isLoading : action.payload.isLoading}
                );
        case CONTENT_FETCHED:
            return  Object.assign(
                    {},
                    state,
                    {
                        content: action.payload.content,
                        status: action.payload.status
                    }
                );
        default:
            return state;
    }
}