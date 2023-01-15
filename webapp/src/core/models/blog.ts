import { Asset } from "./asset";
import { Author } from "./author";

export class Blog {
    constructor(
        public id: string,
        public title: string,
        public shortDescription: string,
        public image: Asset,
        public content: string,
        public blogAuthor: Author,
        public categories: string[]
    ) {
        this.content = this.replaceNewLinesWithHtmlBrTag(this.filterOutLineSeparator(content));
        this.shortDescription = this.replaceNewLinesWithHtmlBrTag(this.filterOutLineSeparator(shortDescription));
    }

    private filterOutLineSeparator(text: string):string {
        return text.replace(/\u2028/gm, "");
    }
    private replaceNewLinesWithHtmlBrTag(text: string):string {
        return text.replace(/(\r\n|\n|\r)/gm, "<br />");
    }
}
