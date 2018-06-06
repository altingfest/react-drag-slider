import React from 'react';
import { render } from 'react-dom';
import { ReactScrollSlider } from './react-scroll-slider';

const dom = document.getElementById('react-scroll-slider');

if (dom !== null) {
  render((
    <ReactScrollSlider width={500} barElement="x">
      <img src="http://placehold.it/400x400" alt=""/><img src="http://placehold.it/400x400" alt=""/><img
      src="http://placehold.it/400x400" alt=""/><img src="http://placehold.it/400x400" alt=""/><img
      src="http://placehold.it/400x400" alt=""/><img src="http://placehold.it/400x400" alt=""/>
    </ReactScrollSlider>
  ), dom);
}
