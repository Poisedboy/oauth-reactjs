import './App.css';
import { Login } from './components/login';
import { Logout } from './components/logout';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';

const clientId = '710847608373-v4as3aack4t4pdsfamo3beqj610to91i.apps.googleusercontent.com';

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: '',
      });
    };
    gapi.load('client:auth2: ', start)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='text-center'>OAuth React.js</h1>
        <main>
          <Login />
          <Logout />
        </main>
      </header>
    </div>
  );
}

export default App;
