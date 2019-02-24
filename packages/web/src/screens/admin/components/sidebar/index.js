import React, { Component } from 'react';
import { Menu } from '@blueprintjs/core';
import { APP_PRIMARY_COLOR, APP_TEXT_COLOR } from '../../../../config';

class SidebarMenu extends Component {
  state = {};

  handleClick = (content) => {
    const { updateMainValue } = this.props;
    updateMainValue('currentAdminContent', content);
  }

  render() {
    // console.log('props in sidebar', this.props);
    return (
      <Menu style={{
        backgroundColor: APP_PRIMARY_COLOR,
        color: APP_TEXT_COLOR,
        flex: 1,
        fontSize: 20,
        marginTop: 20,
        padding: 5,
      }}
      >
        <Menu.Item onClick={() => this.handleClick('Users')} text="Users" />
        <Menu.Item onClick={() => this.handleClick('addSampleQuestion')} text="Add Sample Question" />
        <Menu.Item onClick={() => this.handleClick('report')} text="Report" />
        <Menu.Item onClick={() => this.handleClick('pendingQuestion')} text="Pending Questions" />
        <Menu.Divider />
        <Menu.Item text="Sign Out" />
      </Menu>
    );
  }
}
export default SidebarMenu;
