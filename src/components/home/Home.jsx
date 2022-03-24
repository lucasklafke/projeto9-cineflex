import { useEffect , useState} from "react";
import { Link } from "react-router-dom";
import Header from "../public_components/Header";
import { useParams } from "react-router-dom";
import axios from 'axios'
import "./style.css"
import Movie from "./Movie";
export default function Home(){
    let movieId = useParams()
    const [movies,setMovie] = useState([])
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        promise.then((response) =>{
            setMovie(response.data)
        })
    },[])
    //console.log(typeof(movies[0]))
    return (
        <div className="Home">
            <Header/>
            <Link to={`sessoes/${movieId}`}>
                <span>Selecione o filme</span>
            </Link>
            <main>
                {movies.map(e => <Movie id={e.id} url={e.posterURL}/>)}
            </main>
        </div>
    )
}