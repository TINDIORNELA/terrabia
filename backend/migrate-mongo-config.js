import dotenv from "dotenv";
dotenv.config();

const isAtlas = process.env.MONGO_URI?.startsWith("mongodb+srv://");

const config = {
    mongodb: {
        // URL MongoDB : Atlas ou local
        url: process.env.MONGO_URI
            ? isAtlas
                ? process.env.MONGO_URI   // Atlas
                : process.env.MONGO_URI + "?authSource=admin" // local avec auth
            : "mongodb://127.0.0.1:27017", // fallback local

        // Nom de la base
        databaseName: process.env.NODE_ENV
            ? "agri_system_" + process.env.NODE_ENV
            : "agri_system_development",
    },

    // Répertoire des migrations
    migrationsDir: "migrations",

    // Collection pour le suivi des migrations
    changelogCollectionName: "changelog",

    // Extension des fichiers de migration
    migrationFileExtension: ".js",

    // Utiliser un hash de fichier pour vérifier les migrations
    useFileHash: false,

    // Système de modules
    moduleSystem: "commonjs",
};

export default config;

export default config;
