
import './App.css';
import NavScrollExample from './components/NavScrollExample';
import ItemListContainer from './components/ItemListContainer/ItemListContaine';

function App() {
  return (
    <div className="App">
      
      <NavScrollExample />
      <ItemListContainer greating={'Bienvenidos'}/>
      
    </div>
  );
}

export default App;
