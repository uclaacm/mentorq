'use strict';

module.exports = (() => {
    switch (process.env.NODE_ENV) {
        case 'development':
        default:
            return {
                // MongoDB connection settings
                database: {
                    uri: 'mongodb://db_mongo'
                },

                // Server settings
                server: {
                    host: 'localhost',
                    port: 8080
                }
            }
    }
})();