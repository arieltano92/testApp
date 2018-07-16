/**
 * Created by acalodolce on 13/07/18.
 */
import React from 'react';
import * as playerListeSelectorHelper from '../../src/helper/playerListSelectorHelper'

describe('helper test',()=>{

    it('calculateAge function should return age',() => {
        expect(playerListeSelectorHelper.calculateAge('1993-05-13')).toEqual(25);
    });

    it('aplyFilters function should return true if player in filter',() => {
        expect(playerListeSelectorHelper.aplyFilters({name:'Lukaku',age:'25',position:'center'},{name:'Lukaku',age:'25',position:'center'})).toEqual(true);
    });

    it('aplyFilters function should return true if player in filter',() => {
        expect(playerListeSelectorHelper.aplyFilters({name:'Lukaku',age:'28',position:'center'},{name:'Lukaku',age:'25',position:'center'})).toEqual(false);
    });

})