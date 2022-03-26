import { Link } from "react-router-dom"
export default function Movie(props){
    return (
        <Link to={`sessoes/${props.id}`}>
            <div className="movie" key={props.id}>
                <img src={`${props.url}`} alt="" />
            </div>
        </Link>
    )
    
}