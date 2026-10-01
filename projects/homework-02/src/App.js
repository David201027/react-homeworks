import './App.css';
import Greeting from './components/Greeting';
import Message from './components/Message';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Greeting name="Ivan" />
      <Message text="Welcome to our app!" />
      <Button label="Click Me" onClick={() => console.log('Button clicked!')} />
    </div>
  );
}

export default App;
