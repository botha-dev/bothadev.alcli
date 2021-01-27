export interface YargArgs {
    [x: string]: unknown;
    type: string;
    name: string;
    id: number;
    extends: string | undefined;
    _: (string | number)[]; $0: string;
}

export interface Directories {
    templateDirectory: string,
    targetDirectory: string
}
export interface IDRange {
    from: number,
    to: number
}

export function getOrSetIdRange(idRange: IDRange) {
    idRange = currIdRange != undefined ? currIdRange : { from: 50100, to: 50150 };
    currIdRange = idRange;

}
export function setIDRange(idRange: IDRange) {
    currIdRange = idRange
}
export function getIDRange(): IDRange {
    return currIdRange != undefined ? currIdRange : { from: 50100, to: 50150 };
}

let currIdRange: IDRange;