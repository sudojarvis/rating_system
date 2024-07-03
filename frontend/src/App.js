import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AudiobookList from './components/AudiobookList';
import AudiobookDetails from './components/AudiobookDetails';
import './components/AudiobookList.css';
import './components/AudiobookDetails.css';
import './styles.css'; // Import the global styles

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1><Link to="/">Audiobooks</Link></h1>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<AudiobookList />} />
            <Route path="/audiobooks/:id" element={<AudiobookDetails />} />
          </Routes>
        </main>
        {/* <footer className="app-footer">
          <p>&copy; 2024 Audiobook App</p>
        </footer> */}
      </div>
    </Router>
  );
}

export default App;
