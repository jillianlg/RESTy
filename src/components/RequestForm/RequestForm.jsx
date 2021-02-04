import React from 'react';
import PropTypes from 'prop-types';

const RequestForm = ({ url, method, body, onSubmit, onChange }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="url" placeholder="URL" value={url} 
          onChange={onChange} />
      
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
          <input type="radio" id="put" name="method" value="PUT"
            checked={method === 'PUT'}
            onChange={onChange} />
          <label htmlFor="put">PUT</label>
          {/* PATCH method */}
          <input type="radio" id="patch" name="method" value="PATCH"
            checked={method === 'PATCH'}
            onChange={onChange} /> 
          <label htmlFor="patch">PATCH</label>
          {/* DELETE method */}
          <input type="radio" id="delete" name="method" value="DELETE"
            checked={method === 'DELETE'}
            onChange={onChange} />
          <label htmlFor="delete">DELETE</label>
        </div>

        <button>Submit</button>

        <textarea placeholder="Raw JSON Body" name="body" value={body}
          onChange={onChange}>
        </textarea>

      </form>
    </div>

  );
};


RequestForm.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RequestForm;
