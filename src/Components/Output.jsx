import React from "react";

const Output = ({ html, css, js }) => {
  const srcDoc = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
  `;

  return (
    <>
    <p className="text-5xl">Output</p>
    <div className="flex justify-center p-4 text-gray-500">
      <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        className="w-full h-96 border rounded-lg shadow-md"
      />
    </div>
    </>
  );
};

export default Output;