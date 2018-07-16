/**
 * Created by acalodolce on 12/07/18.
 */
import reducers from "../../src/reducers/PlayerListReducer";
import * as playerListActions from "../../src/actions/content/Content";
import {filterSearch} from "../../src/actions/filter/Filter";

describe("Player list reducer", () => {
    let state;

    it("should handle CONTENT_FETCHED", () => {
        state = reducers({}, playerListActions.contentFetched({playerList: {name:'Lukaku'}},200));
        expect(state).toEqual({content:{playerList:{name:'Lukaku'}},status:200});
    });

    it("should handle CONTENT_FETCHING", () => {
        state = reducers({}, playerListActions.contentFetch(true));
        expect(state).toEqual({isLoading:true});
    });

    it("should handle CONTENT_FETCHING", () => {
        state = reducers({}, playerListActions.contentFetch(false));
        expect(state).toEqual({isLoading:false});
    });


    it("should handle CONTENT_FETCH_FAILED", () => {
        state = reducers({}, playerListActions.contentFetchFailed('Error',404));
        expect(state).toEqual({error: {
            content: 'Error',
            status: 404
        }});
    });

    it("should handle CONTENT_FETCHED", () => {
        state = reducers({}, playerListActions.contentFetched({playerList: {name:'Lukaku'}},200));
        expect(state).toEqual({content:{playerList:{name:'Lukaku'}},status:200});
    });

    it("an other action shoudnt modify store", () => {
        state = reducers({},filterSearch());
        expect(state).toEqual(state);
    });
});