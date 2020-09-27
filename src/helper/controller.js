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

// Shorting ID In Profile
exports.findprofile = function(req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM profile WHERE id_profile = ?', [id],
        function(error, rows, field) {
            if (error) {
                connection.log(error)
            } else {
                response.ok(rows, res)
            }
        })
}

// ADD Data Field In Profile
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
                response.ok("Success Add Data!", res);
            }
        });
};

// UPDATE Data in Profile
exports.putprofile = function(req, res) {
    const id = req.params.id_profile
    const pin_confirm = req.body.pin_confirm
    const photo = req.body.photo
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const verif_email = req.body.verif_email
    const phone = req.body.phone
    const password = req.body.password

    connection.query('UPDATE profile SET pin_confirm=?, photo=?, first_name=?, last_name=?, verif_email=?, phone=?, password=? WHERE id_profile = ?', [pin_confirm, photo, first_name, last_name, verif_email, phone, password, id],
        function(error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Success Update", res)
            }
        })
}

// DELETE Data In Profile
exports.deleteprofile = function(req, res) {
    const id_profile = req.body.id_profile
    connection.query('DELETE FROM profile WHERE id_profile=?', [id_profile],
        function(error, rows, field) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Suscces Delete", res)
            }
        })
}



// Transfer ----------

// Show Data In Tranfer
exports.showtransfer = function(req, res) {
    connection.query('SELECT * FROM transfer', function(error, rows, fields) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res)
        }
    });
}

// Shorting Name In Transfer
exports.findtransfer = function(req, res) {
    let name = req.params.name;
    connection.query('SELECT * FROM profile WHERE first_name = ?', [name],
        function(error, rows, field) {
            if (error) {
                connection.log(error)
            } else {
                response.ok(rows, res)
            }
        })
}

// ADD Data Field In Transfer
exports.addtransfer = function(req, res) {
    const pin = req.body.pin
    const amount = req.body.amount
    const balance_left = req.body.balance_left

    connection.query(`INSERT INTO transfer (pin, amount, balance_left) VALUES
    ('${pin}', '${amount}','${balance_left}')`,
        function(error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Success Add Data Transfer", res)
            }
        }
    )
}

// UPDATE Data Field In Transfer
exports.puttransfer = function(req, res) {
    const id = req.body.id_transfer
    const pin = req.body.pin
    const amount = req.body.amount
    const balance_left = req.body.balance_left

    connection.query(`UPDATE transfer SET pin = ?, amount = ?, balance_left = ? WHERE id_transfer = ?`, [pin, amount, balance_left, id],
        function(error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Success Update to Data Transfer", res)
            }
        })

}

// DELETE Data In Transfer
exports.deletetransfer = function(req, res) {
    const id_transfer = req.body.id_transfer

    connection.query('DELETE FROM transfer WHERE id_transfer=?', [id_transfer],
        function(error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Success Add Data Transfer", res)
            }
        })
}