// This is an example file for config.json. This file uses JavaScript syntax, however, just so I can make use of comments.

const Configuration = {
    development: true, // This should be set to false in production. This mostly exists so developers are reminded that they are in development.
    api: {
        basePath: "https://api.example.com" // This is the base path for API requests. Make sure to remove the trailing / at the end in order to ensure that the app works properly.
    }
};
export default Configuration;