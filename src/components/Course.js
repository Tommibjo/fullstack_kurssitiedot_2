import React from 'react'

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
    const content = () => props.parts.map(value => <Part key={value.id} part={value} />)
    return (
        <div>
            {content()}
        </div>
    )
}

const Total = (props) => {
    const total = props.parts.reduce((a, b) => ({ exercises: a.exercises + b.exercises }))
    return (
        <p><b>Total of {total.exercises} exercises</b></p>
    )
}

const Course = (props) => {
    const courses = () => props.course.map((value, id) =>
        <div key={id}>
            <Header course={value.name} />
            <Content parts={value.parts} />
            <Total parts={value.parts} />
        </div>
    )
    return (
        <div>
            {courses()}
        </div>
    )
}

export default Course