import React from 'react';
import HistoryList from '../History/HistoryList';
import RequestForm from '../RequestForm/RequestForm';
import ResponseDisplay from '../ResponseDisplay/ResponseDisplay';

export default function App() {
  return (
    <>
      <RequestForm />
      <ResponseDisplay />
      <HistoryList 
        // history = {[{ url:'www.url.com', method:'GET' }]}
      />

    </>
  );
}

