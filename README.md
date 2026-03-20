# 📚 Library Book Checkout System

A GraphQL API backend for managing a library's book checkout system, built with **Apollo Server** and **TypeScript**.

---

## Overview

This project implements an Apollo GraphQL server that handles book checkouts and returns for a library. It exposes a clean graph schema for querying books, people, and checkout status — designed to be simple, demonstrable, and easy to extend.

---

## Features

- Query all books (without fetching person/borrower data)
- Query a single checked-out book with full borrower details (name & contact info)
- Mutations to check out and return books
- Seeded in-memory datastore (no external database required)
- Fully typed with TypeScript

---

## Tech Stack

- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) — GraphQL server
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Node.js](https://nodejs.org/) — Runtime

---

## Getting Started

### Prerequisites

- Node.js v22+
- npm 

### Installation

```bash

npm install
npm run dev

```

The server will start at `http://localhost:4000` and the Apollo Sandbox will be available at the same URL.

---

## Graph Schema

The schema follows a pre-defined design:

```graphql
type Book {
  id: ID!
  title: String!
  author: String!
  isCheckedOut: Boolean!
  checkedOutBy: Person
}

type Person {
  id: ID!
  firstName: String!
  lastName: String!
  emailAddress: String!
  phoneNumber: String
}

type Query {
  getAllBooks: [Book!]!
  getBookForId(bookId: ID!): Book!
}

type Mutation {
  checkOutBook(bookId: ID!, personId: ID!): Book!
  returnBook(bookId: ID!): Book!
}
```

---

## Example Queries

### Get all books (no person data)

```graphql
query {
  getAllBooks {
    id
    title
    author
    isCheckedOut
  }
}
```

### Get a checked-out book with borrower details

```graphql
query {
  getBookForId(bookId: "101") {
    title
    isCheckedOut
    checkedOutBy {
      firstName
      lastName
      emailAddress
    }
  }
}
```

### Check out a book

```graphql
mutation {
  checkOutBook(bookId: "101", personId: "1") {
    title
    isCheckedOut
  }
}
```

### Return a book

```graphql
mutation {
  returnBook(bookId: "101") {
    title
    isCheckedOut
  }
}
```

---

## Datastore

The datastore is an in-memory implementation seeded with sample `Book` and `Person` records at startup. It resets when the server is restarted. This approach keeps the focus on the GraphQL layer rather than database integration.

---

## Assumptions

- There is only one copy of each book in the system.
- Each person appears only once (no duplicate records).
- No authentication or authorization is implemented.

---

## Project Structure

```
src/
├── index.ts
├── types.ts
├── data/
│   └── store.ts
└── schema/
    ├── typeDefs.ts
    └── resolvers.ts
```

---

## References

- [Apollo Server Docs — Getting Started](https://www.apollographql.com/docs/apollo-server/getting-started)
- [GraphQL Official Docs](https://graphql.org/learn/)
