// 1. Find all books in a specific genre (e.g., "Technology")
db.books.find({ genre: "Technology" });

// 2. Find books published after a certain year (e.g., 2015)
db.books.find({ published_year: { $gt: 2015 } });

// 3. Find books by a specific author (e.g., "Jane Smith")
db.books.find({ author: "Jane Smith" });

// 4. Update the price of a specific book (e.g., "MongoDB Basics" to $24.99)
db.books.updateOne(
  { title: "MongoDB Basics" },
  { $set: { price: 24.99 } }
);

// 5. Delete a book by its title (e.g., "Love in Paris")
db.books.deleteOne({ title: "Love in Paris" });

// -------------------------
// ADVANCED QUERIES
// -------------------------

// 6. Find books that are both in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
});

// 7. Projection: Return only the title, author, and price fields
db.books.find(
  {},
  { _id: 0, title: 1, author: 1, price: 1 }
);

// 8. Sort books by price ascending
db.books.find().sort({ price: 1 });

// 9. Sort books by price descending
db.books.find().sort({ price: -1 });

// 10. Pagination: Limit and skip (5 books per page)
// --- First page
db.books.find().limit(5);
// --- Second page
db.books.find().skip(5).limit(5);

// -------------------------
// AGGREGATION PIPELINES
// -------------------------

// 11. Calculate the average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
]);

// 12. Find the author with the most books in the collection
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]);

// 13. Group books by publication decade and count them
db.books.aggregate([
  {
    $project: {
      decade: {
        $concat: [
          { $substr: [ "$published_year", 0, 3 ] },
          "0s"
        ]
      }
    }
  },
  { $group: { _id: "$decade", count: { $sum: 1 } } }
]);

// -------------------------
// INDEXING
// -------------------------

// 14. Create an index on the title field
db.books.createIndex({ title: 1 });

// 15. Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

// 16. Use explain() to demonstrate performance improvement with index
// --- Example for title search (after creating the index)
db.books.find({ title: "MongoDB Basics" }).explain("executionStats");

// --- Example for compound index (after creating the index)
db.books.find({ author: "Jane Smith", published_year: { $gt: 2010 } }).explain("executionStats");
