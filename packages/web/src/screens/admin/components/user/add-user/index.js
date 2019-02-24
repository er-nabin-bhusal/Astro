import React from 'react';
import Form from '../../../../../components/common/Form';
import addUserStructure from './addUserStructure';

export default props => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div style={{ width: '400px', paddingTop: '10px' }}>
      <Form contents={addUserStructure()} {...props} schema="addUser" />
    </div>
  </div>
);
