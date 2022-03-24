import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
export default function Movie(props){
    const movieId = useParams()
    return (
        <Link to={`sessoes/${props.id}`}>
            <div className="movie">
                <img src={`${props.url}`} alt="" />
            </div>
        </Link>
    )
    
}