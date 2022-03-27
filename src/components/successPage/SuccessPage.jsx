import { Link } from "react-router-dom"
import styledComponents from "styled-components";
import Header from "../public_components/Header";
export default function SuccessPage(){
    return (
        <SuccessContainer>
            <Header/>
            <h1>Pedido feito com sucesso!</h1>
            <Container>
                <span></span>
                <div>
                    <span></span>
                    <span></span>
                </div>
                <div>
                    <span></span>
                    <span></span>
                </div>
                <div>
                    <span></span>
                    <span></span>
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
`
const Container = styledComponents.div`
    display:flex;
    flex-direction:column;
`