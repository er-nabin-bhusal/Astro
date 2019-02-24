import React, { Component } from 'react';
import Avatar from 'react-avatar';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const profileUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_9jcHaJkjI07fc-dRvUuPjP_5RBVDxVUjLN6HRNYXvzE00w9k';
    const name = sessionStorage.getItem('USER_NAME');
    const email = 'bhagyasah4u@gmail.com';
    return (
      <div style={{ display: 'flex', flexDirection: 'column', margin: 5, borderBottomWidth: 1, borderBottomColor: '#FFF' }}>
        <Avatar alt="UserImage" src={profileUrl} size="100" round style={{ margin: 5 }} />
        <b>Name:{' '}<i>{name}</i></b>
        <b>Email:{' '}<i>{email}</i></b>
        <div>
          <hr />
        </div>
      </div>
    );
  }
}
export default UserProfile;
