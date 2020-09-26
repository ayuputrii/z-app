'use strict';

module.exports = function(app) {
    const json = require('../helper/controller');

    app.route('/')
        .get(json.index);

    app.route('/showprofile')
        .get(json.showprofile);
}