import React, { useState } from "react";
import Editor from "./Components/Editor";
import Output from "./Components/Output";
import Header from "./Pages/Home";
import "./index.css";

const App = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-row justify-around p-4">
        <Editor language="html" displayName="HTML" value={html} onChange={setHtml} />
        <Editor language="css" displayName="CSS" value={css} onChange={setCss} />
        <Editor language="javascript" displayName="JavaScript" value={js} onChange={setJs} />
      </div>
      <Output html={html} css={css} js={js} />
    </div>
  );
};

export default App;