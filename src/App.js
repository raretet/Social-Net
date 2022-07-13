import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';



function App(props) {
  return (
    
    <div className='container'>
    <div className="app__wrapper">
      <Header/>
      <Navigation/>
      <div class='app__wrapper-content'>
      <Routes>
      <Route path="/profile/*" element={ <ProfileContainer/>}/>
      <Route path="/dialogs/*" element={ <DialogsContainer/>}/>
      <Route path="/users/*" element={<UsersContainer/>}/>
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
