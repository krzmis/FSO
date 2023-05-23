import Part from "./Part";

const Content = ({parts}) => {
    return (
        <div>{parts.parts.map(part =>
            <Part key={part.id} part={part.name} exercise={part.exercises}/>
        )}
        </div>
    )
}

export default Content