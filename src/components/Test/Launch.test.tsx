import React from 'react';
import {shallow,ShallowWrapper} from 'enzyme'
import Launch from '../Launch/Launch'
describe("App Component",()=>{
  let container:ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  beforeEach(()=>{
    container=shallow(<Launch data={{}}/>)
  })
  it("Should render a div tag from Launch component",()=>{
     expect(container.find("div").length).toEqual(1);
  })
  it("Heading Text",()=>{
      expect(container.find("h1").text()).toBe("Missions");
  }) 
})
