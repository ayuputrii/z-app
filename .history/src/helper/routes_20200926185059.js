'use strict';

module.exports = function(app) {
    const json = require('../../controller');

    app.route('/')
        .get(json.index);

    app.route('/')
        .get(json.showprofile);
}