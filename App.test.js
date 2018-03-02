import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
it('renders',function(){
const wrapper=shallow(<App name="learnerapp"/>);
 expect(wrapper.find('p').text()).toEqual('learnerapp');

});