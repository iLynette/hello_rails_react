import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';
const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';

function getGreetings() {
  console.log('getgreetings() Action!');
  return dispatch => {
    dispatch({type: GET_GREETINGS_REQUEST});
    return fetch(`api/greetings`)
      .then(response => response.json())
      .then(json => dispatch(getGreetingsSuccess(json)))
      .catch(error => console.log(error));
  };
};

export function getGreetingsSuccess(json) {
  console.log('Here is json', json)
  return {
    type: GET_GREETINGS_SUCCESS,
    json: json.greeting,
  };
};

const mapDispatchToProps = (dispatch) => ({ greetings: () => dispatch(getGreetings()) })

class HelloWorld extends React.Component {
  componentDidMount(){
    this.props.greetings()
  }
  render () {
    const { greeting } = this.props;
    console.log(this.props)
    return (
      <React.Fragment>
        <ul>{ greeting }</ul>
      </React.Fragment>
    );
  }
}

const structuredSelector = (state) => {
  return {
    greeting: state.GreetingsReducer.greeting
  }}


HelloWorld.protoType = {
  greeting: PropTypes.string
};

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
