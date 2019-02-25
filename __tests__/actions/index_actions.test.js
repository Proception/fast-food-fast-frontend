import React from 'react';
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NavMenu from '../../src/components/Menus/NavMenu'
import { removeData, addData } from "../../src/actions/index"
import { ADD_DATA, REMOVE_DATA } from "../../src/constants/action-types"


const middlewares = []
const mockStore = configureStore(middlewares)




describe('Test Actions', () => {
    it('should dispatch ADD_DATA Action', () => {
      // Initialize mockstore with empty state
      const initialState = {}
      const store = mockStore(initialState)
      const data = [{id: 1, title: "test title"}, {id: 2, title: "test title"}]
      
      // Dispatch the action
      store.dispatch(addData(data))
      
      // Test if your store dispatched the expected actions
      const actions = store.getActions()

      const expectedPayload = { type: ADD_DATA, payload: data }
      expect(actions).toEqual([expectedPayload])
    })
    it('should dispatch REMOVE_DATA Action', () => {
      // Initialize mockstore with empty state
      const initialState = [{id: 1, title: "test title"}, {id: 2, title: "test title"}]
      const store = mockStore(initialState)
      const data = {id: 1, title: "test title"}
      
      // Dispatch the action
      store.dispatch(removeData(data))
      
      // Test if your store dispatched the expected actions
      const actions = store.getActions()

      const expectedPayload = { type: REMOVE_DATA, payload: data }
      expect(actions).toEqual([expectedPayload])
    })
  });

  describe('Test Menu Component', () => {
    it('should render nav menu component', () => {
      const wrapper = shallow(<NavMenu/>)

      expect(wrapper.length).toEqual(1)
    })
    it('should render nav menu component', () => {
      const wrapper = shallow(<NavMenu/>)
      // const component = wrapper.dive();
      console.log(wrapper.find('.active'))
      // expect(wrapper.find('Home')).toEqual(1)
    })
  });