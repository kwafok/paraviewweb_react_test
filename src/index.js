// import React from 'react';
// import ReactDOM from 'react-dom';
/* import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 */

// import './React/CollapsibleControls/FloatImageControl/example/index.js';
// import './React/CollapsibleControls/LightControl/example/index.js';
// import './React/CollapsibleControls/LookupTableManagerControl/example/index.js';
// import './React/CollapsibleControls/MultiViewControl/example/index.js';
// import './React/CollapsibleControls/PixelOperatorControl/example/index.js';
// import './React/CollapsibleControls/ProbeControl/example/index.js';
// import './React/CollapsibleControls/QueryDataModelControl/example/index.js';
// import './React/CollapsibleControls/VolumeControl/example/index.js';
// import './React/Properties/EnumProperty/example/index.js';
// import './React/Properties/MapProperty/example/index.js';
// import './React/Properties/PropertyPanel/example/index.js';
// import './React/Renderers/ImageRenderer/example/index.js';
// import './React/Renderers/MultiLayoutRenderer/example/index.js';
// import './React/Viewers/AbstractViewerMenu/example/index.js';
// import './React/Viewers/ImageBuilderViewer/example/index.js';
// import './React/Viewers/LineChartViewer/example/index.js';
// import './React/Viewers/MultiLayoutViewer/example/index-with-diff.js';
// import './React/Viewers/MultiLayoutViewer/example/index.js';
// import './React/Viewers/Probe3DViewer/example/index.js';
// import './React/Widgets/ActionListWidget/example/index.js';
// import './React/Widgets/AnnotationEditorWidget/example/index.js';
// import './React/Widgets/ButtonSelectorWidget/example/index.js';
// import './React/Widgets/CollapsibleWidget/example/index.js';
// import './React/Widgets/ColorByWidget/example/index.js';
// import './React/Widgets/ColorMapEditorWidget/example/index.js';
// import './React/Widgets/ColorPickerWidget/example/index.js';
// import './React/Widgets/CompositePipelineWidget/example/index.js';
// import './React/Widgets/ContentEditableWidget/example/index.js';
// import './React/Widgets/Coordinate2DWidget/example/index.js';
// import './React/Widgets/DoubleSliderWidget/example/index.js';
// import './React/Widgets/DropDownWidget/example/index.js';
// import './React/Widgets/EditableListWidget/example/index.js';
// import './React/Widgets/EqualizerWidget/example/index.js';
// import './React/Widgets/FileBrowserWidget/example/index.js';
// import './React/Widgets/GitTreeWidget/example/index.js';
// import './React/Widgets/InlineToggleButtonWidget/example/index.js';
// import './React/Widgets/LayoutsWidget/example/index.js';
// import './React/Widgets/LookupTableWidget/example/index.js';
// import './React/Widgets/NumberInputWidget/example/index.js';
// import './React/Widgets/NumberSliderWidget/example/index.js';
// import './React/Widgets/PieceWiseFunctionEditorWidget/example/index.js';
// import './React/Widgets/ProgressLoaderWidget/example/index.js';
// import './React/Widgets/ProxyEditorWidget/example/index.js';
// import './React/Widgets/QueryDataModelWidget/example/index.js';
// import './React/Widgets/SelectionEditorWidget/example/index.js';
// import './React/Widgets/SvgIconWidget/example/index.js';
// import './React/Widgets/TextInputWidget/example/index.js';
// import './React/Widgets/ToggleIconButtonWidget/example/index.js';
// import './React/Widgets/TogglePanelWidget/example/index.js';

import React            from 'react';
import ReactDOM         from 'react-dom';
import GitTreeWidget    from 'paraviewweb/src/React/Widgets/GitTreeWidget';

const nodes = [
  { name: 'another branch',          visible: true,  id: '40',  parent: '1'     },
  { name: 'child of branch',         visible: false, id: '50',  parent: '40'    },
  { name: 'branch of branch',        visible: true,  id: '51',  parent: '40'    },
  { name: 'actually the final node', visible: true,  id: '30',  parent: '20'    },
  { name: 'other node',              visible: true,  id:'1',    parent: '199'   },
  { name: 'top node',                visible: false, id: '199', parent: '0'     },
  { name: 'branched node',           visible: false, id: '10',  parent: '1'     },
  { name: 'branched node child',     visible: false, id: '11',  parent: '10'    },
  { name: 'final node',              visible: true,  id: '20',  parent: '1'     },
];

function onChange(event) {
    console.log(event);
}

ReactDOM.render(
    <GitTreeWidget
        nodes={nodes}
        onChange={onChange}
        multiselect
        enableDelete/>,
    document.querySelector('.content')
);