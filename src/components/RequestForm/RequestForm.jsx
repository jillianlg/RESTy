import React from 'react';

const RequestForm = ({ url, onSubmit, onChange }) => {
  <div>
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        name="url" 
        placeholder="URL" 
        value={url} 
        onChange={onChange} />
    </form>
  </div>;
};

export default RequestForm;
