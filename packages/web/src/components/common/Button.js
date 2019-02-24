import React from 'react';
import PropTypes from 'prop-types';
import { Button, Intent, Spinner, Label } from '@blueprintjs/core';

const CustomButton = ({ content, props }) => {
  const { schema, form, submitFormHandler } = props;
  return (
    <div>
      <div style={{ height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {form[schema].loading && <Spinner intent={Intent.PRIMARY} size={40} /> }
        {form[schema].error && <Label style={{ fontSize: 20, color: 'red', position: 'absolute' }}>{form[schema].error}</Label>}
        {form[schema].success && <Label style={{ fontSize: 20, color: 'green', position: 'absolute' }}>{form[schema].success}</Label>}
      </div>
      <Button onClick={() => submitFormHandler(schema)} type={content.type} className="pt-large" intent={Intent[content.intent]} text={content.text} fill large disabled={form[schema].loading} />
    </div>
  );
};
CustomButton.propTypes = {
  content: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default CustomButton;
