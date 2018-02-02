'use strict';

const User = require('../models/User');

function index(req, res) {
    res.json("/ endpoint hit");
}

function test(req, res) {
    res.json("/test endpoint hit")
}

module.exports = {
    index: index,
    test: test
};