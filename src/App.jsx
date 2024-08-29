import { createContext, useContext } from 'react';
import './App.css';
import Child from './components/Child';
import { data } from './data/data';

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

function App() {
  return (
    <DataContext.Provider value={data}>
      <Child />
    </DataContext.Provider>
  );
}

export default App;
