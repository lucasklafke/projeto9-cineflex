import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "../home/Home"
import MoviePage from "../movie/MoviePage";
import SeatsPage from "../seatspage/SeatsPage";
import SuccessPage from "../successPage/SuccessPage";
import "./style.css";
export default function App(){
    const [url,setUrl] = useState("")
    const [movie, setMovie] = useState(null)
    const [session,setSession] = useState(null)
    const [tickets, setTickets] = useState([])
    const [owner,setOwner] = useState([])
    const data = {
        url: url,
        movie: movie,
        session: session,
        tickets:tickets,
        owner:owner,
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home setUrl={setUrl} setMovie={setMovie}/>}/>
                <Route path="/sessoes/:movieId" element={<MoviePage setSession={setSession} data={data}/>} />
                <Route path="/assentos/:sessionId" element={<SeatsPage data={data} tickets={tickets} setTickets={setTickets} setOwner={setOwner} owner={owner}/>}/>
                <Route path="/sucesso" element={<SuccessPage data={data} setUrl={setUrl} setTickets={setTickets} setOwner={setOwner} setMovie={setMovie} setSession={setSession}   />}/>
            </Routes>
        </BrowserRouter>
    )
}