export class PageOf<Type> {
    constructor(public total: number, public items: Type[], public pageSize: number) {}
}
