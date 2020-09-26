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
    const pin_confirm = req.body.pin_confirm
    const photo = req.body.photo
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const verif_email = req.body.verif_email
    const phone = req.body.phone
    const password = req.body.password

    connection.query(`INSERT INTO profile (pin_confirm, photo, first_name, last_name, verif_email, phone, password) VALUES 
    ('${pin_confirm}', '${photo}', '${first_name}', '${last_name}', '${verif_email}', '${phone}', '${password}')`,
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Congratulation!", res);
            }
        });
};

//