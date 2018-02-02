//if (process.env.NODE_ENV === 'development') {
    module.exports = {
        // MongoDB connection settings
        database: {
            uri: 'mongodb://db_mongo'
        },

        // Server settings
        server: {
            host: 'localhost',
            port: 3005
        }
    }
//}