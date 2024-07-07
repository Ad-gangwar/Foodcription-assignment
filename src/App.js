import './App.css';
import Header from './Header';
import DoctorPart from './DoctorPart';
import GroceryList from './GroceryList';
import Footer from './Footer';

function App() {
  return (
    <div className="App bg-[#f7fded] mx-auto p-5">
      <Header />
      <DoctorPart/>
      <GroceryList/>
      <Footer/>
    </div>
  );
}

export default App;
