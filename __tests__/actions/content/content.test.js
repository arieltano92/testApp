import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const fetchMock = require('fetch-mock/es5/server');
import * as contentActions from '../../../src/actions/content/Content';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });


    it('should create an action to content Fetch', () => {
        const expectedAction = {
            type: contentActions.CONTENT_FETCHING,
            payload: { isLoading : true}
        };
        expect(contentActions.contentFetch(true)).toEqual(expectedAction);
    });
    it('should create an action to content Fetched', () => {
        const expectedAction = {
            type: contentActions.CONTENT_FETCHED,
            payload: {content: {},
                status: 200}
        };
        expect(contentActions.contentFetched({},200)).toEqual(expectedAction);
    });

    it('should create an action to content Fetch failed', () => {
        const expectedAction = {
            type: contentActions.CONTENT_FETCHED,
            payload: {content: {error:'error'},
                status: 400}
        };
        expect(contentActions.contentFetched({error:'error'},400)).toEqual(expectedAction);
    });

    it('creates CONTENT_FETCHED when fetching players has been done', () => {
        fetchMock.getOnce('/players', {items: {playerList: ['something']}, headers: {'content-type': 'application/json'}});
        const expectedActions = [
            {payload: {"isLoading": true}, type: contentActions.CONTENT_FETCHING},
            {payload: { playerList: ['something'] },type: contentActions.CONTENT_FETCHED,  }
        ];
        const store = mockStore({ playerList: [] });
        store.dispatch(contentActions.itemsFetchData('/players'));
        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
        }, 1000)    });

    it('creates CONTENT_FETCH_FAILED when fetching players hasnt been done', () => {
        fetchMock.getOnce('/players', {error: {error: 'error'}, headers: {'content-type': 'application/json'}});
        const expectedActions = [
            {payload: {error: 'error'}, type: contentActions.CONTENT_FETCH_FAILED},
        ];
        const store = mockStore({ playerList: [] });
        store.dispatch(contentActions.itemsFetchData('/players'));
        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
        }, 1000)
    });
});