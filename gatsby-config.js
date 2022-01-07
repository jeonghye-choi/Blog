module.exports = {
  siteMetadata: {
    siteUrl: 'https://jeonghyeblog.gatsbyjs.io/',
    title: 'Jeonghye Blog',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-root-import',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Noto+Sans+KR\:100,300,400,500,700,900`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `_posts`,
        path: `${__dirname}/_posts`,
      },
    },
    'gatsby-plugin-mdx',
  ],
};
