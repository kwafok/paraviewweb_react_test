import React from 'react';
import PropTypes from 'prop-types';

import style from 'PVWStyle/ReactCollapsibleControls/FloatImageControl.mcss';

export default class FloatImageControlLayerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      change: false,
      dropDown: false,
    };

    // Bind callback
    this.toggleMesh = this.toggleMesh.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.updateColorBy = this.updateColorBy.bind(this);
  }

  toggleMesh() {
    if (this.props.item.hasMesh) {
      this.props.model.updateMaskLayerVisibility(
        this.props.item.name,
        !this.props.item.meshActive
      );
      this.setState({ change: !this.state.change });
    }
  }

  toggleVisibility() {
    this.props.model.updateLayerVisibility(
      this.props.item.name,
      !this.props.item.active
    );
    this.setState({ change: !this.state.change });
  }

  toggleDropDown() {
    if (this.props.item.arrays.length > 1) {
      this.setState({ dropDown: !this.state.dropDown });
    }
  }

  updateColorBy(event) {
    this.props.model.updateLayerColorBy(
      this.props.item.name,
      event.target.dataset.color
    );
    this.toggleDropDown();
  }

  render() {
    const layer = this.props.item;
    const visible = layer.active;
    const meshVisible = layer.meshActive;
    const meshAvailable = layer.hasMesh;
    const hasDropDown = layer.arrays.length > 1;

    return (
      <div className={style.item}>
        <div className={style.sceneLabel}>{layer.name}</div>
        <div className={style.sceneActions}>
          <i
            className={
              meshAvailable
                ? meshVisible
                  ? style.meshButtonOn
                  : style.meshButtonOff
                : style.hidden
            }
            onClick={this.toggleMesh}
          />
          <i
            className={visible ? style.visibleButtonOn : style.visibleButtonOff}
            onClick={this.toggleVisibility}
          />
          <i
            className={
              hasDropDown ? style.dropDownButtonOn : style.dropDownButtonOff
            }
            onClick={this.toggleDropDown}
          />
          <div
            onClick={this.updateColorBy}
            className={this.state.dropDown ? style.menu : style.hidden}
          >
            {layer.arrays.map((color) => (
              <div
                key={color}
                data-color={color}
                className={
                  color === layer.array
                    ? style.selectedMenuItem
                    : style.menuItem
                }
              >
                {color}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

FloatImageControlLayerItem.propTypes = {
  item: PropTypes.object.isRequired,
  model: PropTypes.object.isRequired,
};
