# Prisma Project Library

Welcome to the Prisma Project Library! This project is designed to help you manage your library using Prisma as the ORM.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/gapdapperr/Prisma-Project-Library.git
cd Prisma-Project-Library
npm install
```

## Usage

To start the development server, run:

```bash
npm run dev
```

To generate Prisma client, run:

```bash
npx prisma generate
```

To apply database migrations, run:

```bash
npx prisma migrate dev
```

## Features

- **Book Management**: 
    - `GET /books`: View all books.
    - `GET /books?title=bookTitle`: Search for a book by title.
    - `GET /books/not-returned`: View all books that have not been returned.
    - `GET /books/:id`: View a book by its ID.

- **User Management**: 
    - `GET /members`: View all members.
    - `GET /members?firstName=firstName`: Search for a member by first name.
    - `GET /members?memberCode=memberCode`: Search for a member by member code.

- **Author Management**: 
    - `GET /authors`: View all authors.
    - `GET /authors/:id`: View an author by their ID.

- **Borrow Management**: 
    - `GET /borrows`: View all borrow records.
    - `GET /borrows?dueDate=dueDate`: Search for borrow records by due date.
    - `POST /borrows`: Add a new borrow record.

## Contributing

We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
