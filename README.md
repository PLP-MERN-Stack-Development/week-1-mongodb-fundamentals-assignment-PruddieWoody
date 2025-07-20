# PLP Bookstore MongoDB Scripts

This project contains a set of scripts and queries to help you set up and interact with a MongoDB database for a bookstore application.

## Prerequisites

- [MongoDB](https://www.mongodb.com/try/download/community) installed and running on your system.
- MongoDB shell (`mongo`) or [MongoDB Compass](https://www.mongodb.com/products/compass) for GUI-based interaction.

## Getting Started

### 1. Create the Database and Collection

Open your MongoDB shell and run:

```shell
use plp_bookstore
db.createCollection("books")
```

> Note: The collection will be automatically created if you insert documents into it, so this step is optional.

### 2. Insert Sample Books

Run the provided `insert_books.js` script to insert sample book documents.

#### Using the MongoDB shell:

```shell
mongo plp_bookstore insert_books.js
```

This will populate the `books` collection with initial data.

### 3. Running Queries

You can run the example queries by copying them into your MongoDB shell while connected to the `plp_bookstore` database.

For example, to find all books in the 'Technology' genre:

```shell
use plp_bookstore
db.books.find({ genre: "Technology" })
```

Refer to the example queries in the documentation or scripts for more CRUD and advanced operations.

### 4. Aggregation, Sorting, Pagination, and Indexing

- Aggregation pipelines, sorting, projection, pagination, and indexing queries are also provided in the scripts or documentation.
- Copy and paste the relevant queries into your MongoDB shell as needed.

## File List

- `insert_books.js` — Script to populate the `books` collection with sample data.
- `README.md` — This file, with setup and usage instructions.

## Useful Commands

- Start MongoDB shell: `mongo`
- Switch database: `use plp_bookstore`
- Run a script: `mongo plp_bookstore insert_books.js`
- List collections: `show collections`
- View documents: `db.books.find().pretty()`

## Support

If you have issues running any script, ensure your MongoDB server is running and that you are in the correct directory with the scripts.

---
Happy coding!
