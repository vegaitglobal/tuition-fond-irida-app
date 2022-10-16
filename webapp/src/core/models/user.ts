export class User {
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    additionalComment: string;
    size?: string;
    constructor(
        firstName: string,
        lastName: string,
        emailAddress: string,
        phoneNumber: string,
        additionalComment: string,
        size?: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
        this.additionalComment = additionalComment;
        this.size = size;
    }
}
