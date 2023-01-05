const PersonForm = ({submitHandler, name, nameHandler, number, numberHandler}) => {
    return (
        <form onSubmit={submitHandler}>
            <div>
                Name: <input value={name} onChange={nameHandler} />
            </div>
            <div>
                Number: <input value={number} onChange={numberHandler} />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default PersonForm;
