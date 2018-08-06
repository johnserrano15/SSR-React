const Layout = ({ body, title }) => `
  <!DOCTYPE html>
  <html lang='es'>
      <head>
        <meta charSet='UTF-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        />
        <title>${title}</title>
        <link rel='stylesheet' href='/css/home.css' />
      </head>
      <body>
        <div id='app'>${body}</div>
        <script src='/js/home.js'></script>
      </body>
    </html>
`
export default Layout
