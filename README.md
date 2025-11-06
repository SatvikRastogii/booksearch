# Book Search App

A React-based web application that allows users to search for books using the Google Books API and view detailed information about selected books.

## Features

- **Search Functionality**: Search for books by title or author
- **Book Details**: View comprehensive information about any book
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Smooth Navigation**: Single-page application with React Router

## Technologies Used

- React.js
- React Router DOM
- Axios
- Google Books API
- CSS Grid & Flexbox

## Step-by-Step Guide to Run the App

### Step 1: Check Prerequisites

Before you begin, make sure you have Node.js installed on your computer.

**To check if Node.js is installed:**
1. Open your terminal/command prompt (PowerShell on Windows, Terminal on Mac/Linux)
2. Type: `node --version`
3. If you see a version number (like v18.0.0 or higher), you're good to go!
4. If you get an error, download and install Node.js from: https://nodejs.org/

**Note:** npm (Node Package Manager) comes automatically with Node.js, so you don't need to install it separately.

### Step 2: Navigate to the Project Folder

1. Open your terminal/command prompt
2. Navigate to the project folder using the `cd` command:
   ```bash
   cd "C:\Users\Satvik Rastogi\Downloads\Book Search App"
   ```
   (On Mac/Linux, use forward slashes: `/path/to/Book Search App`)

### Step 3: Install Dependencies

This step downloads all the required packages (React, React Router, Axios, etc.) needed for the app to run.

1. In your terminal, type:
   ```bash
   npm install
   ```
2. Press Enter and wait for the installation to complete (this may take 1-2 minutes)
3. You'll see a message when it's done, and a `node_modules` folder will be created

### Step 4: Start the Development Server

1. In your terminal, type:
   ```bash
   npm run dev
   ```
2. Press Enter
3. You should see output like:
   ```
   VITE v5.x.x  ready in xxx ms

   ➜  Local:   http://localhost:5173/
   ➜  Network: use --host to expose
   ```
   The server is now running!

### Step 5: Open the App in Your Browser

1. Open your web browser (Chrome, Firefox, Edge, etc.)
2. Go to: `http://localhost:5173`
3. You should see the Book Search App homepage!

### Step 6: Using the App

1. **Search for books**: Type a book title or author name in the search bar (e.g., "Harry Potter", "Stephen King", "React")
2. **View results**: Click the "Search" button and browse the book results
3. **See details**: Click on any book card to view detailed information
4. **Go back**: Click "← Back to Search" to return to the search page

### Stopping the Server

When you're done testing the app:
- Go back to your terminal
- Press `Ctrl + C` (on Windows/Linux) or `Cmd + C` (on Mac)
- This stops the development server

## Troubleshooting

**Problem: "npm is not recognized"**
- Solution: Node.js is not installed or not in your PATH. Reinstall Node.js from nodejs.org

**Problem: "Port 5173 is already in use"**
- Solution: Another app is using that port. Either close that app, or the server will automatically use a different port (check the terminal output for the new URL)

**Problem: "Cannot find module" errors**
- Solution: Make sure you ran `npm install` in the correct folder. Delete `node_modules` folder and run `npm install` again

**Problem: The app doesn't load in browser**
- Solution: Make sure the server is running (you should see the Vite output in terminal). Check that you're using the correct URL shown in the terminal

### Building for Production

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## Project Structure

```
book-search-app/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── BookList.jsx
│   │   ├── BookDetails.jsx
│   │   └── *.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Usage

1. Enter a search query in the search bar (e.g., "react", "harry potter", "Stephen King")
2. Browse the search results
3. Click on any book to view detailed information
4. Use the "Back to Search" link to return to the search page

## API

This app uses the [Google Books API](https://developers.google.com/books) to fetch book data.

