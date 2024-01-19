module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "12345678",
  DB: "testdb",
  dialect: "postgres",
  pool: {
    mac: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
