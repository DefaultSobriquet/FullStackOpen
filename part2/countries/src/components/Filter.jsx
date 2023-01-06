const Filter = ({filter, handler}) => {
    return <>
        Search for a country: <input value={filter} onChange={handler}></input>
    </>;
}

export default Filter;