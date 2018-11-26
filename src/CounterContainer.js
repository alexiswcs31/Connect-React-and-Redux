import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => ({
  add1: () => dispatch({ type: "ADD1" }),
  add10: () => dispatch({ type: "ADD10"}),
  reset: () => dispatch({ type: "RESET"}),
  remove1: () => dispatch({ type: "REMOVE1"}),
  remove10: () => dispatch({ type: "REMOVE10"})
});

const CounterComponent = ({ counter, add1, add10, reset, remove1, remove10 }) => (
  <div>
    <p>{counter}</p>
    <button onClick={add1}>Ajouter 1</button>
    <button onClick={add10}>Ajouter 10</button>
    <button onClick={reset}>Recommencer</button>
    <button onClick={remove1}>Enlever 1</button>
    <button onClick={remove10}>Enlever 10</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);