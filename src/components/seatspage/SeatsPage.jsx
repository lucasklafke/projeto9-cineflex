import { useEffect ,useState} from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import styledComponents from "styled-components"
import Header from "../public_components/Header"
import Footer from "../public_components/Footer"
import { Link } from "react-router-dom"
import "../../assets/css/reset.css"
import { useNavigate } from "react-router-dom";
export default function SeatsPage(props){
    const {sessionId} = useParams()

    const { url } = props.data
    const { movie } = props.data
    const { session } = props.data

    
    const [seats,setSeats] = useState([])
    const [seatsList,setSeatsList] = useState([])
    const [ownerName,setOwnerName] = useState([])
    const [ownerCpf, setOwnerCpf] = useState([])
    const [seatsId, setSeatsId] = useState([])
    const navigate = useNavigate()
    const owner = props.owner

    function sendData(e){
        e.preventDefault()
        //console.log(ownerName)
        props.setOwner({ name: ownerName, cpf: ownerCpf })
        const postObject = {
            ids: seatsId,
            name: `${ownerName}`,
            cpf: `${ownerCpf}`
        }
            
        console.log(postObject)
        const promise = axios.post(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`, postObject)
        promise.then(response => {
            console.log(response)
            navigate("/sucesso")
        })
        promise.catch(error => {
            console.log(error.response)
        })
    }

    function manageSeats(e){
        if(!(seatsList.includes(e.name))){
            props.setTickets(seatsList)
            setSeatsList(seatsList.concat(e.name))
            setSeatsId(seatsId.concat(e.id))
        }else{
            setSeatsList(seatsList.filter(seat => seat !== e.name))
            setSeatsId(seatsId.filter(id => id !== e.id))
        }
    } 
    
    useEffect((e) => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`)
        promise.then(response =>{
            const seats = response.data
            setSeats(seats.seats)
        })
    },[])

    return (
        <Content>
            <Header/>
            <Container>
                <h1>Selecione o(s) assento(s)</h1>
                <Seats>
                    {seats.map(e => {
                        return (
                            `${e.isAvailable}` === "true" ? 
                                <Button background="#C3CFD9;" border="#7B8B99;" onClick={(event) =>{manageSeats(e)}} key={e.id} >{e.name}</Button>
                            :
                                <Button background="#FBE192" border="#F7C52B;" onClick={() => {
                                    alert("Assento indisponível")
                                }} >{e.name}</Button>
                        )
                    })}
                </Seats>
                <div className="seats-state">
                    <div >
                        <span className="selected"></span>
                        <span>Selecionado</span>
                    </div>
                    <div>
                        <span className="avaible"></span>
                         <span>Disponível</span>
                    </div>
                    <div > 
                        <span className="unavaible"></span>
                        <span>Indisponível</span>
                    </div>
                </div>
                <form onSubmit={sendData}>
                    <Input>
                        <label htmlFor="name">Nome do comprador:</label>
                        <input type="text" id="name" name="name" placeholder="Digite seu nome..."
                            onChange={(e) =>{
                                    setOwnerName(`${e.target.value}`)
                                    }
                                }
                            value={ownerName}
                        />
                    </Input>    
                    <Input>             
                        <label htmlFor="cpf">CPF do comprador:</label>
                        <input type="text" id="cpf" name="cpf" placeholder="Digite seu CPF..."
                            onChange={(e) => { 
                                setOwnerCpf(e.target.value) 
                            }}
                            value={ownerCpf}
                        />
                    </Input>   
                    <Input>
                            <button type="submit" value="Submit"> Reservar assento(s) </button>
                    </Input>
                </form>
            </Container>
            <Footer url={url} movie={movie} session={session}/>
        </Content>
    )
}
const Content = styledComponents.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
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
    form{
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    }
    .seats-state{
        display: flex;
        margin:20px 0;
        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 10px;
            margin-right: 10px;
        }
        .selected{
            display: flex;
            justify-content: center;
            background: #8DD7CF;
            border: 1px solid #1AAE9E;
            width: 20px;
            height: 20px;
            border-radius: 50%;      
        }
        .avaible{
            display: flex;
            flex-direction: column;
            background: #C3CFD9;
            border: 1px solid #7B8B99;
            width: 20px;
            height: 20px;
            border-radius: 50%;      
        }
        .unavaible{
            display: flex;
            flex-direction: column;
            background: #FBE192;
            border: 1px solid #F7C52B;
            width: 20px;
            height: 20px;
            border-radius: 50%;      
        }
    }
    
    `
const Seats = styledComponents.div`
    display:flex;
    flex-wrap:wrap;
`
const Button = styledComponents.button`
    background-color: ${props => props.background};
    color:#000000;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    margin-left:10px;
    margin-bottom:10px;
    width:25px;
    height:25px;
    border-radius: 17px;
    border: 1px solid ${props => props.border};
    cursor: pointer;


    buttonselected{
        background-color:#8DD7CF;
        border: 1px solid #1AAE9E;
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
    button{
        background-color:#E8833A;
        width: 225px;
        height: 42px;
        border-radius: 3px;
        border:none;
        color:white;
    }
`

//função que remove um elemento da lista
// function remove(array, element) {
//     const index = array.indexOf(element);
//     array.splice(index, 1);
//     return array;
// }