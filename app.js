const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const { ApolloServer, AuthenticationError } = require('apollo-server-express');
const resolvers = require('./graphql/resolvers/index');

const indexRouter = require('./controllers/index');
const typeDefs = require('./graphql/schema/index');
const db = require('./config/config');

const app = express();
if (process.env.NODE_ENV === 'production') {
    app.disable('x-powered-by');
    app.use(compression());
}
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// console.log('')
app.use('/', indexRouter);

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        // get the user token from the headers
        // const token = req.headers.authorization || '';
        // const splitToken = token.split(' ')[1];

        console.log('req.query.query', req.query.query);
        console.log('req.query ', req.body.query);
        try {
            // jwt.verify(splitToken, SECRET_KEY);
            // throw new Error();
        } catch (e) {
            throw new AuthenticationError(
                'Authentication token is invalid, please log in',
            );
        }
        return { db };
    },
});
const publicServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db }),
    path: '/publicgraphql',
});
server.applyMiddleware({ app });
publicServer.applyMiddleware({ app });

module.exports = app;
