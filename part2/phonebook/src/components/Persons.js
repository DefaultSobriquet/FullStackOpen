import Person from "./Person";

const Persons = ({personList}) => {
    return <div>
        {personList.map(
            (p) => <Person key={p.name} person={p}/>
        )}
    </div>
};

export default Persons;