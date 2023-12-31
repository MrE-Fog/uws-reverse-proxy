/**
 * @type {import('events').EventEmitter}
 */

/**
 * Parse an HTTP response.
 *
 * @interface IResponseParser
 * @extends {EventEmitter}
 * @property {int} expectedBodySize
 */

/**
 * @function
 * @name IResponseParser#feed
 * @param {Buffer} data
 */

/**
 * Force a parser reset. This is useful when a connection is closed while a response
 * is being parsed.
 *
 * @function
 * @name IResponseParser#reset
 */