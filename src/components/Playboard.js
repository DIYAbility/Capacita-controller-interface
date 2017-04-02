import React, { Component, PropTypes } from 'react';
import PlayItem from './PlayItem';
import './Playboard.css';

export default class Playboard extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render() {
    const { device, view } = this.props.data;
    return (
      <div className={`artboard-content playboard ${device} ${view}`}>
        {this.renderItems()}
      </div>
    );
  }

  renderItems() {
    const { grid, device, view } = this.props.data;
    return grid[device].map((ctrl, index) => {
      return (
        <PlayItem
          control={ctrl.name}
          view={view}
          left={ctrl.x}
          top={ctrl.y}
          key={index}
        />
      );
    })
  }
}
