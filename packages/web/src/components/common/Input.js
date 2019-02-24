import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InputGroup } from '@blueprintjs/core';
import PropTypes from 'prop-types';

class Input extends Component {
  state = {}

  render() {
    const { props, content, inputVlaue } = this.props;
    return (
      <InputGroup
        style={{ marginBottom: 5 }}
        className="pt-input pt-large pt-fill"
        value={inputVlaue} //eslint-disable-line
        type={content.type}
        large
        placeholder={content.placeHolder}
        onChange={event => props.updateFormValue(props.schema, { [content.value]: event.target.value })} //eslint-disable-line
      />
    );
  }
}

Input.propTypes = {
  props: PropTypes.shape({
    form: PropTypes.object,
    updateFormValue: PropTypes.func,
    schema: PropTypes.string,
  }).isRequired,
  content: PropTypes.objectOf(PropTypes.any).isRequired,
  inputVlaue: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({ inputVlaue: state.form[ownProps.props.schema][ownProps.content.value] });

export default connect(mapStateToProps)(Input);
