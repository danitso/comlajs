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

var RowReference = require('./../Reference/RowReference');
var TableIndexes = require('./../Constant/TableIndexes');

/**
 * Class FieldMarshalRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function FieldMarshalRow (reader) {

  'use strict';

  /**
   * The reference to the parent row.
   *
   * @type {RowReference}
   */
  this.parent = new RowReference(reader, [
    TableIndexes.FIELD,
    TableIndexes.PARAM
  ]);

  /**
   * The native type as an index into the blob heap.
   *
   * @type {number}
   */
  this.nativeType = reader.readBlobIndex();

}

module.exports = FieldMarshalRow;
