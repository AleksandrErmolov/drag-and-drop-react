import { Route, Routes } from 'react-router-dom';
import './App.css';
import DrugAndDropEasy from './component/DrugAndDropEasy';
import Main from './component/Main';
import MainPage from './component/MainPage';
import Trello from './component/Trello';

function App() {


  return (
    
    <div>
      <MainPage />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/easy' element={<DrugAndDropEasy />} />
        <Route path='/trello' element={<Trello />} />
        <Route path='/file' element={<h1>File</h1>} />

      </Routes>

    </div>
      
  );
}

export default App;
