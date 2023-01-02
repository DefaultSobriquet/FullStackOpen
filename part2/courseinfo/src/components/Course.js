const Total = ({ parts }) => {
    const sum = parts.reduce((total, part) => total + part.exercises, 0);
    return (
        <p>
            <b>
                Number of exercises {sum}
            </b>
        </p>
    );
};

const Header = ({ name }) => (
    <h2>
        {name}
    </h2>
);

const Part = ({ part }) => (
    <p>
        {part.name} {part.exercises}
    </p>
);

const Content = ({ parts }) => (
    <>
        {parts.map((p) => <Part key={p.id} part={p} />)}
    </>
);

const Course = ({course}) => (
    <>
        <Header name={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts} />
    </>
);

export default Course;