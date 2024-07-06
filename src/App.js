import './App.css';
import Header from './Header';
import DoctorPart from './DoctorPart';
import GroceryList from './GroceryList';

function App() {
  return (
    <div className="App bg-[#f7fded] w-[1230px] h-[1851px] mx-auto">
      <Header />
      <DoctorPart/>
      <GroceryList/>
    </div>
  );
}

export default App;
