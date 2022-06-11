import logo from './logo.svg';
import './App.css';
import LifecycleA from './Components/LifecycleA';
import RefsDemo from './Components/RefsDemo';
import PortalDemo from './Components/PortalDemo';

function App() {
  return (
    <div className="App">
      {/* <LifecycleA/> */}
      {/* <RefsDemo/> */}
      {/* Added a new element in index.html */}
      <PortalDemo/>
    </div>
  );
}

export default App;
