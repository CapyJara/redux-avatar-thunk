import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('Characters component', () => {
  it('renders a Characters', () => {
    const characters = [
      {
        image: 'image@image.png',
        name: 'person person'
      },
      {
        image: 'holysmokes.png',
        name: 'yolo dude bro'
      },
      {
        image: 'neatPic.png',
        name: 'sassy queen'
      }
    ];

    const wrapper = shallow(<Characters characters={characters} />);
    expect(wrapper).toMatchSnapshot();
  });
});
