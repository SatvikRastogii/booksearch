import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import SearchBar from './components/SearchBar'
import BookList from './components/BookList'
import BookDetails from './components/BookDetails'
import About from './components/About'
import FeaturedBooks from './components/FeaturedBooks'
import './App.css'

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = (results) => {
    setSearchResults(results)
  }

  const handleLoading = (isLoading) => {
    setLoading(isLoading)
  }

  const handleError = (errorMessage) => {
    setError(errorMessage)
  }

  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <header className="app-header">
                    <h1>Discover Your Next Great Read</h1>
                    <p className="header-subtitle">Search millions of books to find your next adventure</p>
                  </header>
                  <SearchBar
                    onSearch={handleSearch}
                    onLoading={handleLoading}
                    onError={handleError}
                  />
                  {searchResults.length > 0 ? (
                    <BookList
                      books={searchResults}
                      loading={loading}
                      error={error}
                    />
                  ) : (
                    <FeaturedBooks />
                  )}
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

