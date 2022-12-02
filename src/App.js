import "./App.css";
import React, { useState } from "react";
//components
import { Button } from "./components/Button";
import ConditionalRendering from "./ConditionalRendering";
import LiftingStateUp from "./LiftingStateUp/LiftingStateUp";
import ListKey from "./List-Key";
import PageA from "./PageA";
import Props from "./Props";
import State from "./State";
import StatefulComponents from "./StatefulComponents";
import Form from "./Form/Form";
import TableFruit from "./TableFruit/TableFruit";
import UseEffect from "./UseEffect";

// function
const renderOtherButton = () => {
  return <Button name="React Fn Cpn" />;
};
function App() {
  //Có thể gán 1 HTML vào 1 biến
  const element1 = (
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
  );

  //state
  //list-key
  const [forceRenderList, setForceRenderList] = useState(Date.now());

  return (
    <div className="App">
      <h3>Gán 1 HTML vào 1 biến</h3>
      {element1}
      <br />
      <br />
      <br />
      <h3>Fn Cpn</h3>
      {renderOtherButton()}
      <br />
      <br />
      <br />
      <h3>Stateless cpn có nghĩa là cpm đó không có state</h3>
      <PageA name="Btn of PageA"></PageA>
      <br />
      <br />
      <br />
      <h3>StateFul là cpn có state</h3>
      <StatefulComponents></StatefulComponents>
      <br />
      <br />
      <br />
      <h3>Props có thể nhận vào 1 cpn khác</h3>
      <Props></Props>
      <br />
      <br />
      <br />
      <h3>Multiple State</h3>
      <State></State>
      <br />
      <br />
      <br />
      <h3>ConditionalRendering</h3>
      <ConditionalRendering></ConditionalRendering>
      <br />
      <br />
      <br />
      <h3>List & Keys</h3>
      <Button
        name="force render list"
        onClick={() => {
          setForceRenderList(Date.now());
        }}
      />
      <ListKey key={forceRenderList} />
      <br />
      <br />
      <br />
      <h3>LiftingStateUp</h3>
      <LiftingStateUp></LiftingStateUp>
      <br />
      <br />
      <br />
      <h3>Form</h3>
      <Form></Form>
      <br />
      <br />
      <br />
      <h3>Table Fruit</h3>
      <TableFruit></TableFruit>
      <br />
      <br />
      <br />
      <h3>UseEffect</h3>
      <UseEffect></UseEffect>
    </div>
  );
}

export default App;
