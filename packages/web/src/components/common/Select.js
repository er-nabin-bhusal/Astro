import React from 'react';
import Select from 'react-select';

const types = [
  { label: 'admin', value: 1 },
  { label: 'astrologer', value: 2 },
  { label: 'moderator', value: 3 },
];

export default ({ content, props }) => {
  return (
    <div>
      <Select
        options={types}
        placeholder={content.placeHolder}
        onChange={e => props.updateFormValue(props.schema, { [content.value]: e.label })}
      />
    </div>
  );
};
