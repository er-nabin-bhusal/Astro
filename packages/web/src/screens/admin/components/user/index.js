import React from 'react';
import { connect } from 'react-redux';
import { Button, Intent, Dialog } from '@blueprintjs/core';
import { PropTypes } from 'prop-types';
import AddUser from './add-user';
import * as actions from '../../../../actions';

const PopUp = (props) => {
  const { isOpen, handleClose, title, children } = props;
  return (
    <Dialog
      isOpen={isOpen}
      title={title}
      canEscapeKeyClose
      canOutsideClickClose
      onClose={handleClose}
      {...props}
    >
      {children}
    </Dialog>
  );
};

PopUp.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

class CustomTable extends React.Component {
  state = {
    isOpen: false,
    deleteParticularUser: false,
    userId: null,
  };

  async componentWillMount() {
    const { fetchInitialData } = this.props;
    await fetchInitialData();
  }

  handleClose = () => {
    const { isOpen } = this.state;
    this.setState(isOpen ? { isOpen: false } : { isOpen: true });
  }

  handleDelete = (user = null) => {
    const { deleteParticularUser } = this.state;
    this.setState(
      deleteParticularUser
        ? { deleteParticularUser: false, userId: user }
        : { deleteParticularUser: true, userId: user }
    );
  }

  mainDelete = () => {
    const { userId } = this.state;
    const { deleteUser } = this.props;
    deleteUser(userId);
    this.handleDelete();
  }

  render() {
    const { main } = this.props;
    const { isOpen, deleteParticularUser } = this.state;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <div style={styles.header}>
          <span>User List</span>
        </div>
        <div style={styles.body}>
          <table style={{ borderCollapse: 'collapse' }}>
            <thead style={{ border: '1px solid black', textAlign: 'center', padding: '10px' }}>
              <tr>
                <th style={{ border: '1px solid black', textAlign: 'center', padding: '10px' }}>S.N</th>
                <th style={{ border: '1px solid black', textAlign: 'center', padding: '10px' }}>Email</th>
                <th style={{ border: '1px solid black', textAlign: 'center', padding: '10px' }}>Full Name</th>
                <th style={{ border: '1px solid black', textAlign: 'center', padding: '10px' }}>Type</th>
              </tr>
            </thead>
            <tbody>
              {
                main.userList && main.userList.map((value, index) => (
                  <tr key={value.userId}>
                    <td style={{ border: '1px solid black', textAlign: 'center', padding: '10px' }}>{index + 1}</td>
                    <td style={{ border: '1px solid black', textAlign: 'center', padding: '10px' }}>{value.email}</td>
                    <td style={{ border: '1px solid black', textAlign: 'center', padding: '10px' }}>{value.name}</td>
                    <td style={{ border: '1px solid black', textAlign: 'center', padding: '10px' }}>{value.type}</td>
                    <td style={{ border: '1px solid black', textAlign: 'center', padding: '10px' }}>
                      <Button text="Delete" fill intent={Intent.DANGER} onClick={() => this.handleDelete(value.userId)} />
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
          <Button
            text="Add User"
            intent={Intent.PRIMARY}
            onClick={this.handleClose}
          />
          <PopUp
            isOpen={isOpen}
            title="Add User"
            handleClose={this.handleClose}
            {...this.props}
          >
            <AddUser {...this.props} />
          </PopUp>
          <PopUp
            isOpen={deleteParticularUser}
            title="Delete Confirmation"
            handleClose={this.handleDelete}
            {...this.props}
            style={{ width: '300px' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 0 0 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px' }}>
                Are You sure want to delete?
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button text="Yes" intent={Intent.DANGER} style={{ margin: '5px 5px 0 0' }} onClick={this.mainDelete} />
                <Button text="No" intent={Intent.SUCCESS} style={{ margin: '5px 5px 0 0' }} onClick={this.handleDelete} />
              </div>
            </div>
          </PopUp>
        </div>
      </div>
    );
  }
}

const styles = {
  header: {
    padding: '30px',
    fontSize: '25px',
    fontWeight: 600,
  },
  body: {
    marginTop: '20px',
  },
};

CustomTable.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  fetchInitialData: PropTypes.func.isRequired,
  main: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateProps = state => state;

export default connect(mapStateProps, { ...actions })(CustomTable);
