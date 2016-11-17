import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import DumbComponent from '../../app/components/dumb-component.jsx';
import { dataFabricator } from '../../test/support/fabricators/data.js';

describe('dumb component', () => {
  def('props', function () {
    return Object.assign({}, dataFabricator, this.newProps);
  });

  def('newProps', {
    data: {
      foo: 'new boy',
    },
  });

  it('Says listing is sold', function () {
    const enzymeWrapper = shallow(<DumbComponent {...(this.props)} />);
    expect(enzymeWrapper.find('h2').text()).to.eql('new boy');
  });
});
