const Html = ({ body, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <link rel="stylesheet" href="/css/home.css"/>
    </head>
    <body>
      <div id="app">${body}</div>
      <script src="/js/home.js"></script>
    </body>
  </html>
`
export default Html
