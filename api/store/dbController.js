require('dotenv').config();
const mysql = require('mysql2');

class DBController {
    constructor() {
        this.connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
    }

    connect() {
        this.connection.connect((error) => {
            if (error) {
                console.error('Error connecting to the database:', error.message);
            }
        });
    }

    disconnect() {
        this.connection.end((error) => {
            if (error) {
                console.error('Error disconnecting from the database:', error.message);
            }
        });
    }

    async executeQuery(query, dirname, method) {
        return new Promise((resolve, reject) => {
            this.connection.query(query, (error, data) => {
                if (error) {
                    console.error('Error executing query:', error.message);
                    reject(error);
                } else {
                    this.__log({
                        message: 'Query executed successfully',
                        query: query,
                        path: dirname,
                        method: method,
                        status: 'Active',
                    });
                    resolve(data);
                }
            });
        });
    }
    

    async fetchQueryData(query, dirname, method) {
        return new Promise((resolve, reject) => {
            this.connection.query(query, (error, data) => {
                if (error) {
                    console.error('Error executing query:', error.message);
                    reject(error);
                } else {
                    this.__log({
                        message: 'Query executed successfully',
                        query: query,
                        path: dirname,
                        method: method,
                        status: 'Active',
                    });
                    resolve(data);
                }
            });
        });
    }
    

    __log(data) {
        const { message, path, method, status, query } = data;
        const timestamp = new Date().toISOString();

        console.log(`[${timestamp}] ${message} | ${path} => ${method}   +-+  ${status}`)
    }
}

module.exports = DBController;