'use strict'
const mongoose = require('mongoose');
const{db:{host,name, port}} = require('../configs/config.mongodb')
const connectString = `mongodb+srv://haovvh:VOvanhao109@${name}.6hvrg7b.mongodb.net/?retryWrites=true&w=majority`;

const {countConnect} = require('../helpers/check.connect')

class Database {

    constructor() {
        this.connect();
    }
    connect(type = 'mongodb') {
        if( 1 === 1) {
            mongoose.set('debug', true);
            mongoose.set('debug', {color: true})
        }
        countConnect()
        mongoose.connect(connectString).then(_ => console.log(`Connected Mongodb Success PRO` ))
        .catch( err => console.log(`Error connect!`))
    }

    static getInstance() {
        if(!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}
const instanceMongoDb = Database.getInstance();

module.exports = instanceMongoDb;
