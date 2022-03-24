import { Link } from "react-router-dom";
import Header from "../public_components/Header";
import { useEffect, useState } from "react";
import "./style.css";
export default function MoviePage(){
    return (
        <div className="Movie">
            <Header />
            <span>Selecione o horário</span>
            {/* <Link to={}></Link> */}
        </div>
    )
}