import React from 'react';
import PropTypes from 'prop-types';

const RequestForm = ({ url, method, onSubmit, onChange }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="url" placeholder="URL" value={url} 
          onChange={onChange} />
      </form>
      <div>
        {/* GET method */}
        <input type="radio" id="get" name="method" value="GET" 
          checked={method === 'GET'} 
          onChange={onChange} />
        <label htmlFor="get">GET</label>
        {/* POST method */}
        <input type="radio" id="post" name="method" value="POST" 
          checked={method === 'POST'} 
          onChange={onChange} />
        <label htmlFor="post">POST</label>
        {/* PUT method */}
        {/* PATCH method */}
        {/* DELETE method */}
      </div>
    </div>

  );
};


RequestForm.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RequestForm;
