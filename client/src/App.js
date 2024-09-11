import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputForm from './components/InputForm';
import MemberCard from './components/MemberCard';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/input-form" element={<InputForm />} />
          <Route path="/member-card" element={<MemberCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
