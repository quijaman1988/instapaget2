#! /bin/bash
export MONGO_DB=mongodb://localhost:27017
export APP_PORT=3000
export LOG_DIRECTORY=logs
export NODE_ENV=development

node index.js
