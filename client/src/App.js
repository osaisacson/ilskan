import React from 'react';
import logo from './logo.svg';
import './App.scss';
import axios from 'axios';

function App() {
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    axios.get('/api?user=osaisacson') //sets query for which user data to get
    .then(response => {
      setUser(response.data)
    })

  }, [])

  return user && (
    <div className="App">
      <header className="App-header">
        <img src={user.user.avatar_url} className="App-logo" alt="logo" />
        <p>Test API (should show name): {user.user.login}</p>
        <p>This boilerplate is setup with React.js, Node.js, SASS & deploys on Heroku.</p>
        <a
          className="App-link"
          href="https://osaisacson.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          OSASON
        </a>
      </header>
    </div>
  );
}

export default App;

//Full data {JSON.stringify(user)}