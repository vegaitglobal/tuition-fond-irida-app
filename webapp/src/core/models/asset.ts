import { File } from "./file";

export class Asset {
    constructor(public title: string, public description: string, public file: File) {
    }
}
