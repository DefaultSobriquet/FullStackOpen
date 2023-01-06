import Country from "./Country";
import {useState} from "react";

const CountryItem = ({country}) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <br></br>
            {country.name.common} <input type="button"
                value={show ? "Hide" : "Show"}
                onClick={() => setShow(!show)}
            ></input>
            {show ? <Country country={country}/> : ""}
        </>
    )
}

export default CountryItem;