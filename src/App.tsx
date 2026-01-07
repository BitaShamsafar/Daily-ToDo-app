import React, { useEffect } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import AddNew from './components/AddNew';
import TodoDataContextProvider from './context/ToDoDataContext';
import Todos from './components/Todos';
import defaultData from "./asset.json"

function App() {
  useEffect(() => { 
    const localData = localStorage.getItem("todoData");
   
    if (!localData) {
      localStorage.setItem("todoData", JSON.stringify(defaultData));
    }

    }, [])
  return (
    <div className="App">
      <TodoDataContextProvider>
        <div className='Wrapper'>
          <AppHeader />
          <Todos />
          <AddNew />
        </div>
      </TodoDataContextProvider>
    </div>
  );
}

export default App;
