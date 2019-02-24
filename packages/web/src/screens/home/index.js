import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './auth';
import * as actions from '../../actions';
import Admin from '../admin';
import Astrologer from '../astrologer';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderScreenHelper = () => {
    const sessionUserType =  sessionStorage.getItem('USER_TYPE');
    const { main } = this.props;
    switch (sessionUserType || main.screen) {
      case 'super' || 'admin':
        return <Admin {...this.props} />;
      case 'normal':
        return <Astrologer {...this.props} />;
      default:
        return <Login {...this.props} />;
    }
  }

  render() {
    return (
      <div style={{ flex: 1 }}>
        {this.renderScreenHelper()}
      </div>
    );
  }
}
const mapStateProps = state => state;

export default connect(mapStateProps, { ...actions })(index);
