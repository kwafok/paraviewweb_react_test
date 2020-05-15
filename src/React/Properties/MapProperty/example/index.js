import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';

import MapProperty from 'paraviewweb/src/React/Properties/MapProperty';

const container = document.querySelector('.content');

const properties = {
  data: { value: [], id: 'map.property.id' },
  help: 'Dynamic property list',
  name: 'Map',
  onChange: function onChange(data) {
    console.log(data);
  },
  show: () => true,
  ui: { label: 'Custom constants', help: 'Dynamic property list' },
  viewData: {},
};

ReactDOM.render(React.createElement(MapProperty, properties), container);

document.body.style.margin = '10px';
