module.exports = {
  "db": {
    "name": "db",
    "connector": "mysql",
    "database": "flash",
    "host": "localhost",
    "user": process.env.FLASH_DB_USER,
    "password": process.env.FLASH_DB_PASSWORD,
  }
};
