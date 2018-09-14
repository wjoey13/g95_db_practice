// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/my_g95_database'
  },
// deleted staging and left client and connection for dev and production.
// changed client to pg because I am using postgresql
// connected to development to the database I created with connection :'postgresql://localhost/my_g95_database'
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
