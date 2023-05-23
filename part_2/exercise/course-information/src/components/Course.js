import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({course}) => {
    const totalExercises = course.parts.reduce((a, b) => a + b.exercises, 0)
    
    return (
        <div>
            <Header course={course}/>
            <Content parts={course}/>
            <Total total={totalExercises}/>
        </div>
        )
}

export default Course