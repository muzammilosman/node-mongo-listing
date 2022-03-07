# Server side application to enable listing, validation and CRUD operations

The application performs CRUD operations on restaurant listings with a schema that is enabled using mongoose ORM. The application stores data in a mongodb database
which is run in `mongodb://127.0.0.1:27017/restaurants`

## Quick Start

To get started with running the project, make sure you have mongodb installed locally and run `mongo` command in the terminal - this starts the database instance.
Then run the below commands in the working directory to run the server side application which feeds this [React Application](https://github.com/muzammilosman/react-listing)

```
npm install
npm run develop
```

If the environment file `.env` is not present and the command-line throws an error for the same, try running the following command to fetch the variables

```
cp .env.example .env
```

The application would start in `localhost:3000`