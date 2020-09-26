'use strict';

const response = require('./res')
const connection = require('./src/helper/connection')

exports.index = function(req, res) {
    response.ok('Application REST API Success', res)
};

// Show Data In Profile
exports.showprofile = function(req, res) {
    connection.query('SELECT * FROM profile', function(error, rows, field) {
        {
            if (error) {
                connection.log(error);
            } else {
                response.ok(rows, res)
            }
        }
    })
}