var Strategy = require('./strategy')
var AuthorizationError = require('./errors/authorizationerror')
var TokenError = require('./errors/tokenerror')
var InternalOAuthError = require('./errors/internaloautherror')

// Expose Strategy.
exports = module.exports = Strategy

// Exports.
exports.Strategy = Strategy

exports.AuthorizationError = AuthorizationError
exports.TokenError = TokenError
exports.InternalOAuthError = InternalOAuthError
