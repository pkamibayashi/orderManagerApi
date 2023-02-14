module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cflo9jda499b93d6hi80-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ordermanagerdb'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'HctrPpWlaF7LmrHdghvds5OrL9EmShUy'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
