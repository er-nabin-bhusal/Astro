import React, { Component } from 'react';
import { APP_PRIMARY_COLOR, APP_TEXT_COLOR } from '../../config';
import SideMenuBar from './components/sidebar';
import UserProfile from './components/UserProfile';
import AddUser from './components/user';
import Report from './components/report';
import AddSampleQuestion from './components/add-sample-question';
import PendingQuestions from './components/pending-question';
import QuestionTranslator from './components/pending-question/QuestionTranslator';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderContainContent = () => {
    const { main } = this.props;
    switch (main.currentAdminContent) {
      case 'report':
        return <Report {...this.props} />;
      case 'Users':
        return <AddUser {...this.props} />;
      case 'addSampleQuestion':
        return <AddSampleQuestion />;
      case 'pendingQuestion':
        return <PendingQuestions {...this.props} />;
      case 'particularQuestion':
        return <QuestionTranslator {...this.props} />;
      default:
        return <PendingQuestions {...this.props} />;
    }
  }

  render() {
    // console.log('current store state', this.props.form);
    return (
      <div style={styles.adminBody}>
        <div style={styles.adminHeader}>
          <h1>Bidha</h1>
        </div>
        <div style={styles.adminContainer}>
          <div style={styles.adminContainerSideBar}>
            <UserProfile />
            <SideMenuBar {...this.props} />
          </div>
          <div style={styles.adminContainerContent}>
            {this.renderContainContent()}
          </div>
        </div>
      </div>
    );
  }
}

const windowHeight = window.innerHeight;
const styles = {
  adminBody: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    color: APP_TEXT_COLOR,
    margin: 50,
    marginTop: 0,
    height: windowHeight,
  },
  adminHeader: {
    flex: 1,
    display: 'flex',
    height: 100,
    backgroundColor: APP_PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adminContainer: {
    display: 'flex',
    backgroundColor: 'white',
    height: '100%',
  },
  adminContainerSideBar: {
    backgroundColor: APP_PRIMARY_COLOR,
    flex: 0.2,
    display: 'flex',
    justifyContent: 'center',
    marginTop: 2,
    flexDirection: 'column',
  },
  adminContainerContent: {
    backgroundColor: 'white',
    flex: 0.8,
    color: 'black',
  },
};
export default User;
