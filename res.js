'use strict';

exports.ok = function(values, res) {
    const data = {
        'status': 200,
        'values': values,
    };
    res.json(data);
    res.end();
}

exports.status = function(values, res) {
    const data = {
        'status': 400,
        'success': false,
        'values': values,
    };
    res.json(data);
    res.send();
}

exports.statusfail = function(value, res) {
    const data = {
        'status': 500,
        'success': false,
        'values': values,
    };
    res.json(data);
    res.send();
}