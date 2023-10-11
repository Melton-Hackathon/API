const mysql = require('mysql');

class DBController {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'admin',
            password: 'debtsNote12345+',
            database: 'debtsNote',
        });
    }

    connect() {
        this.connection.connect((error) => {
            if (error) {
                console.error('Error connecting to the database:', error.message);
            } else {
                console.log('Connected to MySQL database');
            }
        });
    }

    disconnect() {
        this.connection.end((error) => {
            if (error) {
                console.error('Error disconnecting from the database:', error.message);
            } else {
                console.log('Disconnected from MySQL database');
            }
        });
    }

    executeQuery(query, dirname, method) {
        this.connection.query(query, (error, result) => {
            if (error) {
                console.error('Error executing query:', error.message);
            } else {
                this.__log({
                    message: 'Query executed successfully',
                    query: query,
                    path: dirname,
                    method: method,
                    status: 'Active',
                });
                console.log(`Query: ${query} executed successfully`);
                return result;
            }
        });
    }

    fetchQueryData(query, dirname, method) {
        this.connection.query(query, (error, result) => {
            if (error) {
                console.error('Error fetching data:', error.message);
                return []; // Return an empty array to indicate failure
            } else {
                this.__log({
                    message: 'Data fetched successfully',
                    query: query,
                    path: dirname,
                    method: method,
                    status: 'Active',
                });
                return result;
            }
        });
    }

    __log(data) {
        const { message, path, method, status, query } = data;
        const timestamp = new Date().toISOString();
        const logQuery = `
            INSERT INTO logs (message, path, method, status, timestamp, query)
            VALUES ('${message}', '${path}', '${method}', '${status}', '${timestamp}', '${query}');
        `;

        this.connection.query(logQuery, (error) => {
            if (error) {
                console.error('Error logging data:', error.message);
            } else {
                console.log('Data logged successfully');
            }
        });
    }
}

module.exports = DBController;
