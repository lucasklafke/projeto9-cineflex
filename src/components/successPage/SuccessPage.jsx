import { Link } from "react-router-dom"
import styledComponents from "styled-components";
import Header from "../public_components/Header";
export default function SuccessPage(props){
    const {data} = props
    const {session} = data
    const {tickets} = data
    const {owner} = data
    console.log(data)
    return (
        <SuccessContainer>
            <Header/>
            <h2>Pedido feito com sucesso!</h2>
            <Container>
                <h3>Filme e Sessão</h3>
                <div className="info-container">
                    <span>{`${data.movie}`}</span>
                    <span>{`${session.weekday}  ${session.date}`}</span>
                </div>
                <div className="info-container">
                    <h3>Ingressos</h3>
                    {tickets.map((seat, index) => {
                        return (
                            <span key={index}>assento {seat}</span>
                        )
                    })}
                </div>
                <div className="info-container">
                    <h3>Comprador</h3>
                    <span>Nome: {owner.name}</span>
                    <span>CPF: {owner.cpf}</span>
                </div>
            </Container>
            <Link to="/">
                <button>Voltar para a Home</button>
            </Link>
        </SuccessContainer>
    )
}
const SuccessContainer = styledComponents.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    .info-container{
        display:flex;
        flex-direction:column;
        width: 100%;
        margin: 20px 0;
    }
     h2{
        width: 200px;   
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        color: #247A6B;
        margin: 30px 0;
    }
    button{
        width: 225px;
        height: 42px;
        left: 74px;
        top: 622px;
        color: #FFFFFF;
        background: #E8833A;
        border-radius: 3px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        border:none;

    }
`
const Container = styledComponents.div`
    display:flex;
    flex-direction:column;
    width:90%;
   margin-left:50px;

    h3{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;

        color: #293845;
    }
    span{
        width:100%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;

        color: #293845;
    }
`