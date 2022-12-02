import React, { useState } from "react";
import { Button } from "./components/Button";

const State = () => {
  //multiple state
  const [name, setName] = useState("Đức");
  const [age, setAge] = useState(19);

  //function for submit
  function onSubmit(e) {
    e.preventDefault();
    console.log("onSubmit");
  }
  //updating object
  const [messageObj, setMessageObj] = useState({
    author: "",
    message: {
      id: 1,
      text: "",
    },
  });
  // console.log(messageObj.message.text);
  //xử lý pass arg vào fn trong handleEvent mà lần đầu render không gọi lặp tức
  const handleEvent = (id) => () => console.log(id);
  // hoặc là:
  // function handleEvent(id) {
  //   return function () {
  //     console.log(id);
  //   };
  // }
  return (
    <div>
      {/* Multiple State */}
      Name: {name} <br />
      Age: {age} <br />
      <Button
        type="button"
        name="Multiple State"
        onClick={() => {
          setAge(age + 1);
        }}
      />
      <br />
      <br />
      <br />
      <h3>Sự khác biệt của submit và button</h3>
      <form type="submit" onSubmit={onSubmit}>
        <button type="submit">
          Submit
          {/* Submit khi để type=”submit” trong form thì nó sẽ tự động liên kết đến
          event onsubmit, làm load lại page, còn type=”button” thì nó sẽ không
          có hiện tượng đó. */}
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("button");
          }}
        >
          Button
        </button>
      </form>
      <br />
      <br />
      <br />
      <h3>Updating Object</h3>
      <div>
        <input
          type="text"
          value={messageObj.message.text}
          onChange={(e) => {
            const val = e.target.value;
            //true
            setMessageObj((prevState) => ({
              ...prevState,
              message: {
                ...prevState.message,
                text: val,
              },
            }));

            //Wrong
            //   setMessageObj((prevState) => ({
            //     ...prevState,
            //     text: val,
            //   }));

            //Wrong
            //   setMessageObj((prevState) => ({
            //     ...prevState.message,
            //     text: val,
            //   }));

            //Wrong
            //   setMessageObj((prevState) => ({
            //     ...prevState,
            //     message: {
            //       text: val,
            //     },
            //   }));
          }}
        />
      </div>
      <br />
      <br />
      <br />
      <h3>Xử lý truyền tham số vào fn trong HandleEvent khi lần đầu render</h3>
      <button type="button" onClick={handleEvent(1)}>
        Button
      </button>
    </div>
  );
};

export default State;
