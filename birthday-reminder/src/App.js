import React, {useState} from 'react'
import './App.css';
import data from './data/data'
import List from './components/List'
function App() {
  const [people , setPeople] = useState(data)
  return (
    <main>
        <section className="container">
          <h3> {people.length} birthdays today </h3>
          <List people={people}/>
          <button onClick={()=>setPeople([])}> 
          Clear all 
          </button>
        </section>
    </main>
  );
}

export default App;
