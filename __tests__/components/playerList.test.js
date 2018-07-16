/**
 * Created by acalodolce on 15/07/18.
 */
import Enzyme , {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlayersList from '../../src/components/PlayersList';
import React, { Component } from 'react';

Enzyme.configure({ adapter: new Adapter()});

function setup() {
    const props = {
        PlayersList :{content: [{name:'Lukaku',age:21,position:'Keeper'},{name:'Lukaku',age:23,position:'Center'}]},
    }

  const enzymeWrapper = mount(<PlayersList {...props} />);
  return {
      props,
      enzymeWrapper
  }
}

describe('PlayerList component test',()=>{

    const {enzymeWrapper} = setup();
    it('Should render self and subcomponents',()=>{
        expect(enzymeWrapper.find('div').at(1).hasClass('player')).toEqual(true);
        expect(enzymeWrapper.find('div').at(2).hasClass('name')).toEqual(true);
        expect(enzymeWrapper.find('div').at(3).hasClass('position')).toEqual(true);
        expect(enzymeWrapper.find('div').at(4).hasClass('nationality')).toEqual(true);
        expect(enzymeWrapper.find('div').at(5).hasClass('date_birth')).toEqual(true);
    })

})
