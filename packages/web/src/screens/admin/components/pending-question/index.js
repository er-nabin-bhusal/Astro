import React, { Component } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { Button, Intent } from '@blueprintjs/core';
import Table from '../../../../components/common/Table';


class Index extends Component {
  state={};

  async componentWillMount() {
    const { fetchInitialWebData } = this.props;
    await fetchInitialWebData();
  }

  actionElment = (id) => {
    const { fetchUserDetails, updateMainValue } = this.props;
    return (
      <Button
        type="button"
        onClick={async () => {
          await fetchUserDetails(id);
          updateMainValue('currentAdminContent', 'particularQuestion');
        }}
        text="translate"
        intent={Intent.PRIMARY}
      />
    );
  }

  render() {
    const { main } = this.props;
    return (
      <div style={{ display: 'flex', marginTop: 2 }}>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column' }}>
          <h1 style={{ textAlign: 'center' }}>Pending Questions</h1>
          {main.pendingQuestion &&
          (
          <Table
            headers={{ question: 'Question', timeStamp: 'Date and Time', type: 'Question Type', paymentStatus: 'Payment Status', actions: 'Action' }}
            data={main.pendingQuestion.map(obj => ({ ...obj, timeStamp: <Moment format="YYYY-MM-DD hh:mm:ss">{ obj.timeStamp }</Moment>, paymentStatus: obj.paymentStatus === '0' ? 'Not Paid' : 'Paid', actions: this.actionElment(obj.id) }))}
          />
          )}
        </div>
      </div>
    );
  }
}
Index.propTypes = {
  fetchInitialData: PropTypes.func.isRequired,
};
export default Index;
