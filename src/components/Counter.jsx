const Counter = (props) => {
  const decrement = () => props.count((prevCount) => prevCount - 1);
  const increment = () => props.count((prevCount) => prevCount + 1);

  return (
    <div className="counter-container">
      <p className="counter-value">{props.count}</p>
      <button className="counter-button" onClick={decrement}>
        -
      </button>
      <button className="counter-button" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
