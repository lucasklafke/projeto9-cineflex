import { Link } from "react-router-dom"
export default function Movie(props){
    const {setMovie} = props
    props.setUrl(props.url)
    return (
        <Link to={`sessoes/${props.id}`}>
            <div onClick={() => { setMovie(props.title ) }} className="movie" key={props.id}>
                <img src={`${props.url}`} alt="" />
            </div>
        </Link>
    )
    
}
//onClick={() => { setSession(Session.movie = props.id)}}