
exports.up = (knex) => knex.schema.raw(`
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE projects (
        id uuid default uuid_generate_v4(),
        project_title varchar(255) unique not null,
        project_description text not null,
        project_url varchar,
        project_images text,
        project_icon varchar not null 
    );

create table contact_me(
    id uuid default uuid_generate_v4(),
    name varchar(255) not null,
    email varchar(255),
    contact_no varchar(20),
    website varchar(255),
    message text not null 
);

create table site_meta(
    id uuid default uuid_generate_v4(),
    meta_key varchar not null,
    meta_type varchar not null,
    meta_value text not null 
);
`);

exports.down = function (knex) {
    return knex.schema.raw(`
    drop table  if exists projects RESTRICT;
    drop table  if exists contact_me RESTRICT;
    drop table  if exists site_meta RESTRICT;
    `);
};
