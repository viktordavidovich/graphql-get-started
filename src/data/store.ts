import { Book, Person } from "../types";

export const persons: Person[] = [
    {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        emailAddress: "john@example.com",
        phoneNumber: "123456789"
    },
    {
        id: "2",
        firstName: "Adam",
        lastName: "Black",
        emailAddress: "adam@example.com",
        phoneNumber: "123456789"
    }
];

export const books: Book[] = [
    {
        id: "101",
        title: "Clean Code",
        author: "Robert C. Martin",
        isCheckedOut: false
    },
    {
        id: "102",
        title: "The Pragmatic Programmer",
        author: "Andy Hunt",
        isCheckedOut: false
    },
    {
        id: "103",
        title: "The Lord of the Rings",
        author: "Gandalf the White",
        isCheckedOut: false
    }
];