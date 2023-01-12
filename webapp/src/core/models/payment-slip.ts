export class PaymentSlip {
    constructor(public sender: string, public purposeOfPayment: string, public receiver: string,
                public codeOfPayment: number, public amount: number, public currency: string,
                public receiverAccount: string, public modelNumber: number, public referenceNumber: string) {
    }
}
