import axios from "axios";
import { useEffect, useState } from "react";
import Countries from "./components/Countries";
import Filter from "./components/Filter";

const App = () => {

  const url = "https://restcountries.com/v3.1/all";

  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  const getCountries = () => {
    axios.get(url).then(r => {
      setCountries(r.data);
    }).catch(err => alert(err));
  }

  const handleFilter = (event) => {
    setFilter(event.target.value);
  }

  const filteredCountries = countries.filter(c => {
    return c.name.common.toLowerCase().includes(filter.toLowerCase())
  });

  useEffect(getCountries, []);
  
  return <>
    <h1>Countries</h1>
    <Filter filter={filter} handler={handleFilter} />
    <Countries countries={filteredCountries} />
  </>;

}


export default App;
