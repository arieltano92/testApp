/**
 * Created by acalodolce on 12/07/18.
 */

export const aplyFilters = (item,filter) => {
    if(filter.name !== '' && item.name !== filter.name){return false;}
    if(filter.position !== '0' && item.position !== filter.position){return false;}
    if(filter.age !== '' && item.age != filter.age){return false;}
    return true;
}

export const calculateAge = (dateBirth) => {
    let MILLISECONDS_IN_A_YEAR = 1000*60*60*24*365;
    let date_array = dateBirth.split('-')
    let years_elapsed = (new Date() - new Date(date_array[0],date_array[1],date_array[2]))/(MILLISECONDS_IN_A_YEAR);
    return Math.trunc(years_elapsed);
}