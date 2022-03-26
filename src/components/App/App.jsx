import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/Home"
import MoviePage from "../movie/MoviePage";
import SeatsPage from "../seatspage/SeatsPage";
import "./style.css";
export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/sessoes/:movieId" element={<MoviePage/>} />
                <Route path="/assentos/:sessionId" element={<SeatsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}