import { useEffect , useState} from "react";
import { Link } from "react-router-dom";
import Header from "../public_components/Header";
import { useParams } from "react-router-dom";
import axios from 'axios'
import "./style.css"
import Movie from "./Movie";


export default function Home(props){
    let movieId = useParams()
    const [movies,setMovie] = useState([])


    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        promise.then((response) =>{
            setMovie(response.data)
        })
        promise.catch((error) =>{
            alert("Erro ao carregar os filmes")
        })
    },[])
    return (
        <div className="Home">
            <Header/>
            <Link to={`sessoes/${movieId}`}>
                <span>Selecione o filme</span>
            </Link>
            <main>
                {movies.map(e => <Movie key={e.id} id={e.id} url={e.posterURL} title={e.title} setMovie={props.setMovie} setUrl={props.setUrl}/>)}
            </main>
        </div>
    )
}