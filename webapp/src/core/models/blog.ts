import { Asset } from "./asset";
import { Author } from "./author";

export class Blog {
    constructor(
        public title: string,
        public shortDescription: string,
        public image: Asset,
        public content: string,
        public blogAuthor: Author,
        public categories: string[]
    ) {}
}
