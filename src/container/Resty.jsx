import React, { Component } from 'react';
import HistoryList from '../components/History/HistoryList';
import RequestForm from '../components/RequestForm/RequestForm';
import ResponseDisplay from '../components/ResponseDisplay/ResponseDisplay';

export default class Resty extends Component {
  state ={
    url: '',
    method: '',
    body: '',
    history: [],
    display: { 'Hello': 'Make a fetch and see it here!' }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render(){
    const { url, method, body, display, history } = this.state;

    return (
      <>
        <HistoryList history={history} />
        <RequestForm 
          url={url} 
          method={method} 
          body={body} 
          onSubmit={this.handleSubmit} 
          onChange={this.handleChange} 
        />
        <ResponseDisplay display={display} />
      </>
    );
  }
}
