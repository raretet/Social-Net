import './App.css';
import Profile from './components/Profile';
import Header from './components/Header';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className='container'>
    <div className="app__wrapper">
      <Header/>
      <Navigation/>
      <Profile/>
    </div>
    </div>
  );
}

export default App;
