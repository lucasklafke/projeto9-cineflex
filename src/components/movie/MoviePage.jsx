import { Link , useParams} from "react-router-dom";
import Header from "../public_components/Header";
import { useEffect, useState } from "react";
import axios from 'axios'
import "./style.css";
import MovieSession from "./MovieSession";
import styledComponents from "styled-components";

export default function MoviePage(){
    const {movieId} = useParams()
    const [session,setSession] = useState([])

    useEffect(()    => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`)
        promise.then((response) => {
            const session = response.data
            setSession(session.days) 
            console.log(session)
        })
    },[])

    return (
        <Container>
            <Header />
            <span>Selecione o horário</span>
            <div className="sessions">
                {session.map(e => <MovieSession weekday={e.weekday} date={e.date} showtimes={e.showtimes}/>)}
            </div>
            {/* <Link to={`/assentos/: ${movieId}`}>


            </Link> */}
        </Container>
    )
}
const Container = styledComponents.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    header {
    width: 100%;
    height: 67px;
    background-color: #E5E5E5;
    }

    span{
        font-weight: 400;
        font-size: 24px;    
        color: #293845;
        text-decoration: none;
        margin: 55px 0;
    }

    .sessions{
        display: flex;
        flex-direction: column;
    }
`