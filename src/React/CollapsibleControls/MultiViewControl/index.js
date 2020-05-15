import React from 'react';
import PropTypes from 'prop-types';

import CollapsibleWidget from '../../Widgets/CollapsibleWidget';
import LayoutsWidget from '../../Widgets/LayoutsWidget';

/* eslint-disable react/no-unused-state */

/**
 * This React component expect the following input properties:
 *   - renderer:
 *       Expect a MultiViewRenderer instance.
 */
export default class MultiViewControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderMethod: '',
      layout: '',
    };

    // Bind callback
    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.onRenderMethodChange = this.onRenderMethodChange.bind(this);
    this.onLayoutChangeCallback = this.onLayoutChangeCallback.bind(this);
    this.onActiveViewportCallback = this.onActiveViewportCallback.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.renderer && nextProps.renderer) {
      const renderer = nextProps.renderer;
      this.layoutSubscription = renderer.onLayoutChange(
        this.onLayoutChangeCallback
      );
      this.renderMethodSubscription = renderer.onActiveViewportChange(
        this.onActiveViewportCallback
      );
      this.setState({
        renderMethod: renderer.getActiveRenderMethod(),
        layout: renderer.getActiveLayout(),
      });
    }
  }

  componentWillUnmount() {
    if (this.layoutSubscription) {
      this.layoutSubscription.unsubscribe();
      this.layoutSubscription = null;
    }
    if (this.renderMethodSubscription) {
      this.renderMethodSubscription.unsubscribe();
      this.renderMethodSubscription = null;
    }
  }

  onLayoutChange(layout) {
    this.props.renderer.setLayout(layout);
  }

  onRenderMethodChange(event) {
    const renderMethod = event.target.value;
    this.props.renderer.setRenderMethod(renderMethod);
  }

  onLayoutChangeCallback(data, envelope) {
    this.setState({
      layout: data,
    });
  }

  onActiveViewportCallback(data, envelope) {
    this.setState({
      renderMethod: data.name,
    });
  }

  render() {
    const renderer = this.props.renderer;
    let renderMethods = [];

    if (renderer) {
      renderMethods = renderer.getRenderMethods().map((v) => (
        <option key={v} value={v}>
          {v}
        </option>
      ));
    }

    return (
      <div>
        <CollapsibleWidget title="Layout">
          <LayoutsWidget onChange={this.onLayoutChange} />
        </CollapsibleWidget>
        <CollapsibleWidget title="Viewport">
          <select
            style={{ width: '100%' }}
            value={this.state.renderMethod}
            onChange={this.onRenderMethodChange}
          >
            {renderMethods}
          </select>
        </CollapsibleWidget>
      </div>
    );
  }
}

MultiViewControl.propTypes = {
  renderer: PropTypes.object,
};

MultiViewControl.defaultProps = {
  renderer: undefined,
};
