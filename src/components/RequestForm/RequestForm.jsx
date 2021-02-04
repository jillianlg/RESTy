import React from 'react';
import PropTypes from 'prop-types';

const RequestForm = ({ url, onSubmit, onChange }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          name="url" 
          placeholder="URL" 
          value={url} 
          onChange={onChange} />
      </form>
    </div>
  );
};


RequestForm.propTypes = {
  url: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RequestForm;
