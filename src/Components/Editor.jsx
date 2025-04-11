import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

const Editor = ({ language, displayName, value, onChange }) => {
  return (
    <div className="flex flex-col flex-1 p-4 bg-gray-900 text-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">{displayName}</h2>
      <CodeMirror
        value={value}
        height="200px"
        theme={oneDark}
        extensions={[javascript()]}
        onChange={(val) => onChange(val)}
        className="rounded-lg"
      />
    </div>
  );
};

export default Editor;