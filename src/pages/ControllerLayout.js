import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LayoutToolbar from '../components/LayoutToolbar';
import Artboard from '../components/Artboard';
import Playboard from '../components/Playboard';
import { createLayout, fetchLayout } from '../actions/actions-layout';
import './ControllerLayout.css';

class ControllerLayout extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    ui: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="controller-layout">
        {this.renderLayoutToolbar()}
        {this.renderBoard()}
      </div>
    );
  }

  renderLayoutToolbar() {
    const { data, dispatch } = this.props;
    return (
      <LayoutToolbar
        data={data}
        dispatch={dispatch}
      />
    );
  }

  renderBoard() {
    const editMode = this.props.data.mode === 'edit';
    return (
      <div className="artboard-container">
        {editMode ? <Artboard {...this.props} /> : null}
        {!editMode ? <Playboard {...this.props} /> : null}
      </div>
    );
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(createLayout());
    // dispatch(fetchLayout());
  }
}

const mapStateToProps = (state, props) => {
  return state.layout
}

export default connect(mapStateToProps)(ControllerLayout);
