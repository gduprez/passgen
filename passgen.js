'use strict';
var crypto                  = require('crypto');
var generatePassword        = require("password-generator");

function app(){

    /**
     * Program INIT
     */
    function init(){
        console.log('Password Generator v1.0.0');
        console.log('');

        var password = generatePassword(8);
        var salt = makeSalt();
        var encryptedPassword = encryptPassword(salt, password);

        console.log('password:')
        console.log(password);
        console.log('');
        console.log('salt:')
        console.log(salt);
        console.log('');
        console.log('encryptedPassword: ')
        console.log(encryptedPassword);
        console.log('');
        console.log('');
        console.log('');

    }

    /**
     * Create Salt
     */
    function makeSalt () {
        return crypto.randomBytes(16).toString('base64');
    }

    /**
     * Encrypt password
     */
    function encryptPassword(salt, password) {
        if (!password || !salt) return '';
        var _salt = new Buffer(salt, 'base64');
        return crypto.pbkdf2Sync(password, _salt, 10000, 64).toString('base64');
    }

    
    init();
}



exports = app();