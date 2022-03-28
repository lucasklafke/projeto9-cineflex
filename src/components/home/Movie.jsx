import { Link } from "react-router-dom"
export default function Movie(props){
    const {setMovie} = props
    return (
        <Link to={`sessoes/${props.id}`}>
            <div onClick={() => {
                    setMovie(props.title ) 
                    props.setUrl(props.url)
                }} className="movie" key={props.id}>
                <img src={`${props.url}`} alt="" />
            </div>
        </Link>
    )
    
}