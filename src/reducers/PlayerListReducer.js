import {CONTENT_FETCH_FAILED,CONTENT_FETCHED,CONTENT_FETCHING} from "../actions/content/content"

const initialState = {
}

export default function PlayerListReducer(state = initialState , action = {}){
    switch(action.type) {
        case CONTENT_FETCH_FAILED:
            return action.type === CONTENT_FETCH_FAILED ? Object.assign(
                    {},
                    state,
                    {error: {
                        content: action.payload.content,
                        status: action.payload.status
                    }}
                ) : state;
        case CONTENT_FETCHING:
            return action.type === CONTENT_FETCHING ? Object.assign(
                    {},
                    state,
                    action.payload.isLoading
                ) : state;
        case CONTENT_FETCHED:
            return action.type === CONTENT_FETCHED ? Object.assign(
                    {},
                    state,
                    {PlayersList: {
                        content: action.payload.content,
                        status: action.payload.status
                    }}
                ) : state;
        default:
            return state;
    }
}