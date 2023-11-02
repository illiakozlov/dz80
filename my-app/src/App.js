import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UsersList from './UsersList';
import AlbumsList from './AlbumsList';
import PhotosList from './PhotosList';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={UsersList} />
        <Route path="/albums/:userId" component={AlbumsList} />
        <Route path="/photos/:albumId" component={PhotosList} />
      </div>
    </Router>
  );
}

export default App;

