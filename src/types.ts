export type Person = {
    id: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber?: string;
};

export type Book = {
    id: string;
    title: string;
    author: string;
    isCheckedOut: boolean;
    checkedOutBy?: string; // personId
};