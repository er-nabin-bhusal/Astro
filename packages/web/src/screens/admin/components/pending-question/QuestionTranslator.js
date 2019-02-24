import React, { Component } from 'react';
import { TextArea, Button, Intent, Icon } from '@blueprintjs/core';
import axios from 'axios';

const chatElement = (text, place) => {
  const direction = place === 'flex-end' ? 'row-reverse' : 'row';
  const backColor = place === 'flex-end' ? 'white' : 'rgb(0, 176, 255)';
  const color = place === 'flex-end' ? 'rgb(0, 176, 255)' : 'white';

  return (
    <div style={{ display: 'flex', padding: 10, flexDirection: [direction] }}>
      <div>
        <img style={{ borderRadius: '25px' }} src="http://www.stockpholio.net/index/view/image/2851026377_4.jpg" alt="profile of the author" height="50px" width="50px" />
      </div>
      <div style={{ margin: 10, display: 'flex', backgroundColor: [backColor], alignItems: 'center', borderRadius: 10, padding: 5, border: `1px solid ${color}` }}>
        <span style={{ color: [color], fontSize: 18 }}>
          {text}
        </span>
      </div>
    </div>
  );
};

class QuestionTranslator extends Component {
  state={ type: '' };

  componentWillMount() {
    const { userDetails } = this.props;
    if (userDetails.trans.ansQsn.modQuestion === null) {
      this.setState({ type: 'modQuestion' });
    } else if (userDetails.trans.ansQsn.astroAnswer === null) {
      this.setState({ type: 'astroAnswer'});
    } else {
      this.setState({ type: 'modAnswer'});
    }
  }

  messageSendHandler = async () => {
    const time = Date.now();
    try {
      const userRes = await axios.post('http://localhost:4001/web/add-mod-question', {
        token: '',
        questionId: '',
        modId: '',
        modQuestion: '',
        modeQsnTimestamp: time,
      });
      if (userRes.status === 200) {
        console.log('success');
      }
    } catch (e) {
      console.log('error');
    }
  };

  textAreaChange = (e) => {
    const { updateUserDetails, userDetails} = this.props;
    const { type } = this.state;
    updateUserDetails('trans', { ...userDetails.trans, ansQsn: { ...userDetails.trans.ansQsn, [type]: e.target.value } });
  };

  render() {
    const { userDetails } = this.props;
    return (
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ display: 'flex', flex: 0.5, flexDirection: 'column', padding: 10, border: '1px solid #75757575', justifyContent: 'space-between' }}>
          <div>
            <div style={{ border: '1px solid #75757575', display: 'flex', justifyContent: 'center' }}>
              <span style={{ fontSize: 20, fontWeight: 500 }}>Chat here</span>
            </div>
            {chatElement(userDetails.trans.ansQsn.question, 'flex-start')}
            {userDetails.trans.ansQsn.modQuestion ? chatElement(userDetails.trans.ansQsn.modQuestion, 'flex-end') : null }
            {userDetails.trans.ansQsn.astroAnswer ? chatElement(userDetails.trans.ansQsn.astroAnswer, 'flex-start') : null }
            {userDetails.trans.ansQsn.modAnswer ? chatElement(userDetails.trans.ansQsn.modAnswer, 'flex-end') : null }
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <TextArea fill style={{ resize: 'None' }} onChange={this.textAreaChange} value={userDetails.trans.ansQsn.modQuestion} />
            <Button
              intent={Intent.PRIMARY}
              style={{ marginLeft: 10, padding: '0px 20px 0px 20px' }}
              icon={<Icon icon="direction-right" iconSize="23" />}
              onClick={this.messageSendHandler}
            />
          </div>
        </div>
        <div style={{ display: 'flex', flex: 0.5, flexDirection: 'column', padding: 7 }}>
          <div id="profileImg" style={{ display: 'flex', justifyContent: 'space-around' }}>
            <img style={{ borderRadius: '50px' }} height="100px" width="100px" src="http://www.stockpholio.net/index/view/image/2851026377_4.jpg" alt="profile of the user" />
            <div id="userDetails">
              <span>Name: Nabin Bhusal</span>
              <br />
              <span>Email: nabinbhusal80@gmail.com</span>
              <br />
              <span>Date of Birth: 2055-05-09</span>
              <br />
              <span>Address: New York</span>
            </div>
          </div>
          <div id="logs" style={{ display: 'flex', margin: 5, flexDirection: 'column', alignItems: 'center' }}>
            <div>
              <h3>User Log</h3>
            </div>
            <div>
              <table style={{ border: '1px solid black' }}>
                <thead>
                  <tr>
                    <th>
                      First Name
                    </th>
                    <th>
                      Last Name
                    </th>
                    <th>
                      Date of Birth
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionTranslator;
