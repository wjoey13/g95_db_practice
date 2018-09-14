const databaseConnection = require('./knexfile')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(databaseConnection);

module.exports = {
    listAll(){
        return knex.select().from('student_info');
    }
}