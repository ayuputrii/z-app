'use strict';

const response = require('../../res')
const connection = require('./connection')

exports.index = function(req, res) {
    response.ok('Application REST API Success', res)
};

// Show Data In Profile
exports.showprofile = function(req, res) {
    connection.query('SELECT * FROM profile', function(error, rows, fields) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res)
        }
    });
}

// Add data field in Profile
exports.addprofile = function(req, res) {
    const pin_confirmconst pin_confirmconst pin_confirmconst pin_confirmconst pin_confirmconst pin_confirmconst pin_confirmconst pin_confirmconst pin_confirm

}