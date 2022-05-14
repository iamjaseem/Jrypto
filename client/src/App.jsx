
import {Navbar, Welcome,Transactions } from './components';
import useAlan from './hooks/useAlan';




const App = () => {
 useAlan()
  
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>
      </div>
      
      <Transactions/>
      
    </div>
  );
}

export default App;
