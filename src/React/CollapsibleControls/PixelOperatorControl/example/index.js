import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';

import PixelOperatorControl from 'paraviewweb/src/React/CollapsibleControls/PixelOperatorControl';

let operationValue = 'a+2/5';
const operator = {
  getOperation() {
    return operationValue;
  },
  setOperation(v) {
    operationValue = v;
  },
};
const container = document.querySelector('.content');

ReactDOM.render(
  React.createElement(PixelOperatorControl, { operator }),
  container
);

document.body.style.margin = '10px';
