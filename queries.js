const databaseConnection = require('./knexfile')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(databaseConnection);

module.exports = {
    listAll(){
        return knex.select().from('student_info');
    },
    oneStudent(id){
        return knex.select().from('student_info').where('first',id);
    },
    createNewStudent(newStudent){
        return knex('student_info').insert(newStudent)
    },
    deleteStudentById(id){
        return knex('student_info').where('id',id).delete()
    }
}