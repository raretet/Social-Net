import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';



function App(props) {
  return (
    
    <div className='container'>
    <div className="app__wrapper">
      <Header/>
      <Navigation/>
      <div class='app__wrapper-content'>
      <Routes>
      <Route path="/profile" element={ <Profile/>}/>
      <Route path="/dialogs/*" element={ <DialogsContainer/>}/>
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
