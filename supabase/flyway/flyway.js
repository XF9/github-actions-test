require('dotenv').config();

if (!process.env.MIGRATIONS_POSTGRES_URL) {
    throw new Error("Please define the MIGRATIONS_POSTGRES_URL environment variable inside .env");
}

if (!process.env.MIGRATIONS_POSTGRES_USER) {
    throw new Error("Please define the MIGRATIONS_POSTGRES_USER environment variable inside .env");
}

if (!process.env.MIGRATIONS_POSTGRES_PASSWORD) {
    throw new Error("Please define the MIGRATIONS_POSTGRES_PASSWORD environment variable inside .env");
}

module.exports = function() {
    return {
        flywayArgs: {
            url: `jdbc:postgresql://${process.env.MIGRATIONS_POSTGRES_URL}/`,
            user: process.env.MIGRATIONS_POSTGRES_USER,
            password: process.env.MIGRATIONS_POSTGRES_PASSWORD,

            locations: 'filesystem:supabase/migrations/',
            sqlMigrationSuffixes: '.sql',
            baselineOnMigrate: true,

            schemas: '',
            sqlMigrationPrefix: '',
            sqlMigrationSeparator: '_'
        },
    };
};