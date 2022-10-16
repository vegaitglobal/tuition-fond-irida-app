export class User {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    comment: string;
    size?: string;
    constructor(
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: string,
        comment: string,
        size?: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.comment = comment;
        this.size = size;
    }
}
