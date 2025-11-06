import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About BookFinder</h1>
        <p className="about-subtitle">Your gateway to millions of books</p>
      </section>
      
      <section className="about-content">
        <div className="about-card">
          <h2>📚 What We Offer</h2>
          <p>BookFinder helps you discover books from the vast Google Books library. Search through millions of titles, read reviews, and find detailed information about books that interest you.</p>
        </div>

        <div className="about-card">
          <h2>🔍 How It Works</h2>
          <p>Simply enter a book title, author name, or any keywords in our search bar. Our app will search through the Google Books database and present you with relevant results, including covers, descriptions, and ratings.</p>
        </div>

        <div className="about-card">
          <h2>⭐ Features</h2>
          <ul>
            <li>Comprehensive book search</li>
            <li>Detailed book information</li>
            <li>Book ratings and reviews</li>
            <li>Featured books recommendations</li>
            <li>User-friendly interface</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>💡 Tips for Searching</h2>
          <ul>
            <li>Use specific keywords for better results</li>
            <li>Include author names for precise matches</li>
            <li>Filter by categories if needed</li>
            <li>Check book ratings and reviews</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;