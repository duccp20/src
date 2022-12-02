import React from "react";

const UseEffect = () => {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  React.useEffect(() => {
    console.log("run useEffect");
    if (count > 3) {
      document.title = `you clicked ${count} times`;
    }

    //clean up function
    return () => {
      console.log("clean up function useEffect");
    };
  }, [count, count2]); //every run when count changed

  React.useLayoutEffect(() => {
    console.log("run useLayoutEffect ");
    //clean up function
    return () => {
      console.log("clean up function useLayoutEffect");
    };
  });

  console.log("component rendered");

  return (
    <div>
      UseEffect: Count 1: {count} <br />
      Count 2: {count2} <br />
      <button
        type="button"
        onClick={() => setCount((prevState) => prevState + 1)}
      >
        {" "}
        CLick 1{" "}
      </button>
      <button
        type="button"
        onClick={() => setCount2((prevState) => prevState + 1)}
      >
        CLick 2{" "}
      </button>
    </div>
  );
};

export default UseEffect;
