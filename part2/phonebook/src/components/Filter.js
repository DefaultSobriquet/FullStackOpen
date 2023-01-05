const Filter = ({filter, filterHandler}) => {
    return <div>
        Filter Names: <input value={filter} onChange={filterHandler}/>
    </div>;
}   

export default Filter;
