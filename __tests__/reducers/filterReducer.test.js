/**
 * Created by acalodolce on 13/07/18.
 */
import reducers from "../../src/reducers/FilterReducer";
import {filterSearch} from "../../src/actions/filter/Filter";
import {contentFetch} from "../../src/actions/content/Content";


describe("Filter reducer", () => {
    let state;

    it("should handle FILTER_SEARCH", () => {
        state = reducers({},filterSearch('Lukaku','center','25'));
        expect(state).toEqual({FilterSearch:{name:'Lukaku',position:'center',age:'25'}});
    });

    it("an other action shoudnt modify store", () => {
        state = reducers({},contentFetch(true));
        expect(state).toEqual(state);
    });

});