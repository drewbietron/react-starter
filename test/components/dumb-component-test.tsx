import * as React from 'react';
import { shallow } from 'enzyme';

import DumbComponent from '../../app/components/dumb-component';
import { dataFabricator } from '../../test/support/fabricators/data';

describe('dumb component', () => {
     const props = {dataFabricator, this.newProps};

  it('Says listing is sold', function () {
    const enzymeWrapper = shallow(<DumbComponent {...(this.props)} />);
    expect(enzymeWrapper.find('h2').text()).to.eql('new boy');
  });
});
