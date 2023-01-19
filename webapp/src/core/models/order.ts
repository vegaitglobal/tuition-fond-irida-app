export class Order {
    constructor(
        public firstName: string,
        public lastName: string,
        public emailAddress: string,
        public phoneNumber: string,
        public additionalComment: string,
        public productName: string,
        public selectedSize: string
    ) {}
}
