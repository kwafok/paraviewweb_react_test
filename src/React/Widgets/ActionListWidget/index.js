import React from 'react';
import PropTypes from 'prop-types';

import style from 'PVWStyle/ReactWidgets/ActionListWidget.mcss';

export default class ActionListWidget extends React.Component {
  constructor(props) {
    super(props);

    // Bind callback
    this.processClick = this.processClick.bind(this);
  }

  processClick(event) {
    let target = event.target;
    while (!target.dataset.name) {
      target = target.parentNode;
    }

    if (this.props.onClick) {
      this.props.onClick(
        target.dataset.name,
        target.dataset.action,
        target.dataset.user
      );
    }
  }

  render() {
    const list = [];

    this.props.list.forEach((item, idx) => {
      list.push(
        <li
          className={item.active ? style.activeItem : style.item}
          key={idx}
          title={item.name}
          data-name={item.name}
          data-action={item.action || 'default'}
          data-user={item.data || ''}
          onClick={this.processClick}
        >
          <i className={item.icon} />
          {item.name}
        </li>
      );
    });

    return <ul className={style.list}>{list}</ul>;
  }
}

ActionListWidget.propTypes = {
  list: PropTypes.array.isRequired,
  onClick: PropTypes.func,
};

ActionListWidget.defaultProps = {
  onClick: undefined,
};
