import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/Homepage';
import BrowseBooks from './pages/BrowseBooks';
import BookDetailsPage from './pages/BookDetailsPage';
import AddBookPage from './pages/AddBookPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BrowseBooks />} />
        <Route path="/books/:category" element={<BrowseBooks />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
        <Route path="/add-book" element={<AddBookPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
