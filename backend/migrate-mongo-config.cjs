require('dotenv').config(); // charge les variables d'environnement

const isAtlas = process.env.MONGO_URI?.startsWith("mongodb+srv://");
console.log("MONGO_URI =", process.env.MONGO_URI);
console.log("NODE_ENV =", process.env.NODE_ENV);

module.exports = {
  mongodb: {
    url: process.env.MONGO_URI
      ? isAtlas
        ? process.env.MONGO_URI
        : process.env.MONGO_URI + "?authSource=admin"
      : "mongodb://127.0.0.1:27017",

    databaseName: process.env.NODE_ENV
      ? "agri_system_" + process.env.NODE_ENV
      : "agri_system_development",

    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },

  migrationsDir: "migrations",
  changelogCollectionName: "changelog",
  migrationFileExtension: ".js",
  useFileHash: false,
  moduleSystem: "commonjs",
};

