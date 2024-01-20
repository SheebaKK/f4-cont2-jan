
import './App.css';
import SignIn from './componenets/SignIn';
import LoggedIn from './componenets/LoggedIn';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/login' element={<LoggedIn/>}/>

      </Routes>
    </div>
  );
}

export default App;

