# Chris Van Lanen-Wanek's Resume

This is a resume website created using [Gatsby](https://www.gatsbyjs.com/) and deployed to [GitHub Pages](https://crvlwanek.github.io/resume/). The majority of the project is in Typescript React and uses Material UI for basic components as well as their theming framework.

## APIs

The website uses a number of APIs to query for data to display to the user

### [GitHub](https://docs.github.com/en/rest)

Under the [Projects](https://crvlwanek.github.io/resume/#projects) section you can see a list of featured projects that I have worked on. The information about these projects is populated with data fetched from the GitHub API so any changes made to these repositories will show up when the page is refreshed.

### [Strava](https://developers.strava.com/)

Under the "Health Dashboard" expandable card, you can view information about my most recent workout. This information is provided by the Strava API and is cached and updated every 5 minutes

### [AWS Lambda](https://aws.amazon.com/lambda/)

In order to access the Strava API from a static site and do so without giving away any API keys, I created a cloud function on AWS Lambda that caches my Strava API calls and if the data is stale, makes a request for new data

### [Pantry](https://getpantry.cloud/)

Pantry is a very simple and lightweight API that lets you store small amounts of JSON data. As part of my Lambda function, whenever I receive data from Strava I cache it using the Pantry API. Then at the begining of the Lambda function if my cached activity data is less than 5 minutes old I simply return that data to keep from ever going over the Strava API usage limit
