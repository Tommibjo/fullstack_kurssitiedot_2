import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Part = (props) => {
    console.log(props)
    return (
        <p>{props.part.name} {props.part.exercises}</p>
    )
}

const Header = (props) => (
    <h1>{props.course}</h1>
)


const Content = (props) => {
    return (
        <>
            <Part part={props.parts[0]} />
            <Part part={props.parts[1]} />
            <Part part={props.parts[2]} />
        </>
    )
}

const Total = (props) => {
    const yhteensa = props.exercises[0].exercises + props.exercises[1].exercises + props.exercises[2].exercises
    return (
        <p>yhteensä {yhteensa}</p>
    )
}

const App = () => {
    const course = {
        name: 'Half stack sovelluskehitys',
        parts: [
            {
                name: 'Reactin perusteet',
                exercises: 10
            },
            {
                name: 'Tiedonvälitys propseilla',
                exercises: 7
            },
            {
                name: 'Komponentin tila',
                exercises: 14
            }
        ]
    }
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total exercises={course.parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

