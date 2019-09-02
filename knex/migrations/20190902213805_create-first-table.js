
exports.up = (knex) => knex.schema.raw(` CREATE TABLE Persons (
        PersonID int,
        LastName varchar(255),
        FirstName varchar(255),
        Address varchar(255),
        City varchar(255) 
    );
    `);

exports.down = function (knex) {
    return knex.schema.dropTable('persons');
};
