import 'dotenv/config'; // charge automatiquement les variables d'environnement

const isAtlas = process.env.MONGO_URI?.startsWith("mongodb+srv://");
    console.log("MONGO_URI =", process.env.MONGO_URI);
    console.log("NODE_ENV =", process.env.NODE_ENV);

const config = {
  
    mongodb: {
        url: process.env.MONGO_URI
            ? isAtlas
                ? process.env.MONGO_URI   // Atlas
                : process.env.MONGO_URI + "?authSource=admin" // local avec auth
            : "mongodb://127.0.0.1:27017",

        databaseName: process.env.NODE_ENV
            ? "agri_system_" + process.env.NODE_ENV
            : "agri_system_development",
    },

    migrationsDir: "migrations",
    changelogCollectionName: "changelog",
    migrationFileExtension: ".js",
    useFileHash: false,
    moduleSystem: "commonjs", // nécessaire pour migrate-mongo
};

export default config;

