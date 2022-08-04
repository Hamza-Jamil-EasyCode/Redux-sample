import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {
  setDecrement,
  setIncrement,
} from "../../redux/reducers/exampleReducer/exampleActions";

const Example = ({ heading }) => {
  const { count } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const incrementHandler = () => dispatch(setIncrement(count + 1));
  const decrementHandler = () => dispatch(setDecrement(count - 1));

  const renderLeftBlock = () => (
    <div className="left col-md-6">
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>decrement</button>
    </div>
  );
  const renderRightBlock = () => (
    <div className="right col-md-6">
      <h1>{count}</h1>
    </div>
  );

  return (
    <div className="example">
      <h4> {heading} </h4>

      <div className="row">
        {renderLeftBlock()}
        {renderRightBlock()}
      </div>
    </div>
  );
};

Example.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Example;
