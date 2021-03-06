import React from 'react';
import {shallow,ShallowWrapper} from 'enzyme'
import App from './App';
describe("App Component",()=>{
  let container:ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  beforeEach(()=>{
    container=shallow(<App />)
  })
  it("Should render a div tag",()=>{
     expect(container.find("div").length).toEqual(1);
  })
})
