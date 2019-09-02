// Update with your config settings.

module.exports = {

    development: {
        client: 'postgresql',
        connection: {
            database: 'portfolio',
            user: 'postgres',
            password: 'postgres',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: `${__dirname}/knex/migrations`,
        },
    },

    staging: {
        client: 'postgresql',
        connection: {
            database: 'portfolio',
            user: 'postgres',
            password: 'postgres',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: `${__dirname}/knex/migrations`,
        },
    },

    production: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: `${__dirname}/knex/migrations`,
        },
    },

};
