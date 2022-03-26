import { useEffect ,useState} from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import styledComponents from "styled-components"
import Header from "../public_components/Header"

import "../../assets/css/reset.css"

export default function SeatsPage(){
    const [seats,setSeats] = useState([])
    const [Session,setSession] = useState([])
    const {sessionId} = useParams()
    useEffect((e) => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`)
        promise.then(response =>{
            const seats = response.data
            setSeats(seats.seats)
            setSession(seats)
        })
    },[])
    return (
        <>
            <Header/>
            <Container>
                <h1>Selecione o(s) assento(s)</h1>
                <Seats>
                    {seats.map(e => {
                        return (
                            <Button key={e.id} className={`${e.isAvailable}`} >{e.name}</Button>
                        )
                    })}
                </Seats>
                <div>
                    <div className="selected"></div>
                    <div className="avaible"></div>
                    <div className="unavailable"></div>
                </div>
                <form action="">
                    <Input>
                        <label htmlFor="name">Nome do comprador:</label>
                        <input type="text" id="name" name="name" placeholder="Digite seu nome..."></input>
                    </Input>    
                    <Input>             
                        <label htmlFor="cpf">CPF do comprador:</label>
                        <input type="text" id="cpf" name="cpf" placeholder="Digite seu CPF..."></input>
                    </Input>              
                </form>
            </Container>
        </>
    )
}
const Container = styledComponents.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        height:110px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    `
const Seats = styledComponents.div`
    display:flex;
    flex-wrap:wrap;
`
const Button = styledComponents.button`
    background-color: #C3CFD9;
    color:#0000000;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    margin-left:10px;
    margin-bottom:10px;
    width:25px;
    height:25px;
    border-radius: 17px;
    border: 1px solid #7B8B99;

    
    .selected{
        background-color:#8DD7CF;
        border: 1px solid #1AAE9E;
        border-radius: 17px;
    }
    .avaible{
        background-color:#C3CFD9;
        border: 1px solid #7B8B99;
        border-radius: 17px;
    }
    .unavaible{
        background-color:#FBE192;
        border: 1px solid #F7C52B;
        border-radius: 17px;
    }
`
const Input = styledComponents.div`
    display: flex;
    flex-direction: column;
    margin-top:10px;

    input{
        width:330px;
        height:50px;
        border: 1px solid #D4D4D4
    }
`