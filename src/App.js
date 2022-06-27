import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Dialogs from './components/Dialogs/Dialogs';


function App() {
  return (
    <div className='container'>
    <div className="app__wrapper">
      <Header/>
      <Navigation/>
      {/* <Profile/> */}
      <div class='app__wrapper-content'>
      <Dialogs/>
      </div>
    </div>
    </div>
  );
}

export default App;
