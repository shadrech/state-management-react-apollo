# DEPRECATED!
## Use this [repo](https://github.com/shadrech/linked-app) for updated and upcoming talks

# LinkedApp

Code for my [talk](https://skillsmatter.com/skillscasts/14361-frontend-state-management-with-react-apollo) on Frontend Management With React Apollo
LinkedIn replica. Allows creating workers and organizations

## Setup

There are a few dependencies to the app. [Docker](https://www.docker.com/) is required to run the MongoDB database. Node (atleast v7.10.1 and NPM v5) and [yarn](https://yarnpkg.com/en/docs/install) are required for running the apps
Once the repo has been cloned, in the api directory install modules and start up the docker image:
```bash
cd api/
yarn
yarn db:start
```
Once that is done, you can start the api by running
```bash
yarn start:watch
```
Once that is done open up a new terminal tab and navigate back to the app directory and start the React app
```bash
cd app/
yarn
yarn start
```
The React app will be running on http://localhost:1234
