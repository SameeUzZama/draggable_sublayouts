import React from "react";
import { Splitter } from "@progress/kendo-react-layout";

import "./Styles.css";

export const Layout = () => {
  const [panes, setPanes] = React.useState([
    {},
    {
      size: "38vw",
    },
    {
      size: "58vw",
    },
    {},
  ]);
  const [pane3, setPane3] = React.useState([
    {},
    {
      size: "97vw",
    },
  ]);
  const [nestedPanes, setNestedPanes] = React.useState([
    {
      size: 0,
    },
    {
      size: "48vh",
      min: "20px",
    },
    {
      size: "46vh",
      min: "20px",
    },
  ]);
  const onChange = (event) => {
    setPanes(event.newState);
  };
  const onNestedChange = (event) => {
    setNestedPanes(event.newState);
  };
  const onChange3 = (event) => {
    setPane3(event.newState);
  };
  return (
    <div>
      <Splitter
        style={{
          height: "97vh",
        }}
        panes={nestedPanes}
        orientation={"vertical"}
        onChange={onNestedChange}
      >
        <div className="pane-content"></div>
        <Splitter panes={panes} onChange={onChange}>
          <div className="pane-content"></div>
          <div className="pane-content-1">
            <h3>Window-1</h3>
            <p>Component - 1</p>
          </div>
          <div className="pane-content-2">
            <h3>Window-2</h3>
            <p>Component - 2</p>
          </div>
          <div className="pane-content"></div>
        </Splitter>

        <Splitter panes={pane3} onChange={onChange3}>
          <div className="pane-content"></div>
          <div className="pane-content-3">
            <h3>Window-3</h3>
            <p>Component - 3</p>
          </div>
          <div className="pane-content"></div>
        </Splitter>
        <div className="pane-content"></div>
      </Splitter>
    </div>
  );
};

export default Layout;
