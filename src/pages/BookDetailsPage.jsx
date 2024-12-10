import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const BookDetailsPage = () => {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.find((b) => b.id === parseInt(id))
  );

  if (!book) {
    return (
      <div>
        <h1>Book Not Found</h1>
        <Link to="/books">Back to Browse Books</Link>
      </div>
    );
  }

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <Link to="/books">Back to Browse Books</Link>
    </div>
  );
};

export default BookDetailsPage;
