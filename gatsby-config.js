module.exports = {
  siteMetadata: {
    title: `Linear Regression using Iris Dataset | Google DSC`,
    description: `A SPA that connects to Google Cloud to perform Linear Regression and predict the species of Iris genus based on the input`,
    author: `@karanrajpal14`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `iris-regression-spa-google-dsc-uta`,
        short_name: `iris-uta`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`
  ],
}
