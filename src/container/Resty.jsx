import React, { Component } from 'react';
import HistoryList from '../components/History/HistoryList';
import RequestForm from '../components/RequestForm/RequestForm';
import ResponseDisplay from '../components/ResponseDisplay/ResponseDisplay';
import { fetchApi } from '../services/fetchApi';

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

  handleSubmit = event => {
    const { history, url, method } = this.state;
    const key = `${url}+${method}`;
    
    event.preventDefault();
    this.fetch();
    
    if(history.filter(item => item.key === key).length > 0 || method === '') return;
    this.setState(state => ({
      history: [...state.history, {
        url: state.url,
        method: state.method,
        body: state.body,
        key: `${state.url}+${state.method}`
      }]
    }));

    this.setState(state => {
      localStorage.setItem('history', JSON.stringify(state.history));
    });
  }

  fetch = () => {
    const { url, method, body } = this.state;
    return fetchApi(url, method, body)
      .then(res => this.setState({ display: res }));
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
