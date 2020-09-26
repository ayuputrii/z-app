'use strict';

module.exports = function(app) {
    const json = require('../helper/controller');

    app.route('/')
        .get(json.index);

    app.route('/profile')
        .get(json.showprofile);
}