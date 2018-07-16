/**
 * Created by acalodolce on 15/07/18.
 */
import * as selectors from '../../src/selectors/PlayerListSelector';


describe('Selectors tests', () => {
    it('PlayerListWithAge selector should return age in objects of array list',()=>{
        const selected = selectors.PlayerListWithAge.resultFunc([{dateOfBirth:'1992-03-10'}]);
        expect(selected).toEqual([{dateOfBirth:'1992-03-10',age:26}]);
    });

    it('subPlayerListSelector selector should return filtered list',()=>{
        const mockedList = [{name:'Lukaku',age:26,position:'Keeper',dateOfBirth:'1992-03-10'},
                            {name:'Roben',age:28,position:'Keeper',dateOfBirth:'1992-03-10'}];
        const filter = {name:'Lukaku',age:26,position:'Keeper'};

        const selected = selectors.subPlayerListSelector.resultFunc(mockedList,filter);
        expect(selected).toEqual([{name:'Lukaku',age:26,position:'Keeper',dateOfBirth:'1992-03-10'}]);
    });
})