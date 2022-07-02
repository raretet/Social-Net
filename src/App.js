import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';


function App(props) {

  return (
    
    <div className='container'>
    <div className="app__wrapper">
      <Header/>
      <Navigation state={props.state.sidebar}/>
      <div class='app__wrapper-content'>
      <Routes>
      <Route path="/profile" element={ <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
      <Route path="/dialogs/*" element={ <Dialogs state={props.state.messagesPage } updateNewMessagesText={props.updateNewMessagesText}/>}/>
            {/* <Route path="/news" element={<News />}/>
            <Route path="/music" element={<Music />}/>
            <Route path="/settings" element={<Settings />}/> */}
        </Routes>
      </div>
    </div>
    </div>
  );
}

export default App;
