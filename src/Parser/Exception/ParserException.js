/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var CustomException = require('./../../Exception/CustomException');
var Extend = require('extend');

/**
 * Class ParserException.
 *
 * @param {string} message
 *   The message.
 *
 * @constructor
 * @extends {CustomException}
 */
function ParserException (message) {

  'use strict';

  // Invoke the parent constructor.
  Extend(true, this, new CustomException(message, 'ParserException'));

}

module.exports = ParserException;
