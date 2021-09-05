import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TypingBox from './components/TypingBox';

function App() {
  return (
    <div className="App">
      <div 
        style={{
          backgroundColor:"#00ff00", 
          minHeight:"100vh",
          minWidth: "100vw",
          display:"flex"
        }}
      >
        <TypingBox></TypingBox>
      </div>
      
    </div>
  );
}

export default App;
