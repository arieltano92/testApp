/**
 * Created by acalodolce on 10/07/18.
 */
import { createSelector } from 'reselect';
import {aplyFilters,calculateAge} from '../helper/playerListSelectorHelper'

const PlayerListSelector = state => state.PlayersList.content;
const Filter = state => state.FilterSearch.FilterSearch;

export const PlayerListWithAge =  createSelector(
    [PlayerListSelector],
    items =>
        items.map(item =>
            Object.assign(
                {},
                item,
                {
                    age: calculateAge(item.dateOfBirth)
                }
            )
        )
);

export const subPlayerListSelector = createSelector(
    [PlayerListWithAge,Filter],
    (items,filter) => {return filter? items.filter(item => aplyFilters(item,filter)) : items}
);



export default subPlayerListSelector;