module.exports = {
    test: {
        client: 'mysql2',
        debug: false
    },
    development: {
        client: 'pg',
        version: '7.2',
        connection: {
            host : '127.0.0.1',
            user : 'node',
            password : 'password',
            database : 'myapp_test'
        }
    }
};
