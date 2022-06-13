import logo from './logo.svg';
import './App.css';
import LifecycleA from './Components/LifecycleA';
import RefsDemo from './Components/RefsDemo';
import PortalDemo from './Components/PortalDemo';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';

function App() {
  return (
    <div className="App">
      {/* <LifecycleA/> */}
      {/* <RefsDemo/> */}
      {/* Added a new element in index.html */}
      {/* <PortalDemo/> */}
      <ClickCounter/>
      <HoverCounter/>
    </div>
  );
}

export default App;
