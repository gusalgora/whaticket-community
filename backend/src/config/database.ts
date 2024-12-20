require("../bootstrap");

module.exports = {
  define: {
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  },
  dialect: process.env.DB_DIALECT || "mysql",
  timezone: "-05:00",
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  logging: false,
  port: process.env.DB_PORT,
};
