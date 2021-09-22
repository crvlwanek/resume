module.exports = {
  pathPrefix: "/resume",
  siteMetadata: {
    title: `Chris Van Lanen-Wanek`,
    description: `A simple resume/portfolio website`,
    author: `Chris Van Lanen-Wanek`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    "react",
    "react-dom",
    "gatsby-image",
  ],
}
