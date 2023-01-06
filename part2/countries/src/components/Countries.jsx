import Country from "./Country";
import CountryItem from "./CountryItem";

const Countries = ({countries}) => {

    if(countries.length === 0) return <p>No matching countries found.</p>;

    if(countries.length === 1) return <Country country={countries[0]} />;
    
    if(countries.length > 10) return <p>Please specify a filter.</p>;
  
    return (
      <>
        {countries.map((country) => {
            return <CountryItem key={country.ccn3} country={country}/>;
        })}
      </>
    )
}

export default Countries;