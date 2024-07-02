import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AudiobookList from './components/AudiobookList';
import AudiobookDetails from './components/AudiobookDetails';
import './components/AudiobookList.css';
import './components/AudiobookDetails.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Audiobooks</h1>
        <Routes>
          <Route path="/" element={<AudiobookList />} />
          <Route path="/audiobooks/:id" element={<AudiobookDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
