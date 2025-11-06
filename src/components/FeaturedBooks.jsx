import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedBooks.css';

const FEATURED_BOOKS = [
  {
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    rating: 4.5,
    reviews: 2847,
    description: 'Between life and death there is a library. When Nora Seed finds herself in the Midnight Library, she has a chance to make things right. Up until now, her life has been full of misery and regret...',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81YzHKeWq7L.jpg',
    categories: ['Fiction', 'Fantasy']
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    rating: 4.8,
    reviews: 5392,
    description: 'No matter your goals, Atomic Habits offers a proven framework for improving every day. James Clear reveals practical strategies that will teach you how to form good habits, break bad ones...',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg',
    categories: ['Self-Help', 'Personal Development']
  },
  {
    id: '3',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    rating: 4.7,
    reviews: 1893,
    description: "Ryland Grace is the sole survivor on a desperate, last-chance mission - and if he fails, humanity and the earth itself will perish. Except that right now, he doesn't know that...",
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91Bd7P8UwxL.jpg',
    categories: ['Science Fiction', 'Adventure']
  }
];

const FeaturedBooks = () => {
  return (
    <div className="featured-container">
      <h2 className="featured-title">Featured Books</h2>
      <div className="featured-grid">
        {FEATURED_BOOKS.map((book) => (
          <div key={book.id} className="featured-book-card">
            <div className="featured-book-image">
              <img src={book.imageUrl} alt={book.title} />
            </div>
            <div className="featured-book-info">
              <h3>{book.title}</h3>
              <p className="featured-book-author">by {book.author}</p>
              <div className="featured-book-rating">
                <div className="stars" style={{ '--rating': book.rating }}>
                  ★★★★★
                </div>
                <span>{book.rating} ({book.reviews} reviews)</span>
              </div>
              <div className="featured-book-categories">
                {book.categories.map((category, index) => (
                  <span key={index} className="category-tag">{category}</span>
                ))}
              </div>
              <p className="featured-book-description">{book.description}</p>
              <Link to={`/book/${book.id}`} className="featured-book-button">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;