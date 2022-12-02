import React, { useState } from "react";

const MultipleInput = () => {
  const [form, setForm] = useState({
    learn: "React",
    age: 30,
  });
  const onChange = (event) => {
    const name = event.target.name;

    setForm({
      ...form,
      [name]: event.target.value,
    });
  };
  console.log(form);
  return (
    <div>
      <form>
        <input
          type="text"
          name="learn"
          value={form.learn}
          onChange={onChange}
        />
        <input type="number" name="age" value={form.age} onChange={onChange} />
      </form>
    </div>
  );
};

export default MultipleInput;
