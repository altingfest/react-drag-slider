import React from 'react';
import { render } from 'react-dom';
import { ReactScrollSlider } from './react-scroll-slider';

const dom = document.getElementById('react-scroll-slider');

if (dom !== null) {
  render((
    <ReactScrollSlider width={500} barElement={<img src="http://placehold.it/50x20" alt="bar"/>} barSize={{width: 50, height: 20}}>
      <img src="http://placehold.it/400x400" alt=""/>
      <img src="http://placehold.it/400x400" alt=""/>
      <img src="http://placehold.it/400x400" alt=""/>
      <img src="http://placehold.it/400x400" alt=""/>
      <img src="http://placehold.it/400x400" alt=""/>
      <img src="http://placehold.it/400x400" alt=""/>
    </ReactScrollSlider>
  ), dom);
}
