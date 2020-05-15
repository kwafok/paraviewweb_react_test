import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';

import ColorPickerWidget from 'paraviewweb/src/React/Widgets/ColorPickerWidget';

let component = null;

function colorChange(color) {
  component.updateColor([color[0], color[1], color[2]]);
  console.log('color', color);
}

component = ReactDOM.render(
  React.createElement(ColorPickerWidget, {
    color: [122, 10, 30],
    onChange: colorChange,
  }),
  document.querySelector('.content')
);
