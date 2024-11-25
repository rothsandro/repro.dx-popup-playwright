import "devextreme/dist/css/dx.light.css";
import { useState } from "react";
import { Popup } from "devextreme-react";

function App() {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setVisible1(true)}>Show 1</button>
        <button onClick={() => setVisible2(true)}>Show 2</button>
        <button onClick={() => setVisible3(true)}>Show 3</button>
      </div>
      {!!visible1 && <Dialog1 />}
      {!!visible2 && <Dialog2 />}
      {!!visible3 && <Dialog3 />}
    </>
  );
}

const Dialog1 = () => {
  return (
    <Popup visible>
      <div style={{ minHeight: 100, background: "red" }}>
        <button onClick={() => alert("test")}>Dialog 1</button>
      </div>
    </Popup>
  );
};

const Dialog2 = () => {
  return (
    <Popup visible deferRendering={false}>
      <div style={{ minHeight: 100, background: "red" }}>
        <button onClick={() => alert("test")}>Dialog 2</button>
      </div>
    </Popup>
  );
};

const animation = { show: { duration: 0 } } as const;
const Dialog3 = () => {
  return (
    <Popup visible deferRendering={false} animation={animation}>
      <div style={{ minHeight: 100, background: "red" }}>
        <button onClick={() => alert("test")}>Dialog 3</button>
      </div>
    </Popup>
  );
};

export default App;
