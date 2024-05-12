import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './screens/Login';
// import Resturant from './component/basics/Restaurent';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/resturant" element={<Resturant />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
