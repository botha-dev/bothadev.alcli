"use strict";
exports.__esModule = true;
exports.getIDRange = exports.setIDRange = exports.getOrSetIdRange = void 0;
function getOrSetIdRange(idRange) {
    idRange = currIdRange != undefined ? currIdRange : { from: 50100, to: 50150 };
    currIdRange = idRange;
}
exports.getOrSetIdRange = getOrSetIdRange;
function setIDRange(idRange) {
    currIdRange = idRange;
}
exports.setIDRange = setIDRange;
function getIDRange() {
    return currIdRange != undefined ? currIdRange : { from: 50100, to: 50150 };
}
exports.getIDRange = getIDRange;
var currIdRange;
