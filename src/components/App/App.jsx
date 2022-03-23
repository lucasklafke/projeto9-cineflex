import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/Home"
import schedule from "../schedule/Schedule"
export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/filme" element={<schedule/>} />
            </Routes>
        </BrowserRouter>
    )
}