/**
 * Created by acalodolce on 10/07/18.
 */
export const FILTER_SEARCH = "FILTER_SEARCH";



export function filterSearch(name = '', position = '', age = '') {
    return {
        type: FILTER_SEARCH,
        payload: {
            name,
            position,
            age
        }
    };
}


