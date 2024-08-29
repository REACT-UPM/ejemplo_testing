const Increase10Button = ({ setCount }) => {
    return (
      <button data-testid="click10" onClick={() => setCount((count) => count + 10)}>
        Increase By 10
      </button>
    );
  };
  
  export default Increase10Button;