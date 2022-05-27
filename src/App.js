
import './App.css';
import { Clock } from './components/Clock';
import { Countdown } from './components/Countdown';

function App() {
  return (
    <>
     <Clock/>
     <Countdown/>
     <a href="https://github.com/sergiss/react-clock" target="_blank"><i className="fa">&#xf09b;</i> Source Code </a>
    </>
  );
}

export default App;
