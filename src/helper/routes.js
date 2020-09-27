'use strict';

module.exports = function(app) {
    const json = require('./controller');
    // Profile
    app.route('/profile')
        .get(json.showprofile);

    app.route('/profile/:id')
        .get(json.findprofile);

    app.route('/profile')
        .post(json.addprofile);

    app.route('/profile/:id_profile')
        .put(json.putprofile);

    app.route('/profile')
        .delete(json.deleteprofile);
    // End Profile

    // Transfer
    app.route('/transfer')
        .get(json.showtransfer);

    app.route('/transfer/:name')
        .get(json.findtransfer);

    app.route('/transfer')
        .post(json.addtransfer);

    app.route('/transfer/:id_transfer')
        .put(json.puttransfer);

    app.route('/transfer')
        .delete(json.deletetransfer);
    // End Transfer
}