// created migration file with knex migration:make students
exports.up = function(knex, Promise) {
    return knex.schema.createTable('student_info', (student) => {
        student.increments('id')
        
    })
    //create table takes in two arguements 
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('student_info')
};
