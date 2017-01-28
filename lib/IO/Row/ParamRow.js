/**
 * This file is part of ComlaJS.
 *
 * ComlaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComlaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComlaJS. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class ParamRow.
 *
 * @param {CLIReader} reader
 *   The CLI reader.
 *
 * @constructor
 * @struct
 */
function ParamRow (reader) {

  /**
   * The flags.
   *
   * @type {number}
   */
  this.flags = reader.readUInt(2);

  /**
   * The sequence.
   *
   * @type {number}
   */
  this.sequence = reader.readUInt(2);

  /**
   * The name as an index into the string heap.
   *
   * @type {number}
   */
  this.name = reader.readStringIndex();

}

module.exports = ParamRow;