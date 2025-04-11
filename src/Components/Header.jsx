import React from "react";

const Preview = ({ html, css, js }) => {
  const srcDoc = `
    <html>
      <head><style>${css}</style></head>
      <body>${html}
        <script>${js}</script>
      </body>
    </html>
  `;

  return (
    <iframe
      title="preview"
      srcDoc={srcDoc}
      sandbox="allow-scripts"
      width="100%"
      height="100%"
    />
  );
};

export default Preview;
