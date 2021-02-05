import React from 'react';
import HistoryList from '../History/HistoryList';
import RequestForm from '../RequestForm/RequestForm';
import ResponseDisplay from '../ResponseDisplay/ResponseDisplay';

export default function App() {

//   state = {
//     method: ''
//   }

//  handleClick = ({ target }) => {
//    console.log(target.value);
//     this.setState({ [target.name]:target.value });
//   };

  return (
    <>
      <RequestForm 
        // onClick = {this.handleClick}
      />
      <ResponseDisplay />
      <HistoryList 
        history = {[{ url:'www.url.com', method:'GET' }]}
      />

    </>
  );
}

