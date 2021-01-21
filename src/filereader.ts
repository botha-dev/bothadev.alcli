class fileReader {
    private fs = require('fs');
    constructor() {

    }

    getId(filePath: string): number {
        let line: string;
        let id: number = 0;
        var stream = this.fs.createReadstream(filePath, 'utf8');
        stream.on('data', function (chunk: string) {
            line += chunk;
            let tempLineArr = line.split(' ');
            id = Number(tempLineArr[1]);
            stream.destroy();

        })
        return id;
    }
}