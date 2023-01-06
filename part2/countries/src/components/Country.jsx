import Weather from "./Weather";

const Country = ({country}) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Captial: {country.capital}</p>
            <p>Area: {country.area}</p>
            <h2>Languages</h2>
            <ul>
                {Object.entries(country.languages).map(lang => <li key={lang[0]}>{lang[1]}</li>)}
            </ul>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`}></img>
            <Weather country={country}/>
        </div>
    )
}

export default Country;