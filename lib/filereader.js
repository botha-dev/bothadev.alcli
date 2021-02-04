"use strict";
var fileReader = /** @class */ (function () {
    function fileReader() {
        this.fs = require('fs');
    }
    fileReader.prototype.getId = function (filePath) {
        var line;
        var id = 0;
        var stream = this.fs.createReadstream(filePath, 'utf8');
        stream.on('data', function (chunk) {
            line += chunk;
            var tempLineArr = line.split(' ');
            id = Number(tempLineArr[1]);
            stream.destroy();
        });
        return id;
    };
    return fileReader;
}());
