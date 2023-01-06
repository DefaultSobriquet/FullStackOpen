import { useEffect, useState } from 'react';
import axios from "axios";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]) 

  const fetchPersons = () => {
    axios.get("http://localhost:3001/persons")
      .then(p => setPersons(p.data))
      .catch(err => alert(err));
  }

  useEffect(fetchPersons, []);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  const personList = persons.filter((person) => {
    return person.name.toLowerCase().includes(newFilter.toLowerCase());
  });

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault();
    
    const person = {
      name: newName,
      number: newNumber
    }

    const dupCheck = persons.findIndex(person => person.name === newName);

    if(dupCheck !== -1){
      alert(`${newName} is already added to the phonebook.`);
      return;
    }

    setPersons(persons.concat(person));
    setNewName('');
    setNewNumber('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter filter={newFilter} filterHandler={handleFilterChange} />
      <h3>Add a New Person</h3>
        <PersonForm 
          submitHandler={addPerson}
          name={newName} nameHandler={handleNameChange}
          number={newNumber} numberHandler={handleNumberChange}
        />
      <h3>Numbers</h3>
        <Persons personList={personList} />
    </div>
  )
}

export default App;