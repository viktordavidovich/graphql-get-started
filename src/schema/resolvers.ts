import { books, persons } from "../data/store";
import { Book, Person } from "../types";

export const resolvers = {
    Query: {
        getAllBooks: (): Book[] => books,

        getBookForId: (
            _: unknown,
            args: { bookId: string }
        ): Book | undefined => {
            return books.find((b) => b.id === args.bookId);
        }
    },

    Mutation: {
        checkOutBook: (
            _: unknown,
            args: { bookId: string; personId: string }
        ): Book => {
            const book = books.find((b) => b.id === args.bookId);
            const person = persons.find((p) => p.id === args.personId);

            if (!book) throw new Error("Book not found");
            if (!person) throw new Error("Person not found");

            if (book.isCheckedOut) {
                throw new Error("Book already checked out");
            }

            book.isCheckedOut = true;
            book.checkedOutBy = person.id;

            return book;
        },

        returnBook: (
            _: unknown,
            args: { bookId: string }
        ): Book => {
            const book = books.find((b) => b.id === args.bookId);

            if (!book) throw new Error("Book not found");

            book.isCheckedOut = false;
            book.checkedOutBy = undefined;

            return book;
        }
    },

    Book: {
        checkedOutBy: (book: Book): Person | null => {
            if (!book.checkedOutBy) return null;

            return (
                persons.find((p) => p.id === book.checkedOutBy) || null
            );
        }
    }
};