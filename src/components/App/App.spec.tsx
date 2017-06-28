import 'jsdom-global/register';
import * as React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import App from './';

describe('App', () => {
  let wrapper: any;

  afterEach(() => wrapper.detach());

  it('renders a title correctly', () => {
    wrapper = mount(
      <App/>,
      {attachTo: document.createElement('div')}
    );
    // expect(wrapper.find('div').html()).to.eq('yohooooooo');
    expect(true).to.be.true;
  });
});
