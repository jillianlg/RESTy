import React, { Component } from 'react';
import HistoryList from '../components/History/HistoryList';
import RequestForm from '../components/RequestForm/RequestForm';
import ResponseDisplay from '../components/ResponseDisplay/ResponseDisplay';

export default class Resty extends Component {
  render(){

    return (
      <>
        <HistoryList />
        <RequestForm />
        <ResponseDisplay />
      </>
    );
  }
}
