import { Route, Routes } from 'react-router-dom';
import './App.css';
import DrugAndDropEasy from './component/DrugAndDropEasy';
import Main from './component/Main';
import MainPage from './component/MainPage';

function App() {


  return (
    
    <div>
      <MainPage />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/easy' element={<DrugAndDropEasy />} />
      </Routes>

    </div>
      
  );
}

export default App;
