import { useState } from 'react';
import './App.css';
import { Users } from './users';
import Table from './Table.jsx'

function App() {
  const [query, setQuery]=useState("");
  const search =(data) => {
    return data.filter((item) => item.first_name.toLowerCase().includes(query)
    || item.last_name.toLowerCase().includes(query) 
    || item.email.toLowerCase().includes(query));
  }

  console.log(query)
  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        class="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={search(Users)}/>
    </div>
  );
}

export default App;
