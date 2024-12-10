import  { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const BrowseBooks = () => {
  const { category } = useParams(); // Get category from URL
  const books = useSelector((state) => state.books); // Fetch books from Redux store
  const [searchQuery, setSearchQuery] = useState(''); // State for search input

  // Filter books by category and search query
  const filteredBooks = books.filter(
    (book) =>
      (!category || book.category.toLowerCase() === category.toLowerCase()) &&
      (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="browse-books">
      <h1>{category ? `${category} Books` : 'All Books'}</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
      />

      {/* Book List */}
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Category: {book.category}</p>
            <Link to={`/book/${book.id}`}>View Details</Link>
          </div>
        ))
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
};

export default BrowseBooks;
