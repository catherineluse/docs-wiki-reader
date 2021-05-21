import path from 'path'

export default {
  plugins: [
    [
      "react-static-plugin-sass",
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    [
      'react-static-plugin-md-pages',
      {
        location: './docs', // path to markdown files' directory
        pathPrefix: '', // prefix for added react-static routes (if any)
        template: './src/containers/Doc.js', // path to React template component
        remarkPlugins: [], // add additional remark plugins here
      }
    ]
  ],
}
