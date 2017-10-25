const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'development';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/mywebsite-${env}`;
const secret = process.env.SECRET || 'I bet you never even look at this!';

module.exports = { port, env, dbURI, secret };
