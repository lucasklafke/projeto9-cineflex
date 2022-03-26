import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "../home/Home"
import MoviePage from "../movie/MoviePage";
import SeatsPage from "../seatspage/SeatsPage";
import "./style.css";
export default function App(){
    const [movie, setMovie] = useState(null)
    const [session,setSession] = useState(null)
    const [tickets, setTickets] = useState(null)
    const [owner,setOwner] = useState(null)
    const data = {
        movie: movie,
        session: session,
        tickets:tickets,
        owner:owner,
    }
    console.log(data)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home  setMovie={setMovie}/>}/>
                <Route path="/sessoes/:movieId" element={<MoviePage setSession={setSession}/>} />
                <Route path="/assentos/:sessionId" element={<SeatsPage setTickets={setTickets} setOwner={setOwner}/>}/>

            </Routes>
        </BrowserRouter>
    )
}