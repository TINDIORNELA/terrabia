console.clear();

import express from "express";
import envConfig from "./configs/environment.js";
import winston from "./configs/logger.js";
import databaseConfig from "./configs/database.js";
import routes from "./configs/routes.js";
import socketConfig from "./configs/socket.js";

// initialize environment variables
envConfig();
// initialize express application
const app = express();
// initialize winston logger
const logger = winston();
// intialize database connection
databaseConfig();
// initialize routes
routes(app);
const server = app.listen(process.env.PORT || 3000, "0.0.0.0", () => {
    logger.info(
        `Server listening on: http://0.0.0.0:${process.env.PORT || 3000}`
    );
});
// initialize socket for chat
socketConfig(server);

export default server;
