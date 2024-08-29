import { createContext } from 'react';
import './App.css';
import Child from './components/Child';
import { data } from './data/data';

export const DataContext = createContext();

function App() {
  return (
    <DataContext.Provider value={data}>
      <Child />
    </DataContext.Provider>
  );
}

export default App;
